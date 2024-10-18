import { type ComponentProps, forwardRef } from 'react';

export type LanguageSelectorMenuItemProps = ComponentProps<'a'> & {
  isCurrent?: boolean;
  isCondensed?: boolean;
};

export const LanguageSelectorMenuItem = forwardRef<
  HTMLAnchorElement,
  LanguageSelectorMenuItemProps
>((props, ref) => {
  const { children, className, isCurrent, isCondensed, ...rest } = props;

  return (
    <li>
      <a
        aria-current={isCurrent}
        className={`
          flex relative items-center bg-white text-nowrap text-oln-16N-100 text-solid-gray-800
          ${isCondensed ? 'py-1.5 pl-1.5 pr-4 gap-x-1.5' : 'py-3 pl-3 pr-6 gap-x-2'}
          ${isCurrent ? '!text-blue-1000 !bg-blue-100 font-bold' : ''}
          hover:underline hover:underline-offset-[calc(3/16*1rem)] hover:bg-solid-gray-50
          focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:-outline-offset-4 focus-visible:bg-yellow-300 focus-visible:ring-[calc(6/16*1rem)] focus-visible:ring-inset focus-visible:ring-yellow-300
          ${className ?? ''}
        `}
        ref={ref}
        {...rest}
      >
        <svg
          aria-hidden={true}
          className={`flex-none ${!isCurrent && 'invisible'}`}
          fill='none'
          height='20'
          viewBox='0 0 20 20'
          width='20'
        >
          <g>
            <path
              d='M7.95917 14.7115L3.51367 10.266L4.40469 9.37502L7.95917 12.9295L15.597 5.29169L16.488 6.18269L7.95917 14.7115Z'
              fill='currentColor'
            />
          </g>
        </svg>
        {children}
      </a>
    </li>
  );
});
