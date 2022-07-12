module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_|strapi|app",
        varsIgnorePattern: "^_|React",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "react-hooks/exhaustive-deps": "warn",
    "react/no-children-prop": "warn",
  },
  globals: {
    strapi: "readonly",
  },
};
