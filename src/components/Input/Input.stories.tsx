import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ErrorText, Label, RequirementBadge, SupportText } from '../';
import { Input } from './Input';

const meta = {
  title: 'Component/DADS v2/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    blockSize: {
      options: ['lg', 'md', 'sm'],
      control: { type: 'radio' },
      description: 'インプットテキストの垂直方向のサイズ（高さ）を以下から選択します。',
      table: {
        defaultValue: { summary: 'lg' },
        type: { summary: "'lg', 'md', 'sm'" },
      },
    },
    isError: {
      description: 'エラー状態であるかどうかを指定します。',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    const formId = React.useId();

    return (
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <Label htmlFor={`${formId}-test`}>ラベル</Label>
          <SupportText id='test-support-text'>サポートテキスト</SupportText>
          <Input aria-describedby='test-support-text' id={`${formId}-test`} name='test' />
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor={`${formId}-test-filled`}>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Label>
          <SupportText id='test-filled-support-text'>サポートテキスト</SupportText>
          <Input
            aria-describedby='test-filled-support-text'
            defaultValue='入力済の内容'
            id={`${formId}-test-filled`}
            name='test-filled'
            required
          />
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor={`${formId}-test-error`}>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Label>
          <SupportText id='test-error-support-text'>サポートテキスト</SupportText>
          <Input
            aria-describedby='test-error-support-text test-error-text'
            aria-invalid={true}
            id={`${formId}-test-error`}
            isError={true}
            name='test-error'
            required
            defaultValue=''
          />
          <ErrorText id='test-error-text'>＊エラーテキスト</ErrorText>
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor={`${formId}-test-filled-error`}>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Label>
          <SupportText id='test-filled-error-support-text'>サポートテキスト</SupportText>
          <Input
            aria-describedby='test-filled-error-support-text test-filled-error-text'
            aria-invalid={true}
            defaultValue='誤った入力内容'
            id={`${formId}-test-filled-error`}
            isError={true}
            name='test-filled-error'
            required
          />
          <ErrorText id='test-filled-error-text'>＊エラーテキスト</ErrorText>
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor={`${formId}-test-disabled`}>ラベル</Label>
          <SupportText id='test-disabled-support-text'>
            〜の理由により、この項目は無効化されています。
          </SupportText>
          <Input
            aria-describedby='test-disabled-support-text'
            aria-disabled={true}
            defaultValue='入力テキスト'
            id={`${formId}-test-disabled`}
            name='test-disabled'
          />
        </div>
      </div>
    );
  },
};

export const Playground: Story = {
  decorators: [
    (Story) => (
      <div className='flex flex-col gap-2'>
        <Label htmlFor='test-playground'>
          ラベル<RequirementBadge>※必須</RequirementBadge>
        </Label>
        <SupportText id='test-playground-support-text'>サポートテキスト</SupportText>
        <Story />
      </div>
    ),
  ],
  args: {
    blockSize: 'lg',
    isError: false,
    id: 'test-playground',
    'aria-describedby': 'test-playground-support-text',
    'aria-disabled': false,
  },
};
