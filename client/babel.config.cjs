// Used only by Jest (babel-jest). Vite's React plugin ignores Babel config
// files by default, so this does not affect `vite build`.
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
