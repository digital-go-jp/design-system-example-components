import type { ComponentProps } from 'react';

type Props = ComponentProps<'div'>;

export const EmergencyBannerButton = (props: Props) => {
  const { className, children } = props;

  return (
    <div
      className={`
        flex items-center justify-center mx-auto mt-6 mb-1 w-fit min-w-64 p-4 bg-error-1 text-white text-oln-16B-1 leading-snug rounded-lg
        outline outline-2 outline-error-1 outline-offset-[calc(2/16*1rem)]
        desktop:outline-4 desktop:outline-offset-[calc(4/16*1rem)] desktop:mt-8 desktop:mb-2
        ${className ?? ''}
      `}
    >
      {children}
    </div>
  );
};
