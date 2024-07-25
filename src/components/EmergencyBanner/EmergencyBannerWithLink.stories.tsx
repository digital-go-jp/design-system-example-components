import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { EmergencyBannerWithLink } from './EmergencyBannerWithLink';
import { EmergencyBannerBody } from './parts/Body';
import { EmergencyBannerButton } from './parts/Button';
import { EmergencyBannerHeading } from './parts/Heading';

const meta = {
  title: 'Component/DADS v2/EmergencyBanner/EmergencyBannerWithLink',
  component: EmergencyBannerWithLink,
  tags: ['autodocs'],
  argTypes: {
    href: {
      description: '緊急時バナーのリンク先URLを設定します。',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'EmergencyBannerWithLink は緊急時バナーにリンク先がある場合に使用します。\n\n※ 緊急時バナー全体がリンクとなるため、バナータイトルやボタンにそれぞれ異なるリンクを持たせることはできません。',
      },
    },
  },
} satisfies Meta<typeof EmergencyBannerWithLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    href: 'https://design.digital.go.jp/',
    target: '_blank',
    children: (
      <>
        <EmergencyBannerHeading id='playground-heading-id' level='h2'>
          バナータイトル
        </EmergencyBannerHeading>
        <EmergencyBannerBody>
          <div className='flex flex-col gap-2 desktop:gap-4'>
            <p className='text-std-16N-7'>年月日</p>
            <p className='text-std-16N-7 desktop:text-std-20N-5'>バナーデスクリプション</p>
          </div>
          <EmergencyBannerButton>ラベル</EmergencyBannerButton>
        </EmergencyBannerBody>
      </>
    ),
  },
};

export const Example = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <EmergencyBannerWithLink href='#' target='_blank'>
          <EmergencyBannerHeading level='h2'>
            〇〇地区に避難準備情報が発令されました
          </EmergencyBannerHeading>
          <EmergencyBannerBody>
            <div className='flex flex-col gap-2 desktop:gap-4'>
              <p className='text-std-16N-7'>
                <time dateTime='2024-01-01T06:00'>2024年1月1日 06:00更新</time>
              </p>
              <p className='text-std-16N-7 desktop:text-std-20N-5'>
                1時23分に○○地区に対して避難準備情報が発令されました。お年寄りの方等避難に時間がかかる方は、直ちに指定避難所へ避難してください。
              </p>
            </div>
            <EmergencyBannerButton>指定避難所を確認する</EmergencyBannerButton>
          </EmergencyBannerBody>
        </EmergencyBannerWithLink>
      </div>
    );
  },
};
