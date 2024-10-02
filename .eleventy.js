module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/_assets/");
  eleventyConfig.addPassthroughCopy("src/_img/");
  eleventyConfig.addPassthroughCopy("src/_art/");
  eleventyConfig.addPassthroughCopy("src/_quicksand/");
  eleventyConfig.addPassthroughCopy("src/_con/");

  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};

