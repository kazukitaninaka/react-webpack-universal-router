const path = require("path");

function abs(...args) {
  return path.join(__dirname, ...args);
}

module.exports = {
  target: "node",
  mode: "development",
  entry: {
    server: abs("src/server.tsx"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/, /dist/],
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
