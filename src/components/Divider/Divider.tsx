import type { ComponentProps } from 'react';

export type DividerColor = 'gray-420' | 'gray-536' | 'black';

export type DividerProps = ComponentProps<'hr'> & {
  color?: DividerColor;
};

export const Divider = (props: DividerProps) => {
  const { className, color = 'gray-420', ...rest } = props;

  return (
    <hr
      className={`
        data-[color=gray-420]:border-solid-gray-420 data-[color=gray-536]:border-solid-gray-536 data-[color=black]:border-black
        ${className ?? ''}
      `}
      data-color={color}
      {...rest}
    ></hr>
  );
};
