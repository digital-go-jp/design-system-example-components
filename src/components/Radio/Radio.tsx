import { type ComponentProps, forwardRef } from 'react';

export type RadioSize = 'sm' | 'md' | 'lg';

export type RadioProps = Omit<ComponentProps<'input'>, 'size'> & {
  size?: RadioSize;
  isError?: boolean;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { children, id, isError, onClick, size = 'sm', ...rest } = props;

  const handleDisabled = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
  };

  const containerSizeStyle: Record<RadioSize, string> = {
    sm: 'gap-1',
    md: 'gap-2',
    lg: 'gap-3',
  };

  const radioWrapperSizeStyle: Record<RadioSize, string> = {
    sm: 'size-6',
    md: 'size-8',
    lg: 'size-11',
  };

  const radioSizeStyle: Record<RadioSize, string> = {
    sm: 'border-[calc(2/16*1rem)]',
    md: 'border-[calc(2/16*1rem)]',
    lg: 'border-[calc(3/16*1rem)]',
  };

  const radioLabelSizeStyle: Record<RadioSize, string> = {
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
          flex items-center justify-center shrink-0 rounded-full ${radioWrapperSizeStyle[size]}
          has-[input:hover:not(:focus):not([aria-disabled="true"])]:bg-solid-gray-420 forced-colors:has-[input:hover:not(:focus):not([aria-disabled="true"])]:bg-[CanvasText]
        `}
      >
        <input
          className={`
            appearance-none size-[calc(5/6*100%)] rounded-full bg-white
            focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300
            before:hidden before:size-full before:bg-white before:[clip-path:circle(calc(5/16*100%))]
            checked:before:block
            ${radioSizeStyle[size]}
            ${
              !isError
                ? 'border-solid-gray-600 hover:border-black checked:border-blue-900 checked:before:bg-blue-900 checked:hover:border-blue-1100 checked:hover:before:bg-blue-1100'
                : 'border-error-1 hover:border-red-1000 checked:before:bg-error-1 checked:hover:before:bg-red-1000'
            }
            aria-disabled:!border-solid-gray-300 aria-disabled:!bg-solid-gray-50 aria-disabled:checked:before:!bg-solid-gray-300
            forced-colors:checked:before:!bg-[CanvasText] forced-colors:aria-disabled:!border-[GrayText] forced-colors:aria-disabled:checked:before:!bg-[GrayText]
          `}
          id={id}
          ref={ref}
          type='radio'
          onClick={props['aria-disabled'] ? handleDisabled : onClick}
          {...rest}
        />
      </span>
      {children && (
        <span className={`text-solid-gray-800 ${radioLabelSizeStyle[size]}`}>{children}</span>
      )}
    </label>
  );
});
