import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { resolve } from 'path'

const pathSrc = resolve(__dirname, './src')

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': pathSrc,
		},
	},
	plugins: [
		vue(),
		AutoImport({
			imports: ['vue'],
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
	],
	base: '/git-emoji-user-guide/',
	server: {
		port: 8080,
	},
})
