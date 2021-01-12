const defaultConfig = require('tailwindcss/defaultConfig');
const plugin = require('./index');

module.exports = {
	...defaultConfig,
	plugins: [plugin()],
};
