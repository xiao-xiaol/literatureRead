// import process from 'node:process'
import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import createPlugins from './vite.plugin'

// https://vitejs.dev/config/
export default defineConfig(() => {
	return {
		resolve: {
			alias: {
				'@': '/src/',
			},
		},
		server: {
			port: 5177,
		},
		plugins: createPlugins(),
		css: {
			postcss: {
				plugins: [
					tailwindcss(),
					autoprefixer(),
				],
			},
		},
	}
})
