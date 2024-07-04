import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Accordion,
  AccordionDefaultIcon,
  AccordionDefaultIconWrapper,
  AccordionSummary,
} from './Accordion';

const meta = {
  title: 'Component/DADS v2/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const focusVisibleStyles =
  'focus-visible:rounded focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:outline-black focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300';

export const Example: Story = {
  render: () => {
    const focusTargetRef1 = React.useRef<HTMLParagraphElement>(null);
    const focusTargetRef2 = React.useRef<HTMLHeadingElement>(null);
    const focusTargetRef3 = React.useRef<HTMLParagraphElement>(null);
    return (
      <>
        <div className='flex flex-col'>
          <Accordion
            onToggle={(e) => {
              if (e.currentTarget.open) {
                focusTargetRef1?.current?.focus();
              }
            }}
          >
            <AccordionSummary>
              <h3>ダミーテキストはどのような場合に使用されますか。</h3>
              <AccordionDefaultIconWrapper>
                <AccordionDefaultIcon />
              </AccordionDefaultIconWrapper>
            </AccordionSummary>
            <div className='px-1 py-2 desktop:px-2 desktop:py-4'>
              <p className={`mb-4 ${focusVisibleStyles}`} ref={focusTargetRef1} tabIndex={-1}>
                これはダミーテキストです。
              </p>
              <p>
                ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
              </p>
            </div>
          </Accordion>

          <Accordion
            onToggle={(e) => {
              if (e.currentTarget.open) {
                focusTargetRef2?.current?.focus();
              }
            }}
          >
            <AccordionSummary>
              <h3>
                ダミーテキストはどのような場合に使用されますか。ダミーテキストはどのような場合に使用されますか。ダミーテキストはどのような場合に使用されますか。
              </h3>
              <AccordionDefaultIconWrapper>
                <AccordionDefaultIcon />
              </AccordionDefaultIconWrapper>
            </AccordionSummary>
            <div
              className={`px-1 py-2 desktop:px-2 desktop:py-4 ${focusVisibleStyles}`}
              ref={focusTargetRef2}
              tabIndex={-1}
            >
              これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
            </div>
          </Accordion>

          <Accordion
            onToggle={(e) => {
              if (e.currentTarget.open) {
                focusTargetRef3?.current?.focus();
              }
            }}
          >
            <AccordionSummary>
              <h3>ダミーテキストはどのような場合に使用されますか。</h3>
              <AccordionDefaultIconWrapper>
                <AccordionDefaultIcon />
              </AccordionDefaultIconWrapper>
            </AccordionSummary>
            <div className='px-1 py-2 desktop:px-2 desktop:py-4'>
              <p className={`mb-4 ${focusVisibleStyles}`} ref={focusTargetRef3} tabIndex={-1}>
                これはダミーテキストです。
              </p>
              <p className='mb-4'>
                ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。
              </p>
              <p>
                ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
              </p>
            </div>
          </Accordion>
        </div>
      </>
    );
  },
};

export const WithSquareIcon: Story = {
  render: () => {
    const focusTargetRef1 = React.useRef<HTMLHeadingElement>(null);
    const focusTargetRef2 = React.useRef<HTMLDivElement>(null);
    const focusTargetRef3 = React.useRef<HTMLParagraphElement>(null);

    return (
      <>
        <div className='flex flex-col'>
          <Accordion
            onToggle={(e) => {
              if (e.currentTarget.open) {
                focusTargetRef1?.current?.focus();
              }
            }}
          >
            <AccordionSummary>
              <h3>ダミーテキストはどのような場合に使用されますか。</h3>
              <AccordionDefaultIconWrapper shapeStyle='square'>
                <AccordionDefaultIcon />
              </AccordionDefaultIconWrapper>
            </AccordionSummary>
            <div className='px-1 py-2 desktop:px-2 desktop:py-4'>
              <h4
                className={`md:text-std-20B-6 mb-4 ${focusVisibleStyles}`}
                ref={focusTargetRef1}
                tabIndex={-1}
              >
                これはダミーテキストです。
              </h4>
              ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
            </div>
          </Accordion>

          <Accordion
            onToggle={(e) => {
              if (e.currentTarget.open) {
                focusTargetRef2?.current?.focus();
              }
            }}
          >
            <AccordionSummary>
              <h3>
                ダミーテキストはどのような場合に使用されますか。ダミーテキストはどのような場合に使用されますか。ダミーテキストはどのような場合に使用されますか。
              </h3>
              <AccordionDefaultIconWrapper shapeStyle='square'>
                <AccordionDefaultIcon />
              </AccordionDefaultIconWrapper>
            </AccordionSummary>
            <div
              className={`px-1 py-2 desktop:px-2 desktop:py-4 ${focusVisibleStyles}`}
              ref={focusTargetRef2}
              tabIndex={-1}
            >
              これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
            </div>
          </Accordion>

          <Accordion
            onToggle={(e) => {
              if (e.currentTarget.open) {
                focusTargetRef3?.current?.focus();
              }
            }}
          >
            <AccordionSummary>
              <h3>ダミーテキストはどのような場合に使用されますか。</h3>
              <AccordionDefaultIconWrapper shapeStyle='square'>
                <AccordionDefaultIcon />
              </AccordionDefaultIconWrapper>
            </AccordionSummary>
            <div className='px-1 py-2 desktop:px-2 desktop:py-4'>
              <p className={`mb-4 ${focusVisibleStyles}`} ref={focusTargetRef3} tabIndex={-1}>
                これはダミーテキストです。
              </p>
              <p>
                ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
              </p>
            </div>
          </Accordion>
        </div>
      </>
    );
  },
};
