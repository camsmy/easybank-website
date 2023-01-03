// @type {import('tailwindcss').Config}
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/bg-intro-desktop.svg')",
      },
      colors:{
        'primary-dark-blue':'hsl(233, 26%, 24%)',
        'primary-lime-green':'hsl(136, 65%, 51%)',
        'primary-bright-cyan':'hsl(192, 70%, 51%)',
        'neutral-grayish-blue': 'hsl(233, 8%, 62%)',
        'neutral-light-greyish-blue':'hsl(220, 16%, 96%)',
        'neutral-very-light-gray':'hsl(0, 0%, 98%)',
        'white':'hsl(0, 0%, 100%)',
      },
      fontFamily:{
        'Josefin':['Josefin Sans', 'sans-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

// ## Colors

// ### Primary

// - Dark Blue: hsl(233, 26%, 24%)
// - Lime Green: hsl(136, 65%, 51%)
// - Bright Cyan: hsl(192, 70%, 51%)

// ### Neutral

// - Grayish Blue: hsl(233, 8%, 62%)
// - Light Grayish Blue: hsl(220, 16%, 96%)
// - Very Light Gray: hsl(0, 0%, 98%)
// - White: hsl(0, 0%, 100%)

// ###FONT

// - 300 400 700