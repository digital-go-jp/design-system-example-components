import type { ComponentProps } from 'react';

export const linkStyle = `
  rounded text-blue-1000 underline
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
          role='img'
          className={`mb-[3px] ml-1 inline ${icon ? icon.className ?? '' : ''}`}
          fill='none'
          height='20'
          viewBox='0 0 21 20'
          width='21'
        >
          <g>
            <path
              clipRule='evenodd'
              d='M4.40625 16.25H16.9062V10.8333H18.1562V17.5H3.15625V2.5H9.82292V3.75H4.40625V16.25ZM12.3229 3.75V2.5H18.1562V8.33333H16.9062V4.66667L9.40625 12.0833L8.57292 11.25L15.9896 3.75H12.3229Z'
              fill='currentColor'
              fillRule='evenodd'
            />
          </g>
        </svg>
      )}
    </a>
  );
};
