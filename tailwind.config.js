/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: [
            'Inter',
            '"Helvetica Neue"',
            'sans-serif',
            'Arial',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        fontWeight: {
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            'extra-bold': '800',
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'main': '#71F283',
            'yellow': '#EBAD43',
            'price-high': '#98D54A',
            'price-low': '#C7504C',
            'grey': '#a1a0a0',
        },
        spacing: {
            '1': '8px',
            '2': '12px',
            '3': '16px',
            '4': '24px',
            '5': '32px',
            '6': '48px',
        },
        fontSize: {
            'h2': ['32px', '38px'],
            'h3': ['24px', '32px'],
            'h4': ['20px', '24px'],
            'h5': ['18px', '22px'],
            'body1': ['16px', '24px'],
            'body2': ['14px', '22px'],
        }
    },
    plugins: [],
}

