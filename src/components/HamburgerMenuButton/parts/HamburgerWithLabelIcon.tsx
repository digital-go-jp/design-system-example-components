import type { ComponentProps } from 'react';

export type HamburgerWithLabelIconProps = ComponentProps<'svg'> & {
  isEnglish?: boolean;
};

export const HamburgerWithLabelIcon = (props: HamburgerWithLabelIconProps) => {
  const { className, isEnglish, ...rest } = props;
  return (
    <>
      {isEnglish ? (
        <svg
          aria-label={`${rest['aria-label'] ?? 'MENU'}`}
          className={className}
          fill='none'
          height='44'
          role='img'
          viewBox='0 0 44 44'
          width='44'
          {...rest}
        >
          <path
            d='M39 23v2H5v-2h34Zm0-6H5v-2h34v2Zm0-8H5V7h34v2ZM35.9 38.1c-2 0-3.4-1-3.4-3.5V30H34v4.7c0 1.8.8 2.3 1.9 2.3 1.1 0 2-.5 2-2.3V30h1.3v4.6c0 2.6-1.3 3.5-3.3 3.5ZM23.1 38v-8h1.5l4 6.4c-.2-2.1-.2-4.3-.2-6.4h1.3v8h-1.4l-4-6.4c.2 2.1.2 4.3.2 6.4H23ZM15.3 38v-8h5.3v1h-3.9v2.3H20v1h-3.3V37h4V38h-5.4ZM4.7 38v-8h1.6l2.3 5.7 2.2-5.7h1.7v8h-1.3l.1-6.4L9 37.2h-.9l-2.3-5.6c.2 2.1.2 4.2.2 6.4H4.7Z'
            fill='currentColor'
          />
        </svg>
      ) : (
        <svg
          aria-label={`${rest['aria-label'] ?? 'メニュー'}`}
          className={className}
          fill='none'
          height='44'
          role='img'
          viewBox='0 0 44 44'
          width='44'
          {...rest}
        >
          <path
            d='M39 23v2H5v-2h34Zm0-6H5v-2h34v2Zm0-8H5V7h34v2ZM31 33.2h8v1.5h-8v-1.5ZM29 33c-.4 1.2-.3 2.5-.5 3.7H30v1.2H23v-1.3H27l.4-2.7H24v-1.3c1.2 0 2.9.3 4.2 0l1 .5ZM14.5 31c2 .2 4.2.2 6.3 0v1.5h-6.3V31Zm-.8 4.9c2.5 0 5.3.2 8 0v1.5a85 85 0 0 0-8 0v-1.5ZM12.3 30.5c-.6 1.2-1 2.5-1.7 3.6.9.7 1.7 1.4 2.4 2.2l-1 1-2.2-2c-.9 1-2 2-3.7 3l-1.1-1c1.6-.8 2.8-1.8 3.7-3a27 27 0 0 0-2.6-1.8l.8-1a40 40 0 0 1 2.6 1.8c.7-1 1.2-2.2 1.4-3.3l1.4.5Z'
            fill='currentColor'
          />
        </svg>
      )}
    </>
  );
};
