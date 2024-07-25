import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { HamburgerMenuButton } from './HamburgerMenuButton';

const meta = {
  title: 'Component/DADS v1/HamburgerMenuButton',
  component: HamburgerMenuButton,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'アイコン右側のテキストラベルの文字列を設定します。',
      table: {
        type: { summary: 'string' },
      },
    },
    isOpen: {
      description: 'メニューが開いているかどうかを指定します。',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
} satisfies Meta<typeof HamburgerMenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    label: 'メニュー',
    isOpen: false,
  },
};

export const Example = {
  render: () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
      <div className='m-4 flex flex-col gap-4'>
        <HamburgerMenuButton
          aria-controls='menu'
          aria-expanded={isMenuOpen}
          isOpen={isMenuOpen}
          label={isMenuOpen ? '閉じる' : 'メニュー'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        {isMenuOpen && (
          <div className='h-40 w-60 border border-solid-grey-420 p-4' id='menu'>
            メニューを表示中
          </div>
        )}
      </div>
    );
  },
};
