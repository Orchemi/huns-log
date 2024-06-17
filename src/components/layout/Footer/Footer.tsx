import classnames from 'classnames/bind';
import styles from './Footer.module.scss';
const cx = classnames.bind(styles);

const Footer = () => {
  return <footer className={cx('footer-container')}>footer</footer>;
};

export default Footer;
