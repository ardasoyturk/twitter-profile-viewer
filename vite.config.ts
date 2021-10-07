import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import ViteRadar from 'vite-plugin-radar';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		// Import Vue
		Vue(),
		// Import Windi CSS
		WindiCSS({
			config: './windi.config.ts',
		}),
		// Import Radar (analytics)
		ViteRadar({
			enableDev: true,
			analytics: [{ id: 'G-6Q9NPHELLL' }],
			gtm: [{ id: 'G-6Q9NPHELLL' }],
		}),
	],
});
