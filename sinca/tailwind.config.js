module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-inter), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {
      screens: {
        'custom-lg' : '1385px'
      },
      maxHeight: {
        '128' : '32rem',
        '144' : '36rem',
      },
      colors: {
        'brand': {
          superlight: '#fffff8',
          lighter: '#fffaeb',
          light: '#fff8e0',
          DEFAULT: '#fff8e0',
          darklight: '#61728b',
          dark: '#303f55',
          darker: '#0f132a',
          brown: '#a86848'
        },
      }
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
