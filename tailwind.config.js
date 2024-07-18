module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            animation: {
                'marquee': 'marquee 5s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translate3d(var(--move-initial), 0, 0)' },
                    '100%': { transform: 'translate3d(var(--move-final), 0, 0)' }
                }
            }
        }
    },
    plugins: [],
}
