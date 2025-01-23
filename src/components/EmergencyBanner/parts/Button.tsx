import type { ComponentProps } from 'react';

type Props = ComponentProps<'a'>;

export const EmergencyBannerButton = (props: Props) => {
  const { className, children, ...rest } = props;

  return (
    <a
      className={`
        relative block mx-auto p-[calc(18/16*1rem)] w-full border-2 border-transparent bg-error-1 text-white text-oln-16B-100 text-center rounded-12
        desktop:p-5 desktop:w-fit desktop:min-w-[50%] desktop:border-4 desktop:rounded-16
        after:absolute after:inset-0 after:border-2 after:border-white after:rounded-[calc(10/16*1rem)]
        desktop:after:border-4 desktop:after:rounded-12
        hover:underline hover:underline-offset-[calc(3/16*1rem)] hover:bg-error-2
        focus-visible:outline focus-visible:outline-[calc(4/16*1rem)] focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
      {props.target === '_blank' && <NewWindowIcon className='ml-1 align-top' />}
    </a>
  );
};

type NewWindowIconProps = ComponentProps<'svg'>;

const NewWindowIcon = (props: NewWindowIconProps) => {
  const { className, ...rest } = props;

  return (
    <svg
      aria-label={`${rest['aria-label'] ?? '新規タブで開きます'}`}
      className={`inline ${className ?? ''}`}
      fill='none'
      height='16'
      role='img'
      viewBox='0 0 16 16'
      width='16'
    >
      <g>
        <path
          clipRule='evenodd'
          d='M3 13.5H13V9.16667H14V14.5H2V2.5H7.33333V3.5H3V13.5ZM9.33333 3.5V2.5H14V7.16667H13V4.23333L7 10.1667L6.33333 9.5L12.2667 3.5H9.33333Z'
          fillRule='evenodd'
          fill='currentColor'
        />
      </g>
    </svg>
  );
};
