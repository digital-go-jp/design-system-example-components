import type { Meta, StoryObj } from '@storybook/react';
import { ErrorText } from './ErrorText';

const meta = {
  id: 'Component/DADS v2/ErrorText',
  title: 'Component/Parts/ErrorText',
  component: ErrorText,
  tags: ['autodocs'],
} satisfies Meta<typeof ErrorText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: '＊エラーテキスト',
  },
};
