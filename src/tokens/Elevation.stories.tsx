import type { Meta, StoryObj } from '@storybook/react';
import React, { Fragment } from 'react';
import { Elevation } from './Elevation';

const meta = {
  title: 'Tokens/Elevation',
  component: Fragment,
} satisfies Meta<typeof Fragment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return <Elevation />;
  },
};
