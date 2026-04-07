import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary brand colors from logo
        burgundy:       '#76150C',
        'burgundy-dark':'#5A100A',
        'burgundy-light':'#8E2A1F',
        blush:          '#FCEEED',
        'blush-dark':   '#F5D8D6',
        // Text & accents
        'brand-dark':   '#3D1410',
        'brand-body':   '#4A2520',
        cream:          '#FFF8F7',
        sage:           '#8A9A7B',
        // Keep navy for dark sections
        navy:           '#3D1410',
        'off-white':    '#FDF5F4',
      },
      fontFamily: {
        sans:  ['"Commissioner"', ...defaultTheme.fontFamily.sans],
        serif: ['"Piazzolla"', ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        'display-xl': ['3rem',   { lineHeight: '1.2' }],
        'display-lg': ['2.5rem', { lineHeight: '1.2' }],
        'display':    ['2.125rem', { lineHeight: '1.2' }],
        'display-sm': ['1.75rem', { lineHeight: '1.3' }],
      },
      maxWidth: {
        'content': '72rem',
        'narrow':  '48rem',
      },
      borderRadius: {
        'pill': '100px',
      },
    },
  },
  plugins: [typography],
};
