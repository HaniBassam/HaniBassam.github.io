const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    purgecss({
      content: ["./src/**/*.html", "./src/**/*.js", "./public/**/*.html"], // Tilpas stier til dit projekt
    }),
  ],
};
