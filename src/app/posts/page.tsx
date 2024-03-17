import { getAllPosts } from "@/libs/post.lib";
import { IPost } from "@/types/blog/blog.type";

export const getStaticProps = () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};

interface IProps {
  posts: IPost[];
}

export default function PostsPage({ posts }: IProps) {
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>{post.slug}</li>
      ))}
    </ul>
  );
}
