import type { ComponentProps } from 'react';

export type DividerColor = 'grey-420' | 'grey-536' | 'black';

export const DividerColorStyle: { [key in DividerColor]: string } = {
  'grey-420': 'border-solid-grey-420',
  'grey-536': 'border-solid-grey-536',
  black: 'border-black',
};

export type DividerProps = ComponentProps<'hr'> & {
  color?: DividerColor;
};

export const Divider = (props: DividerProps) => {
  const { className, color = 'grey-420', ...rest } = props;

  return <hr className={`${DividerColorStyle[color]} ${className ?? ''}`} {...rest}></hr>;
};
