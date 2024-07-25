import type { ComponentProps } from 'react';

type Props = ComponentProps<'button'> & {
  label?: string;
};

export const NotificationBannerClose = (props: Props) => {
  const { className, children, label, ...rest } = props;

  return (
    <button
      className={`
        inline-flex items-center gap-0.5 -mt-2 -mr-3 text-solid-grey-900 border border-transparent rounded-lg
        desktop:px-2 desktop:py-0.5 desktop:mt-0 desktop:mr-0
        hover:border-solid-grey-900
        focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 focus-visible:bg-yellow-300 focus-visible:border-transparent

      `}
      type='button'
      {...rest}
    >
      <svg
        aria-hidden={true}
        className='desktop:size-[calc(30/16*1rem)]'
        fill='none'
        height='44'
        viewBox='0 0 44 44'
        width='44'
      >
        <g>
          <path
            d='M13.5789 32L12 30.4211L20.4211 22L12 13.5789L13.5789 12L22 20.4211L30.4211 12L32 13.5789L23.5789 22L32 30.4211L30.4211 32L22 23.5789L13.5789 32Z'
            fill='currentColor'
          />
        </g>
      </svg>
      <span className='sr-only text-oln-16N-1 desktop:not-sr-only'>{label ?? '閉じる'}</span>
    </button>
  );
};
