module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'tuition-care-base': '#011742',
        'tuition-care-base-light': '#0e59ed',
        'tuition-care-text-base-light': '#058af7',
      },
      backgroundImage: {
        'banner-img': "url('/src/images/banner.jpg')",
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
