'use client';

import Divider from '@/components/@common/Divider/Divider';
import Giscus from '@/components/Giscus';
import { Post } from '@/contentlayer/generated';
import { Optional } from '@/types/common.type';
import { useMDXComponent } from 'next-contentlayer/hooks';
import './PostMain.scss';

interface Props {
  post: Optional<Post>;
}

function PostMain({ post }: Props) {
  const MDXComponent = useMDXComponent(post?.body?.code || '');
  if (!post) return null;

  return (
    <div className={'prose dark:prose-dark'}>
      <h2 className={'title'}>{post.title}</h2>
      <p className={'description'}>{post.excerpt}</p>
      <div className={'categories'}>카테고리: {post.categories}</div>
      <div className={'tags'}>태그: {post.tags}</div>
      <div className={'read-time'}>
        읽는 데 걸리는 시간: {post.readingMinutes}
      </div>
      <div className={'create-date'}>생성일시: {post.date}</div>
      <div className={'modified-date'}>수정일시: {post.last_modified_at}</div>
      <hr />
      <MDXComponent />
      <Divider height={'1px'} style={{ marginBlock: '80px' }} />
      <Giscus />
    </div>
  );
}

export default PostMain;
