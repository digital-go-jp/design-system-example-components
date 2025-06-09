import type { Meta, StoryObj } from '@storybook/react-vite';
import { SupportText } from './SupportText';

const meta = {
  id: 'Component/DADS v2/SupportText',
  title: 'Component/フォームコントロールラベル/SupportText',
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
