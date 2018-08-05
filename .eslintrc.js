module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  parser: "babel-eslint",
  rules: {
    "class-methods-use-this": 0,
    "import/no-named-as-default": 0,
    "no-console": 0,
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx"]
      }
    ]
  }
};
