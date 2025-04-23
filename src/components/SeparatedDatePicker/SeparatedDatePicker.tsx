import type { ComponentProps } from 'react';

export type SeparatedDatePickerSize = 'lg' | 'md' | 'sm';

export type SeparatedDatePickerProps = ComponentProps<'div'> & {
  size?: SeparatedDatePickerSize;
};

export const SeparatedDatePicker = (props: SeparatedDatePickerProps) => {
  const { className, size = 'lg', children, ...rest } = props;

  return (
    <div className='pt-3 inline-block'>
      <div
        className={`flex h-14 gap-x-4 text-solid-gray-900 data-[size=md]:h-12 data-[size=sm]:h-10 ${className ?? ''}`}
        data-size={size}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
};
