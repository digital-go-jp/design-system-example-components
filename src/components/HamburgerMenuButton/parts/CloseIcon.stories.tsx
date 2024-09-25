import type { Meta, StoryObj } from '@storybook/react';
import { CloseIcon } from './CloseIcon';

const meta = {
  title: 'Component/DADS v2/HamburgerMenuButton/Parts/CloseIcon',
  component: CloseIcon,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CloseIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
