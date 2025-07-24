import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("http://openweathermap.org/img/**")],
  },
};

export default nextConfig;
