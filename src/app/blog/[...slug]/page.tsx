import { getAllPosts } from "@/libs/post.lib";
import PostMain from "@/components/blog/PostMain";
import notFound from "@/app/not-found";

export const dynamicParams = true;

export function generateStaticParams(): { slug: string[] }[] {
  const posts = getAllPosts();
  const slugs: { slug: string[] }[] = posts.map((post) => {
    return {
      slug: post.slug.split("\\"),
    };
  });
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
  const joinedSlug = `${[...slug].join("\\")}`;
  const post = await getPostBySlug(joinedSlug);

  if (!post) notFound();

  return <PostMain post={post} />;
}
