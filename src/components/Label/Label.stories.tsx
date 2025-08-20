import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from './Label';

const meta = {
  id: 'Component/DADS v2/Label',
  title: 'Component/フォームコントロールラベル/Label',
  component: Label,
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
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: 'md',
    children: 'ラベル',
  },
};

export const All: Story = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <div>
          <div className='flex items-center gap-4'>
            <Label size='lg'>ラベル LG</Label>
            <Label>ラベル MD</Label>
            <Label size='sm'>ラベル SM</Label>
          </div>
        </div>

        <div>
          <div className='flex items-center gap-4'>
            <Label className='font-normal' size='lg'>
              ラベル LG
            </Label>
            <Label className='font-normal'>ラベル MD</Label>
            <Label className='font-normal' size='sm'>
              ラベル SM
            </Label>
          </div>
        </div>
      </div>
    );
  },
};
