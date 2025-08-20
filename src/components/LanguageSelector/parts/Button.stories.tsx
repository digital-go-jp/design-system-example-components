import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { LanguageSelectorArrowIcon, LanguageSelectorGlobeIcon } from './../';
import { LanguageSelectorButton } from './Button';

const meta = {
  id: 'Component/DADS v2/LanguageSelector/Parts/Button',
  title: 'Component/ランゲージセレクター/Parts/Button',
  component: LanguageSelectorButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'LanguageSelectorButton コンポーネントはランゲージセレクターのメニューを表示するトリガーのためのボタンとして使用します。\nLanguageSelectorGlobeIcon と LanguageSelectorArrowIcon を組み合わせて使用してください。',
      },
    },
  },
} satisfies Meta<typeof LanguageSelectorButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: (
      <>
        <LanguageSelectorGlobeIcon />
        Language
        <LanguageSelectorArrowIcon className='mt-0.5' />
      </>
    ),
    onClick: fn(),
  },
};
