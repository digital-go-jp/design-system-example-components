import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Ol } from './Ol';

const meta = {
  title: 'Component/DADS v2/Ol',
  component: Ol,
  tags: ['autodocs'],
} satisfies Meta<typeof Ol>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <Ol>
        <li>サンプルサンプル</li>
        <li>サンプルサンプル</li>
        <li>サンプルサンプル</li>
        <li>
          サンプルサンプル
          <Ol>
            <li>サンプルサンプル</li>
            <li>サンプルサンプル</li>
            <li>サンプルサンプル</li>
            <li>サンプルサンプル</li>
          </Ol>
        </li>
      </Ol>
    );
  },
};
