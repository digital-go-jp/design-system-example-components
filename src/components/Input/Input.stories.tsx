import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { ErrorText, Label, RequirementBadge, SupportText } from '../';
import { Input } from './Input';

const meta = {
  id: 'Component/DADS v2/Input',
  title: 'Component/インプットテキスト',
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
    'aria-disabled': {
      description:
        '無効化する必要がある場合は `disabled` 属性ではなく `aria-disabled` 属性を使用します。',
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

export const Playground: Story = {
  decorators: [
    (Story, context) => (
      <div className='flex flex-col items-start gap-2'>
        <Label htmlFor={context.args.id}>
          ラベル<RequirementBadge>※必須</RequirementBadge>
        </Label>
        <SupportText id={context.args['aria-describedby']}>サポートテキスト</SupportText>
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

export const Errored: Story = {
  render: () => {
    const formId = React.useId();

    return (
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <Label htmlFor={`${formId}-error`}>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Label>
          <SupportText id='error-support-text'>サポートテキスト</SupportText>
          <Input
            aria-describedby='error-support-text error-text'
            aria-invalid={true}
            id={`${formId}-error`}
            isError={true}
            name='error'
            required
            defaultValue=''
          />
          <ErrorText id='error-text'>＊エラーテキスト</ErrorText>
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor={`${formId}-filled-error`}>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Label>
          <SupportText id='filled-error-support-text'>サポートテキスト</SupportText>
          <Input
            aria-describedby='filled-error-support-text filled-error-text'
            aria-invalid={true}
            defaultValue='誤った入力内容'
            id={`${formId}-filled-error`}
            isError={true}
            name='filled-error'
            required
          />
          <ErrorText id='filled-error-text'>＊エラーテキスト</ErrorText>
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const formId = React.useId();

    return (
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <Label htmlFor={`${formId}-disabled`}>ラベル</Label>
          <SupportText id='disabled-support-text'>
            〜の理由により、この項目は無効化されています。
          </SupportText>
          <Input
            aria-describedby='disabled-support-text'
            aria-disabled={true}
            defaultValue='入力テキスト'
            id={`${formId}-disabled`}
            name='disabled'
          />
        </div>
      </div>
    );
  },
};
