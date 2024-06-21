import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import Sidebar from '@/components/layout/Sidebar/Sidebar';
import classnames from 'classnames/bind';
import { FC, PropsWithChildren } from 'react';
import styles from './GlobalLayout.module.scss';
const cx = classnames.bind(styles);

interface Props {
  showHeader?: boolean;
  showSidebar?: boolean;
  showFooter?: boolean;
  contentContainerStyle?: React.CSSProperties;
}

const GlobalLayout: FC<PropsWithChildren<Props>> = ({
  children,
  showHeader = true,
  showSidebar = true,
  showFooter = true,
  contentContainerStyle,
}) => {
  return (
    <div className={cx('global-layout')}>
      {showHeader && <Header />}
      <section className={cx('body-container')}>
        {showSidebar && <Sidebar />}
        <div className={cx('main-container')}>
          <main
            className={cx('content-container')}
            style={contentContainerStyle}
          >
            {children}
          </main>
          {showFooter && <Footer />}
        </div>
      </section>
    </div>
  );
};

export default GlobalLayout;
