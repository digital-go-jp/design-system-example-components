import type { Meta, StoryObj } from '@storybook/react-vite';
import { NotificationBannerHeading } from './Heading';

const meta = {
  id: 'Component/DADS v2/NotificationBanner/Parts/Heading',
  title: 'Component/ノティフィケーションバナー/Parts/Heading',
  component: NotificationBannerHeading,
  tags: ['autodocs'],
  argTypes: {
    level: {
      options: ['h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'radio' },
      description: '見出しレベルを選択します。',
      table: {
        type: { summary: "'h2' | 'h3' | 'h4' | 'h5' | 'h6'" },
      },
    },
  },

  parameters: {
    docs: {
      description: {
        component:
          'NotificationBannerHeading コンポーネントはノティフィケーションバナーのタイトルに使用します。',
      },
    },
  },
} satisfies Meta<typeof NotificationBannerHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    level: 'h2',
    children: 'バナータイトル',
  },
};
