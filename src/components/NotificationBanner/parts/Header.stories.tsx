import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { NotificationBanner, NotificationBannerClose, NotificationBannerHeading } from '../';
import { NotificationBannerHeader } from './Header';

const meta = {
  id: 'Component/DADS v2/NotificationBanner/Parts/Header',
  title: 'Component/ノティフィケーションバナー/Parts/Header',
  component: NotificationBannerHeader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'NotificationBannerHeader はノティフィケーションバナーのヘッダー領域のレイアウトに使用します。中にバナータイトルと閉じるボタンを配置することを想定して作られています。\n\n※ CSS Grid レイアウトの `subgrid` を使用しているため、NotificationBanner コンポーネント内以外で使用した場合に崩れる可能性がありますのでご注意ください。',
      },
    },
  },
} satisfies Meta<typeof NotificationBannerHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <NotificationBanner bannerStyle='standard' type='info1'>
        <NotificationBannerHeader>
          <NotificationBannerHeading level='h2'>バナータイトル</NotificationBannerHeading>
        </NotificationBannerHeader>
      </NotificationBanner>
    );
  },
};

export const WithClose: Story = {
  render: () => {
    return (
      <NotificationBanner bannerStyle='standard' type='info1'>
        <NotificationBannerHeader>
          <NotificationBannerHeading level='h2'>バナータイトル</NotificationBannerHeading>
          <NotificationBannerClose onClick={() => console.log('Clicked close')} />
        </NotificationBannerHeader>
      </NotificationBanner>
    );
  },
};
