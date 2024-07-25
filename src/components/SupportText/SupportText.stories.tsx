import type { Meta, StoryObj } from '@storybook/react';
import { SupportText } from './SupportText';

const meta = {
  title: 'Component/DADS v2/SupportText',
  component: SupportText,
  tags: ['autodocs'],
} satisfies Meta<typeof SupportText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'サポートテキスト',
  },
};
