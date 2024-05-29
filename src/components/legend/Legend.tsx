import type { ComponentProps } from 'react';

export type LegendProps = ComponentProps<'legend'> & {
  isDisabled?: boolean;
};

export const Legend = (props: LegendProps) => {
  const { children, className, isDisabled, ...rest } = props;

  return (
    <legend
      className={`
        flex w-fit items-center gap-2 text-dns-16B-2 text-solid-grey-900
        ${isDisabled ? 'text-solid-grey-600' : ''}
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </legend>
  );
};
