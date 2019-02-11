# Easy React Landing Page

Template with minimal functional and examples for create Landing Pages on React

## About

* Сomfortable Folder structure
* Localization (in json - src/locales)
* Customized client seo tags (title, description)
* CSSModules + PostCSS (https://preset-env.cssdb.org/features):
  * Custom Properties
  * Nesting
  * Mixins
  * Imports
  * Inline SVG and SVG optimization
* Api
* Configs (./configs) - custome configs must start with `REACT_APP_` (f.e. `REACT_APP_API_GITHUB`)

## Development

```bash
npm i
npm run start
```

## Production

```bash
npm i
npm run build
```

## Errors

If you have error (https://github.com/postcss/postcss-cli/issues/265)
```bash
TypeError: Expected `cwd` to be of type `string` but received type `undefined`
```

Use this command:
```bash
npm update globby --depth 5
```
