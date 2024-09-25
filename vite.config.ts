import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';

import { glob } from 'glob';
import { fileURLToPath } from 'node:url';
import { extname, relative, resolve } from 'path';
import { defineConfig } from 'vite';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		libInjectCss(),
		dts({
			include: ['lib'],
			exclude: ['**/*.stories.ts', '**/*.stories.tsx']
		})
	],
	build: {
		lib: {
			entry: resolve(__dirname, './lib/main.ts'),
			formats: ['es']
		},
		rollupOptions: {
			external: ['react', 'react/jsx-runtime', 'react-transition-group'],
			input: Object.fromEntries(
				glob
					.sync('lib/**/*.{ts,tsx}', {
						ignore: ['lib/**/*.d.ts', 'lib/**/*.{stories,spec}.{ts,tsx}']
					})
					.map((file) => [
						relative('lib', file.slice(0, file.length - extname(file).length)),
						fileURLToPath(new URL(file, import.meta.url))
					])
			),
			output: {
				assetFileNames: 'assets/[name][extname]',
				entryFileNames: '[name].js'
			}
		}
	}
});
