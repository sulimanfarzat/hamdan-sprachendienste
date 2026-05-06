export const basePath =
  process.env.NODE_ENV === "production" ? "/hamdan-sprachendienste" : "";

export const asset = (path: string) => `${basePath}${path}`;
