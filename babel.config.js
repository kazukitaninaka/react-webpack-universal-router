module.exports = (api) => {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-typescript",
      {
        onlyRemoveTypeImports: true,
      },
    ],
    ["@babel/preset-react", { runtime: "automatic" }],
    [
      "@babel/preset-env",
      {
        targets: "defaults",
      },
    ],
  ];

  return {
    presets,
  };
};
