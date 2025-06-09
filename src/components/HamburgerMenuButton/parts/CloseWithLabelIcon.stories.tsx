import type { Meta, StoryObj } from '@storybook/react-vite';
import { CloseWithLabelIcon } from './CloseWithLabelIcon';

const meta = {
  id: 'Component/DADS v2/HamburgerMenuButton/Parts/CloseWithLabelIcon',
  title: 'Component/ハンバーガーメニューボタン/Parts/CloseWithLabelIcon',
  component: CloseWithLabelIcon,
  tags: ['autodocs'],
  argTypes: {
    isEnglish: {
      description: '英語サイト、もしくは多言語サイトの場合に使用します。',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'CloseWithLabelIcon コンポーネントは「モバイル条件付きコンポーネント」用のアイコンです。モバイル表示時にヘッダーの領域が限定され、テキストラベルを配置するための十分な領域が確保できない場合に限り使用してください。',
      },
    },
  },
} satisfies Meta<typeof CloseWithLabelIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    isEnglish: false,
  },
};
