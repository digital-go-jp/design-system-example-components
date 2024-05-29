import { type ComponentProps, forwardRef } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'lg' | 'md' | 'sm' | 'xs';

export const buttonBaseStyle = `
  border border-transparent underline-offset-2
  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-yellow
  disabled:no-underline
`;

export const buttonVariantStyle: { [key in ButtonVariant]: string } = {
  primary: `
  bg-blue-900
    text-white
    hover:bg-blue-1000
    hover:underline
    active:bg-blue-1100
    active:underline
    disabled:bg-black/30
  `,
  secondary: `
    !border-blue-900
    bg-white
    text-blue-900
    hover:!border-blue-1000
    hover:bg-blue-200
    hover:text-blue-1000
    hover:underline
    active:!border-blue-1100
    active:bg-blue-300
    active:text-blue-1200
    active:underline
    disabled:!border-solid-grey-420
    disabled:bg-white
    disabled:text-solid-grey-420
  `,
  tertiary: `
    bg-transparent
    text-blue-900
    underline
    hover:bg-blue-200
    hover:text-blue-1000
    active:bg-blue-300
    active:text-blue-1200
    disabled:bg-transparent
    disabled:text-solid-grey-420
  `,
};

export const buttonSizeStyle: { [key in ButtonSize]: string } = {
  lg: 'min-w-[8.5rem] rounded-8 p-4 text-oln-16B-1 leading-snug',
  md: 'min-w-24 rounded-8 px-4 py-3 text-oln-16B-1 leading-snug',
  sm: 'min-w-20 rounded-md px-3 py-1.5 text-oln-16B-1 leading-snug relative after:absolute after:-inset-x-[1px] after:-inset-y-[5px]',
  xs: 'min-w-18 rounded px-2 py-1.5 text-oln-14B-1 relative after:absolute after:-inset-x-[1px] after:-inset-y-[9px]',
};

export type ButtonProps = ComponentProps<'button'> & {
  variant?: ButtonVariant;
  size: ButtonSize;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, className, variant, size, ...rest } = props;

  return (
    <button
      className={`${buttonBaseStyle} ${buttonSizeStyle[size]} ${
        variant ? buttonVariantStyle[variant] : ''
      } ${className ?? ''}`}
      {...rest}
      ref={ref}
    >
      {children}
    </button>
  );
});
