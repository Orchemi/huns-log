import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts } from "@/libs/post.lib";
import { serializeMdx } from "@/libs/mdx.lib";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => post.slug),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slugs } = params as { slugs: string[] };

  const slug = `/posts/${[...slugs].join("/")}`;
  const post = getAllPosts().find((post) => post.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const mdx = await serializeMdx(post.content);

  return {
    props: {
      mdx,
      slug,
    },
  };
};

export default function PostPage({ mdx }: { mdx: MDXRemoteSerializeResult }) {
  return (
    <div className={"prose dark:prose-dark"}>
      <MDXRemote {...mdx} />
    </div>
  );
}
