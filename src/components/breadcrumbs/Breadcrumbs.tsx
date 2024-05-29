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
      <li aria-current='page' className={`inline break-words ${className}`} {...rest}>
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
  text-blue-1000 text-oln-14N-1 underline
  hover:bg-black/5 hover:text-blue-900 hover:rounded-[4px]
  active:text-orange-700
  focus-visible:rounded-[4px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus-yellow
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
