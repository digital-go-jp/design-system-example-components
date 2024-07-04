import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ErrorText, Label, RequirementBadge, SupportText } from '../';
import { Select } from './Select';

const meta = {
  title: 'Component/DADS v2/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    blockSize: {
      options: ['lg', 'md', 'sm'],
      control: { type: 'radio' },
      description: 'セレクターの垂直方向のサイズ（高さ）を以下から選択します。',
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
} satisfies Meta<typeof Select>;

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
          <Select aria-describedby='test-support-text' id={`${formId}-test`} name='test'>
            <option hidden value=''>
              選択してください
            </option>
            <option value='1'>選択肢1</option>
            <option value='2'>選択肢2</option>
            <option value='3'>選択肢3</option>
          </Select>
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor={`${formId}-test-error`}>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Label>
          <SupportText id='test-error-support-text'>サポートテキスト</SupportText>
          <Select
            aria-describedby='test-error-support-text test-error-text'
            aria-invalid={true}
            id={`${formId}-test-error`}
            isError={true}
            name='test-error'
          >
            <option hidden value=''>
              選択してください
            </option>
            <option value='1'>選択肢1</option>
            <option value='2'>選択肢2</option>
            <option value='3'>選択肢3</option>
          </Select>
          <ErrorText id='test-error-text'>＊エラーテキスト</ErrorText>
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor={`${formId}-test-disabled`}>ラベル</Label>
          <SupportText id='test-disabled-support-text'>
            〜の理由により、この項目は無効化されています。
          </SupportText>
          <Select
            aria-describedby='test-disabled-support-text'
            aria-disabled={true}
            id={`${formId}-test-disabled`}
            name='test-disabled'
          >
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
    children: (
      <>
        <option value='1'>選択肢1</option>
        <option value='2'>選択肢2</option>
        <option value='3'>選択肢3</option>
      </>
    ),
  },
};
