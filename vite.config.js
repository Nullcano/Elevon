import { sveltekit } from '@sveltejs/kit/vite'
import path from 'path'

const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@api': path.resolve('./src/api')
		}
	}
};

export default config;
