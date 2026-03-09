import type { NextConfig } from "next";
import { PHASE_PRODUCTION_BUILD } from "next/constants";

const nextConfig = (stage: string) => ({
  distDir: stage == PHASE_PRODUCTION_BUILD ? 'build' : '.next',
  output: "export",
  images: {
    unoptimized: true,
  },
} satisfies NextConfig);

export default nextConfig;
