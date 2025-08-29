import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ATENÇÃO: Isso permite que você crie builds de produção mesmo que

    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
