import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ErrorText, Legend, RequirementBadge, SupportText } from '../';
import { TiledRadio, TiledRadioItem } from './TiledRadio';

const meta = {
  title: 'Deprecated/TiledRadio',
  component: TiledRadio,
  tags: ['autodocs'],
} satisfies Meta<typeof TiledRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <fieldset className='flex flex-col gap-2'>
          <Legend className='mt-2'>
            ラベル<RequirementBadge isOptional={true}>任意</RequirementBadge>
          </Legend>
          <SupportText className='mt-2' id='test-support-text'>
            サポートテキスト
          </SupportText>
          <div className='flex flex-col gap-4'>
            <TiledRadio aria-describedby='test-support-text' name='x' required>
              <TiledRadioItem description='補足説明' title='選択肢1' />
            </TiledRadio>
            <TiledRadio aria-describedby='test-support-text' name='x' required>
              <TiledRadioItem description='補足説明' title='選択肢2' />
            </TiledRadio>
            <TiledRadio aria-describedby='test-support-text' name='x' required>
              <TiledRadioItem description='補足説明' title='選択肢3' />
            </TiledRadio>
          </div>
        </fieldset>

        <fieldset className='flex flex-col gap-2'>
          <Legend className='mt-2'>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Legend>
          <SupportText className='mt-2' id='test-error-support-text'>
            サポートテキスト
          </SupportText>
          <div className='flex flex-col gap-4'>
            <TiledRadio
              aria-describedby='test-error-text'
              aria-invalid={true}
              isError={true}
              name='y'
            >
              <TiledRadioItem description='補足説明' title='選択肢1' />
            </TiledRadio>
            <TiledRadio
              aria-describedby='test-error-text'
              aria-invalid={true}
              isError={true}
              name='y'
            >
              <TiledRadioItem description='補足説明' title='選択肢2' />
            </TiledRadio>
            <TiledRadio
              aria-describedby='test-error-text'
              aria-invalid={true}
              isError={true}
              name='y'
            >
              <TiledRadioItem description='補足説明' title='選択肢3' />
            </TiledRadio>
          </div>
          <ErrorText aria-live='polite' id='test-error-text' role='alert'>
            ＊エラーテキスト
          </ErrorText>
        </fieldset>

        <fieldset className='flex flex-col gap-2'>
          <Legend className='mt-2' isDisabled={true}>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Legend>
          <SupportText className='mt-2' id='test-disabled-support-text'>
            サポートテキスト
          </SupportText>
          <div className='flex flex-col gap-4'>
            <TiledRadio aria-describedby='test-disabled-support-text' disabled name='z'>
              <TiledRadioItem description='補足説明' isDisabled title='選択肢1' />
            </TiledRadio>
            <TiledRadio aria-describedby='test-disabled-support-text' disabled name='z'>
              <TiledRadioItem description='補足説明' isDisabled title='選択肢2' />
            </TiledRadio>
            <TiledRadio aria-describedby='test-disabled-support-text' disabled name='z'>
              <TiledRadioItem description='補足説明' isDisabled title='選択肢3' />
            </TiledRadio>
          </div>
        </fieldset>
      </div>
    );
  },
};
