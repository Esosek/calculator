/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      'main-bg': 'var(--clr-bg-main)',
      keypad: 'var(--clr-bg-keypad)',
      'calc-screen': 'var(--clr-bg-screen)',
      'key-primary': 'var(--clr-key-primary)',
      'key-primary-hover': 'var(--clr-key-primary-hover)',
      'key-primary-text': 'var(--clr-key-primary-text)',
      'key-primary-sh': 'var(--clr-key-primary-shadow)',
      'key-secondary': 'var(--clr-key-secondary)',
      'key-secondary-hover': 'var(--clr-key-secondary-hover)',
      'key-secondary-text': 'var(--clr-key-secondary-text)',
      'key-secondary-sh': 'var(--clr-key-secondary-shadow)',
      'key-basic': 'var(--clr-key-basic)',
      'key-basic-hover': 'var(--clr-key-basic-hover)',
      'key-basic-text': 'var(--clr-key-basic-text)',
      'key-basic-sh': 'var(--clr-key-basic-shadow)',
      'text-primary': 'var(--clr-text-primary)',
      'text-secondary': 'var(--clr-text-secondary)',
      'text-tertiary': 'var(--clr-text-tertiary)',
    },
    fontSize: {
      sm: '0.75rem',
      base: '2rem',
    },
    extend: {
      theme: {},
    },
  },
  plugins: [],
};
