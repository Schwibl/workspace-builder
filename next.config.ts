import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The dev server binds 0.0.0.0. Browsers open 127.0.0.1, which Next otherwise treats as cross-origin and refuses to hydrate.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
