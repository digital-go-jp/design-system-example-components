import { type ComponentProps, forwardRef } from 'react';

export type SelectProps = ComponentProps<'select'> & {
  isError?: boolean;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { children, className, isError, ...rest } = props;

  return (
    <div className='relative min-w-80 max-w-full h-14'>
      <select
        className={`
          size-full appearance-none rounded-8 bg-white px-4 py-3 text-std-16N-7 text-solid-grey-900
          ${isError ? 'border-2 border-error-1' : 'border border-solid-grey-900'}
          focus:border-transparent focus:outline focus:outline-4 focus:outline-focus-yellow
          disabled:border-solid-grey-420 disabled:bg-solid-grey-50 disabled:text-solid-grey-600
          ${className ?? ''}
        `}
        ref={ref}
        {...rest}
      >
        {children}
      </select>
      <svg
        aria-hidden={true}
        className={`
          pointer-events-none absolute right-4 top-1/2 -translate-y-1/2
          ${rest.disabled ? 'text-solid-grey-600' : 'text-solid-grey-900'}
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
    </div>
  );
});
