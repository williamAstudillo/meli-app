import { variables } from "@src/sass/variables";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    additionalData: variables,
  },
  images: {
    domains: ["http2.mlstatic.com"],
  },
};

export default nextConfig;
