// import { getAllPosts } from "@/libs/post.lib";
import { allPosts } from "@/contentlayer/generated";
import PostMain from "@/components/blog/PostMain";
import notFound from "@/app/not-found";

export const dynamicParams = true;

export function generateStaticParams(): { slug: string[] }[] {
  const slugs: { slug: string[] }[] = allPosts.map((post) => {
    return {
      slug: post.slug.split("\\"),
    };
  });
  console.log("8888888888888888888888888888888");
  console.log(slugs);

  return slugs;
}

interface IProps {
  params: {
    slug: string[];
  };
}

const getPostBySlug = async (slug: string) => {
  return allPosts.find((post) => post.slug === slug);
};

export default async function PostPage({ params }: IProps) {
  const { slug } = params;
  console.log("slug222222222", slug);
  const joinedSlug = `${decodeURIComponent([...slug].join("\\"))}`;
  console.log("joinedSlug", joinedSlug);
  const post = await getPostBySlug(joinedSlug);

  if (!post) notFound();

  return <PostMain post={post} />;
}
