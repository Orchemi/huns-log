import React, { FC, PropsWithChildren } from 'react';

interface Props {
  style?: React.CSSProperties;
  width?: string | 'full';
  height?: string | 'full';
}

const Space: FC<PropsWithChildren<Props>> = ({
  children,
  style,
  width: _width = 'full',
  height: _height = 'full',
}) => {
  const width = _width === 'full' ? '100%' : _width;
  const height = _height === 'full' ? '100%' : _height;

  return (
    <div className={'space'} style={{ ...style, width, height }}>
      {children}
    </div>
  );
};

export default Space;
