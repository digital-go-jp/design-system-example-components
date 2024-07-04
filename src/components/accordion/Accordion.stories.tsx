import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Accordion, AccordionDefaultIcon, AccordionSummary } from './Accordion';

const meta = {
  title: 'Component/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <>
        <div className='flex flex-col'>
          <Accordion>
            <AccordionSummary className='p-2'>
              <h3>ダミーテキストはどのような場合に使用されますか。</h3>
              <AccordionDefaultIcon />
            </AccordionSummary>
            <div className='px-2 py-4'>
              これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
            </div>
          </Accordion>

          <Accordion>
            <AccordionSummary className='p-2'>
              <h3>ダミーテキストはどのような場合に使用されますか。</h3>
              <AccordionDefaultIcon />
            </AccordionSummary>
            <div className='px-2 py-4'>
              これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
            </div>
          </Accordion>
        </div>
      </>
    );
  },
};

export const Compact: Story = {
  render: () => {
    return (
      <>
        <h2 className='mb-8 text-std-32B-5'>コンパクトなアコーディオン</h2>
        <div className='flex w-96 flex-col text-std-16N-7 [&>*]:border-b [&>*]:border-solid-grey-420'>
          <Accordion>
            <AccordionSummary className='p-1'>
              <h3 className='font-medium'>ダミーテキストはどのような場合に使用されますか。</h3>
              <AccordionDefaultIcon className='size-7' />
            </AccordionSummary>
            <div className='px-1 py-2'>
              これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
            </div>
          </Accordion>

          <Accordion>
            <AccordionSummary className='p-1'>
              <h3 className='font-medium'>ダミーテキストはどのような場合に使用されますか。</h3>
              <AccordionDefaultIcon className='size-7' />
            </AccordionSummary>
            <div className='px-1 py-2'>
              これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
            </div>
          </Accordion>

          <Accordion>
            <AccordionSummary className='p-1'>
              <h3 className='font-medium'>ダミーテキストはどのような場合に使用されますか。</h3>
              <AccordionDefaultIcon className='size-7' />
            </AccordionSummary>
            <div className='px-1 py-2'>
              これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
            </div>
          </Accordion>
        </div>
      </>
    );
  },
};
