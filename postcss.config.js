// module.exports = {
//   plugins: [
//     require('tailwindcss'),
//     require('autoprefixer'),
//     process.env.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
//       content: [
//         './src/**/*.vue',
//         './public/index.html',
//       ],
//       defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
//     })
//   ]
// }
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");
module.exports = {
    plugins: [
        require('postcss-import'),
        tailwindcss(),
        autoprefixer(),
        //Only add purgecss in production
        process.env.NODE_ENV === "production"? purgecss({
            content: [
                "./src/**/*.html", 
                "./src/**/*.vue"
            ]
        }): ""
    ]
};


