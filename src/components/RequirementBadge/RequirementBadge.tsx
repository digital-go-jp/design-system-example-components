import type { ComponentProps } from 'react';

export type RequirementBadgeProps = ComponentProps<'span'> & {
  isOptional?: boolean;
};

export const RequirementBadge = (props: RequirementBadgeProps) => {
  const { children, className, isOptional, ...rest } = props;

  return (
    <span
      className={`
        ml-2 inline-block text-oln-16N-100 text-red-800
        data-[is-optional]:text-solid-gray-800
        ${className ?? ''}
      `}
      data-is-optional={isOptional || undefined}
      {...rest}
    >
      {children}
    </span>
  );
};
