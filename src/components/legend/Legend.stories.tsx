import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Legend } from './Legend';

const meta = {
  title: 'Component/Legend',
  component: Legend,
  tags: ['autodocs'],
} satisfies Meta<typeof Legend>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <Legend>凡例</Legend>
        <Legend isDisabled={true}>凡例</Legend>
      </div>
    );
  },
};
