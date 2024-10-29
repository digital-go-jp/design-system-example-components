import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ErrorText, Legend, RequirementBadge, SupportText } from '../';
import { Radio } from './Radio';

const meta = {
  title: 'Component/DADS v2/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    size: {
      type: 'string',
      description: 'ラジオボタンのサイズを以下から選択します。',
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      table: {
        defaultValue: { summary: 'sm' },
        type: { summary: "'sm' | 'md' | 'lg'" },
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
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: 'sm',
    'aria-disabled': false,
    isError: false,
    children: '選択肢',
  },
};

export const Stacked: Story = {
  render: () => (
    <div className='flex gap-8'>
      <fieldset>
        <Legend>
          ラベル<RequirementBadge>※必須</RequirementBadge>
        </Legend>
        <SupportText className='mt-2' id='stacked-1-support-text'>
          サポートテキスト
        </SupportText>
        <div className='mt-1 flex flex-col'>
          <Radio aria-describedby='stacked-1-support-text' name='a'>
            選択肢1
          </Radio>
          <Radio aria-describedby='stacked-1-support-text' name='a'>
            選択肢2
          </Radio>
          <Radio aria-describedby='stacked-1-support-text' name='a'>
            選択肢3
          </Radio>
        </div>
      </fieldset>
      <fieldset>
        <Legend>
          ラベル<RequirementBadge>※必須</RequirementBadge>
        </Legend>
        <SupportText className='mt-2' id='stacked-2-support-text'>
          サポートテキスト
        </SupportText>
        <div className='mt-2 flex flex-col gap-2'>
          <Radio size='md' aria-describedby='stacked-2-support-text' name='b'>
            選択肢1
          </Radio>
          <Radio size='md' aria-describedby='stacked-2-support-text' name='b'>
            選択肢2
          </Radio>
          <Radio size='md' aria-describedby='stacked-2-support-text' name='b'>
            選択肢3
          </Radio>
        </div>
      </fieldset>
      <fieldset>
        <Legend>
          ラベル<RequirementBadge>※必須</RequirementBadge>
        </Legend>
        <SupportText className='mt-2' id='stacked-3-support-text'>
          サポートテキスト
        </SupportText>
        <div className='mt-3 flex flex-col gap-2'>
          <Radio size='lg' aria-describedby='stacked-3-support-text' name='c'>
            選択肢1
          </Radio>
          <Radio size='lg' aria-describedby='stacked-3-support-text' name='c'>
            選択肢2
          </Radio>
          <Radio size='lg' aria-describedby='stacked-3-support-text' name='c'>
            選択肢3
          </Radio>
        </div>
      </fieldset>
    </div>
  ),
};

export const Inline: Story = {
  render: () => (
    <div className='flex flex-col gap-16'>
      <fieldset>
        <Legend>
          ラベル<RequirementBadge>※必須</RequirementBadge>
        </Legend>
        <SupportText className='mt-2' id='inline-1-support-text'>
          サポートテキスト
        </SupportText>
        <div className='mt-1 flex flex-wrap gap-x-4'>
          <Radio aria-describedby='inline-1-support-text' name='d'>
            選択肢1
          </Radio>
          <Radio aria-describedby='inline-1-support-text' name='d'>
            選択肢2
          </Radio>
          <Radio aria-describedby='inline-1-support-text' name='d'>
            選択肢3
          </Radio>
        </div>
      </fieldset>
      <fieldset>
        <Legend>
          ラベル<RequirementBadge>※必須</RequirementBadge>
        </Legend>
        <SupportText className='mt-2' id='inline-2-support-text'>
          サポートテキスト
        </SupportText>
        <div className='mt-2 flex flex-wrap gap-x-8 gap-y-2'>
          <Radio size='md' aria-describedby='inline-2-support-text' name='e'>
            選択肢1
          </Radio>
          <Radio size='md' aria-describedby='inline-2-support-text' name='e'>
            選択肢2
          </Radio>
          <Radio size='md' aria-describedby='inline-2-support-text' name='e'>
            選択肢3
          </Radio>
        </div>
      </fieldset>
      <fieldset>
        <Legend>
          ラベル<RequirementBadge>※必須</RequirementBadge>
        </Legend>
        <SupportText className='mt-2' id='inline-3-support-text'>
          サポートテキスト
        </SupportText>
        <div className='mt-3 flex flex-wrap gap-10 gap-y-2'>
          <Radio size='lg' aria-describedby='inline-3-support-text' name='f'>
            選択肢1
          </Radio>
          <Radio size='lg' aria-describedby='inline-3-support-text' name='f'>
            選択肢2
          </Radio>
          <Radio size='lg' aria-describedby='inline-3-support-text' name='f'>
            選択肢3
          </Radio>
        </div>
      </fieldset>
    </div>
  ),
};

