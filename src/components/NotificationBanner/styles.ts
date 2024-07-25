import type { NotifiationBannerStyle, NotifiationBannerType } from './types';

export const bannerStyleClasses: { [key in NotifiationBannerStyle]: string } = {
  standard: ' border-[3px] rounded-xl',
  'color-chip':
    'border-2 !pl-6 shadow-[inset_8px_0_0_0_var(--color-chip-color)] desktop:!pl-10 desktop:shadow-[inset_16px_0_0_0_var(--color-chip-color)]',
};

export const bannerTypeClasses: { [key in NotifiationBannerType]: string } = {
  info1: 'text-blue-900 [--color-chip-color:currentColor]',
  info2: 'text-solid-grey-536 [--color-chip-color:currentColor]',
  warning: 'text-warning-yellow-2 [--color-chip-color:theme(colors.yellow.400)]',
  error: 'text-error-1 [--color-chip-color:currentColor]',
  success: 'text-success-2 [--color-chip-color:currentColor]',
};
