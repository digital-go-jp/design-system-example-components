import type { ComponentProps } from 'react';

export type EmergencyBannerHeadingLevel = 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type EmergencyBannerHeadingProps = ComponentProps<'h2'> & {
  level: EmergencyBannerHeadingLevel;
};

export const EmergencyBannerHeading = (props: EmergencyBannerHeadingProps) => {
  const { level, className, children, ...rest } = props;
  const Tag = level;

  return (
    <Tag
      className={`
        text-std-20B-150 text-black desktop:text-std-24B-150
        ${className ?? ''}
      `}
      {...rest}
    >
      【緊急】
      {children}
    </Tag>
  );
};
