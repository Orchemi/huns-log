import classnames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classnames.bind(styles);

const Header = () => {
  return <header className={cx('header-container')}>Header</header>;
};

export default Header;
