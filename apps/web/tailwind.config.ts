import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-ibm)', 'sans-serif'],
      },
      boxShadow: {
        light: '0px 4px 10px rgba(0, 85, 255, 0.08)',
        strong: '0px 8px 24px rgba(0, 85, 255, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
