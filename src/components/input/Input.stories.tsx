import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ErrorText, Label, RequirementBadge, SupportText } from '../';
import { Input } from './Input';

const meta = {
  title: 'Component/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='test'>
            ラベル<RequirementBadge isOptional={true}>任意</RequirementBadge>
          </Label>
          <SupportText id='test-support-text'>サポートテキスト</SupportText>
          <Input aria-describedby='test-support-text' id='test' />
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor='test-filled'>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Label>
          <SupportText id='test-filled-support-text'>サポートテキスト</SupportText>
          <Input
            aria-describedby='test-filled-support-text'
            defaultValue='入力済の内容'
            id='test-filled'
            required
          />
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor='test-error'>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Label>
          <SupportText id='test-error-support-text'>サポートテキスト</SupportText>
          <Input
            aria-describedby='test-error-text'
            aria-invalid={true}
            id='test-error'
            isError={true}
            required
            value=''
          />
          <ErrorText aria-live='polite' id='test-error-text' role='alert'>
            エラーテキスト
          </ErrorText>
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor='test-filled-error'>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Label>
          <SupportText id='test-filled-error-support-text'>サポートテキスト</SupportText>
          <Input
            aria-describedby='test-filled-error-text'
            aria-invalid={true}
            defaultValue='誤った入力内容'
            id='test-filled-error'
            isError={true}
            required
          />
          <ErrorText aria-live='polite' id='test-filled-error-text' role='alert'>
            エラーテキスト
          </ErrorText>
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor='test-disabled' isDisabled={true}>
            ラベル
          </Label>
          <SupportText id='test-disabled-support-text'>サポートテキスト</SupportText>
          <Input aria-describedby='test-disabled-support-text' disabled id='test-disabled' />
        </div>
      </div>
    );
  },
};
