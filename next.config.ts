import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Static hosts do not provide Next.js' on-demand image optimizer.
    unoptimized: true,
  },
};

export default nextConfig;
