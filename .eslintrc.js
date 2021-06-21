module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: { "@typescript-eslint/explicit-module-boundary-types": "off", "@typescript-eslint/ban-ts-comment": "off" },
  ignorePatterns: ["dist"],
};
