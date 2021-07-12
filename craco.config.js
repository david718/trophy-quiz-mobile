const CracoAlias = require('craco-alias');
const PreactRefreshPlugin = require('@prefresh/webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  reactScriptsVersion: 'react-scripts',
  babel: {
    presets: [],
    plugins: [
      // [
      //   '@babel/plugin-transform-react-jsx',
      //   {
      //     runtime: 'automatic',
      //     importSource: 'preact',
      //   },
      // ],
    ],
  },
  typescript: {
    enableTypeChecking: true,
  },
  webpack: {
    // alias: {
    //   react: 'preact/compat',
    //   'react-dom/test-utils': 'preact/test-utils',
    //   'react-dom': 'preact/compat',
    // },
    plugins: {
      add: [
        new PreactRefreshPlugin(),
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
