"use client";

import { serializeMdx } from "@/libs/mdx.lib";
import { IPost } from "@/types/blog/blog.type";
import { Optional } from "@/types/common.type";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useEffect, useState } from "react";

interface IProps {
  post: Optional<IPost>;
}

function PostMain({ post }: IProps) {
  const [mdx, setMdx] = useState<MDXRemoteSerializeResult | null>(null);
  useEffect(() => {
    const init = async () => {
      if (!post) return;
      const _mdx: MDXRemoteSerializeResult = await serializeMdx(post.content);
      setMdx(_mdx);
    };
    init();
  }, [post]);

  if (!mdx) return null;

  return (
    <div className={"prose dark:prose-dark"}>
      <MDXRemote {...mdx} components={{}} />
    </div>
  );
}

export default PostMain;
