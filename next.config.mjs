/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      // Customize Webpack's watch options to ignore node_modules or other folders
      config.watchOptions = {
        ignored: /node_modules/, // Ignore node_modules folder for file watching
      };
      return config;
    },
    // Add any other configurations if necessary
  };
  
  export default nextConfig;
  