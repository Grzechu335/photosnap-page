/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        screens: {
            sm: '768px',
            xl: '1440px',
        },
        colors: {
            'pure-black': '#000000',
            'light-gray': '#DFDFDF',
            'pure-white': '#FFFFFF',
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-dm-sans)'],
            },
        },
    },
    plugins: [require('tailwindcss-breakpoints-inspector')],
}
