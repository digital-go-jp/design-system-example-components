import type { ComponentProps } from 'react';

export const bannerBodyStyle =
  'block px-2.5 py-3.5 border-[6px] bg-white desktop:p-[calc(26/16*1rem)] border-warning-orange-1';

type Props = ComponentProps<'div'>;

export const EmergencyBanner = (props: Props) => {
  const { className, children } = props;

  return <div className={`${bannerBodyStyle} ${className ?? ''}`}>{children}</div>;
};
