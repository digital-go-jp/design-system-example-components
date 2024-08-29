import { type ComponentProps, forwardRef } from 'react';
import { Slot } from '..';

export type ButtonVariant = 'solid-fill' | 'outline' | 'text';
export type ButtonSize = 'lg' | 'md' | 'sm' | 'xs';

export const buttonBaseStyle = `
  border underline-offset-[calc(3/16*1rem)]
  focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
  aria-disabled:pointer-events-none
`;

export const buttonVariantStyle: { [key in ButtonVariant]: string } = {
  'solid-fill': `
    bg-blue-900
    text-white
    border-transparent
    hover:bg-blue-1000
    hover:underline
    active:bg-blue-1200
    active:underline
    aria-disabled:bg-solid-grey-300
    aria-disabled:text-solid-grey-50
  `,
  outline: `
    bg-white
    text-blue-900
    border-current
    hover:bg-blue-200
    hover:text-blue-1000
    hover:underline
    active:bg-blue-300
    active:text-blue-1200
    active:underline
    aria-disabled:bg-white
    aria-disabled:text-solid-grey-300
  `,
  text: `
    bg-transparent
    text-blue-900
    border-transparent
    underline
    hover:bg-blue-50
    hover:text-blue-1000
    active:bg-blue-100
    active:text-blue-1200
    focus-visible:bg-yellow-300
    aria-disabled:bg-transparent
    aria-disabled:focus-visible:bg-yellow-300
    aria-disabled:text-solid-grey-300
  `,
};

export const buttonSizeStyle: { [key in ButtonSize]: string } = {
  lg: 'min-w-[calc(136/16*1rem)] rounded-lg p-4 text-oln-16B-1 leading-snug',
  md: 'min-w-24 rounded-lg px-4 py-3 text-oln-16B-1 leading-snug',
  sm: 'relative min-w-20 rounded-md px-3 py-1.5 text-oln-16B-1 leading-snug after:absolute after:-inset-x-[calc(1/16*1rem)] after:-inset-y-[calc(5/16*1rem)]',
  xs: 'relative min-w-18 rounded px-2 py-1.5 text-oln-14B-1 after:absolute after:-inset-x-[calc(1/16*1rem)] after:-inset-y-[calc(9/16*1rem)]',
};

export type ButtonProps = {
  className?: string;
  variant?: ButtonVariant;
  size: ButtonSize;
} & (
  | ({ asChild?: false } & ComponentProps<'button'>)
  | { asChild: true; children: React.ReactNode }
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { asChild, children, className, variant, size, ...rest } = props;

  const classNames = `${buttonBaseStyle} ${buttonSizeStyle[size]} ${
    variant ? buttonVariantStyle[variant] : ''
  } ${className ?? ''}`;

  if (asChild) {
    return (
      <Slot className={classNames} {...rest}>
        {children}
      </Slot>
    );
  }

  const handleDisabled = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <button
      className={classNames}
      onClick={props['aria-disabled'] ? handleDisabled : props.onClick}
      {...rest}
      ref={ref}
    >
      {children}
    </button>
  );
});
