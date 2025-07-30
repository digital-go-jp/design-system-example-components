import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { NotificationBannerClose } from './Close';

const meta = {
  id: 'Component/DADS v2/NotificationBanner/Parts/Close',
  title: 'Component/ノティフィケーションバナー/Parts/Close',
  component: NotificationBannerClose,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description:
        '閉じるボタンのラベルの文字列を指定します。指定がない場合は「閉じる」がラベルに設定されます。',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'NotificationBannerClose はノティフィケーションバナーの閉じるボタンに使用します。',
      },
    },
  },
} satisfies Meta<typeof NotificationBannerClose>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    label: '閉じる',
    onClick: fn(),
  },
};
