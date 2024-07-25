import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BreadcrumbItem, BreadcrumbLink, Breadcrumbs } from './Breadcrumbs';

const meta = {
  title: 'Component/DADS v2/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <Breadcrumbs>
        <BreadcrumbItem>
          <BreadcrumbLink href='#' key='home'>
            ホーム
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href='#' key='organization'>
            組織情報
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href='#' key='a'>
            長いページタイトルが入ります長いページタイトルが入ります
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href='#' key='b'>
            長いページタイトルが入ります長いページタイトルが入ります
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrent>
          長いページタイトルが入ります長いページタイトルが入ります
        </BreadcrumbItem>
      </Breadcrumbs>
    );
  },
};

export const WithHomeIcon: Story = {
  render: () => {
    return (
      <Breadcrumbs>
        <BreadcrumbItem>
          <BreadcrumbLink className='inline-flex items-center gap-1' href='#' key='home'>
            <svg aria-hidden={true} fill='none' height='16' viewBox='0 0 16 16' width='16'>
              <g>
                <path
                  d='M3 13.6666V6.16667L7.99998 2.40387L13 6.16667V13.6666H9.26922V9.2051H6.73075V13.6666H3Z'
                  fill='currentColor'
                />
              </g>
            </svg>
            ホーム
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href='#' key='organization'>
            組織情報
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href='#' key='a'>
            長いページタイトルが入ります長いページタイトルが入ります
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href='#' key='b'>
            長いページタイトルが入ります長いページタイトルが入ります
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrent>
          長いページタイトルが入ります長いページタイトルが入ります
        </BreadcrumbItem>
      </Breadcrumbs>
    );
  },
};
