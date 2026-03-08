import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // basePath pro GitHub Pages: /studioaccent
  // Pro lokální dev bez basePath: NEXT_PUBLIC_BASE_PATH=""
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "/studioaccent",
  images: {
    unoptimized: true, // nutné pro statický export
  },
};

export default nextConfig;
