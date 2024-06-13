import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
	{
		stylistic: {
			indent: 'tab',
		},
		rules: {
			'no-console': 'off',
		},
	},
	...compat.config({
		// 自动导入的方法
		extends: ['./.eslintrc-auto-import.json'],
	}),
)
