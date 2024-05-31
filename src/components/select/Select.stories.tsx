import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ErrorText, Label, RequirementBadge, SupportText } from '../';
import { Select } from './Select';

const meta = {
  title: 'Component/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

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
          <Select aria-describedby='test-support-text' id='test'>
            <option hidden value=''>
              選択してください
            </option>
            <option value='1'>選択肢1</option>
            <option value='2'>選択肢2</option>
            <option value='3'>選択肢3</option>
          </Select>
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor='test-error'>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Label>
          <SupportText id='test-error-support-text'>サポートテキスト</SupportText>
          <Select
            aria-describedby='test-error-text'
            aria-invalid={true}
            id='test-error'
            isError={true}
          >
            <option hidden value=''>
              選択してください
            </option>
            <option value='1'>選択肢1</option>
            <option value='2'>選択肢2</option>
            <option value='3'>選択肢3</option>
          </Select>
          <ErrorText aria-live='polite' id='test-error-text' role='alert'>
            ＊エラーテキスト
          </ErrorText>
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor='test-disabled' isDisabled={true}>
            ラベル
          </Label>
          <SupportText id='test-disabled-support-text'>サポートテキスト</SupportText>
          <Select aria-describedby='test-disabled-support-text' disabled id='test-disabled'>
            <option hidden value=''>
              選択してください
            </option>
            <option value='1'>選択肢1</option>
            <option value='2'>選択肢2</option>
            <option value='3'>選択肢3</option>
          </Select>
        </div>
      </div>
    );
  },
};
