import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import path from 'path';
export default defineConfig(({ command, mode }) => {
	return {
		plugins: [svelte()],
		build: {
			// make build faster by skipping transforms and minification
			target: 'esnext',
			minify: false,
			lib: {
				formats: ['es'],
				entry: [path.resolve('src/lib/index.js')]
			}
		},
		server: {
			watch: {
				// During tests we edit the files too fast and sometimes chokidar
				// misses change events, so enforce polling for consistency
				usePolling: true,
				interval: 100
			}
		}
	};
});
