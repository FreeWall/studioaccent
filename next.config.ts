import type { NextConfig } from "next";
import { PHASE_PRODUCTION_BUILD } from "next/constants";

const nextConfig = (phase: string): NextConfig => {
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  return {
    basePath: '/studioaccent',
    output: "export",
    distDir: isProd ? 'build' : '.next',
    images: {
      unoptimized: true,
    },
    env: {
      NEXT_PUBLIC_BASE_PATH: '/studioaccent',
    },
  } ;
};

export default nextConfig;

