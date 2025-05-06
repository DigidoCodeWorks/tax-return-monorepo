// tailwind.config.ts
import { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: {
          blue: {
            600: '#0040AB',
            400: '#0055FF',
            300: '#4A84FA',
            200: '#B3CCFF',
            100: '#E5EEFF',
          },
          red: {
            600: '#B10060',
            400: '#FF005B',
            300: '#FA4A84',
            200: '#FFB3CC',
            100: '#FFE5EC',
          },
          dark: {
            600: '#000C3C',
            400: '#191F5E',
            300: '#707199',
            200: '#CCCCCC',
            100: '#F2F2F5',
          },
        },
        secondary: {
          blueberry: {
            600: '#23006A',
            400: '#4729A2',
            300: '#5A4DD9',
            200: '#BEB8FF',
            100: '#EFE5FF',
          },
          purple: {
            600: '#610C83',
            400: '#8E4CBA',
            300: '#B582DD',
            200: '#E6CCFF',
            100: '#F8F2FF',
          },
          rose: {
            600: '#6E003A',
            400: '#AB1079',
            300: '#DF70C7',
            200: '#E6CCEC',
            100: '#F8F2FA',
          },
        },
        accent: {
          mint: {
            600: '#019188',
            400: '#00C4B3',
            300: '#31E1D3',
            200: '#73F4E7',
            100: '#D1FFF9',
          },
          yellow: {
            600: '#F6C700',
            400: '#FFD100',
            300: '#FFE76C',
            200: '#FFF7CC',
            100: '#FFF9F7',
          },
        },
        white: '#ffffff',
      },
      boxShadow: {
        light: '0px 4px 10px rgba(0, 85, 255, 0.08)',
        strong: '0px 8px 24px rgba(0, 85, 255, 0.15)',
      },
    },
  },
};

export default config;
