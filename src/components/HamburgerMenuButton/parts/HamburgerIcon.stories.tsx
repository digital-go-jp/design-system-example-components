import type { Meta, StoryObj } from '@storybook/react-vite';
import { HamburgerIcon } from './HamburgerIcon';

const meta = {
  id: 'Component/DADS v2/HamburgerMenuButton/Parts/HamburgerIcon',
  title: 'Component/ハンバーガーメニューボタン/Parts/HamburgerIcon',
  component: HamburgerIcon,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof HamburgerIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
