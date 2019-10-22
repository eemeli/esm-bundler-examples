module.exports = {
  externals: "react",
  output: {
    path: require("path").resolve("dist")
  },
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json"]
  }
};
