import type { ComponentProps } from 'react';

export type LabelSize = 'lg' | 'md' | 'sm';

export const labelSizeStyle: { [key in LabelSize]: string } = {
  lg: 'text-std-18B-6',
  md: 'text-dns-17B-2',
  sm: 'text-dns-16B-2',
};

export type LabelProps = ComponentProps<'label'> & {
  size?: LabelSize;
};

export const Label = (props: LabelProps) => {
  const { children, className, size = 'md', ...rest } = props;

  return (
    <label
      className={`
        flex w-fit items-center gap-2 text-solid-grey-800
        ${labelSizeStyle[size]}
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </label>
  );
};
