# Tailwind RTL CSS Plugin

This package is a fork of `murtazasultani/tailwind-rtl`.

Tailwind CSS plugin to generate RTL variants.

## Installation

```bash
yarn add @abdulkader/tailwind-rtl -D

or

npm install @abdulkader/tailwind-rtl --save-dev
```

## Usage

#### With Default prefix `html:lang(ar)`

RTL styles will be applied when you have `lang="ar"` attribute in html
```
<html lang="ar">
...
...
```

```js
plugins: [
    require('@abdulkader/tailwind-rtl')(),
    // ...
],
```

#### With Custom prefix

If you want to change when to apply RTL instead of applying based on `html:lang(ar)`

Eg:
```
...
<body dir="rtl">
...
```

```js
plugins: [
    require('@abdulkader/tailwind-rtl')({selectorPrefix: '[dir="rtl"]'}),
    // ...
],
```


## Note
By default the `rtl` variant is not enabled to none of the tailwindcss utilities.
To use the `rtl` variant add it at the end of any utility you want to use it with.

```js
variants: {
    margin: ['responsive', 'rtl'],
    padding: ['responsive', 'rtl'],
    textAlign: ['responsive', 'rtl']
    // ...
},
```

This plugin generates the following utilities:

```css
/* default prefix */

html:lang(ar) .rtl\:text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

/* with custom prefix */

[dir='rtl'] .rtl\:text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
[dir='rtl'] .rtl\:ml-5 {
  margin-left: 1.25rem;
}
...
```

## Example

```html
<div class="ml-10 text-xs rtl:text-2xl rtl:ml-5 text-left rtl:text-right md:rtl:text-center">
  My App
</div>
```