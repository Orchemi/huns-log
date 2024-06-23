import { COLORS } from '@/constants/color.constant';
import classnames from 'classnames/bind';
import styles from './Divider.module.scss';
const cx = classnames.bind(styles);

export interface DividerProps {
  width?: string | 'full';
  height?: string | 'full';
  space?: string;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}

const Divider = ({
  width: _width = 'full',
  height: _height = '1px',
  space = '30px',
  color = COLORS.gray300,
  style,
  className,
}: DividerProps) => {
  const width = _width === 'full' ? '100%' : _width;
  const height = _height === 'full' ? '100%' : _height;

  return (
    <hr
      className={cx('divider', className)}
      style={{
        marginBlock: style?.marginBlock ?? space,
        width,
        height,
        backgroundColor: color,
        ...style,
      }}
    />
  );
};

export default Divider;
