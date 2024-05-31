import type { Meta, StoryObj } from '@storybook/react';
import { ErrorText } from './ErrorText';

const meta = {
  title: 'Component/ErrorText',
  component: ErrorText,
  tags: ['autodocs'],
} satisfies Meta<typeof ErrorText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: '＊エラーテキスト',
  },
};
