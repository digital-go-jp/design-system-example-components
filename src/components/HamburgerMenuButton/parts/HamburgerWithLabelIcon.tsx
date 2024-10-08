import type { ComponentProps } from 'react';

export type HamburgerWithLabelIconProps = ComponentProps<'svg'> & {
  isEnglish?: boolean;
};

export const HamburgerWithLabelIcon = (props: HamburgerWithLabelIconProps) => {
  const { className, isEnglish, ...rest } = props;
  return (
    <>
      {isEnglish ? (
        <svg
          aria-label={`${rest['aria-label'] ?? 'MENU'}`}
          className={className}
          fill='none'
          height='44'
          role='img'
          viewBox='0 0 44 44'
          width='44'
          {...rest}
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M39 7H5V9H39V7ZM39 15H5V17H39V15ZM5 23H39V25H5V23Z'
            fill='currentColor'
          />
          <path
            d='M35.6474 38C33.6914 38 32.3594 37.0507 32.3594 34.4907V30H33.7514V34.576C33.7514 36.3467 34.5434 36.9227 35.6474 36.9227C36.7634 36.9227 37.5794 36.3467 37.5794 34.576V30H38.9234V34.4907C38.9234 37.0507 37.6034 38 35.6474 38Z'
            fill='currentColor'
          />
          <path
            d='M23.1172 37.8613V30H24.5452L27.4732 34.6187L28.3972 36.2827H28.4572C28.3852 35.472 28.2772 34.5227 28.2772 33.6693V30H29.5972V37.8613H28.1692L25.2412 33.232L24.3172 31.5893H24.2572C24.3292 32.4 24.4372 33.3067 24.4372 34.16V37.8613H23.1172Z'
            fill='currentColor'
          />
          <path
            d='M15.4414 37.8613V30H20.6614V31.0453H16.8334V33.232H20.0734V34.2773H16.8334V36.816H20.7934V37.8613H15.4414Z'
            fill='currentColor'
          />
          <path
            d='M5 37.8613V30H6.596L8.216 33.9787C8.42 34.5013 8.6 35.0347 8.804 35.5573H8.864C9.068 35.0347 9.236 34.5013 9.44 33.9787L11.036 30H12.644V37.8613H11.348V33.9787C11.348 33.2747 11.456 32.2613 11.528 31.5467H11.48L10.772 33.36L9.236 37.104H8.372L6.824 33.36L6.128 31.5467H6.08C6.14 32.2613 6.248 33.2747 6.248 33.9787V37.8613H5Z'
            fill='currentColor'
          />
        </svg>
      ) : (
        <svg
          aria-label={`${rest['aria-label'] ?? 'メニュー'}`}
          className={className}
          fill='none'
          height='44'
          role='img'
          viewBox='0 0 44 44'
          width='44'
          {...rest}
        >
          <g>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M39 7H5V9H39V7ZM39 15H5V17H39V15ZM5 23H39V25H5V23Z'
              fill='currentColor'
            />
            <path
              d='M30.9661 33.194C31.321 33.2236 32.0406 33.2531 32.5533 33.2531H37.847C38.3103 33.2531 38.7441 33.2137 39.0004 33.194V34.7417C38.7638 34.7318 38.261 34.6924 37.847 34.6924H32.5533C31.9914 34.6924 31.3309 34.7121 30.9661 34.7417V33.194Z'
              fill='currentColor'
            />
            <path
              d='M29.0631 33.056C29.0138 33.1842 28.9842 33.3715 28.9645 33.47C28.8856 34.0517 28.6293 35.7472 28.4815 36.6837H29.1124C29.3687 36.6837 29.8221 36.6739 30.0785 36.6443V37.916C29.8813 37.9061 29.3983 37.8864 29.1321 37.8864H23.9468C23.5919 37.8864 23.3455 37.8963 22.9709 37.916V36.6345C23.237 36.664 23.6018 36.6837 23.9468 36.6837H27.1408C27.2788 35.8458 27.4957 34.446 27.5252 33.8939H24.8636C24.5481 33.8939 24.1637 33.9235 23.8778 33.9432V32.642C24.1341 32.6716 24.5876 32.7011 24.8537 32.7011H27.3774C27.5844 32.7011 27.9886 32.6617 28.1069 32.5927L29.0631 33.056Z'
              fill='currentColor'
            />
            <path
              d='M14.4821 31.0646C14.837 31.104 15.3004 31.1237 15.6355 31.1237H19.7167C20.1111 31.1237 20.5349 31.0942 20.811 31.0646V32.494C20.5251 32.4841 20.0618 32.4546 19.7167 32.4546H15.6454C15.2708 32.4546 14.8173 32.4743 14.4821 32.494V31.0646ZM13.6541 35.8851C14.0385 35.9147 14.5019 35.9443 14.8863 35.9443H20.5448C20.88 35.9443 21.294 35.9246 21.6292 35.8851V37.3934C21.2842 37.354 20.8405 37.3343 20.5448 37.3343H14.8863C14.5019 37.3343 14.0188 37.3638 13.6541 37.3934V35.8851Z'
              fill='currentColor'
            />
            <path
              d='M12.3442 30.5126C12.216 30.7393 12.0287 31.1731 11.9302 31.3998C11.6344 32.1786 11.1908 33.1743 10.6092 34.0812C11.4767 34.791 12.3048 35.55 12.9751 36.2598L11.9597 37.3836C11.2697 36.5753 10.5599 35.8852 9.77126 35.205C8.90376 36.25 7.77009 37.3442 6.10409 38.2511L5 37.2555C6.60685 36.4767 7.77009 35.5205 8.74603 34.3474C8.03626 33.7855 7.08989 33.0855 6.08438 32.4744L6.92231 31.4688C7.71094 31.9519 8.74603 32.6617 9.54453 33.2531C10.0473 32.4645 10.3825 31.6857 10.6388 30.9069C10.7275 30.6506 10.8359 30.2563 10.8754 30L12.3442 30.5126Z'
              fill='currentColor'
            />
          </g>
        </svg>
      )}
    </>
  );
};
