export default {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        fixStyle: "separate-type-imports",
        disallowTypeAnnotations: true,
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "react-redux",
            importNames: ["useSelector", "useStore", "useDispatch"],
            message:
              "Please use pre-typed versions from `src/app/hooks.ts` instead.",
          },
        ],
      },
    ],
  },
};
