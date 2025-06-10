module.exports = {
  plugins: [
    require("autoprefixer"), // For prefixer script
    require("cssnano")({ preset: "default" }), // For minifying script
  ],
};
