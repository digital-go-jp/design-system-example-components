import type { Meta, StoryObj } from '@storybook/react';
import React, { Fragment } from 'react';
import { Colors } from './Colors';

const meta = {
  title: 'Tokens/Color',
  component: Fragment,
} satisfies Meta<typeof Fragment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return <Colors />;
  },
};
