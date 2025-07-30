import type { ComponentProps } from 'react';

export type HamburgerIconProps = ComponentProps<'svg'>;

export const HamburgerIcon = (props: HamburgerIconProps) => {
  const { className, ...rest } = props;
  return (
    <svg
      aria-hidden={true}
      className={className}
      height='24'
      viewBox='0 0 24 24'
      width='24'
      {...rest}
    >
      <path
        clipRule='evenodd'
        d='M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  );
};
