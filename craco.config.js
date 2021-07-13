const CracoAlias = require('craco-alias');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  reactScriptsVersion: 'react-scripts',
  eslint: {
    enable: true,
    mode: 'extends' || 'file',
  },
  typescript: {
    enableTypeChecking: true,
  },
  webpack: {
    plugins: {
      add: [
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: 'docs/size_dev.html',
          defaultSizes: 'parsed',
          openAnalyzer: false,
          generateStatsFile: false,
          statsFilename: 'docs/stats_dev.json',
        }),
      ],
    },
  },
  jest: {
    moduleNameMapper: {
      'styled-components':
        '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js',
    },
    babel: {
      addPresets: true,
      addPlugins: true,
    },
  },
  devServer: {
    hot: true,
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: 'tsconfig.paths.json',
      },
    },
  ],
};
