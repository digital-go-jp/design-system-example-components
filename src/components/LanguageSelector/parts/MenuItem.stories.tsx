import type { Meta, StoryObj } from '@storybook/react-vite';
import { LanguageSelectorMenu } from './../';
import { LanguageSelectorMenuItem } from './MenuItem';

const meta = {
  id: 'Component/DADS v2/LanguageSelector/Parts/MenuItem',
  title: 'Component/ランゲージセレクター/Parts/MenuItem',
  component: LanguageSelectorMenuItem,
  tags: ['autodocs'],
  argTypes: {
    isCurrent: {
      description: '選択された表示言語の項目に設定します。',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    isCondensed: {
      description:
        '`true` を指定すると、メニュー項目の高さが36pxに設定されます。（標準は44px）設置領域に制限がある場合に使用してください。\n\n使用の際は`LanguageSelectorMenu`にも`isCondensed`を設定してください。',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    href: {
      description: '各言語の対応するページへのURLを設定します。',
      table: {
        type: { summary: 'string' },
      },
    },
    lang: {
      description: '言語名がその言語自体で表記されている場合、対応する言語コードを設定します。',
      table: {
        type: { summary: 'string' },
      },
    },
  },

  parameters: {
    docs: {
      description: {
        component:
          'LanguageSelectorMenuItem コンポーネントはランゲージセレクターのメニューアイテムに使用します。',
      },
    },
  },
} satisfies Meta<typeof LanguageSelectorMenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  decorators: [
    (Story) => (
      <LanguageSelectorMenu>
        <Story />
      </LanguageSelectorMenu>
    ),
  ],
  args: {
    children: '日本語',
    isCurrent: false,
    href: '#',
    lang: 'ja',
    isCondensed: false,
  },
};
