import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ErrorText, Label, RequirementBadge, SupportText } from '../';
import { Textarea } from './Textarea';

const meta = {
  title: 'Component/Textarea',
  component: Textarea,
  tags: ['autodocs'],
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
    return (
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='test'>
            ラベル<RequirementBadge isOptional={true}>任意</RequirementBadge>
          </Label>
          <SupportText id='test-support-text'>サポートテキスト</SupportText>
          <Textarea aria-describedby='test-support-text' id='test' />
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor='test-filled'>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Label>
          <SupportText id='test-filled-support-text'>サポートテキスト</SupportText>
          <Textarea
            aria-describedby='test-filled-support-text'
            defaultValue='入力済の内容が入ります。入力済の内容が入ります。入力済の内容が入ります。'
            id='test-filled'
            required
          />
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor='test-rows'>
            rows 属性を使用したテキストエリア
            <RequirementBadge isOptional={true}>任意</RequirementBadge>
          </Label>
          <SupportText id='test-rows-support-text'>
            rows 属性の値に 2 を設定したテキストエリアの例
          </SupportText>
          <Textarea aria-describedby='test-rows-support-text' id='test-rows' rows={2} />
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor='test-error'>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Label>
          <SupportText id='test-error-support-text'>サポートテキスト</SupportText>
          <Textarea
            aria-describedby='test-error-text'
            aria-invalid={true}
            id='test-error'
            isError={true}
            required
          />
          <ErrorText aria-live='polite' id='test-error-text' role='alert'>
            ＊エラーテキスト
          </ErrorText>
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor='test-filled-error'>
            ラベル<RequirementBadge isOptional={true}>任意</RequirementBadge>
          </Label>
          <SupportText id='test-filled-error-support-text'>サポートテキスト</SupportText>
          <Textarea
            aria-describedby='test-filled-error-text'
            aria-invalid={true}
            defaultValue='入力済の内容が入ります。入力済の内容が入ります。入力済の内容が入ります。'
            id='test-filled-error'
            isError={true}
          />
          <ErrorText aria-live='polite' id='test-filled-error-text' role='alert'>
            ＊エラーテキスト
          </ErrorText>
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor='test-disabled' isDisabled={true}>
            ラベル
          </Label>
          <SupportText id='test-disabled-support-text'>サポートテキスト</SupportText>
          <Textarea aria-describedby='test-disabled-support-text' disabled id='test-disabled' />
        </div>
      </div>
    );
  },
};
