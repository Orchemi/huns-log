import classnames from 'classnames/bind';
import styles from './Sidebar.module.scss';
const cx = classnames.bind(styles);

const Sidebar = () => {
  return (
    <>
      <aside className={cx('sidebar-container')}></aside>
      <div className={cx('space')} />
    </>
  );
};

export default Sidebar;
