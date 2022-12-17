const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007BC5',
        loading: '#FDFDFD',
        base: '#393939',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)', 'var(--font-libre-baskerville)', ...fontFamily.sans],
      },
      height: {
        'screen': [
          '100vh', '100dvh'
        ]
      },
    },
  },
  plugins: [],
}
