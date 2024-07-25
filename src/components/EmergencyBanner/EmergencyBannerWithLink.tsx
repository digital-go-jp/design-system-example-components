import type { ComponentProps } from 'react';
import { bannerBodyStyle } from './styles';

type Props = ComponentProps<'a'>;

export const EmergencyBannerWithLink = (props: Props) => {
  const { className, children, ...rest } = props;

  return (
    <a
      className={`
        group ${bannerBodyStyle}
        hover:bg-solid-grey-50 hover:border-warning-orange-2
        [&:hover_*]:underline [&:hover_*]:underline-offset-[calc(3/16*1rem)]
        focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
      `}
      {...rest}
    >
      {children}
    </a>
  );
};
