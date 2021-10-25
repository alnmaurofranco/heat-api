module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@modules": "./src/modules",
          "@infra": "./src/infra",
          "@config": "./src/config",
        },
      },
    ],
    "@babel/plugin-proposal-class-properties",
  ],
};
