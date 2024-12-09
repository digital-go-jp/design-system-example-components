import type { ComponentProps } from 'react';

export const paginationItemStyle = `
  flex h-12 w-12 items-center justify-center rounded-full border border-solid-gray-200 text-oln-16N-100 text-blue-1000
  hover:border-blue-900 hover:bg-blue-50
  focus-visible:outline-2 focus-visible:outline-focus-yellow
  active:border-blue-900 active:bg-blue-50
`;

export type PaginationProps = ComponentProps<'nav'>;

export type PaginationItemProps = ComponentProps<'a'>;

export type PaginationEllipsisProps = ComponentProps<'svg'>;

export type PaginationCurrentProps = {
  current: number;
  max: number;
};

export const PaginationItem = (props: PaginationItemProps) => {
  const { children, className, ...rest } = props;

  return (
    <a className={`${paginationItemStyle} ${className}`} {...rest}>
      {children}
    </a>
  );
};

export const PaginationFirst = (props: PaginationItemProps) => {
  const { className, 'aria-label': ariaLabel, ...rest } = props;
  return (
    <a className={`${paginationItemStyle} ${className}`} {...rest}>
      <svg
        aria-label={ariaLabel ?? '最初のページに移動する'}
        fill='none'
        height='24'
        role='img'
        viewBox='0 0 24 24'
        width='24'
      >
        <path d='M18.33 19L19 18.33L12.67 12L19 5.67L18.33 5L11.33 12L18.33 19Z' fill='#1A3EE8' />
        <rect
          fill='#1A3EE8'
          height='14'
          transform='matrix(1, 8.74228e-08, 8.74228e-08, -1, 6, 19)'
          width='1'
        />
      </svg>
    </a>
  );
};

export const PaginationPrev = (props: PaginationItemProps) => {
  const { className, 'aria-label': ariaLabel, ...rest } = props;
  return (
    <a className={`${paginationItemStyle} ${className}`} {...rest}>
      <svg
        aria-label={ariaLabel ?? '前のページへ戻る'}
        fill='none'
        height='24'
        role='img'
        viewBox='0 0 24 24'
        width='24'
      >
        <path d='M15.33 19L16 18.33L9.67 12L16 5.67L15.33 5L8.33 12L15.33 19Z' fill='#1A3EE8' />
      </svg>
    </a>
  );
};

export const PaginationLast = (props: PaginationItemProps) => {
  const { className, 'aria-label': ariaLabel, ...rest } = props;
  return (
    <a className={`${paginationItemStyle} ${className}`} {...rest}>
      <svg
        aria-label={ariaLabel ?? '最後のページに移動する'}
        className='-scale-x-100'
        fill='none'
        height='24'
        role='img'
        viewBox='0 0 24 24'
        width='24'
      >
        <path
          className='fill-blue-900'
          d='M18.33 19L19 18.33L12.67 12L19 5.67L18.33 5L11.33 12L18.33 19Z'
        />
        <rect
          className='fill-blue-900'
          height='14'
          transform='matrix(1, 8.74228e-08, 8.74228e-08, -1, 6, 19)'
          width='1'
        />
      </svg>
    </a>
  );
};

export const PaginationNext = (props: PaginationItemProps) => {
  const { className, 'aria-label': ariaLabel, ...rest } = props;
  return (
    <a className={`${paginationItemStyle} ${className}`} {...rest}>
      <svg
        aria-label={ariaLabel ?? '次のページへ進む'}
        fill='none'
        height='24'
        role='img'
        viewBox='0 0 24 24'
        width='24'
      >
        <path
          className='fill-blue-900'
          d='M8.67 19L8 18.33L14.33 12L8 5.67L8.67 5L15.67 12L8.67 19Z'
        />
      </svg>
    </a>
  );
};

export const PaginationEllipsis = (props: PaginationEllipsisProps) => {
  const { className, ...rest } = props;
  return (
    <svg
      aria-hidden={true}
      className={className}
      fill='none'
      height='24'
      role='img'
      viewBox='0 0 24 24'
      width='24'
      {...rest}
    >
      <circle className='fill-blue-900' cx='6' cy='12' r='1' />
      <circle className='fill-blue-900' cx='12' cy='12' r='1' />
      <circle className='fill-blue-900' cx='18' cy='12' r='1' />
    </svg>
  );
};

export const PaginationCurrent = (props: PaginationCurrentProps) => {
  const { current, max } = props;

  return (
    <span className='text-[calc(12/16*1rem)] leading-170'>
      <span aria-current='page'>{current}</span> / {max}
    </span>
  );
};

/**
 * ※ Pagination は v1 のみのコンポーネントのため、v2 では非推奨となっています。
 */
export const Pagination = (props: PaginationProps) => {
  const { children, className, ...rest } = props;
  return (
    <nav
      aria-label={`${rest['aria-label'] ?? 'ページナビゲーション'}`}
      className={`flex flex-wrap items-center gap-3 ${className ?? ''}`}
      {...rest}
    >
      {children}
    </nav>
  );
};
