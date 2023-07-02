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
      animation: {
        'show-dialog-overlay': 'show-dialog-overlay 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        'show-dialog-content': 'show-dialog-content 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up-and-fade': 'slide-up-and-fade 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right-and-fade': 'slide-right-and-fade 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-and-fade': 'slide-down-and-fade 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left-and-fade': 'slide-left-and-fade 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        'skeleton-fade': 'skeleton-fade var(--skeleton-animation-duration) ease-in-out infinite',
      },
      keyframes: {
        'show-dialog-overlay': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'show-dialog-content': {
          '0%': { opacity: 0, transform: 'translate(-50%, -50%) scale(0.96)' },
          '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
        'slide-up-and-fade': {
          '0%': { opacity: 0, transform: 'translateY(0.125rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-right-and-fade': {
          '0%': { opacity: 0, transform: 'translateX(-0.125rem)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'slide-down-and-fade': {
          '0%': { opacity: 0, transform: 'translateY(-0.125rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-left-and-fade': {
          '0%': { opacity: 0, transform: 'translateX(0.125rem)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'skeleton-fade': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [],
};
