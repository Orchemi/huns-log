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
}

const GlobalLayout: FC<PropsWithChildren<Props>> = ({
  children,
  showHeader = true,
  showSidebar = true,
  showFooter = true,
}) => {
  return (
    <div className={cx('global-layout')}>
      {showHeader && <Header />}
      <section className={cx('body-container')}>
        {showSidebar && <Sidebar />}
        <main className={cx('main-container')}>{children}</main>
      </section>

      {showFooter && <Footer />}
    </div>
  );
};

export default GlobalLayout;
