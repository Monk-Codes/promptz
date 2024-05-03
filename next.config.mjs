// next.config.mjs
const nextConfig = {
 experimental: {
  appDir: true,
  serverComponentsExternalPackages: ["mongoose"],
 },
 images: {
  domains: ["lh3.googleusercontent.com"],
 },
 webpack(config, { isServer }) {
  if (!isServer) {
   config.experiments = {
    ...config.experiments,
    topLevelAwait: true,
   };
  }
  return config;
 },
};

export default nextConfig;