export const Errored: Story = {
  render: () => {
    return (
      <div className='flex flex-col gap-16'>
        <fieldset>
          <Legend>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Legend>
          <SupportText className='mt-2' id='error-1-support-text'>
            サポートテキスト
          </SupportText>
          <div className='mt-1 flex flex-col'>
            <Radio aria-describedby='error-1-support-text error-1-text' isError={true} name='g'>
              選択肢1
            </Radio>
            <Radio
              aria-describedby='error-1-support-text error-1-text'
              isError={true}
              name='g'
              defaultChecked
            >
              選択肢2
            </Radio>
            <Radio aria-describedby='error-1-support-text error-1-text' isError={true} name='g'>
              選択肢3
            </Radio>
          </div>
          <ErrorText className='mt-2' id='error-1-text'>
            ＊エラーテキストが入ります。
          </ErrorText>
        </fieldset>
        <fieldset>
          <Legend>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Legend>
          <SupportText className='mt-2' id='error-2-support-text'>
            サポートテキスト
          </SupportText>
          <div className='mt-1 flex flex-wrap gap-x-4'>
            <Radio aria-describedby='error-2-support-text error-2-text' isError={true} name='h'>
              選択肢1
            </Radio>
            <Radio
              aria-describedby='error-2-support-text error-2-text'
              isError={true}
              name='h'
              defaultChecked
            >
              選択肢2
            </Radio>
            <Radio aria-describedby='error-2-support-text error-2-text' isError={true} name='h'>
              選択肢3
            </Radio>
          </div>
          <ErrorText className='mt-2' id='error-2-text'>
            ＊エラーテキストが入ります。
          </ErrorText>
        </fieldset>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <div className='flex flex-col gap-16'>
        <fieldset>
          <Legend>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Legend>
          <SupportText className='mt-2' id='disabled-1-support-text'>
            〜の理由により、この項目は無効化されています。
          </SupportText>
          <div className='mt-1 flex flex-col'>
            <Radio aria-describedby='disabled-1-support-text' aria-disabled={true} name='i'>
              選択肢1
            </Radio>
            <Radio
              aria-describedby='disabled-1-support-text'
              aria-disabled={true}
              name='i'
              defaultChecked
            >
              選択肢2
            </Radio>
            <Radio aria-describedby='disabled-1-support-text' aria-disabled={true} name='i'>
              選択肢3
            </Radio>
          </div>
        </fieldset>
        <fieldset>
          <Legend>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Legend>
          <SupportText className='mt-2' id='disabled-2-support-text'>
            〜の理由により、この項目は無効化されています。
          </SupportText>
          <div className='mt-1 flex flex-wrap gap-x-4'>
            <Radio aria-describedby='disabled-2-support-text' aria-disabled={true} name='j'>
              選択肢1
            </Radio>
            <Radio
              aria-describedby='disabled-2-support-text'
              aria-disabled={true}
              name='j'
              defaultChecked
            >
              選択肢2
            </Radio>
            <Radio aria-describedby='disabled-2-support-text' aria-disabled={true} name='j'>
              選択肢3
            </Radio>
          </div>
        </fieldset>
      </div>
    );
  },
};
