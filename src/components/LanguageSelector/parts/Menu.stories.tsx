import type { Meta, StoryObj } from '@storybook/react-vite';
import { LanguageSelectorMenuItem } from './../';
import { LanguageSelectorMenu } from './Menu';

const meta = {
  id: 'Component/DADS v2/LanguageSelector/Parts/Menu',
  title: 'Component/ランゲージセレクター/Parts/Menu',
  component: LanguageSelectorMenu,
  tags: ['autodocs'],
  argTypes: {
    isCondensed: {
      description: '`LanguageSelectorMenuItem` に `isCondensed`を設定している際に使用します。',
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
          'LanguageSelectorMenu コンポーネントはランゲージセレクターのメニューに使用します。メニュー内の各メニューアイテムには LanguageSelectorMenuItem を使用してください。\n\nメニュー項目の高さに合わせて項目が6.5項目分表示されるようメニューの高さが設定されており、超えた場合はスクロールバーが表示されます。',
      },
    },
  },
} satisfies Meta<typeof LanguageSelectorMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: (
      <>
        <LanguageSelectorMenuItem href='#' lang='ja'>
          日本語
        </LanguageSelectorMenuItem>
        <LanguageSelectorMenuItem href='#' isCurrent={true} lang='en'>
          English
        </LanguageSelectorMenuItem>
      </>
    ),
  },
};

export const CondensedMenu: Story = {
  args: {
    children: (
      <>
        <LanguageSelectorMenuItem href='#' isCondensed={true} lang='ja'>
          日本語
        </LanguageSelectorMenuItem>
        <LanguageSelectorMenuItem href='#' isCondensed={true} isCurrent={true} lang='en'>
          English
        </LanguageSelectorMenuItem>
      </>
    ),
  },
};
