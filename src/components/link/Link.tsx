import type { ComponentProps } from 'react';

export const linkStyle = `
  rounded text-blue-1000 underline underline-offset-[0.1875rem]
  visited:text-magenta-900
  hover:text-blue-900
  focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus-yellow
  active:text-orange-700
`;

export type LinkProps = ComponentProps<'a'> & {
  icon?: {
    className?: string;
    ariaLabel?: string;
  };
};

export const Link = (props: LinkProps) => {
  const { children, className, icon, ...rest } = props;

  return (
    <a className={`${linkStyle} ${className ?? ''}`} {...rest}>
      {children}

      {props.target === '_blank' && (
        <svg
          aria-label={`${icon?.ariaLabel ?? '新規タブで開きます'}`}
          className={`mb-[0.1875rem] ml-[0.1875rem] inline ${icon ? icon.className ?? '' : ''}`}
          fill='none'
          height='17'
          role='img'
          viewBox='0 0 16 17'
          width='16'
        >
          <g>
            <path
              clipRule='evenodd'
              d='M3 13.5H13V9.16667H14V14.5H2V2.5H7.33333V3.5H3V13.5ZM9.33333 3.5V2.5H14V7.16667H13V4.23333L7 10.1667L6.33333 9.5L12.2667 3.5H9.33333Z'
              fillRule='evenodd'
              fill='currentColor'
            />
          </g>
        </svg>
      )}
    </a>
  );
};
