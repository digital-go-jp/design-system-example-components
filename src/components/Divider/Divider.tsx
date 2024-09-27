import type { ComponentProps } from 'react';

export type DividerColor = 'gray-420' | 'gray-536' | 'black';

export const DividerColorStyle: { [key in DividerColor]: string } = {
  'gray-420': 'border-solid-gray-420',
  'gray-536': 'border-solid-gray-536',
  black: 'border-black',
};

export type DividerProps = ComponentProps<'hr'> & {
  color?: DividerColor;
};

export const Divider = (props: DividerProps) => {
  const { className, color = 'gray-420', ...rest } = props;

  return <hr className={`${DividerColorStyle[color]} ${className ?? ''}`} {...rest}></hr>;
};
