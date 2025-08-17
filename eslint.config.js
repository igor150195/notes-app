import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true }, // JSX включаем здесь
      },
      globals: {
        document: "readonly",
        window: "readonly",
        fetch: "readonly",
        MutationObserver: "readonly",
        console: "readonly",
        alert: "readonly",
      },
    },
    plugins: { react, "react-hooks": reactHooks },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      semi: ["error", "always"],
    },
    settings: {
      react: { version: "detect" },
    },
  },
  prettier,
];
