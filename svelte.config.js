import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		/* set true for static builds*/
		/* prerender: {
			default: true
		} */
	},
	preprocess: sveltePreprocess()
};

export default config;
