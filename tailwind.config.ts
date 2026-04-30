import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8BB917', // Grün
        accent: '#0099CC', // Blau
        black: '#000000',
        background: '#f8fafc', // Optional: kann angepasst werden
        gold: '#eab308', // Optional: falls noch genutzt
        silver: '#cbd5e1', // Optional: falls noch genutzt
      },
      borderRadius: {
        lg: '1rem',
        xl: '1.5rem',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 0 40px 0 rgba(14, 165, 233, 0.15)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
