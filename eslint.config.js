// eslint.config.js
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier";

export default [
  // Игнорируем папки/файлы
  {
    ignores: ["dist/**"],
  },

  // Базовые правила JS
  js.configs.recommended,

  // Правила для React
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        document: "readonly",
        window: "readonly",
        fetch: "readonly",
        MutationObserver: "readonly",
        console: "readonly",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // В React 17+ не нужен import React
    },
    settings: {
      react: {
        version: "detect", // Автоматически определяет версию React
      },
    },
  },

  // Настройки Prettier
  prettier,
];
