module.exports = {
    '*.{js,jsx,ts,tsx,css,scss,vue,gql,md}': [
        'prettier --write --ignore-path .gitignore',
        'git add',
    ],
    './package.json': ['sort-package-json', 'git add'],
}
