import type { Meta, StoryObj } from '@storybook/react';
import { ScrollToTopButton } from './ScrollToTopButton';

const meta = {
  title: 'Component/ScrollToTopButton',
  component: ScrollToTopButton,
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollToTopButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    href: '#',
  },
};
