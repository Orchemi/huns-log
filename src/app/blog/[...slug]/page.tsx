import { getAllPosts } from "@/libs/post.lib";
import PostMain from "@/components/blog/PostMain";

export const dynamicParams = true;

export function generateStaticParams(): { slug: string[] }[] {
  const posts = getAllPosts();
  const slugs: { slug: string[] }[] = posts.map((post) => ({
    slug: post.slug.replace("/", "").split("/"),
  }));
  return slugs;
}

interface IProps {
  params: {
    slug: string[];
  };
}

const getPostBySlug = async (slug: string) => {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
};

export default async function PostPage({ params }: IProps) {
  const { slug } = params;
  const joinedSlug = `/${[...slug].join("/")}`;
  const post = await getPostBySlug(joinedSlug);

  if (!post)
    return {
      notFound: true,
    };

  return <PostMain post={post} />;
}
