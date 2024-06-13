import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'

export default () => {
	return [
		vue(),
		autoImport({
			imports: [
				'vue',
			],
			dts: './src/types/auto-imports.d.ts',
			eslintrc: {
				enabled: true,
				filepath: './.eslintrc-auto-import.json',
				globalsPropValue: true,
			},
		}),
	]
}
