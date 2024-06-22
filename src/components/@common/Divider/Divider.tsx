import { COLORS } from '@/constants/color.constant';
import classnames from 'classnames/bind';
import styles from './Divider.module.scss';
const cx = classnames.bind(styles);

export interface DividerProps {
  width?: string | 'full';
  height?: string | 'full';
  color?: string;
  style?: React.CSSProperties;
}

const Divider = ({
  width: _width = 'full',
  height: _height = 'full',
  color = COLORS.gray300,
  style,
}: DividerProps) => {
  const width = _width === 'full' ? '100%' : _width;
  const height = _height === 'full' ? '100%' : _height;

  return (
    <hr
      className={cx('divider')}
      style={{ ...style, width, height, backgroundColor: color }}
    />
  );
};

export default Divider;
