import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Link } from './Link';

const meta = {
  title: 'Component/DADS v2/Link',
  component: Link,
  tags: ['autodocs'],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className='flex flex-col items-start gap-8'>
        <Link href='#'>リンク</Link>

        <Link href='https://www.digital.go.jp' target='_blank'>
          外部リンク
        </Link>

        <p>
          これは<Link href='#'>文中のリンク</Link>です。
        </p>
        <p className='w-[calc(160/16*1rem)]'>
          これは
          <Link href='https://www.digital.go.jp' target='_blank'>
            複数行にまたがる文中のインラインリンク
          </Link>
          です。
        </p>
      </div>
    );
  },
};
