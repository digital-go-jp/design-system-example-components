import type { Meta, StoryObj } from '@storybook/react-vite';
import { NotificationBannerMobileClose } from './MobileClose';

const meta = {
  id: 'Component/DADS v2/NotificationBanner/Parts/MobileClose',
  title: 'Component/ノティフィケーションバナー/Parts/MobileClose',
  component: NotificationBannerMobileClose,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'NotificationBannerMobileClose はノティフィケーションバナーの閉じるボタンに使用します。',
      },
    },
  },
} satisfies Meta<typeof NotificationBannerMobileClose>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
