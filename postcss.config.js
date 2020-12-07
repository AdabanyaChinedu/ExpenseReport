// module.exports = {
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
            ],
            whitelist: ['body'],
             // This is the function used to extract class names from your templates
            defaultExtractor: content => {
                // Capture as liberally as possible, including things like `h-(screen-1.5)`
                const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

                // Capture classes within other delimiters like .block(class="w-1/2") in Pug
                const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

                return broadMatches.concat(innerMatches)
            }
        }): ""
    ]
};


