import type { NextConfig } from "next";

// basePath and trailingSlash are only needed when deploying to GitHub Pages.
// Enabling them locally breaks dev at localhost:3000 (the app moves to /hamdan-sprachendienste/).
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/hamdan-sprachendienste" : "",
  trailingSlash: isGitHubPages,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
