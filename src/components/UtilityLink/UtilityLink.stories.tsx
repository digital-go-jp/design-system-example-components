import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { UtilityLink, UtilityLinkExternalLinkIcon } from './UtilityLink';

const meta = {
  id: 'Component/DADS v2/UtilityLink',
  title: 'Component/ユーティリティリンク',
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

        <UtilityLink asChild>
          <a href='https://www.digital.go.jp' target='_blank' rel='noreferrer'>
            Slotを使ったリンク
            <UtilityLinkExternalLinkIcon />
          </a>
        </UtilityLink>
      </div>
    );
  },
};
