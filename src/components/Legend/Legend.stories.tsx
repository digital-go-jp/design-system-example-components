import type { Meta, StoryObj } from '@storybook/react-vite';
import { Legend } from './Legend';

const meta = {
  id: 'Component/DADS v2/Legend',
  title: 'Component/フォームコントロールラベル/Legend',
  component: Legend,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['lg', 'md', 'sm'],
      control: { type: 'radio' },
      description: 'ラベルのフォントサイズの大きさを以下から選択します。',
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: "'lg', 'md', 'sm'" },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          '`fieldset` 要素を使ったラジオボタンやチェックボックスのグループにラベルをつけるために使用します。`fieldset` 要素の先頭の子要素として配置する必要があります。',
      },
    },
  },
} satisfies Meta<typeof Legend>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: 'md',
    children: '凡例',
  },
};

export const All: Story = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <div>
          <div className='flex items-center gap-4'>
            <Legend size='lg'>凡例 LG</Legend>
            <Legend>凡例 MD</Legend>
            <Legend size='sm'>凡例 SM</Legend>
          </div>
        </div>
        <div>
          <div className='flex items-center gap-4'>
            <Legend className='font-normal' size='lg'>
              凡例 LG
            </Legend>
            <Legend className='font-normal'>凡例 MD</Legend>
            <Legend className='font-normal' size='sm'>
              凡例 SM
            </Legend>
          </div>
        </div>
      </div>
    );
  },
};
