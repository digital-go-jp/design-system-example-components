import { type ComponentProps, forwardRef } from 'react';

export type LanguageSelectorMenuProps = ComponentProps<'ul'> & {
  isCondensed?: boolean;
};

export const LanguageSelectorMenu = forwardRef<HTMLUListElement, LanguageSelectorMenuProps>(
  (props, ref) => {
    const { children, className, isCondensed, ...rest } = props;

    return (
      <ul
        className={`
        min-w-fit w-auto py-2 border border-solid-gray-420 bg-white shadow-1 rounded-lg
        has-[>:nth-child(7)]:rounded-r-none
        ${isCondensed ? 'max-h-[calc((32*6.5+16)/16*1rem)]' : 'max-h-[calc((44*6.5+16)/16*1rem)]'}
        ${className ?? ''}
      `}
        ref={ref}
        {...rest}
      >
        {children}
      </ul>
    );
  },
);
