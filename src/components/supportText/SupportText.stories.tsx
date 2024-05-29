import type { Meta, StoryObj } from '@storybook/react';
import { SupportText } from './SupportText';

const meta = {
  title: 'Component/SupportText',
  component: SupportText,
  tags: ['autodocs'],
} satisfies Meta<typeof SupportText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: 'サポートテキスト',
  },
};
