import type { Meta, StoryObj } from '@storybook/react';
import React, { Fragment } from 'react';
import { AspectRatio } from './AspectRatio';

const meta = {
  title: 'Tokens/AspectRatio',
  component: Fragment,
} satisfies Meta<typeof Fragment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return <AspectRatio />;
  },
};
