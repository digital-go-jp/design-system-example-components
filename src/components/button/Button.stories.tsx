import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Component/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['lg', 'md', 'sm', 'xs'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLG: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'ボタン',
    onClick: () => console.log('clicked'),
  },
};

export const PrimaryMD: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'ボタン',
    onClick: () => console.log('clicked'),
  },
};

export const PrimarySM: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'ボタン',
    onClick: () => console.log('clicked'),
  },
};

export const PrimaryXS: Story = {
  args: {
    variant: 'primary',
    size: 'xs',
    children: 'ボタン',
    onClick: () => console.log('clicked'),
  },
};

export const SecondaryLG: Story = {
  args: {
    variant: 'secondary',
    size: 'lg',
    children: 'ボタン',
    onClick: () => console.log('clicked'),
  },
};

export const SecondaryMD: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'ボタン',
    onClick: () => console.log('clicked'),
  },
};

export const SecondarySM: Story = {
  args: {
    variant: 'secondary',
    size: 'sm',
    children: 'ボタン',
    onClick: () => console.log('clicked'),
  },
};

export const SecondaryXS: Story = {
  args: {
    variant: 'secondary',
    size: 'xs',
    children: 'ボタン',
    onClick: () => console.log('clicked'),
  },
};

export const TertiaryLG: Story = {
  args: {
    variant: 'tertiary',
    size: 'lg',
    children: 'ボタン',
    onClick: () => console.log('clicked'),
  },
};

export const TertiaryMD: Story = {
  args: {
    variant: 'tertiary',
    size: 'md',
    children: 'ボタン',
    onClick: () => console.log('clicked'),
  },
};

export const TertiarySM: Story = {
  args: {
    variant: 'tertiary',
    size: 'sm',
    children: 'ボタン',
    onClick: () => console.log('clicked'),
  },
};

export const TertiaryXS: Story = {
  args: {
    variant: 'tertiary',
    size: 'xs',
    children: 'ボタン',
    onClick: () => console.log('clicked'),
  },
};

export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'ボタン',
    disabled: true,
    onClick: () => console.log('clicked'),
  },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: 'secondary',
    size: 'lg',
    children: 'ボタン',
    disabled: true,
    onClick: () => console.log('clicked'),
  },
};

export const TertiaryDisabled: Story = {
  args: {
    variant: 'tertiary',
    size: 'lg',
    children: 'ボタン',
    disabled: true,
    onClick: () => console.log('clicked'),
  },
};
