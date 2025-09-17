const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
  '@': __dirname, // maps '@' to the project root
};

module.exports = config;
