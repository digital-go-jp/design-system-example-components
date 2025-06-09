import type { Meta, StoryObj } from '@storybook/react-vite';
import { CloseIcon } from './CloseIcon';

const meta = {
  id: 'Component/DADS v2/HamburgerMenuButton/Parts/CloseIcon',
  title: 'Component/ハンバーガーメニューボタン/Parts/CloseIcon',
  component: CloseIcon,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CloseIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
