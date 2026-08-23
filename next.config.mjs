const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["motion", "lucide-react"]
  },
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
