import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";
import remarkGfm from "remark-gfm";
import { MDXRemoteSerializeResult } from "next-mdx-remote/rsc";
import { ENV, ENV_TYPE } from "@/constants/env.constant";

export const serializeMdx = async (
  source: string
): Promise<MDXRemoteSerializeResult> => {
  return await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      development: ENV_TYPE === ENV.DV,
      remarkPlugins: [remarkToc, remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
      format: "mdx",
    },
  });
};
