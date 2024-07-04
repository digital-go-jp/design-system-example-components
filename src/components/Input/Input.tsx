import { type ComponentProps, forwardRef } from 'react';

export type InputBlockSize = 'lg' | 'md' | 'sm';

export const InputBlockSizeStyle: { [key in InputBlockSize]: string } = {
  // NOTE:
  // Tailwind CSS (v3.4.4) does not have any utility classes for logical properties of sizing.
  // Once it　is officially released, we will replace them with classes like `bs-14`.
  lg: 'h-14',
  md: 'h-12',
  sm: 'h-10',
};

export type InputProps = ComponentProps<'input'> & {
  isError?: boolean;
  blockSize?: InputBlockSize;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, readOnly, isError, blockSize = 'lg', ...rest } = props;

  return (
    <input
      className={`
        min-w-80 max-w-full rounded-lg border bg-white px-4 py-3 text-oln-16N-1 text-solid-grey-800
        ${InputBlockSizeStyle[blockSize]}
        ${isError ? 'border-error-1' : 'border-solid-grey-900'}
        focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300
        aria-disabled:border-solid-grey-300 aria-disabled:bg-solid-grey-50 aria-disabled:text-solid-grey-420 aria-disabled:pointer-events-none
        ${className ?? ''}
      `}
      readOnly={props['aria-disabled'] ? true : readOnly}
      ref={ref}
      {...rest}
    />
  );
});
