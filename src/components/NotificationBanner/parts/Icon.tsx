import type { ComponentProps } from 'react';
import type { NotifiationBannerType } from '../types';

type IconProps = ComponentProps<'svg'>;

const InfoIcon = (props: IconProps) => {
  const { ...rest } = props;
  return (
    <svg
      aria-label='情報提示'
      fill='none'
      height='36'
      role='img'
      viewBox='0 0 36 36'
      width='36'
      {...rest}
    >
      <circle cx='18' cy='18' fill='white' r='18' />
      <path
        d='M18 0C8.064 0 0 8.064 0 18C0 27.936 8.064 36 18 36C27.936 36 36 27.936 36 18C36 8.064 27.936 0 18 0ZM19.8 27H16.2V16.2H19.8V27ZM19.8 12.6H16.2V9H19.8V12.6Z'
        fill='currentColor'
      />
    </svg>
  );
};

const WarningIcon = (props: IconProps) => {
  const { ...rest } = props;
  return (
    <svg
      aria-label='警告'
      fill='none'
      height='36'
      role='img'
      viewBox='0 0 36 36'
      width='36'
      {...rest}
    >
      <path d='M18 3.00098L36 34.091H0L18 3.00098Z' fill='white' />
      <path
        d='M0 34.0909H36L18 3L0 34.0909ZM19.6364 29.1818H16.3636V25.9091H19.6364V29.1818ZM19.6364 22.6364H16.3636V16.0909H19.6364V22.6364Z'
        fill='currentColor'
      />
    </svg>
  );
};

const ErrorIcon = (props: IconProps) => {
  const { ...rest } = props;
  return (
    <svg
      aria-label='エラー'
      fill='none'
      height='36'
      role='img'
      viewBox='0 0 36 36'
      width='36'
      {...rest}
    >
      <g>
        <path
          d='M24.2525 33H11.7475L3 24.2525V11.7475L11.7475 3H24.2525L33 11.7475V24.2525L24.2525 33Z'
          fill='currentColor'
          stroke='currentColor'
          strokeWidth='2'
        />
        <rect
          width='2'
          height='18.5341'
          transform='matrix(0.7071, -0.707113, 0.7071, 0.707113, 11, 12.4142)'
          fill='white'
        />
        <rect
          width='2'
          height='18.5341'
          transform='matrix(-0.7071, -0.707113, 0.7071, -0.707113, 12.4141, 25.52)'
          fill='white'
        />
      </g>
    </svg>
  );
};

const SuccessIcon = (props: IconProps) => {
  const { ...rest } = props;
  return (
    <svg
      aria-label='成功'
      fill='none'
      height='36'
      role='img'
      viewBox='0 0 36 36'
      width='36'
      {...rest}
    >
      <g>
        <circle cx='18' cy='18' r='18' fill='white' />
        <path
          d='M18 0C8.064 0 0 8.064 0 18C0 27.936 8.064 36 18 36C27.936 36 36 27.936 36 18C36 8.064 27.936 0 18 0ZM14.4 27L5.4 18L7.938 15.462L14.4 21.906L28.062 8.244L30.6 10.8L14.4 27Z'
          fill='currentColor'
        />
      </g>
    </svg>
  );
};

type NotificationBannerIconProps = ComponentProps<'svg'> & {
  type: NotifiationBannerType;
};

export const NotificationBannerIcon = (props: NotificationBannerIconProps) => {
  const { type, className } = props;

  switch (type) {
    case 'info1':
    case 'info2':
      return <InfoIcon className={className} />;
    case 'warning':
      return <WarningIcon className={className} />;
    case 'error':
      return <ErrorIcon className={className} />;
    case 'success':
      return <SuccessIcon className={className} />;
    default:
      return null;
  }
};
