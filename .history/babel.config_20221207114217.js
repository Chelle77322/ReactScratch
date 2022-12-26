export const presets = [
    '@babel/preset-env',
    {
        loose: true,
        modules: true
    },
    '@babel/preset-react'
];
export const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-proposal-export-default-from',
];