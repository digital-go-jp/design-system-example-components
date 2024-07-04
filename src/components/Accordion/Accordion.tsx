import type { ComponentProps } from 'react';

export type AccordionProps = ComponentProps<'details'>;

export const Accordion = (props: AccordionProps) => {
  const { children, className, ...rest } = props;

  return (
    <details className={`group ${className ?? ''} border-b border-solid-grey-420`} {...rest}>
      {children}
    </details>
  );
};

export type AccordionDefaultIconWrapperProps = ComponentProps<'span'> & {
  shapeStyle?: 'circle' | 'square';
};

export const AccordionDefaultIconWrapper = (props: AccordionDefaultIconWrapperProps) => {
  const { className, shapeStyle, children, ...rest } = props;

  return (
    <span
      className={`
        inline-flex border border-current bg-white text-blue-1000
        ${shapeStyle === 'square' ? 'rounded-lg' : 'rounded-full'}
        group-hover/summary:ring-[calc(2/16*1rem)] group-hover/summary:ring-blue-1000
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </span>
  );
};

export type AccordionDefaultIconProps = ComponentProps<'svg'>;

export const AccordionDefaultIcon = (props: AccordionDefaultIconProps) => {
  const { className, ...rest } = props;

  return (
    <svg
      aria-hidden={true}
      className={`
        pointer-events-none m-2 size-4 group-open:rotate-180
        desktop:m-2.5 desktop:size-auto
        ${className ?? ''}`}
      height='24'
      viewBox='0 0 24 24'
      width='24'
      {...rest}
    >
      <g>
        <path
          d='M20.0016 6.6001L12.0016 14.6001L4.00156 6.6001L2.60156 8.0001L12.0016 17.4001L21.4016 8.0001L20.0016 6.6001Z'
          fill='currentColor'
        />
      </g>
    </svg>
  );
};

export type AccordionSummaryProps = ComponentProps<'summary'>;

export const AccordionSummary = (props: AccordionSummaryProps) => {
  const { children, className, ...rest } = props;

  return (
    <summary
      className={`
        group/summary flex cursor-default list-none items-center justify-between gap-4 p-2 text-std-16M-7
        desktop:p-3 desktop:text-std-20N-5 desktop:gap-10
        hover:bg-solid-grey-50
        focus-visible:rounded focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
        [&::-webkit-details-marker]:hidden ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </summary>
  );
};
