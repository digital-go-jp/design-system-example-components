import type { ComponentProps } from 'react';

export type LanguageSelectorProps = ComponentProps<'div'>;

export const LanguageSelector = (props: LanguageSelectorProps) => {
  const { children, className, ...rest } = props;

  return (
    <div className={`group relative ${className ?? ''}`} {...rest}>
      {children}
    </div>
  );
};
