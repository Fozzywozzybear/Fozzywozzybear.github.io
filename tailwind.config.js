/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'serif': ['Fraunces', 'Georgia', 'serif'],
                'sans': ['Inter', 'system-ui', 'sans-serif'],
                'mono': ['JetBrains Mono', 'monospace'],
            },
            colors: {
                'sand': '#F5F5F0',
                'sand-dark': '#E8E8E0',
                'ink': '#1A1A1A',
                'ink-muted': '#4A4A4A',
                'ink-subtle': '#7A7A7A',
                'clay': '#C45D32',
                'clay-muted': '#D4896B',
                'surface': '#FAFAF8',
                'border': '#D4D4CC',
            },
        },
    },
    plugins: [],
}
