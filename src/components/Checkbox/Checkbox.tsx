import { type ComponentProps, forwardRef } from 'react';

export type CheckboxProps = ComponentProps<'input'> & {
  isError?: boolean;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
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
          appearance-none relative shrink-0 mt-0.5 w-[calc(17/16*1rem)] h-[calc(17/16*1rem)] border-[calc(1.5/16*1rem)] border-solid-grey-900 bg-white rounded-sm
          focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300
          before:hidden before:absolute before:top-[calc(3/16*1rem)] before:left-[calc(2.5/16*1rem)] before:w-[calc(9/16*1rem)] before:h-[calc(5.5/16*1rem)] before:border-b-[calc(1.5/16*1rem)] before:border-l-[calc(1.5/16*1rem)] before:border-white before:-rotate-45
          checked:bg-blue-900 checked:border-blue-900 checked:before:block
          ${isError && '!border-error-1 checked:bg-error-1'}
          aria-disabled:bg-solid-grey-50 aria-disabled:!border-solid-grey-300 aria-disabled:before:border-solid-grey-50 checked:aria-disabled:bg-solid-grey-300
        `}
        id={id}
        onClick={props['aria-disabled'] ? handleDisabled : onClick}
        ref={ref}
        type='checkbox'
        {...rest}
      />
      {children}
    </label>
  );
});
