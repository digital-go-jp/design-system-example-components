import type { ComponentProps } from 'react';

export type SupportTextProps = ComponentProps<'p'>;

export const SupportText = (props: SupportTextProps) => {
  const { children, className, ...rest } = props;

  return (
    <p className={`text-std-16N-7 text-solid-grey-700 ${className ?? ''}`} {...rest}>
      {children}
    </p>
  );
};
