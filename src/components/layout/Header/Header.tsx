import classnames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classnames.bind(styles);

const Header = () => {
  return (
    <>
      <header className={cx('header-container')}></header>
      <div className={cx('space')} />
    </>
  );
};

export default Header;
