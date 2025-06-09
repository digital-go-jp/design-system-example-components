import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmergencyBannerHeading } from './Heading';

const meta = {
  id: 'Component/DADS v2/EmergencyBanner/Parts/Heading',
  title: 'Component/緊急時バナー/Parts/Heading',
  component: EmergencyBannerHeading,
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
          'EmergencyBannerHeading コンポーネントは緊急時バナーのタイトルに使用します。\n\nバナータイトルの表示文字列は必ず「【緊急】」から始まるように設定されています。',
      },
    },
  },
} satisfies Meta<typeof EmergencyBannerHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    id: 'heading-id',
    level: 'h2',
    children: 'バナータイトル',
  },
};
