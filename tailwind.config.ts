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
        primary: '#1e293b', // Slate 800
        accent: '#0ea5e9', // Sky 500
        background: '#f8fafc', // Soft background
        gold: '#eab308', // Elegant Gold
        silver: '#cbd5e1', // Cool Silver-Grey
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
