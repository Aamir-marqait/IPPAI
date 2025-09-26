import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        'red-hat-display': ['Red Hat Display', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'briem-hand': ['Briem Hand', 'cursive'],
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
        'georgia': ['Georgia', 'serif'],
      },
      maxWidth: {
        '50rem': '50rem',
      },
    },
  },
  plugins: [],
}

export default config