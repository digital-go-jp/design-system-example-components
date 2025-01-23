import type { Meta, StoryObj } from '@storybook/react';
import { EmergencyBannerButton } from './Button';

const meta = {
  title: 'Component/DADS v2/EmergencyBanner/Parts/Button',
  component: EmergencyBannerButton,
  tags: ['autodocs'],
  argTypes: {
    target: {
      options: ['_blank', '_parent', '_self', '_top'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'EmergencyBannerButton は緊急時バナーにリンク先がある場合に使用します。',
      },
    },
  },
} satisfies Meta<typeof EmergencyBannerButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'ラベル',
    target: '_self',
    href: '#',
  },
};
