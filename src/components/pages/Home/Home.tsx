import classnames from 'classnames/bind';
import Link from 'next/link';
import styles from './Home.module.scss';
const cx = classnames.bind(styles);

const Dummy = () => {
  const BLOG_POST_ROUTES = {
    DEV: {
      TROUBLE_SHOOTING: '/blog/dev/trouble-shooting',
    },
  };
  return (
    <div>
      <ul>
        <li>
          <Link
            href={`${BLOG_POST_ROUTES.DEV.TROUBLE_SHOOTING}/next-api-route-file-name`}
          >
            [Next.js] 쓸데없이 error.ts로 파일 만들지 마라
          </Link>
        </li>
        <li>
          <Link
            href={`${BLOG_POST_ROUTES.DEV.TROUBLE_SHOOTING}/eslint-curly-brace`}
          >
            [VSCode/ESLint] VSCode tsx 컴포넌트 props 자동완성시 중괄호 생성하기
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Home = () => {
  return (
    <div className={cx('container')}>
      <Dummy />
      {/* Home */}
    </div>
  );
};

export default Home;
