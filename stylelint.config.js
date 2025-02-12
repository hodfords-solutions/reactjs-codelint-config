const postcssStyleSyntax = require('postcss-styled-syntax');

module.exports = {
  customSyntax: postcssStyleSyntax,
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended',
  ],
  rules: {
    'selector-class-pattern': null,
    'selector-pseudo-element-colon-notation': 'single',
    'font-family-name-quotes': null,
    'keyframes-name-pattern': null,
    'declaration-property-value-no-unknown': true,
    'font-family-no-missing-generic-family-keyword': null,
    'value-keyword-case': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'mixin',
          'include',
          'function',
          'return',
          'if',
          'extend',
          'at-root',
          'for'
        ],
      }
    ],
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: ['box', 'box-orient', 'line-clamp'],
      }
    ]
  }
}
