import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Pagination,
  PaginationCurrent,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationNext,
  PaginationPrev,
} from './Pagination';

const meta = {
  id: 'Component/DADS v1/Pagination',
  title: 'Component/DADS v1/ページネーション',
  component: Pagination,
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    const total = 100;
    const itemsPerPage = 10;
    const maxPage = Math.ceil(total / itemsPerPage);

    return (
      <Pagination>
        <PaginationFirst href='#' />
        <PaginationPrev href='#' />
        <PaginationEllipsis />
        <PaginationItem href='#'>2</PaginationItem>
        <PaginationItem href='#'>3</PaginationItem>
        <PaginationItem href='#'>4</PaginationItem>
        <PaginationCurrent current={5} max={maxPage} />
        <PaginationItem href='#'>6</PaginationItem>
        <PaginationItem href='#'>7</PaginationItem>
        <PaginationItem href='#'>8</PaginationItem>
        <PaginationEllipsis />
        <PaginationNext href='#' />
        <PaginationLast href='#' />
      </Pagination>
    );
  },
};

export const Simple: Story = {
  render: () => {
    const total = 100;
    const itemsPerPage = 10;
    const maxPage = Math.ceil(total / itemsPerPage);

    return (
      <Pagination>
        <PaginationFirst href='#' />
        <PaginationPrev href='#' />
        <PaginationCurrent current={5} max={maxPage} />
        <PaginationNext href='#' />
        <PaginationLast href='#' />
      </Pagination>
    );
  },
};

export const UseSimpleForMobileOnly: Story = {
  render: () => {
    const total = 100;
    const itemsPerPage = 10;
    const maxPage = Math.ceil(total / itemsPerPage);

    return (
      <Pagination>
        <PaginationFirst href='#' />
        <PaginationPrev href='#' />
        <PaginationEllipsis className='hidden desktop:block' />
        <PaginationItem className='hidden desktop:flex' href='#'>
          2
        </PaginationItem>
        <PaginationItem className='hidden desktop:flex' href='#'>
          3
        </PaginationItem>
        <PaginationItem className='hidden desktop:flex' href='#'>
          4
        </PaginationItem>
        <PaginationCurrent current={5} max={maxPage} />
        <PaginationItem className='hidden desktop:flex' href='#'>
          6
        </PaginationItem>
        <PaginationItem className='hidden desktop:flex' href='#'>
          7
        </PaginationItem>
        <PaginationItem className='hidden desktop:flex' href='#'>
          8
        </PaginationItem>
        <PaginationEllipsis className='hidden desktop:block' />
        <PaginationNext href='#' />
        <PaginationLast href='#' />
      </Pagination>
    );
  },
};
