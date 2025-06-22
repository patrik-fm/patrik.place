/* ADDS NAVIGATION PLUGIN */
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function(eleventyConfig) {

    /* NAVIGATION PLUGIN*/
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    /* IMAGE PLUGIN */
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);

    /* PASSES ASSET FILES TO OUTPUT DIRECTORY */
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/css/");
    eleventyConfig.addPassthroughCopy("src/assets/images/");
    
    /* WATCHES CHANGES IN CSS AT ALL TIMES */
    eleventyConfig.addWatchTarget("src/css/");
    eleventyConfig.addWatchTarget("src/assests/images/");

    /* MAKES COLLECTION OF POSTS */
    eleventyConfig.addCollection('posts', function(collectionApi) {
        return collectionApi.getFilteredByGlob('src/blog/posts/**/*.md')
    })

    /* MAKES COLLECTION OF BOOKS */
    eleventyConfig.addCollection('books', function(collectionApi) {
        return collectionApi.getFilteredByGlob('src/bookshelf/books/**/*.md')
    })

    /* DATE FORMAT IN BLOG POSTS */
	eleventyConfig.addFilter('blogDate', blogDate)

	function blogDate(input) {
  		return `${new Date(input).toLocaleString("en-US", {
    		year: "numeric",
    		month: "long",
  		})}`;
	}

    /*TAGS*/
      eleventyConfig.addCollection("tagList", collections => {
        const tags = collections
            .getAll()
            .reduce((tags, item) => tags.concat(item.data.tags), [])
            .filter(tag => !!tag && !["posts", "all"].includes(tag))
            .sort()
        return Array.from(new Set(tags)).map(tag => ({
            title: tag,
            count: collections.getFilteredByTag(tag).length,
        }))
    })

    /* REWRITES ELEVENTY DEFAULT CONFIG */
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