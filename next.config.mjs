/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config){
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'via.placeholder.com',            
          },
          {
            protocol: 'https',
            hostname: 'cms.gandhineru.com',            
          },
        ],
      },
};

export default nextConfig;

