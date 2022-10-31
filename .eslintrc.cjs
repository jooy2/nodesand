module.exports = {
	env: {
		node: true,
		es6: true
	},
	extends: ['airbnb-base', 'prettier'],
	parserOptions: {
		ecmaVersion: 2022
	},
	rules: {
		'linebreak-style': 0,
		'import/extensions': 0
	}
};
