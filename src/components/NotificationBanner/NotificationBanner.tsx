import type { ReactNode } from 'react';
import { NotificationBannerIcon } from './parts/Icon';
import { bannerStyleClasses, bannerTypeClasses } from './styles';
import type { NotifiationBannerStyle, NotifiationBannerType } from './types';

type Props = {
  className?: string;
  children: ReactNode;
  bannerStyle: NotifiationBannerStyle;
  type: NotifiationBannerType;
};

export const NotificationBanner = (props: Props) => {
  const { className, children, bannerStyle, type } = props;

  return (
    <div
      className={`
        grid grid-cols-[var(--icon-size)_1fr_minmax(0,auto)] border-current p-4 [--icon-size:calc(24/16*1rem)] gap-x-3 gap-y-4
        desktop:gap-x-6 desktop:p-6 desktop:[--icon-size:calc(36/16*1rem)]
        ${bannerStyleClasses[bannerStyle]}
        ${bannerTypeClasses[type]}
        ${className ?? ''}
      `}
    >
      <div className='mt-[calc(2/16*1rem)] desktop:mt-0'>
        <NotificationBannerIcon className='h-auto max-w-full' type={type} />
      </div>

      {children}
    </div>
  );
};
