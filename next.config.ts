import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Ganti dengan domain gambar Anda
        port: "",
        pathname: "/**", // Mengizinkan semua path setelah domain
      },
      {
        protocol: "https",
        hostname: "dhika4print.com", // Ganti dengan domain asal gambarmu
      },
    ],
  },
};

export default nextConfig;
