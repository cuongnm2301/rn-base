module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier',
        '@react-native-community',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            impliedStrict: true,
            jsx: true,
            experimentalObjectRestSpread: true,
        },
        parser: '@typescript-eslint/parse',
        project: ['./tsconfig.json'],
    },
    plugins: ['@babel', 'react', 'prettier', '@momo-platform/momo', 'unused-imports'],
    settings: {
        react: { version: 'detect' },
        'import/resolver': {
            'babel-module': {},
        },
        node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
    },
    rules: {
        'prettier/prettier': ['error'],
        'react/jsx-filename-extension': [0],
        'no-unused-vars': 'warn',
        'no-undef': 2,
        'no-bitwise': 0,
        'no-sequences': 0,
        'no-control-regex': 0,
        'react-hooks/exhaustive-deps': 0,
        'react-native/no-inline-styles': 2,
        'react/no-did-mount-set-state': 0,
        'global-require': 0,
        'import/no-extraneous-dependencies': [
            'error',
            {
                packageDir: './',
            },
        ],
        'import/no-unresolved': 'off',
        'comma-dangle': 0,
        'no-empty-pattern': 0,
        'arrow-body-style': 0,
        'import/prefer-default-export': 0,
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'eslint-comments/no-unused-disable': 0,
        'react/prefer-stateless-function': 0,
        'max-classes-per-file': 0,
        '@typescript-eslint/naming-convention': 0,
        '@typescript-eslint/no-use-before-define': 0,
        'react/require-default-props': 0,
        '@typescript-eslint/no-unused-expressions': 0,
        'react/jsx-props-no-spreading': 0,
        'react/no-unused-prop-types': 0,
        'prefer-object-spread': 0,
        '@typescript-eslint/dot-notation': 0,
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
    },
    globals: {
        _: true,
        __DEV__: true,
        alert: true,
        fetch: true,
        fs: true,
        JSX: true,
        NodeJS: true,
    },
};
