{ presets = [
    '@babel/preset-env',
    {
        loose: true,
        modules: true,
        target: [web]
    },
    '@babel/preset-react',
    {
        "runtime": "automatic"
      }]
;
plugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-proposal-export-default-from',
];
}