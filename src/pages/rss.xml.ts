import rss from '@astrojs/rss';

const postImportResult = import.meta.glob('/posts/**/*.mdx', { eager: true });
const posts = Object.values(postImportResult);

export const get = () => rss({
  title: 'Astro Basic Blog Template',
  description: 'Made by Lance Ross (lancerossdev)',
  site: import.meta.env.SITE,
  items: posts.map((post) => ({
    link: post.url,
    title: post.frontmatter.title,
    pubDate: post.frontmatter.pubDate,
  }))
});

// It doesn't work I don't know why 😭