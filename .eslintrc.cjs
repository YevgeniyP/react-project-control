module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true
  },
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "prettier",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  plugins: [
    "react-refresh",
    "@typescript-eslint/eslint-plugin",
    "simple-import-sort",
    "import"],
  rules: {
    "@typescript-eslint/return-await": ["error", "always"],
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "simple-import-sort/imports": "error",
    "import/first": "error",
    "import/newline-after-import": ["error", { count: 1 }],
    "import/no-duplicates": "error",
    "no-console": "warn",
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: false,
      },
    ],
  },
}
