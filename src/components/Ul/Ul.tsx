import type { ComponentProps } from 'react';

export const ulStyle = 'pl-8 list-[revert]';

export type UlProps = ComponentProps<'ul'>;

export const Ul = (props: UlProps) => {
  const { children, className, ...rest } = props;

  return (
    <ul className={`${ulStyle} ${className ?? ''}`} {...rest}>
      {children}
    </ul>
  );
};
