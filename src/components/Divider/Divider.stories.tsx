import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from './Divider';

const meta = {
  id: 'Component/DADS v2/Divider',
  title: 'Component/ディバイダー',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['gray-420', 'gray-536', 'black'],
      control: { type: 'radio' },
      description: '線の色を以下から選択します。',
      table: {
        defaultValue: { summary: 'gray-420' },
        type: { summary: "'gray-420', 'gray-536', 'black'" },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Default では線の太さは\`1px\`、スタイルは\`solid\`に設定されています。変更したい場合は Tailwind CSS のクラスを使って上書きしてください。`,
      },
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    className: '',
    color: 'gray-420',
  },
};

export const Solid: Story = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <Divider />
        <Divider color='gray-536' />
        <Divider color='black' />
        <Divider className='border-t-2' />
        <Divider color='gray-536' className='border-t-2' />
        <Divider color='black' className='border-t-2' />
        <Divider className='border-t-[3px]' />
        <Divider color='gray-536' className='border-t-[3px]' />
        <Divider color='black' className='border-t-[3px]' />
        <Divider className='border-t-4' />
        <Divider color='gray-536' className='border-t-4' />
        <Divider color='black' className='border-t-4' />
      </div>
    );
  },
};

export const Dash: Story = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <Divider className='border-dashed' />
        <Divider color='gray-536' className='border-dashed' />
        <Divider color='black' className='border-dashed' />
        <Divider className='border-dashed border-t-2' />
        <Divider color='gray-536' className='border-dashed border-t-2' />
        <Divider color='black' className='border-dashed border-t-2' />
        <Divider className='border-dashed border-t-[3px]' />
        <Divider color='gray-536' className='border-dashed border-t-[3px]' />
        <Divider color='black' className='border-dashed border-t-[3px]' />
        <Divider className='border-dashed border-t-4' />
        <Divider color='gray-536' className='border-dashed border-t-4' />
        <Divider color='black' className='border-dashed border-t-4' />
      </div>
    );
  },
};
