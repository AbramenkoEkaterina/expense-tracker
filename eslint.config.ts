import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";
import a11yPlugin from "eslint-plugin-jsx-a11y";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
      globals: globals.browser,
    },
    settings: {
      react: { version: "detect" },
    },
    plugins: {
      react: reactPlugin,
      import: importPlugin,
      "jsx-a11y": a11yPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      // === React-like Airbnb rules ===
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",

      // Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Import order (Airbnb style)
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
        },
      ],

      // Accessibility (Airbnb)
      "jsx-a11y/anchor-is-valid": "warn",

      // Code style
      "no-unused-vars": "warn",
      semi: ["error", "always"],
      quotes: ["error", "single"],
    },
  },
];

