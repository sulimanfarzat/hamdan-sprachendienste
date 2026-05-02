<?php
/**
 * Hamdan Sprachendienste – Angebotsanfrage mit Datei-Upload
 *
 * Endpoint:    /api/quote.php
 * Method:      POST
 * Content-Type: multipart/form-data
 *
 * Felder:
 *   name          (required)
 *   email         (required, valid email)
 *   phone         (optional)
 *   address       (optional)
 *   sourceLang    (required)
 *   targetLang    (required)
 *   documentType  (required)
 *   pages         (optional, numeric)
 *   certified     ("ja" | unset)
 *   express       ("ja" | unset)
 *   deadline      (optional, YYYY-MM-DD)
 *   notes         (optional)
 *   consent       ("ja", required)
 *   website       (HONEYPOT — muss leer sein)
 *   documents[]   (1..8 Dateien, je ≤ 10 MB, gesamt ≤ 30 MB)
 */

declare(strict_types=1);

// ─── Konfiguration ──────────────────────────────────────────────────────────
const RECIPIENT       = 'info@hamdan-sprachendienste.de';
const SENDER_FROM     = 'Website <noreply@hamdan-sprachendienste.de>';
const SUBJECT_PREFIX  = '[Angebot] Anfrage';
const MAX_FILE_SIZE   = 10 * 1024 * 1024;   // 10 MB
const MAX_TOTAL_SIZE  = 30 * 1024 * 1024;   // 30 MB
const MAX_FILES       = 8;
const ALLOWED_MIMES   = [
    'application/pdf',
    'image/jpeg',
    'image/png',
    'image/heic',
    'image/heif',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
const ALLOWED_ORIGINS = [
    'https://hamdan-sprachendienste.de',
    'https://www.hamdan-sprachendienste.de',
];

// ─── Header & CORS ──────────────────────────────────────────────────────────
header('Content-Type: application/json; charset=utf-8');

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, ALLOWED_ORIGINS, true)) {
    header("Access-Control-Allow-Origin: {$origin}");
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Methode nicht erlaubt.']);
    exit;
}

// ─── Honeypot ───────────────────────────────────────────────────────────────
if (!empty($_POST['website'])) {
    echo json_encode(['success' => true]);
    exit;
}

// ─── Eingabe einlesen ───────────────────────────────────────────────────────
$name         = trim((string)($_POST['name']         ?? ''));
$email        = trim((string)($_POST['email']        ?? ''));
$phone        = trim((string)($_POST['phone']        ?? ''));
$address      = trim((string)($_POST['address']      ?? ''));
$sourceLang   = trim((string)($_POST['sourceLang']   ?? ''));
$targetLang   = trim((string)($_POST['targetLang']   ?? ''));
$documentType = trim((string)($_POST['documentType'] ?? ''));
$pages        = trim((string)($_POST['pages']        ?? ''));
$certified    = !empty($_POST['certified']);
$express      = !empty($_POST['express']);
$deadline     = trim((string)($_POST['deadline']     ?? ''));
$notes        = trim((string)($_POST['notes']        ?? ''));
$consent      = !empty($_POST['consent']);

// ─── Validierung ────────────────────────────────────────────────────────────
$errors = [];
if ($name === '' || mb_strlen($name) < 2 || mb_strlen($name) > 120) {
    $errors[] = 'Name ist erforderlich.';
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Gültige E-Mail-Adresse erforderlich.';
}
if ($sourceLang === '' || $targetLang === '') {
    $errors[] = 'Ausgangs- und Zielsprache erforderlich.';
}
if ($documentType === '') {
    $errors[] = 'Dokumententyp erforderlich.';
}
if ($pages !== '' && (!ctype_digit($pages) || (int)$pages < 1 || (int)$pages > 500)) {
    $errors[] = 'Seitenanzahl ungültig.';
}
if ($deadline !== '' && !preg_match('/^\d{4}-\d{2}-\d{2}$/', $deadline)) {
    $errors[] = 'Wunschtermin ungültig.';
}
if ($phone !== '' && !preg_match('/^[\d\s\+\-\(\)\/\.]{4,40}$/', $phone)) {
    $errors[] = 'Telefonnummer ungültig.';
}
if (!$consent) {
    $errors[] = 'Datenschutzeinwilligung erforderlich.';
}

// Header-Injection-Schutz
foreach ([$name, $email, $sourceLang, $targetLang, $documentType] as $field) {
    if (preg_match('/[\r\n]/', $field)) {
        $errors[] = 'Ungültige Eingabe.';
        break;
    }
}

if ($errors) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => implode(' ', $errors)]);
    exit;
}

// ─── Datei-Validierung ──────────────────────────────────────────────────────
$rawFiles = $_FILES['documents'] ?? null;
if (!$rawFiles || empty($rawFiles['name'][0])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Bitte mindestens ein Dokument hochladen.']);
    exit;
}

$files = [];
$count = is_array($rawFiles['name']) ? count($rawFiles['name']) : 0;

if ($count > MAX_FILES) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Zu viele Dateien (max. ' . MAX_FILES . ').']);
    exit;
}

$totalSize = 0;
$finfo = finfo_open(FILEINFO_MIME_TYPE);

