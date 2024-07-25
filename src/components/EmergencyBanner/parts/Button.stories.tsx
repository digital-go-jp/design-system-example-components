import type { Meta, StoryObj } from '@storybook/react';
import { EmergencyBannerButton } from './Button';

const meta = {
  title: 'Component/DADS v2/EmergencyBanner/Parts/Button',
  component: EmergencyBannerButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'EmergencyBannerButton は緊急時バナーがリンクとして使用される場合（`EmergencyBannerWithLink`）に使用します。\n\nこのコンポーネントは、緊急時バナー全体がリンクであることを認識できるようにする視覚的なボタンのため、`div` 要素を使用しています。',
      },
    },
  },
} satisfies Meta<typeof EmergencyBannerButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'ラベル',
  },
};
