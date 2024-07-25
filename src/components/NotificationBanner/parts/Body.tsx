import type { ComponentProps } from 'react';

type Props = ComponentProps<'div'>;

export const NotificationBannerBody = (props: Props) => {
  const { className, children, ...rest } = props;

  return (
    <div
      className={`
        col-start-1 -col-end-1 desktop:col-start-2 text-std-16N-7 text-solid-grey-800
        ${className ?? ''}
      `}
    >
      {children}
    </div>
  );
};
