/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            white: '#ffffff',
            blue: {
                medium: '#005c98',
            },
            black: {
                light: '#262626',
                faded: '#00000059',
            },
            gray: {
                base: '#616161',
                background: '#fafafa',
                primary: '#dbdbdb',
            },
            red: {
                primary: '#ed4956',
            },
        },
    },
    plugins: [],
};
