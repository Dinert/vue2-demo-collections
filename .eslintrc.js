module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        requireConfigFile: false,
        parser: '@babel/eslint-parser'
    },
    plugins: [
        'vue',
        '@babel'
    ],
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
    ],
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    rules: {
        'accessor-pairs': 'error',
        'array-bracket-newline': ['warn', 'consistent'],
        'array-bracket-spacing': ['error', 'never'],
        'array-callback-return': 'error',
        'arrow-body-style': 'off',
        'arrow-parens': ['error', 'as-needed'],
        'arrow-spacing': 'error',
        'block-scoped-var': 'warn',
        'block-spacing': ['error', 'never'],
        'brace-style': 'off',
        'callback-return': 'off',
        'camelcase': 'off',
        'capitalized-comments': 'off',
        'class-methods-use-this': 'off',
        'comma-dangle': 'off',
        'comma-spacing': ['error', {before: false, after: true}],
        'comma-style': ['error', 'last'],
        'complexity': 'off',
        'computed-property-spacing': ['error', 'never'],
        'consistent-return': ['error', {treatUndefinedAsUnspecified: true}],
        'consistent-this': 'off',
        'constructor-super': 'error',
        'curly': ['error', 'all'],
        'default-case': 'off',
        'dot-location': ['error', 'property'],
        'dot-notation': ['error', {allowKeywords: true}],
        'eol-last': ['error', 'always'],
        'eqeqeq': ['error', 'always', {null: 'ignore'}],
        'for-direction': 'off',
        'func-call-spacing': ['error', 'never'],
        'func-name-matching': 'off',
        'func-names': 'off',
        'func-style': 'off',
        'generator-star-spacing': ['error', {before: false, after: true}],
        'global-require': 'warn',
        'guard-for-in': 'off',
        'handle-callback-err': 'off',
        'id-blacklist': 'off',
        'id-length': 'off',
        'id-match': 'off',
        'indent': [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'indent-legacy': 'off',
        'init-declarations': 'warn',
        'jsx-quotes': ['error', 'prefer-double'],
        'key-spacing': ['error', {beforeColon: false, afterColon: true}],
        'keyword-spacing': 'error',
        'line-comment-position': 'off',
        'linebreak-style': 'off',
        'lines-around-comment': 'off',
        'max-depth': 'off',
        'max-len': ['warn', 120, 4, {ignoreUrls: true}],
        'max-lines': ['warn', 800],
        'max-nested-callbacks': 'off',
        'max-params': 'off',
        'max-statements': ['warn', 30, {ignoreTopLevelFunctions: true}],
        'max-statements-per-line': 'error',
        'multiline-ternary': 'off',
        'new-cap': 'off',
        'new-parens': 'warn',
        'newline-per-chained-call': 'off',
        'no-alert': 'warn',
        'no-array-constructor': 'off',
        'no-await-in-loop': 'off',
        'no-bitwise': 'off',
        'no-buffer-constructor': 'warn',
        'no-caller': 'error',
        'no-case-declarations': 'off',
        'no-catch-shadow': 'off',
        'no-class-assign': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': 'error',
        'no-confusing-arrow': ['error', {allowParens: true}],
        'no-console': 'off',
        'no-const-assign': 'error',
        'no-constant-condition': 'error',
        'no-continue': 'off',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-delete-var': 'error',
        'no-div-regex': 'off',
        'no-dupe-args': 'error',
        'no-dupe-class-members': 'warn',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': 'warn',
        'no-else-return': 'off',
        'no-empty': 'error',
        'no-empty-character-class': 'error',
        'no-empty-function': [
            'warn',
            {
                allow: [
                    'generatorFunctions',
                    'methods',
                    'generatorMethods',
                    'setters',
                    // 'asyncMethods',   //会报错
                ],
            },
        ],
        'no-empty-pattern': 'error',
        'no-eq-null': 'off',
        'no-eval': 'error',
        'no-ex-assign': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'warn',
        'no-extra-boolean-cast': 'error',
        'no-extra-label': 'error',
        'no-extra-parens': ['error', 'functions'],
        'no-extra-semi': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-func-assign': 'warn',
        'no-global-assign': 'error',
        'no-implicit-coercion': 'off',
        'no-implicit-globals': 'off',
        'no-implied-eval': 'error',
        'no-inline-comments': 'off',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-invalid-this': 'off',
        'no-irregular-whitespace': 'error',
        'no-iterator': 'off',
        'no-label-var': 'off',
        'no-labels': 'off',
        'no-lone-blocks': 'off',
        'no-lonely-if': 'error',
        'no-loop-func': 'warn',
        'no-magic-numbers': 'off',
        'no-mixed-operators': 'off',
        'no-mixed-requires': 'off',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'warn',
        'no-multi-spaces': ['error', {exceptions: {Property: false}}],
        'no-multi-str': 'warn',
        'no-multiple-empty-lines': 'warn',
        'no-negated-condition': 'off',
        'no-negated-in-lhs': 'error',
        'no-nested-ternary': 'off',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-require': 'error',
        'no-new-symbol': 'error',
        'no-new-wrappers': 'error',
        'no-obj-calls': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'off',
        'no-path-concat': 'off',
        'no-plusplus': 'off',
        'no-process-env': 'off',
        'no-process-exit': 'off',
        'no-proto': 'error',
        'no-prototype-builtins': 'off',
        'no-redeclare': 'error',
        'no-regex-spaces': 'error',
        'no-restricted-globals': 'off',
        'no-restricted-imports': 'off',
        'no-restricted-modules': 'off',
        'no-restricted-properties': 'off',
        'no-restricted-syntax': 'off',
        'no-return-assign': ['error', 'except-parens'],
        'no-return-await': 'error',
        'no-script-url': 'warn',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow': 'off',
        'no-shadow-restricted-names': 'off',
        'no-sparse-arrays': 'error',
        'no-sync': 'off',
        'no-tabs': 'warn',
        'no-template-curly-in-string': 'off',
        'no-ternary': 'off',
        'no-this-before-super': 'error',
        'no-throw-literal': 'warn',
        'no-trailing-spaces': 'error',
        'no-undef': 'off',
        'no-undef-init': 'warn',
        'no-undefined': 'off',
        'no-underscore-dangle': 'off',
        'no-unexpected-multiline': 'error',
        'no-unmodified-loop-condition': 'warn',
        'no-unneeded-ternary': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-unused-expressions': ['warn', {allowShortCircuit: true}],
        'no-unused-labels': 'error',
        'no-unused-vars': 'error',
        'no-use-before-define': 'off',
        'no-useless-call': 'warn',
        'no-useless-computed-key': 'error',
        'no-useless-concat': 'warn',
        'no-useless-constructor': 'error',
        'no-useless-escape': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-void': 'error',
        'no-warning-comments': 'off',
        'no-whitespace-before-property': 'error',
        'no-with': 'error',
        'nonblock-statement-body-position': 'off',
        'object-curly-newline': ['error', {consistent: true, multiline: true}],
        'object-curly-spacing': 'off',
        'object-property-newline': 'off',
        'object-shorthand': ['off', 'consistent-as-needed'],
        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': 'error',
        'operator-assignment': 'off',
        'operator-linebreak': ['error', 'before'],
        'padded-blocks': 'off',
        'padding-line-between-statements': 'off',
        'prefer-arrow-callback': ['warn', {allowNamedFunctions: true}],
        'prefer-const': 'error',
        'prefer-destructuring': 'off',
        'prefer-numeric-literals': 'error',
        'prefer-promise-reject-errors': 'warn',
        'prefer-reflect': 'off',
        'prefer-rest-params': 'off',
        'prefer-spread': 'warn',
        'prefer-template': 'off',
        'quote-props': 'off',
        'quotes': ['error', 'single'],
        'radix': 'off',
        'require-await': 'warn',
        'require-jsdoc': 'off',
        'require-yield': 'error',
        'rest-spread-spacing': ['error', 'never'],
        'semi': [
            'error',
            'never'
        ],
        'semi-spacing': 'error',
        'semi-style': ['error', 'last'],
        'sort-imports': 'off',
        'sort-keys': 'off',
        'sort-vars': 'off',
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': [
            'error',
            {
                'anonymous': 'always',
                'named': 'never',
                'asyncArrow': 'always',
            },
        ],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': 'warn',
        'spaced-comment': [
            'error',
            'always',
            {
                'exceptions': [
                    '-',
                    '+',
                    '\'',
                    '#',
                ],
                'block': {
                    'balanced': true,
                },
            },
        ],
        'strict': 'off',
        'switch-colon-spacing': ['error', {before: false, after: true}],
        'symbol-description': 'warn',
        'template-curly-spacing': ['error', 'never'],
        'template-tag-spacing': ['error', 'never'],
        'unicode-bom': 'warn',
        'use-isnan': 'error',
        'valid-jsdoc': 'off',
        'valid-typeof': 'error',
        'vars-on-top': 'off',
        'wrap-iife': ['error', 'any'],
        'wrap-regex': 'off',
        'yield-star-spacing': 'off',
        'yoda': 'warn',
        '@babel/object-curly-spacing': ['error', 'never'],
        'vue/no-custom-modifiers-on-v-model': 'error',
        'vue/no-multiple-template-root': 'error',
        'vue/no-v-for-template-key': 'error',
        'vue/no-v-model-argument': 'error',
        'vue/valid-v-bind-sync': 'error',
        'vue/comment-directive': 'off',
        'vue/jsx-uses-vars': 'error',
        'vue/no-dupe-v-else-if': 'error',
        'vue/no-dupe-keys': 'error',
        'vue/no-duplicate-attributes': [
            'error',
            {
                allowCoexistClass: true,
                allowCoexistStyle: true,
            },
        ],
        'vue/no-parsing-error': 'error',
        'vue/no-reserved-keys': 'error',
        'vue/no-shared-component-data': 'error',
        'vue/no-template-key': 'error',
        'vue/no-textarea-mustache': 'error',
        'vue/no-unused-components': 'error',
        'vue/no-unused-vars': 'error',
        'vue/no-use-v-if-with-v-for': 'warn',
        'vue/require-prop-type-constructor': 'error',
        'vue/require-render-return': 'error',
        'vue/require-v-for-key': 'error',
        'vue/require-valid-default-prop': 'error',
        'vue/return-in-computed-property': 'error',
        'vue/valid-template-root': 'error',
        'vue/valid-v-bind': 'error',
        'vue/valid-v-cloak': 'error',
        'vue/valid-v-else-if': 'error',
        'vue/valid-v-else': 'error',
        'vue/valid-v-for': 'error',
        'vue/valid-v-html': 'error',
        'vue/valid-v-if': 'error',
        'vue/valid-v-model': 'error',
        'vue/valid-v-on': 'error',
        'vue/valid-v-once': 'error',
        'vue/valid-v-pre': 'error',
        'vue/valid-v-show': 'error',
        'vue/valid-v-slot': 'error',
        'vue/valid-v-text': 'error',
        'vue/attribute-hyphenation': 'error',
        'vue/html-closing-bracket-newline': 'error',
        'vue/html-closing-bracket-spacing': [
            'warn',
            {
                selfClosingTag: 'never',
            },
        ],
        'vue/html-end-tags': 'error',
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: false,
                ignores: [],
            },
        ],
        'vue/html-quotes': 'error',
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'never',
                    normal: 'never',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: {
                    max: 2
                },
                multiline: {
                    max: 2
                },
            },
        ],
        'vue/mustache-interpolation-spacing': 'error',
        'vue/no-multi-spaces': 'error',
        'vue/no-spaces-around-equal-signs-in-attribute': 'error',
        'vue/prop-name-casing': 'error',
        'vue/require-default-prop': 'off',
        'vue/require-prop-types': 'error',
        'vue/v-bind-style': 'warn',
        'vue/v-on-style': 'warn',
        'vue/attributes-order': 'warn',
        'vue/no-multiple-slot-args': 'warn',
        'vue/this-in-template': 'error',
        'vue/component-definition-name-casing': 'off',
        'vue/component-name-in-template-casing': [
            'error',
            'kebab-case',
            {
                registeredComponentsOnly: true,
                ignores: [],
            },
        ],
        'vue/component-tags-order': [
            'warn',
            {
                order: [['script', 'template'], 'style'],
            },
        ],
        'vue/no-deprecated-scope-attribute': 'off',
        'vue/no-deprecated-slot-attribute': 'off',
        'vue/no-deprecated-slot-scope-attribute': 'off',
        'vue/no-reserved-component-names': 'error',
        'vue/no-unsupported-features': 'off',
        'vue/require-direct-export': 'error',
        'vue/script-indent': [
            'error',
            4,
            {
                switchCase: 1,
            },
        ],
        'vue/valid-next-tick': 'error',
        'vue/html-button-has-type': 'error',
        'vue/no-invalid-model-keys': 'error',
        'vue/no-unused-refs': 'error',
        'vue/no-this-in-before-route-enter': 'error',
        'vue/no-use-computed-property-like-method': 'error',
        'vue/no-useless-template-attributes': 'error',
        'vue/no-computed-properties-in-data': 'error',
    },
}
