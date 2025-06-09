import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { ErrorText, Label, RequirementBadge, SupportText } from '../';
import { Textarea } from './Textarea';

const meta = {
  id: 'Component/DADS v2/Textarea',
  title: 'Component/テキストエリア',
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
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export type TextareaCounterProps = {
  count: number;
  maxCount: number;
  className?: string;
  id?: string;
};

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
          <Textarea
            aria-describedby='error-support-text error-text'
            aria-invalid={true}
            defaultValue=''
            id={`${formId}-error`}
            isError={true}
            name='error'
            required
          />
          <ErrorText id='error-text'>＊エラーテキスト</ErrorText>
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor={`${formId}-filled-error`}>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Label>
          <SupportText id='filled-error-support-text'>サポートテキスト</SupportText>
          <Textarea
            aria-describedby='filled-error-support-text filled-error-text'
            aria-invalid={true}
            defaultValue='入力済の内容が入ります。入力済の内容が入ります。入力済の内容が入ります。'
            id={`${formId}-filled-error`}
            isError={true}
            name='filled-error'
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
          <Textarea
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

export const WithFieldSizing: Story = {
  render: () => {
    const formId = React.useId();

    return (
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col items-start gap-2'>
          <Label htmlFor={`${formId}-field-sizing`}>field-sizing を使用したテキストエリア</Label>
          <SupportText id='field-sizing-support-text'>
            field-sizing: content
            を使用し、内容に応じて高さが3行〜10行まで可変するテキストエリアの例
          </SupportText>
          <Textarea
            aria-describedby='field-sizing-support-text'
            className='[field-sizing:content] w-96 min-h-[calc(3lh+2rem+2px)] max-h-[calc(10lh+2rem+2px)]'
            id={`${formId}-field-sizing`}
            name='field-sizing'
          />
        </div>
      </div>
    );
  },
};

export const WithColsAndRowsAttribute: Story = {
  render: () => {
    const formId = React.useId();

    return (
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col items-start gap-2'>
          <Label htmlFor={`${formId}-rows`}>cols, rows 属性を使用したテキストエリア</Label>
          <SupportText id='rows-support-text'>
            cols 属性の値に30、rows 属性の値に4を指定したテキストエリアの例
          </SupportText>
          <Textarea
            aria-describedby='rows-support-text'
            id={`${formId}-rows`}
            name='rows'
            rows={4}
            cols={30}
          />
        </div>
      </div>
    );
  },
};
