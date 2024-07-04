import type { ComponentProps } from 'react';

export type LegendSize = 'lg' | 'md' | 'sm';

export const legendSizeStyle: { [key in LegendSize]: string } = {
  lg: 'text-std-18B-6',
  md: 'text-dns-17B-2',
  sm: 'text-dns-16B-2',
};

export type LegendProps = ComponentProps<'legend'> & {
  size?: LegendSize;
};

export const Legend = (props: LegendProps) => {
  const { children, className, size = 'md', ...rest } = props;

  return (
    <legend
      className={`
        flex w-fit items-center gap-2 text-solid-grey-800
        ${legendSizeStyle[size]}
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </legend>
  );
};
