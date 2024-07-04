import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ErrorText, Label, RequirementBadge, SupportText } from '../';
import { Textarea } from './Textarea';

const meta = {
  title: 'Component/DADS v2/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    isError: {
      description: 'エラー状態であるかどうかを指定します。',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export type TextareaCounterProps = {
  count: number;
  maxCount: number;
  className?: string;
  id?: string;
};

export const Example: Story = {
  render: () => {
    const formId = React.useId();

    return (
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <Label htmlFor={`${formId}-test`}>ラベル</Label>
          <SupportText id='test-support-text'>サポートテキスト</SupportText>
          <Textarea aria-describedby='test-support-text' id={`${formId}-test`} name='test' />
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor={`${formId}-test-filled`}>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Label>
          <SupportText id='test-filled-support-text'>サポートテキスト</SupportText>
          <Textarea
            aria-describedby='test-filled-support-text'
            defaultValue='入力済の内容が入ります。入力済の内容が入ります。入力済の内容が入ります。'
            id={`${formId}-test-filled`}
            required
          />
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor={`${formId}-test-rows`}>rows 属性を使用したテキストエリア</Label>
          <SupportText id='test-rows-support-text'>
            rows 属性の値に 2 を設定したテキストエリアの例
          </SupportText>
          <Textarea
            aria-describedby='test-rows-support-text'
            id={`${formId}-test-rows`}
            name='test-rows'
            rows={2}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor={`${formId}-test-error`}>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Label>
          <SupportText id='test-error-support-text'>サポートテキスト</SupportText>
          <Textarea
            aria-describedby='test-error-support-text test-error-text'
            aria-invalid={true}
            defaultValue=''
            id={`${formId}-test-error`}
            isError={true}
            name='test-error'
            required
          />
          <ErrorText id='test-error-text'>＊エラーテキスト</ErrorText>
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor={`${formId}-test-filled-error`}>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Label>
          <SupportText id='test-filled-error-support-text'>サポートテキスト</SupportText>
          <Textarea
            aria-describedby='test-filled-error-support-text test-filled-error-text'
            aria-invalid={true}
            defaultValue='入力済の内容が入ります。入力済の内容が入ります。入力済の内容が入ります。'
            id={`${formId}-test-filled-error`}
            isError={true}
            name='test-filled-error'
          />
          <ErrorText id='test-filled-error-text'>＊エラーテキスト</ErrorText>
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor={`${formId}-test-disabled`}>ラベル</Label>
          <SupportText id='test-disabled-support-text'>
            〜の理由により、この項目は無効化されています。
          </SupportText>
          <Textarea
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
    isError: false,
    id: 'test-playground',
    'aria-describedby': 'test-playground-support-text',
    'aria-disabled': false,
  },
};
