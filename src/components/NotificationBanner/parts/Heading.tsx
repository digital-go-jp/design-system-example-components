import type { ComponentProps } from 'react';
import type { NotifiationBannerHeadingLevel } from '../types';

type NotificationBannerHeadingProps = ComponentProps<'h2'> & {
  level: NotifiationBannerHeadingLevel;
};

export const NotificationBannerHeading = (props: NotificationBannerHeadingProps) => {
  const { level, className, children, ...rest } = props;
  const Tag = level;

  return (
    <Tag
      className={`text-std-17B-7 text-solid-grey-900 col-start-1 desktop:mt-0.5 desktop:text-std-20B-6 ${className ?? ''}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};
