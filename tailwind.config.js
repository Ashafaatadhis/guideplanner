/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "src/**/*.{js,ts,jsx,tsx}",
        "node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
        "node_modules/daisyui/dist/**/*.js",
        "node_modules/react-daisyui/dist/**/*.js"
    ],
    theme: {
        extend: {}
    },
    plugins: [],
    daisyui: {
        themes: false
    }
};
