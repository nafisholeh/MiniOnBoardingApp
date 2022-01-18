module.exports = {
  env: {
    browser: true,
    "react-native/react-native": true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["react", "react-native", "prettier"],
  rules: {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/sort-styles": [
      "error",
      "asc",
      {
        ignoreClassNames: false,
        ignoreStyleProperties: false,
      },
    ],
    "prettier/prettier": "error",
  },
};
