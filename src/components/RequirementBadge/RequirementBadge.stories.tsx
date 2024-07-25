import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RequirementBadge } from './RequirementBadge';

const meta = {
  title: 'Component/DADS v2/RequirementBadge',
  component: RequirementBadge,
  tags: ['autodocs'],
  argTypes: {
    isOptional: {
      description: '任意項目の場合に `true` を指定します。',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
} satisfies Meta<typeof RequirementBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    isOptional: false,
    children: '※必須',
  },
};

export const Example: Story = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <RequirementBadge>※必須</RequirementBadge>
        <RequirementBadge isOptional={true}>※任意</RequirementBadge>
      </div>
    );
  },
};
