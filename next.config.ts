import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/hamdan-sprachendienste",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
