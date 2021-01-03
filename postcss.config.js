// module.exports = {
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");
module.exports = {
    plugins: [
        require('postcss-import'),
        tailwindcss(),
        autoprefixer()
    ]
};


