import { type ComponentProps, forwardRef } from 'react';

export type LanguageSelectorButtonProps = ComponentProps<'button'>;

export const LanguageSelectorButton = forwardRef<HTMLButtonElement, LanguageSelectorButtonProps>(
  (props, ref) => {
    const { children, className, ...rest } = props;

    return (
      <button
        className={`
          flex w-fit gap-1 items-center px-2 min-h-[calc(44/16*1rem)] border border-transparent text-oln-16N-1 text-solid-grey-800 rounded-lg
          hover:bg-solid-grey-50 hover:underline hover:underline-offset-[calc(3/16*1rem)]
          focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 focus-visible:bg-yellow-300
          ${className ?? ''}
        `}
        ref={ref}
        type='button'
        {...rest}
      >
        {children}
      </button>
    );
  },
);
