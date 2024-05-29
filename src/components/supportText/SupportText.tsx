import type { ComponentProps } from 'react';

export type SupportTextProps = ComponentProps<'p'>;

export const SupportText = (props: SupportTextProps) => {
  const { children, className, ...rest } = props;

  return (
    <p className={`text-[0.75rem] leading-1-7 text-solid-grey-600 ${className ?? ''}`} {...rest}>
      {children}
    </p>
  );
};
