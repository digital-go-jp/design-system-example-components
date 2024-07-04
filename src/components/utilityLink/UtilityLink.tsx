import type { ComponentProps } from 'react';

export const utilityLinkStyle = `!text-solid-grey-800 text-dns-16N-3 underline underline-offset-[calc(3/16*1rem)]
  hover:decoration-[calc(3/16*1rem)]
  focus-visible:rounded focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:text-blue-1000 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300`;

export type UtilityLinkProps = ComponentProps<'a'> & {
  icon?: {
    className?: string;
    ariaLabel?: string;
  };
};

export const UtilityLink = (props: UtilityLinkProps) => {
  const { children, className, icon, ...rest } = props;

  return (
    <a className={`${utilityLinkStyle} ${className ?? ''}`} {...rest}>
      {children}

      {props.target === '_blank' && (
        <svg
          aria-label={`${icon?.ariaLabel ?? '新規タブで開きます'}`}
          role='img'
          className={`mb-1 ml-1 inline ${icon ? icon.className ?? '' : ''}`}
          fill='none'
          height='13'
          viewBox='0 0 12 13'
          width='14'
        >
          <path
            className={icon ? icon.className ?? '' : ''}
            d='M1.5335 12.1663C1.20016 12.1663 0.91683 12.0497 0.683496 11.8163C0.450163 11.583 0.333496 11.2997 0.333496 10.9663V2.03301C0.333496 1.69967 0.450163 1.41634 0.683496 1.18301C0.91683 0.949675 1.20016 0.833008 1.5335 0.833008H5.75016V1.83301H1.5335C1.48905 1.83301 1.44461 1.85523 1.40016 1.89967C1.35572 1.94412 1.3335 1.98856 1.3335 2.03301V10.9663C1.3335 11.0108 1.35572 11.0552 1.40016 11.0997C1.44461 11.1441 1.48905 11.1663 1.5335 11.1663H10.4668C10.5113 11.1663 10.5557 11.1441 10.6002 11.0997C10.6446 11.0552 10.6668 11.0108 10.6668 10.9663V6.74967H11.6668V10.9663C11.6668 11.2997 11.5502 11.583 11.3168 11.8163C11.0835 12.0497 10.8002 12.1663 10.4668 12.1663H1.5335ZM4.4835 8.71634L3.7835 8.01634L9.96683 1.83301H7.3335V0.833008H11.6668V5.16634H10.6668V2.53301L4.4835 8.71634Z'
            fill='currentColor'
          />
        </svg>
      )}
    </a>
  );
};
