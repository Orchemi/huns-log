import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeHighlight from 'rehype-highlight';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`, // mdx 파일경로 패턴
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    excerpt: {
      type: 'string',
    },
    categories: {
      type: 'list',
      of: {
        type: 'string',
      },
      required: true,
    },
    tags: {
      type: 'list',
      of: {
        type: 'string',
      },
      required: true,
    },
    thumbnail: {
      type: 'string',
      required: false,
    },
    date: {
      type: 'date',
      required: true,
    },
    last_modified_at: {
      type: 'date',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    readingMinutes: {
      type: 'string',
      resolve: (post) => Math.ceil(readingTime(post.body.raw).minutes),
    },
    wordCount: {
      type: 'number',
      resolve: (post) => post.body.raw.split(/\s+/gu).length,
    },
  },
}));

const contentSource = makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkToc],
    rehypePlugins: [
      [
        rehypePrism,
        rehypeSlug,
        rehypeHighlight,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: 'anchor',
              ariaLabel: 'anchor',
            },
          },
        ],
        [
          rehypeExternalLinks,
          {
            target: '_blank',
            rel: ['noopener noreferrer'],
          },
        ],
        {
          theme: 'github-dark',
        },
      ],
    ],
  },
});

export default contentSource;
