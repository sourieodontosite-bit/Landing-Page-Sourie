/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal-primary': '#25616f',
        'teal-medium': '#3d7683',
        'teal-dark': '#436f79',
        'navy-dark': '#113f4a',
        'cyan-light': '#ddf8ff',
        'bg-light': '#f1f5f6',
        'text-primary': '#445255',
        'text-heading': '#2c7181',
        'text-secondary': '#25606f',
        'border-light': '#c8ced1',
        'border-medium': '#d9d9d9',
        'border-dark': '#e3e3e3',
        'badge-bg': '#99d3e0',
        'badge-border': '#b7ccd1',
        'badge-google-bg': '#dff3f8',
        'card-problem': '#f8f8f8',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['64px', { lineHeight: '1.2', fontWeight: '500' }],
        'h2': ['48px', { lineHeight: '1.2', fontWeight: '500' }],
        'h3': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['22px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['22px', { lineHeight: '1.5', fontWeight: '400' }],
        'body': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['15px', { lineHeight: '1.5', fontWeight: '400' }],
        'btn': ['18px', { lineHeight: '1', fontWeight: '600' }],
        'badge': ['16px', { lineHeight: '1', fontWeight: '600' }],
        'footer-heading': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'footer-body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'quote': ['20px', { lineHeight: '1.5', fontWeight: '500' }],
      },
      spacing: {
        'container-x': '79px',
        'container-y': '42px',
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'card': '32px',
        'card-sm': '31.28px',
        'card-lg': '34px',
        'section': '42px',
        'footer': '71px',
        'pill': '118.16px',
        'badge': '70px',
      },
      boxShadow: {
        'card': '4px 4px 29.5px 10px rgba(0,0,0,0.13)',
        'problem': '9px 9px 16.4px 10px rgba(0,0,0,0.09)',
        'button': '2px 4px 14.8px 4px rgba(0,0,0,0.10)',
      },
      maxWidth: {
        'page': '1280px',
      },
      scale: {
        '60': '0.60',
        '55': '0.55',
        '50': '0.50',
        '75': '0.75',
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
    },
  },
  plugins: [],
};
