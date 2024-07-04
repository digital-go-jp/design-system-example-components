import type { ComponentProps } from 'react';

export const olStyle = 'pl-8 list-decimal [&_&]:list-lower-latin';

export type OlProps = ComponentProps<'ol'>;

export const Ol = (props: OlProps) => {
  const { children, className, ...rest } = props;

  return (
    <ol className={`${olStyle} ${className ?? ''}`} {...rest}>
      {children}
    </ol>
  );
};
