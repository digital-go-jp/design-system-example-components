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
    sm: 'border-[calc(2/16*1rem)]',
    md: 'border-[calc(2/16*1rem)] before:origin-top-left before:scale-[calc(20/14)]',
    lg: 'border-[calc(3/16*1rem)] before:origin-top-left before:scale-[calc(27/14)]',
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
        className={`
          flex items-center justify-center shrink-0 rounded-[calc(1/8*100%)] ${checkboxWrapperSizeStyle[size]}
        has-[input:hover:not(:focus):not([aria-disabled="true"])]:bg-solid-gray-420 forced-colors:has-[input:hover:not(:focus):not([aria-disabled="true"])]:bg-[CanvasText]
        `}
      >
        <input
          className={`
            appearance-none size-3/4 rounded-[calc(2/18*100%)] bg-white
            focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300
            before:hidden before:size-3.5 before:bg-white before:[clip-path:path('M5.6,11.2L12.65,4.15L11.25,2.75L5.6,8.4L2.75,5.55L1.35,6.95L5.6,11.2Z')]
            checked:before:block
            ${checkboxSizeStyle[size]}
            ${
              !isError
                ? 'border-solid-gray-600 hover:border-black checked:border-blue-900 checked:bg-blue-900 checked:hover:border-blue-1100 checked:hover:bg-blue-1100'
                : 'border-error-1 hover:border-red-1000 checked:bg-error-1 checked:hover:bg-red-1000'
            }
            aria-disabled:!border-solid-gray-300 aria-disabled:!bg-solid-gray-50 aria-disabled:checked:!bg-solid-gray-300 aria-disabled:before:border-solid-gray-50
            forced-colors:checked:!bg-[CanvasText] forced-colors:before:!bg-[Canvas] forced-colors:aria-disabled:!border-[GrayText] forced-colors:aria-disabled:checked:!bg-[GrayText]
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
