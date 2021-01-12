const plugin = require('tailwindcss/plugin');
const selectorParser = require('postcss-selector-parser');

module.exports = function (opt) {
  const { selectorPrefix } = opt || { selectorPrefix: 'html:lang(ar)' };
  return function ({ addVariant, prefix }) {
    addVariant('rtl', ({ modifySelectors, separator }) => {
      modifySelectors(({ selector }) => {
        return selectorParser((selectors) => {
          selectors.walkClasses((sel) => {
            sel.value = `rtl${separator}${sel.value}`;
            sel.parent.insertBefore(
              sel,
              selectorParser().astSync(prefix(`${selectorPrefix} `))
            );
          });
        }).processSync(selector);
      });
    });
  };
};
