import type { ComponentProps } from 'react';
import { bannerBodyStyle } from './styles';

type Props = ComponentProps<'div'>;

export const EmergencyBanner = (props: Props) => {
  const { className, children } = props;

  return <div className={`${bannerBodyStyle} ${className ?? ''}`}>{children}</div>;
};
