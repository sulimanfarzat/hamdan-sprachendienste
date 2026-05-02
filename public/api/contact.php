<?php
/**
 * Hamdan Sprachendienste – Kontaktformular API
 * Empfängt JSON oder Form-Daten via POST und versendet eine E-Mail.
 *
 * Endpoint: /api/contact.php
 * Method:   POST
 * Body:     application/json (oder application/x-www-form-urlencoded)
 *
 * Erwartete Felder:
 *   name      (string, required)
 *   email     (string, required, valid email)
 *   phone     (string, optional)
 *   subject   (string, required)
 *   message   (string, required)
 *   consent   (truthy, required)
 *   website   (string, MUSS LEER sein — Honeypot)
 *
 * Antwort:  application/json — { success: bool, error?: string }
 */

declare(strict_types=1);

// ─── Konfiguration ──────────────────────────────────────────────────────────
const RECIPIENT       = 'info@hamdan-sprachendienste.de';
const SENDER_FROM     = 'Website <noreply@hamdan-sprachendienste.de>';
const SUBJECT_PREFIX  = '[Website] Anfrage';
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

// ─── Eingabe lesen (JSON oder Form-Daten) ───────────────────────────────────
$raw = file_get_contents('php://input');
$data = [];
if ($raw !== false && $raw !== '') {
    $decoded = json_decode($raw, true);
    if (is_array($decoded)) {
        $data = $decoded;
    }
}
if (empty($data)) {
    $data = $_POST;
}

// ─── Honeypot-Spamschutz ────────────────────────────────────────────────────
if (!empty($data['website'])) {
    // Bots befüllen das versteckte Feld — wir tun so, als wäre alles gut.
    echo json_encode(['success' => true]);
    exit;
}

// ─── Validierung ────────────────────────────────────────────────────────────
$name    = trim((string)($data['name']    ?? ''));
$email   = trim((string)($data['email']   ?? ''));
$phone   = trim((string)($data['phone']   ?? ''));
$subject = trim((string)($data['subject'] ?? ''));
$message = trim((string)($data['message'] ?? ''));
$consent = $data['consent'] ?? '';

$errors = [];

if ($name === '' || mb_strlen($name) < 2 || mb_strlen($name) > 120) {
    $errors[] = 'Bitte geben Sie Ihren Namen an.';
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Bitte geben Sie eine gültige E-Mail-Adresse an.';
}
if ($subject === '') {
    $errors[] = 'Bitte wählen Sie ein Anliegen aus.';
}
if ($message === '' || mb_strlen($message) < 10 || mb_strlen($message) > 5000) {
    $errors[] = 'Bitte geben Sie eine Nachricht zwischen 10 und 5000 Zeichen ein.';
}
if (!$consent || $consent === 'false' || $consent === '0') {
    $errors[] = 'Bitte bestätigen Sie die Einwilligung in die Datenverarbeitung.';
}
if ($phone !== '' && !preg_match('/^[\d\s\+\-\(\)\/\.]{4,40}$/', $phone)) {
    $errors[] = 'Telefonnummer ungültig.';
}

if ($errors) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => implode(' ', $errors)]);
    exit;
}

// ─── Header-Injection-Schutz ────────────────────────────────────────────────
foreach ([$name, $email, $subject] as $field) {
    if (preg_match('/[\r\n]/', $field)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Ungültige Eingabe.']);
        exit;
    }
}

// ─── E-Mail bauen ───────────────────────────────────────────────────────────
$mailSubject = SUBJECT_PREFIX . ': ' . $subject;

$body  = "Neue Anfrage über das Kontaktformular der Website\n";
$body .= str_repeat('─', 60) . "\n\n";
$body .= "Name:     {$name}\n";
$body .= "E-Mail:   {$email}\n";
if ($phone !== '') {
    $body .= "Telefon:  {$phone}\n";
}
$body .= "Anliegen: {$subject}\n\n";
$body .= "Nachricht:\n";
$body .= str_repeat('─', 60) . "\n";
$body .= $message . "\n";
$body .= str_repeat('─', 60) . "\n\n";
$body .= 'Gesendet am: ' . date('d.m.Y H:i:s') . "\n";
$body .= 'IP:          ' . ($_SERVER['REMOTE_ADDR']     ?? 'unbekannt') . "\n";
$body .= 'User-Agent:  ' . ($_SERVER['HTTP_USER_AGENT'] ?? 'unbekannt') . "\n";

// Sicherer Reply-To-Header
$replyName = mb_encode_mimeheader($name, 'UTF-8', 'B', "\r\n");
$replyTo   = "{$replyName} <{$email}>";

$headers   = [];
$headers[] = 'From: ' . SENDER_FROM;
$headers[] = 'Reply-To: ' . $replyTo;
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'Content-Transfer-Encoding: 8bit';
$headers[] = 'X-Mailer: PHP/' . phpversion();

// Subject MIME-encoden, weil er Umlaute enthalten kann
$encodedSubject = mb_encode_mimeheader($mailSubject, 'UTF-8', 'B', "\r\n");

// ─── Versand ────────────────────────────────────────────────────────────────
$sent = @mail(
    RECIPIENT,
    $encodedSubject,
    $body,
    implode("\r\n", $headers),
    '-f noreply@hamdan-sprachendienste.de'
);

if (!$sent) {
    http_response_code(500);
    error_log('[contact.php] mail() schlug fehl für ' . $email);
    echo json_encode([
        'success' => false,
        'error'   => 'E-Mail konnte nicht versendet werden.',
    ]);
    exit;
}

echo json_encode(['success' => true]);
