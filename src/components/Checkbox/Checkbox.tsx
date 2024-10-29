import { type ComponentProps, forwardRef } from 'react';

export type CheckboxSize = 'sm' | 'md' | 'lg';

export type CheckboxProps = Omit<ComponentProps<'input'>, 'size'> & {
  size?: CheckboxSize;
  isError?: boolean;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { children, id, isError, onClick, size = 'sm', ...rest } = props;

  const handleDisabled = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
  };

  const containerSizeStyle: Record<CheckboxSize, string> = {
    sm: 'gap-1',
    md: 'gap-2',
    lg: 'gap-2',
  };

  const checkboxWrapperSizeStyle: Record<CheckboxSize, string> = {
    sm: 'size-6',
    md: 'size-8',
    lg: 'size-11',
  };

  const checkboxSizeStyle: Record<CheckboxSize, string> = {
    sm: 'border-[calc(1.5/16*1rem)] before:border-b-[calc(1.5/16*1rem)] before:border-l-[calc(1.5/16*1rem)]',
    md: 'border-[calc(2/16*1rem)] before:border-b-[calc(2/16*1rem)] before:border-l-[calc(2/16*1rem)]',
    lg: 'border-[calc(2.75/16*1rem)] before:border-b-[calc(2.75/16*1rem)] before:border-l-[calc(2.75/16*1rem)]',
  };

  const checkboxLabelSizeStyle: Record<CheckboxSize, string> = {
    sm: 'pt-px text-dns-16N-130',
    md: 'pt-1 text-dns-16N-130',
    lg: 'pt-2.5 text-dns-17N-130',
  };

  return (
    <label
      className={`flex w-fit items-start ${containerSizeStyle[size]} ${children ? 'py-2' : ''}`}
      htmlFor={id}
    >
      <span
        className={`flex items-center justify-center shrink-0 ${checkboxWrapperSizeStyle[size]}`}
      >
        <input
          className={`
            appearance-none relative size-3/4 rounded-[8.33%] bg-white
            focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300
            before:hidden before:absolute before:top-[22%] before:left-[18%] before:w-[calc(9.5/15*100%)] before:h-[calc(5.5/15*100%)] before:border-white before:-rotate-45
            checked:before:block
            ${checkboxSizeStyle[size]}
            ${
              !isError
                ? 'border-solid-gray-600 hover:border-black checked:border-blue-900 checked:bg-blue-900 checked:hover:border-blue-1100 checked:hover:bg-blue-1100'
                : 'border-error-1 hover:border-red-1000 checked:bg-error-1 checked:hover:bg-red-1000'
            }
            aria-disabled:!border-solid-gray-300 aria-disabled:!bg-solid-gray-50 aria-disabled:checked:!bg-solid-gray-300 aria-disabled:before:border-solid-gray-50
            forced-colors:checked:!bg-[CanvasText] forced-colors:before:!border-[Canvas] forced-colors:aria-disabled:!border-[GrayText] forced-colors:aria-disabled:checked:!bg-[GrayText]
          `}
          id={id}
          onClick={props['aria-disabled'] ? handleDisabled : onClick}
          ref={ref}
          type='checkbox'
          {...rest}
        />
      </span>
      {children && (
        <span className={`text-solid-gray-800 ${checkboxLabelSizeStyle[size]}`}>{children}</span>
      )}
    </label>
  );
});
