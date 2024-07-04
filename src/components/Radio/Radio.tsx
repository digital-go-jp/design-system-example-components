import { type ComponentProps, forwardRef } from 'react';

export type RadioProps = ComponentProps<'input'> & {
  isError?: boolean;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { children, id, isError, onClick, ...rest } = props;

  const handleDisabled = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <label
      className='flex w-fit items-start gap-3 py-2 text-dns-16N-3 text-solid-grey-800'
      htmlFor={id}
    >
      <input
        className={`
          appearance-none relative shrink-0 mt-[calc(1/16*1rem)] w-[calc(19/16*1rem)] h-[calc(19/16*1rem)] border-[calc(1.5/16*1rem)] border-solid-grey-900 bg-white rounded-full
          before:w-[calc(9/16*1rem)] before:h-[calc(9/16*1rem)] before:hidden before:rounded-full before:absolute before:top-[calc(3.5/16*1rem)] before:left-[calc(3.5/16*1rem)]
          focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300
          checked:border-blue-900 checked:before:block checked:before:bg-blue-900
          ${isError && '!border-error-1 checked:border-error-1 checked:before:bg-error-1'}
          aria-disabled:bg-solid-grey-50 aria-disabled:border-solid-grey-300 aria-disabled:before:bg-solid-grey-420
        `}
        id={id}
        ref={ref}
        type='radio'
        onClick={props['aria-disabled'] ? handleDisabled : onClick}
        {...rest}
      />

      {children}
    </label>
  );
});
