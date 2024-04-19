/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      'main-bg': 'var(--clr-bg-main)',
      keypad: 'var(--clr-bg-keypad)',
      'calc-screen': 'var(--clr-bg-screen)',
      'key-primary': 'var(--clr-key-primary)',
      'key-primary-sh': 'var(--clr-key-primary-shadow)',
      'key-secondary': 'var(--clr-key-secondary)',
      'key-secondary-sh': 'var(--clr-key-secondary-shadow)',
      'key-tertiary': 'var(--clr-key-tertiary)',
      'key-tertiary-sh': 'var(--clr-key-tertiary-shadow)',
      'dark-text': 'var(--clr-text-dark)',
      'light-text': 'var(--clr-text-light)',
      'primary-text': 'var(--clr-text-primary)',
    },
    extend: {
      theme: {
        fontFamily: ['League Spartan', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
