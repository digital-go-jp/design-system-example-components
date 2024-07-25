import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { EmergencyBanner } from './EmergencyBanner';
import { EmergencyBannerBody } from './parts/Body';
import { EmergencyBannerHeading } from './parts/Heading';

const meta = {
  title: 'Component/DADS v2/EmergencyBanner/EmergencyBanner',
  component: EmergencyBanner,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component:
          'EmergencyBanner は緊急時バナーにリンク先がない場合に使用します。緊急時バナーにリンク先がある場合は EmergencyBannerWithLink を使用してください。\n\n緊急時バナーは緊急性の高い通知のため、すべてのユーザーが確実に認知できる必要があります。そのため`body`要素や`main`要素内の先頭など、できるだけページの先頭に近い場所に配置してください。',
      },
    },
  },
} satisfies Meta<typeof EmergencyBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
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
        </EmergencyBannerBody>
      </>
    ),
  },
};

export const Example = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <EmergencyBanner>
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
          </EmergencyBannerBody>
        </EmergencyBanner>
      </div>
    );
  },
};
