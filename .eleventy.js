export default function(eleventyConfig) {
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