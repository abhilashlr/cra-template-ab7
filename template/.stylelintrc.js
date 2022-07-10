module.exports = {
  customSyntax: '@stylelint/postcss-css-in-js',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-styled-components',
  ],
  rules: {
    'unit-no-unknown': [true, { ignoreUnits: ['`', ';'] }],
    'function-whitespace-after': null,
  },
};
