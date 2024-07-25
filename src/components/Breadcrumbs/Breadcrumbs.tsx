import type { ComponentProps } from 'react';

export type BreadcrumbsProps = ComponentProps<'nav'>;

export type BreadcrumbItemProps = ComponentProps<'li'> & {
  isCurrent?: boolean;
};

export const BreadcrumbItem = ({
  isCurrent = false,
  children,
  className,
  ...rest
}: BreadcrumbItemProps) => {
  if (isCurrent) {
    return (
      <li
        aria-current='page'
        className={`inline break-words text-oln-16N-1 ${className}`}
        {...rest}
      >
        {children}
      </li>
    );
  }
  return (
    <li className='inline break-words'>
      {children}
      <svg
        aria-hidden={true}
        className='mx-2 inline'
        fill='none'
        height='12'
        viewBox='0 0 12 12'
        width='12'
      >
        <path
          d='M4.50078 1.2998L3.80078 1.9998L7.80078 5.9998L3.80078 9.9998L4.50078 10.6998L9.20078 5.9998L4.50078 1.2998Z'
          fill='#1A1A1C'
        />
      </svg>
    </li>
  );
};

export const breadcrumbLinkStyle = `
  text-blue-1000 text-oln-16N-1 underline underline-offset-[calc(3/16*1rem)]
  hover:text-blue-900 hover:decoration-[calc(3/16*1rem)]
  active:text-orange-700 active:decoration-1
  focus-visible:rounded focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:text-blue-1000 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
`;

export type BreadcrumbLinkProps = ComponentProps<'a'>;

export const BreadcrumbLink = (props: BreadcrumbLinkProps) => {
  const { children, className, ...rest } = props;

  return (
    <a className={`${breadcrumbLinkStyle} ${className ?? ''}`} {...rest}>
      {children}
    </a>
  );
};

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { children, className, ...rest } = props;

  return (
    <nav
      aria-label={`${rest['aria-label'] ?? 'パンくずリスト'}`}
      className={`${className ?? ''}`}
      {...rest}
    >
      <ol className='inline'>{children}</ol>
    </nav>
  );
};
