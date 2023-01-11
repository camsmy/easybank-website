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
        'hero-pattern-mobile': "url('./assets/bg-intro-mobile.svg')",
      },
      colors:{
        'primary-dark-blue':'hsl(233, 26%, 24%)',
        'primary-lime-green':'hsl(136, 65%, 51%)',
        'primary-bright-cyan':'hsl(192, 70%, 51%)',
        'neutral-grayish-blue': 'hsl(233, 8%, 62%)',
        'neutral-light-greyish-blue':'hsl(220, 16%, 96%)',
        'neutral-very-light-gray':'hsl(0, 0%, 98%)',
        'white':'hsl(0, 0%, 100%)',
        "grayish-blue":'hsl(233, 8%, 79%)',
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

// <div className='pl-20 flex-1 bg-hero-pattern-mobile md:bg-hero-pattern bg-left bg-no-repeat'>
{/* <img src={phoneHeader} alt="phone header" className=' 
absolute  inset-y-7 z-50
lg:w-5/12 lg:inset-y-1.5 lg:inset-x-2/3' />
</div> */}

//                 <img src={phoneHeader} alt="phone header" className='absolute w-5/12 inset-y-1.5 inset-x-2/3 hidden md:block' />
