import type { Meta, StoryObj } from '@storybook/react-vite';
import { Ul } from '../';
import { Ol } from './Ol';

const meta = {
  id: 'Component/DADS v2/Ol',
  title: 'Component/リスト/Ol',
  component: Ol,
  tags: ['autodocs'],
} satisfies Meta<typeof Ol>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Spacing4: Story = {
  render: () => {
    return (
      <Ol className='[&_:where(ol,ul)]:mt-1 [&_:where(ol,ul)]:-mb-1 [&_li]:py-1'>
        <li>サンプルサンプル</li>
        <li>サンプルサンプル</li>
        <li>サンプルサンプル</li>
        <li>
          サンプルサンプル
          <Ol>
            <li>サンプルサンプル</li>
            <li>サンプルサンプル</li>
            <li>サンプルサンプル</li>
            <li>
              サンプルサンプル
              <Ol>
                <li>サンプルサンプル</li>
                <li>サンプルサンプル</li>
                <li>サンプルサンプル</li>
                <li>サンプルサンプル</li>
              </Ol>
            </li>
            <li>サンプルサンプル</li>
          </Ol>
        </li>
        <li>サンプルサンプル</li>
      </Ol>
    );
  },
};

export const Spacing8: Story = {
  render: () => {
    return (
      <Ol className='[&_:where(ol,ul)]:mt-2 [&_:where(ol,ul)]:-mb-2 [&_li]:py-2'>
        <li>サンプルサンプル</li>
        <li>サンプルサンプル</li>
        <li>サンプルサンプル</li>
        <li>
          サンプルサンプル
          <Ol>
            <li>サンプルサンプル</li>
            <li>サンプルサンプル</li>
            <li>サンプルサンプル</li>
            <li>
              サンプルサンプル
              <Ol>
                <li>サンプルサンプル</li>
                <li>サンプルサンプル</li>
                <li>サンプルサンプル</li>
                <li>サンプルサンプル</li>
              </Ol>
            </li>
            <li>サンプルサンプル</li>
          </Ol>
        </li>
        <li>サンプルサンプル</li>
      </Ol>
    );
  },
};

export const Spacing12: Story = {
  render: () => {
    return (
      <Ol className='[&_:where(ol,ul)]:mt-3 [&_:where(ol,ul)]:-mb-3 [&_li]:py-3'>
        <li>サンプルサンプル</li>
        <li>サンプルサンプル</li>
        <li>サンプルサンプル</li>
        <li>
          サンプルサンプル
          <Ol>
            <li>サンプルサンプル</li>
            <li>サンプルサンプル</li>
            <li>サンプルサンプル</li>
            <li>
              サンプルサンプル
              <Ol>
                <li>サンプルサンプル</li>
                <li>サンプルサンプル</li>
                <li>サンプルサンプル</li>
                <li>サンプルサンプル</li>
              </Ol>
            </li>
            <li>サンプルサンプル</li>
          </Ol>
        </li>
        <li>サンプルサンプル</li>
      </Ol>
    );
  },
};

export const WithLowerLatin: Story = {
  render: () => {
    return (
      <Ol className='[&_:where(ol,ul)]:mt-1 [&_:where(ol,ul)]:-mb-1 [&_li]:py-1'>
        <li>サンプルサンプル</li>
        <li>サンプルサンプル</li>
        <li>サンプルサンプル</li>
        <li>
          サンプルサンプル
          <Ol className='list-lower-latin'>
            <li>サンプルサンプル</li>
            <li>サンプルサンプル</li>
            <li>サンプルサンプル</li>
            <li>サンプルサンプル</li>
          </Ol>
        </li>
        <li>サンプルサンプル</li>
      </Ol>
    );
  },
};

export const WithUnorderedList: Story = {
  render: () => {
    return (
      <Ol className='[&_:where(ol,ul)]:mt-1 [&_:where(ol,ul)]:-mb-1 [&_li]:py-1'>
        <li>サンプルサンプル</li>
        <li>サンプルサンプル</li>
        <li>サンプルサンプル</li>
        <li>
          サンプルサンプル
          <Ul>
            <li>サンプルサンプル</li>
            <li>サンプルサンプル</li>
            <li>サンプルサンプル</li>
            <li>サンプルサンプル</li>
          </Ul>
        </li>
        <li>サンプルサンプル</li>
      </Ol>
    );
  },
};
