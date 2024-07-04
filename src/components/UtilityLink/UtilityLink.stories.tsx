import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { UtilityLink } from './UtilityLink';

const meta = {
  title: 'Component/DADS v2/UtilityLink',
  component: UtilityLink,
  tags: ['autodocs'],
} satisfies Meta<typeof UtilityLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className='flex flex-col items-start gap-8'>
        <UtilityLink href='#'>リンク</UtilityLink>

        <UtilityLink href='https://www.digital.go.jp' target='_blank'>
          外部リンク
        </UtilityLink>
      </div>
    );
  },
};
