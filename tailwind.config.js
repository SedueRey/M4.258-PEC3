module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'logo-header': "url('/src/assets/images/theater-masks-logo.png')",
        'article-jumbotron': "url('/src/assets/images/pexels-cottonbro-6899918_bg.jpg')",
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif']
      },
      colors: {
        primary: '#d3b0d4',
        secondary: '#552e56',
        background: '#f4f4f4',
        dark: '#213233',
      }
    },
  },
  plugins: [],
  purge: ["./src/**/*.html"],
}
