import classnames from 'classnames/bind';
import Link from 'next/link';
import styles from './Home.module.scss';
const cx = classnames.bind(styles);

const DummyLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link href={href}>{children}</Link>
  </li>
);

const Dummy = () => {
  const BLOG_POST_ROUTES = {
    DEV: {
      TROUBLE_SHOOTING: '/blog/dev/trouble-shooting',
    },
    BACKEND: {
      FRAMEWORK: {
        DJANGO: '/blog/backend/framework/django',
      },
    },
  };
  return (
    <div>
      <ul>
        <DummyLink href={`${BLOG_POST_ROUTES.BACKEND.FRAMEWORK.DJANGO}/8`}>
          django 8
        </DummyLink>
        <DummyLink href={`${BLOG_POST_ROUTES.BACKEND.FRAMEWORK.DJANGO}/9`}>
          django 9
        </DummyLink>
        <DummyLink
          href={`${BLOG_POST_ROUTES.DEV.TROUBLE_SHOOTING}/eslint-curly-brace`}
        >
          [Next.js] 쓸데없이 error.ts로 파일 만들지 마라
        </DummyLink>
        <DummyLink
          href={`${BLOG_POST_ROUTES.DEV.TROUBLE_SHOOTING}/git-https-is-not-supported-error`}
        >
          {"[Git] protocol 'https' is not supported 에러"}
        </DummyLink>
        <DummyLink
          href={`${BLOG_POST_ROUTES.DEV.TROUBLE_SHOOTING}/husky-setting-for-mac`}
        >
          [Husky] Mac OS에서 husky가 안 먹힐 때
        </DummyLink>
        <DummyLink
          href={`${BLOG_POST_ROUTES.DEV.TROUBLE_SHOOTING}/next-api-route-file-name`}
        >
          [Next.js] 쓸데없이 error.ts로 파일 만들지 마라
        </DummyLink>
        <DummyLink
          href={`${BLOG_POST_ROUTES.DEV.TROUBLE_SHOOTING}/yarn-lint-error`}
        >
          [ESLint] yarn lint 명령어 오류 해결
        </DummyLink>
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
