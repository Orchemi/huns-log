import classnames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classnames.bind(styles);

const Home = () => {
  return <div className={cx('container')}>Home</div>;
};

export default Home;
