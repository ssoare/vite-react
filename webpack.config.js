module.exports = {
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: "./src/images", to: "./dist" },
        ],
      }),
    ],
  };