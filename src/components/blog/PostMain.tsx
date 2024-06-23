'use client';

import Divider from '@/components/@common/Divider/Divider';
import Giscus from '@/components/Giscus';
import { Post } from '@/contentlayer/generated';
import { Optional } from '@/types/common.type';
import classnames from 'classnames/bind';
import { useMDXComponent } from 'next-contentlayer/hooks';
import styles from './PostMain.module.scss';
const cx = classnames.bind(styles);

import { formatDate } from '@/utils/time.util';
import {
  ArchiveIcon,
  CalendarIcon,
  Pencil1Icon,
  StopwatchIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import './PostMain.scss';

interface Props {
  post: Optional<Post>;
}

function PostMain({ post }: Props) {
  const MDXComponent = useMDXComponent(post?.body?.code || '');
  if (!post) return null;

  const {
    title,
    excerpt,
    categories: _categories,
    tags: _tags,
    readingMinutes,
    date,
    last_modified_at: lastModifiedAt,
  } = post;

  const getCategories = (): string[] => {
    if (!_categories) return [''];
    if (typeof _categories === 'string') return [_categories];
    return _categories;
  };
  const categories = getCategories();

  const getTags = (): string[] => {
    if (!_tags) return [];
    const atom = _tags[0];
    if (typeof atom === 'string') return _tags as string[];
    // @ts-expect-error : 'atom' is a string[]
    return _tags[0] as string[];
  };
  const tags = getTags();

  return (
    <div>
      <h1 className={cx('title')}>{title}</h1>
      {excerpt && <p className={cx('description')}>{excerpt}</p>}
      <div className={cx('tag-group')}>
        {categories.map((category) => (
          <Link
            key={category}
            className={cx('item', 'category')}
            href={`/blog/category/${category}`}
          >
            <ArchiveIcon />
            {category}
          </Link>
        ))}
        {tags.map((tag) => (
          <Link
            key={tag}
            className={cx('item', 'tag')}
            href={`/blog/tag/${tag}`}
          >
            #{tag}
          </Link>
        ))}
      </div>
      <ul className={cx('time-group')}>
        <li className={cx('time-item')}>
          <StopwatchIcon className={cx('icon')} />
          평균 {readingMinutes}분 소요
        </li>
        <li className={cx('time-item')}>
          <CalendarIcon className={cx('icon')} />
          {formatDate(date, { decimal: true })} 작성
        </li>
        <li className={cx('time-item')}>
          <Pencil1Icon className={cx('icon')} />
          {formatDate(lastModifiedAt, { decimal: true })} 수정
        </li>
      </ul>
      <Divider space={'40px'} />
      <MDXComponent />
      <Divider space={'80px'} />
      <Giscus />
    </div>
  );
}

export default PostMain;
