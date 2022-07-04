module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-env'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['./'],
          extensions: ['.js', '.jsx', '.tsx', '.ios.js', '.android.js'],
          alias: {
            // define aliases to shorten the import paths
            _assets: './assets',
            _theme: './src/theme',
            _features: './src/features',
            _helpers: './src/helpers',
            _components: './src/ui-lib',
            _atoms: './src/ui-lib/components/atoms',
            _molecules: './src/ui-lib/components/molecules',
            _organisms: './src/ui-lib/components/organisms',
            _templates: './src/ui-lib/components/templates',
          },
        },
      ],
    ],
  };
};
