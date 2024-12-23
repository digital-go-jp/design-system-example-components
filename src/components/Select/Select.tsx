import { type ComponentProps, forwardRef } from 'react';

export type SelectBlockSize = 'lg' | 'md' | 'sm';

export const SelectBlockSizeStyle: { [key in SelectBlockSize]: string } = {
  // NOTE:
  // Tailwind CSS (v3.4.4) does not have any utility classes for logical properties of sizing.
  // Once it　is officially released, we will replace them with classes like `bs-14`.
  lg: 'h-14',
  md: 'h-12',
  sm: 'h-10',
};

export type SelectProps = ComponentProps<'select'> & {
  isError?: boolean;
  blockSize?: SelectBlockSize;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { children, className, isError, blockSize = 'lg', onKeyDown, onMouseDown, ...rest } = props;

  const handleDisabledKeyDown = (e: React.KeyboardEvent<HTMLSelectElement>) => {
    if (e.code !== 'Tab') {
      e.preventDefault();
    }
  };

  const handleDisabledMouseDown = (e: React.MouseEvent<HTMLSelectElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <span className='relative'>
      <select
        className={`
          w-full appearance-none border rounded-8 bg-white pl-4 pr-10 py-[calc(11/16*1rem)] text-oln-16N-100 text-solid-gray-800
           ${SelectBlockSizeStyle[blockSize]}
          ${isError ? 'border-error-1' : 'border-solid-gray-900'}
          focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300
          aria-disabled:border-solid-gray-300 aria-disabled:bg-solid-gray-50 aria-disabled:text-solid-gray-420 aria-disabled:pointer-events-none aria-disabled:forced-colors:text-[GrayText] aria-disabled:forced-colors:border-[GrayText]
          ${className ?? ''}
        `}
        onMouseDown={props['aria-disabled'] ? handleDisabledMouseDown : onMouseDown}
        onKeyDown={props['aria-disabled'] ? handleDisabledKeyDown : onKeyDown}
        ref={ref}
        {...rest}
      >
        {children}
      </select>
      <svg
        aria-hidden={true}
        className={`
          pointer-events-none absolute right-4 top-1/2 -translate-y-1/2
          ${props['aria-disabled'] ? 'text-solid-gray-420 forced-colors:text-[GrayText]' : 'text-solid-gray-900 forced-colors:text-[CanvasText]'}
        `}
        fill='none'
        height='16'
        viewBox='0 0 16 16'
        width='16'
      >
        <path
          d='M13.3344 4.40002L8.00104 9.73336L2.66771 4.40002L1.73438 5.33336L8.00104 11.6L14.2677 5.33336L13.3344 4.40002Z'
          fill='currentColor'
        />
      </svg>
    </span>
  );
});
