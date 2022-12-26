export const presets = [
    '@babel/preset-env',
    {
        loose: true,
        modules: false,
        target: [web, es6]
    },
    '@babel/preset-react',
    {
        "runtime": "automatic"
      }]
;
export const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-proposal-export-default-from',
];