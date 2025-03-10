import { variables } from "@app/sass/variables";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    additionalData: variables,
  },
  images: {
    domains: ["media.es.wired.com"],
  },
};

export default nextConfig;
