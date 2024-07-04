import { type ComponentProps, forwardRef } from 'react';

export type TextareaProps = ComponentProps<'textarea'> & {
  isError?: boolean;
  rows?: number;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const { className, isError, rows, readOnly, ...rest } = props;

  return (
    <textarea
      className={`
        rounded-lg min-w-80 max-w-full border bg-white p-4 text-std-16N-7 text-solid-grey-800
        ${
          rows
            ? 'h-auto'
            : 'min-h-[calc(3lh+2rem+2px)] max-h-[calc(10lh+2rem+2px)] [field-sizing:content]'
        }
        ${isError ? 'border-error-1' : 'border-solid-grey-800'}
        focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300
        aria-disabled:border-solid-grey-300 aria-disabled:bg-solid-grey-50 aria-disabled:text-solid-grey-420 aria-disabled:pointer-events-none
        ${className ?? ''}
      `}
      readOnly={props['aria-disabled'] ? true : readOnly}
      ref={ref}
      rows={rows}
      {...rest}
    />
  );
});
