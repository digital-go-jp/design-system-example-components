import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { HamburgerMenuButtonMobileConditional } from './HamburgerMenuButtonMobileConditional';

const meta = {
  title: 'Component/DADS v1/HamburgerMenuButton/Conditional For Mobile',
  component: HamburgerMenuButtonMobileConditional,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      description: 'メニューが開いているかどうかを指定します。',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
    },
    isEnglish: {
      description: '表示する画面のページ言語が英語の際に使用します。',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
} satisfies Meta<typeof HamburgerMenuButtonMobileConditional>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    isOpen: false,
    isEnglish: false,
  },
};

export const Example = {
  render: () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
      <div className='m-4 flex flex-col gap-4'>
        <HamburgerMenuButtonMobileConditional
          aria-controls='menu'
          aria-expanded={isMenuOpen}
          isOpen={isMenuOpen}
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
