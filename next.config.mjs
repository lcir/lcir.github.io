const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const assetPrefix = basePath ? `${basePath}/` : undefined;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
