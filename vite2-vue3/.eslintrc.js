module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/prettier'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/experimental-script-setup-vars': 'none',
    'vue/experimental-script-setup-vars': '',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true, // 单引号 or 双引
        semi: false, // 是否加分号
        trailingComma: "es5", // 数组最后一项是否加逗号
      }
    ]
  }
}
