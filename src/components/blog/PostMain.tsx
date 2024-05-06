"use client";

import Giscus from "@/components/Giscus";
import { useMDXComponent } from "next-contentlayer/hooks";
import { InferGetStaticPropsType } from "next";

function PostMain({ post }: InferGetStaticPropsType<any>) {
  const MDXComponent = useMDXComponent(post?.body?.code || "");

  return (
    <div className={"prose dark:prose-dark"}>
      {/* <div>
        {Object.entries(post).map(([key, value]) => (
          <div key={key}>
            {JSON.stringify(key)}: {JSON.stringify(value)}
          </div>
        ))}
      </div> */}
      <MDXComponent />
      <Giscus />
    </div>
  );
}

export default PostMain;
