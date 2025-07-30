import type { ComponentProps } from 'react';
import { Slot } from '../Slot';

export const utilityLinkStyle = `!text-solid-gray-800 text-dns-16N-130 underline underline-offset-[calc(3/16*1rem)]
  hover:decoration-[calc(3/16*1rem)]
  focus-visible:rounded-4 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:text-blue-1000 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300`;

export type UtilityLinkProps = {
  className?: string;
  icon?: UtilityLinkExternalLinkIconProps;
} & (({ asChild?: false } & ComponentProps<'a'>) | { asChild: true; children: React.ReactNode });

export const UtilityLink = (props: UtilityLinkProps) => {
  const { asChild, children, className, icon, ...rest } = props;

  if (asChild) {
    return (
      <Slot className={`${utilityLinkStyle} ${className ?? ''}`} {...rest}>
        {children}
      </Slot>
    );
  }

  return (
    <a className={`${utilityLinkStyle} ${className ?? ''}`} {...rest}>
      {children}

      {props.target === '_blank' && <UtilityLinkExternalLinkIcon {...icon} />}
    </a>
  );
};

export type UtilityLinkExternalLinkIconProps = ComponentProps<'svg'>;

export const UtilityLinkExternalLinkIcon = (props: UtilityLinkExternalLinkIconProps) => {
  const { className, ...rest } = props;

  return (
    <svg
      aria-label={`${rest['aria-label'] ?? '新規タブで開きます'}`}
      role='img'
      className={`ml-1 inline-block align-[-0.15em] ${className ?? ''}`}
      fill='none'
      height='16'
      viewBox='0 0 48 48'
      width='16'
    >
      <path
        className={className ?? ''}
        d='M22 6V9H9V39H39V26H42V42H6V6H22ZM42 6V20H39V11.2L21 29L19 27L36.8 9H28V6H42Z'
        fill='currentColor'
      />
    </svg>
  );
};
