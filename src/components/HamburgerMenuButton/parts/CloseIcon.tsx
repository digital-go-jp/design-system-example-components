import type { ComponentProps } from 'react';

export type CloseIconProps = ComponentProps<'svg'>;

export const CloseIcon = (props: CloseIconProps) => {
  const { className, ...rest } = props;
  return (
    <svg
      aria-hidden={true}
      className={className}
      fill='none'
      height='24'
      viewBox='0 0 120 120'
      width='24'
      {...rest}
    >
      <path
        d='M32 95L25 88L53 60L25 32L32 25L60 53L88 25L95 32L67 60L95 88L88 95L60 67L32 95Z'
        fill='currentColor'
      />
    </svg>
  );
};
