import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ErrorText, Legend, RequirementBadge, SupportText } from '../';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Component/DADS v2/Checkbox',
  component: Checkbox,
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <fieldset className='flex flex-col'>
          <Legend className='mt-2'>
            ラベル<RequirementBadge isOptional={true}>※任意</RequirementBadge>
          </Legend>
          <SupportText className='mt-2' id='test-support-text'>
            サポートテキスト
          </SupportText>
          <div className='flex flex-col'>
            <Checkbox aria-describedby='test-support-text' name='w'>
              選択肢1
            </Checkbox>
            <Checkbox aria-describedby='test-support-text' name='w'>
              選択肢2
            </Checkbox>
            <Checkbox aria-describedby='test-support-text' name='w'>
              選択肢3
            </Checkbox>
          </div>
        </fieldset>

        <fieldset className='flex flex-col'>
          <Legend className='mt-2'>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Legend>
          <SupportText className='mt-2' id='test-inline-support-text'>
            サポートテキスト
          </SupportText>
          <div className='flex gap-8'>
            <Checkbox aria-describedby='test-inline-support-text' name='x'>
              選択肢1
            </Checkbox>
            <Checkbox aria-describedby='test-inline-support-text' name='x'>
              選択肢2
            </Checkbox>
            <Checkbox aria-describedby='test-inline-support-text' name='x'>
              選択肢3
            </Checkbox>
          </div>
        </fieldset>

        <fieldset className='flex flex-col'>
          <Legend className='mt-2'>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Legend>
          <SupportText className='mt-2' id='test-error-support-text'>
            サポートテキスト
          </SupportText>
          <div className='flex flex-col'>
            <Checkbox
              aria-describedby='test-error-support-text test-error-text'
              isError={true}
              name='y'
            >
              選択肢1
            </Checkbox>
            <Checkbox
              aria-describedby='test-error-support-text test-error-text'
              isError={true}
              name='y'
            >
              選択肢2
            </Checkbox>
            <Checkbox
              aria-describedby='test-error-support-text test-error-text'
              isError={true}
              name='y'
            >
              選択肢3
            </Checkbox>
          </div>
          <ErrorText className='mt-2' id='test-error-text'>
            ＊エラーテキスト
          </ErrorText>
        </fieldset>

        <fieldset className='flex flex-col gap-2'>
          <Legend className='mt-2'>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Legend>
          <SupportText className='mt-2' id='test-disabled-support-text'>
            〜の理由により、この項目は無効化されています。
          </SupportText>
          <div className='flex flex-col'>
            <Checkbox aria-describedby='test-disabled-support-text' aria-disabled={true} name='z'>
              選択肢1
            </Checkbox>
            <Checkbox
              aria-describedby='test-disabled-support-text'
              checked
              aria-disabled={true}
              name='z'
            >
              選択肢2
            </Checkbox>
            <Checkbox aria-describedby='test-disabled-support-text' aria-disabled={true} name='z'>
              選択肢3
            </Checkbox>
          </div>
        </fieldset>
      </div>
    );
  },
};
