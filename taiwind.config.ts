/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',        // optional if you still have files outside src
    './components/**/*.{ts,tsx}', // optional if you still have files outside src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        display: 'var(--font-display)',
        serif: ['"Times New Roman"', 'Times', 'serif'],
      },
      colors: {
        primary: 'var(--primary)',
      },
    },
  },
  plugins: [],
}
