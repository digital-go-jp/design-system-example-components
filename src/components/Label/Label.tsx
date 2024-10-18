import type { ComponentProps } from 'react';

export type LabelSize = 'lg' | 'md' | 'sm';

export const labelSizeStyle: { [key in LabelSize]: string } = {
  lg: 'text-std-18B-160',
  md: 'text-std-17B-170',
  sm: 'text-std-16B-170',
};

export type LabelProps = ComponentProps<'label'> & {
  size?: LabelSize;
};

export const Label = (props: LabelProps) => {
  const { children, className, size = 'md', ...rest } = props;

  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: rest/spread prop has `htmlFor` attribute
    <label
      className={`
        flex w-fit items-center gap-2 text-solid-gray-800
        ${labelSizeStyle[size]}
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </label>
  );
};
