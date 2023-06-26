/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        accent: {
          1: '#fafafa',
          2: '#eaeaea',
          3: '#999999',
          4: '#888888',
          5: '#666666',
          6: '#444444',
          7: '#333333',
          8: '#111111',
        },
        error: {
          lighter: '#f7d4d6',
          light: '#ff1a1a',
          DEFAULT: '#ee0000',
          dark: '#c50000',
        },
        success: {
          lighter: '#d3e5ff',
          light: '#3291ff',
          DEFAULT: '#0070f3',
          dark: '#0761d1',
        },
        warning: {
          lighter: '#ffefcf',
          light: '#f7b955',
          DEFAULT: '#f5a623',
          dark: '#ab570a',
        },
      },
    },
  },
  plugins: [],
};
