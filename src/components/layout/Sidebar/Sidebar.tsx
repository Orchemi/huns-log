import classnames from 'classnames/bind';
import styles from './Sidebar.module.scss';
const cx = classnames.bind(styles);

const Sidebar = () => {
  return <nav className={cx('sidebar-container')}></nav>;
};

export default Sidebar;
