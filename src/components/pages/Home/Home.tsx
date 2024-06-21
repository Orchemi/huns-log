import classnames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classnames.bind(styles);

const Dummy = () => {
  return (
    <div>
      {Array(30)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            style={{
              width: '100px',
              height: '100px',
              background: i % 2 ? 'black' : 'blue',
            }}
            className={cx('dummy')}
          />
        ))}
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
