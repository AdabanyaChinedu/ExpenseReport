module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      "./static/**/*.vue",
      "./store/**/*.vue"
    ]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
