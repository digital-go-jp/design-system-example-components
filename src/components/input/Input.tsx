import { type ComponentProps, forwardRef } from 'react';

export type InputProps = ComponentProps<'input'> & {
  isError?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, isError, ...rest } = props;

  return (
    <input
      className={`
        h-14 min-w-80 max-w-full rounded-8 bg-white px-4 py-3 text-std-16N-7 text-solid-grey-900
        ${isError ? 'border-2 border-error-1' : 'border border-solid-grey-900'}
        focus:border-transparent focus:outline focus:outline-4 focus:outline-focus-yellow
        disabled:border-solid-grey-420 disabled:bg-solid-grey-50
        ${className ?? ''}
      `}
      ref={ref}
      {...rest}
    />
  );
});
