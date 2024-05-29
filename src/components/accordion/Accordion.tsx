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

export type AccordionDefaultIconProps = ComponentProps<'svg'>;

export const AccordionDefaultIcon = (props: AccordionDefaultIconProps) => {
  const { className, ...rest } = props;

  return (
    <svg
      aria-hidden={true}
      className={`pointer-events-none transition-all duration-200 group-open:rotate-180 ${
        className ?? ''
      }`}
      height='48'
      viewBox='0 0 48 48'
      width='48'
      {...rest}
    >
      <path
        d='M24 31.7219L12 19.5886L13.3333 18.2552L24 28.9219L34.6667 18.2552L36 19.5886L24 31.7219Z'
        fill='currentColor'
      />
    </svg>
  );
};

export type AccordionSummaryProps = ComponentProps<'summary'>;

export const AccordionSummary = (props: AccordionSummaryProps) => {
  const { children, className, ...rest } = props;
  return (
    <summary
      className={`flex cursor-pointer list-none items-center justify-between gap-4 outline-2 hover:bg-solid-grey-50 focus-visible:rounded focus-visible:outline focus-visible:outline-focus-yellow [&::-webkit-details-marker]:hidden ${
        className ?? ''
      }`}
      {...rest}
    >
      {children}
    </summary>
  );
};
