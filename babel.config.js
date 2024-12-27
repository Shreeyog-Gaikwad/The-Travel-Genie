module.exports = function(api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo', 'nativewind/babel'], // Correct placement here
    };
  };