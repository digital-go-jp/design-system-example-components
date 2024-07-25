import type { ComponentProps } from 'react';

type Props = ComponentProps<'div'>;

export const NotificationBannerHeader = (props: Props) => {
  const { className, children } = props;

  return (
    <div
      className={`
        grid grid-cols-subgrid col-start-2 -col-end-1 place-items-start
        [&>*:last-child]:-col-end-1
        ${className ?? ''}
      `}
    >
      {children}
    </div>
  );
};
