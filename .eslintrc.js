module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "no-control-regex": 0,
    "no-misleading-character-class": "off",
    "no-useless-escape": "off",
    "no-prototype-builtins": "off",
    "no-cond-assign": "off",
    "no-empty": "off",
    "valid-typeof": "off",
    "no-unused-vars": "off",
    "no-fallthrough": "off",
    "react/display-name": "off",
    "no-func-assign": "off",
    "no-undef": "off",
    "getter-return": "off",
    "react/jsx-no-target-blank": [
      "off",
      {
        allowReferrer: "true",
      },
    ],
    "no-irregular-whitespace": "Off",
  },
};
