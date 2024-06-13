/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-bg": "#111827",
                "secondary-bg": "#18212F",
                "primary-button": "rgba(79,70,229,1)",
                "secondary-button": "rgba(79,70,229,.7)",
            },
            fontFamily: {
                primary: ["Poppins", "sans-serif"],
            },
            gridTemplateColumns: {
                question: "0.5fr 1fr 5fr 0.8fr 0.8fr 0.8fr 0.8fr 0.6fr 0.6fr",
            },
        },
    },
    plugins: [],
};
