/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ["Barlow", "Arial", "sans-serif"]
			},
			colors: {
				light: "#EDF8F9",
				dark: "#2E5070",
				green: "#95BB6F",
				fuschia: "#C6EAE3"
			},
			borderWidth: {
				10: "10px"
			}
		},
	},
	plugins: [],
}
