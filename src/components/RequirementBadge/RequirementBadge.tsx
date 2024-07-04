import type { ComponentProps } from 'react';

export type RequirementBadgeProps = ComponentProps<'span'> & {
  isOptional?: boolean;
};

export const RequirementBadge = (props: RequirementBadgeProps) => {
  const { children, className, isOptional, ...rest } = props;

  return (
    <span
      className={`
      text-oln-16N-1
      ${isOptional ? 'text-solid-grey-800' : 'text-red-800'}
      ${className ?? ''}
    `}
      {...rest}
    >
      {children}
    </span>
  );
};
