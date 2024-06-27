import classnames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';
const cx = classnames.bind(styles);

const Header = () => {
  return (
    <header className={cx('header-container')}>
      <Link className={cx('logo')} href={'/'}>
        <Image
          src={'/assets/services/logo.svg'}
          alt={'logo'}
          width={100}
          height={60}
        />
      </Link>
    </header>
  );
};

export default Header;
