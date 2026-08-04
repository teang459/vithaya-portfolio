import type { NextConfig } from "next";

// GitHub Pages serves this project site under /<repo>, so the CI build sets
// NEXT_PUBLIC_BASE_PATH (e.g. "/vithaya-portfolio"). Local dev leaves it empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export", // emit a static site into ./out for any static host
  basePath,
  trailingSlash: true, // each route becomes a folder/index.html — safe on Pages
  images: {
    // No Image Optimization server on GitHub Pages; serve images as-is.
    unoptimized: true,
  },
};

export default nextConfig;
