import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { Fragment } from 'react';
import { Radius } from './Radius';

const meta = {
  title: 'Tokens/Radius',
  component: Fragment,
} satisfies Meta<typeof Fragment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return <Radius />;
  },
};
