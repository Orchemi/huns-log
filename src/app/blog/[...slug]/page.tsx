import { allPosts } from "@/contentlayer/generated";
import PostMain from "@/components/blog/PostMain";
import notFound from "@/app/not-found";

export const dynamicParams = true;

export function generateStaticParams(): { slug: string[] }[] {
  const slugs: { slug: string[] }[] = allPosts.map((post) => {
    return {
      slug: post.slug.split("/").slice(1),
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
  return allPosts.find((post) => post.slug.includes(slug));
};

export default async function PostPage({ params }: IProps) {
  const { slug } = params;
  const joinedSlug = `${[...slug].join("/")}`;
  const post = await getPostBySlug(joinedSlug);

  if (!post) notFound();

  return <PostMain post={post} />;
}
