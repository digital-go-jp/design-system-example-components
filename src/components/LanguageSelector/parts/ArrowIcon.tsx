import type { ComponentProps } from 'react';

export type LanguageSelectorArrowIconProps = ComponentProps<'svg'>;

export const LanguageSelectorArrowIcon = (props: LanguageSelectorArrowIconProps) => {
  const { className, ...rest } = props;
  return (
    <svg
      aria-hidden={true}
      className={`${className ?? ''}`}
      fill='none'
      height='16'
      viewBox='0 0 16 16'
      width='16'
      {...rest}
    >
      <g>
        <path
          d='M8 11.4L2 5.33332L2.66667 4.66666L8 9.99999L13.3333 4.66666L14 5.33332L8 11.4Z'
          fill='currentColor'
        />
      </g>
    </svg>
  );
};
