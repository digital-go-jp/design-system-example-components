import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ErrorText, Legend, RequirementBadge, SupportText } from '../';
import { Radio } from './Radio';

const meta = {
  title: 'Component/Radio',
  component: Radio,
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <fieldset className='flex flex-col'>
          <Legend className='mt-2'>
            ラベル<RequirementBadge isOptional={true}>任意</RequirementBadge>
          </Legend>
          <SupportText className='mt-2' id='test-support-text'>
            サポートテキスト
          </SupportText>
          <div className='flex flex-col'>
            <Radio aria-describedby='test-support-text' name='x'>
              選択肢1
            </Radio>
            <Radio aria-describedby='test-support-text' name='x'>
              選択肢2
            </Radio>
            <Radio aria-describedby='test-support-text' name='x'>
              選択肢3
            </Radio>
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
            <Radio
              aria-describedby='test-error-text'
              aria-invalid={true}
              isError={true}
              name='y'
              required
            >
              選択肢1
            </Radio>
            <Radio
              aria-describedby='test-error-text'
              aria-invalid={true}
              isError={true}
              name='y'
              required
            >
              選択肢2
            </Radio>
            <Radio
              aria-describedby='test-error-text'
              aria-invalid={true}
              isError={true}
              name='y'
              required
            >
              選択肢3
            </Radio>
          </div>
          <ErrorText aria-live='polite' className='mt-2' id='test-error-text' role='alert'>
            ＊エラーテキスト
          </ErrorText>
        </fieldset>

        <fieldset className='flex flex-col'>
          <Legend className='mt-2' isDisabled={true}>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Legend>
          <SupportText className='mt-2' id='test-disabled-support-text'>
            サポートテキスト
          </SupportText>
          <div className='flex flex-col'>
            <Radio aria-describedby='test-disabled-support-text' disabled name='z'>
              選択肢1
            </Radio>
            <Radio aria-describedby='test-disabled-support-text' disabled name='z'>
              選択肢2
            </Radio>
            <Radio aria-describedby='test-disabled-support-text' disabled name='z'>
              選択肢3
            </Radio>
          </div>
        </fieldset>
      </div>
    );
  },
};