for ($i = 0; $i < $count; $i++) {
    if ($rawFiles['error'][$i] !== UPLOAD_ERR_OK) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Fehler beim Upload.']);
        finfo_close($finfo);
        exit;
    }
    $size = (int)$rawFiles['size'][$i];
    if ($size <= 0 || $size > MAX_FILE_SIZE) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Datei „' . basename($rawFiles['name'][$i]) . '" zu groß.']);
        finfo_close($finfo);
        exit;
    }
    $totalSize += $size;
    if ($totalSize > MAX_TOTAL_SIZE) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Gesamtgröße überschreitet 30 MB.']);
        finfo_close($finfo);
        exit;
    }

    $tmp = $rawFiles['tmp_name'][$i];
    if (!is_uploaded_file($tmp)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Datei-Upload ungültig.']);
        finfo_close($finfo);
        exit;
    }
    $mime = finfo_file($finfo, $tmp) ?: 'application/octet-stream';
    if (!in_array($mime, ALLOWED_MIMES, true)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Dateiformat nicht erlaubt: ' . basename($rawFiles['name'][$i])]);
        finfo_close($finfo);
        exit;
    }

    $files[] = [
        'name' => preg_replace('/[\r\n"]+/', '', basename($rawFiles['name'][$i])),
        'tmp'  => $tmp,
        'size' => $size,
        'mime' => $mime,
    ];
}
finfo_close($finfo);

// ─── E-Mail-Body bauen ──────────────────────────────────────────────────────
$lines   = [];
$lines[] = 'Neue Angebotsanfrage über das Online-Formular';
$lines[] = str_repeat('─', 60);
$lines[] = '';
$lines[] = '── Persönliche Daten ──';
$lines[] = "Name:           {$name}";
$lines[] = "E-Mail:         {$email}";
if ($phone   !== '') $lines[] = "Telefon:        {$phone}";
if ($address !== '') $lines[] = "Lieferadresse:  {$address}";
$lines[] = '';
$lines[] = '── Übersetzung ──';
$lines[] = "Von:            {$sourceLang}";
$lines[] = "Nach:           {$targetLang}";
$lines[] = "Dokumententyp:  {$documentType}";
if ($pages !== '')    $lines[] = "Seiten ca.:     {$pages}";
$lines[] = 'Beglaubigung:   ' . ($certified ? 'JA' : 'nein');
$lines[] = 'Express:        ' . ($express   ? 'JA' : 'nein');
if ($deadline !== '') $lines[] = "Wunschtermin:   {$deadline}";
$lines[] = '';
if ($notes !== '') {
    $lines[] = '── Anmerkungen ──';
    $lines[] = $notes;
    $lines[] = '';
}
$lines[] = '── Anhänge (' . count($files) . ') ──';
foreach ($files as $f) {
    $lines[] = sprintf('  • %s  (%s, %.1f KB)', $f['name'], $f['mime'], $f['size'] / 1024);
}
$lines[] = '';
$lines[] = str_repeat('─', 60);
$lines[] = 'Gesendet am: ' . date('d.m.Y H:i:s');
$lines[] = 'IP:          ' . ($_SERVER['REMOTE_ADDR']     ?? 'unbekannt');
$lines[] = 'User-Agent:  ' . ($_SERVER['HTTP_USER_AGENT'] ?? 'unbekannt');

$messageBody = implode("\r\n", $lines);

// ─── MIME-Multipart mit Anhängen bauen ──────────────────────────────────────
$boundary  = 'hmdn_' . bin2hex(random_bytes(12));
$replyName = mb_encode_mimeheader($name, 'UTF-8', 'B', "\r\n");
$subject   = mb_encode_mimeheader(
    SUBJECT_PREFIX . ': ' . $sourceLang . ' → ' . $targetLang . ' (' . $documentType . ')',
    'UTF-8', 'B', "\r\n"
);

$headers   = [];
$headers[] = 'From: ' . SENDER_FROM;
$headers[] = "Reply-To: {$replyName} <{$email}>";
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: multipart/mixed; boundary="' . $boundary . '"';
$headers[] = 'X-Mailer: PHP/' . phpversion();

$body  = "Dies ist eine MIME-Nachricht mit Anhängen.\r\n\r\n";
$body .= "--{$boundary}\r\n";
$body .= "Content-Type: text/plain; charset=UTF-8\r\n";
$body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
$body .= $messageBody . "\r\n\r\n";

foreach ($files as $f) {
    $content = chunk_split(base64_encode((string)file_get_contents($f['tmp'])));
    $encName = mb_encode_mimeheader($f['name'], 'UTF-8', 'B', "\r\n");
    $body .= "--{$boundary}\r\n";
    $body .= "Content-Type: {$f['mime']}; name=\"{$encName}\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n";
    $body .= "Content-Disposition: attachment; filename=\"{$encName}\"\r\n\r\n";
    $body .= $content . "\r\n";
}
$body .= "--{$boundary}--\r\n";

// ─── Versand ────────────────────────────────────────────────────────────────
$sent = @mail(
    RECIPIENT,
    $subject,
    $body,
    implode("\r\n", $headers),
    '-f noreply@hamdan-sprachendienste.de'
);

if (!$sent) {
    http_response_code(500);
    error_log('[quote.php] mail() schlug fehl für ' . $email);
    echo json_encode([
        'success' => false,
        'error'   => 'E-Mail konnte nicht versendet werden.',
    ]);
    exit;
}

echo json_encode(['success' => true]);
