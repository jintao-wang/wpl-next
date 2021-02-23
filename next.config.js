const isProd = process.env.NODE_ENV === 'production';
const withImages = require('next-images');

module.exports = withImages({
  basePath: isProd ? '/next-solution/customer/EFC' : '',
  assetPrefix: isProd ? 'https://wpl-next.vercel.app' : '',
  dynamicAssetPrefix: true,
  inlineImageLimit: 16384,
  webpack(config, options) {
    if (!options.isServer) {
      // eslint-disable-next-line no-param-reassign
      config.node = {
        fs: 'empty',
      };
    }
    return config;
  },
  trailingSlash: true,
});
