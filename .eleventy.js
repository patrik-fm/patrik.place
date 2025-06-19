export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/css/")
    eleventyConfig.addWatchTarget("src/css/")
    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: 'site',
        },
        templateFormats: ['md', 'njk', 'html'],
        mardkdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    };
}