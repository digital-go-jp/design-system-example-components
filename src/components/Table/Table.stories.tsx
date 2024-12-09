import { Description, Stories, Subtitle, Title } from '@storybook/blocks';
import React from 'react';
import { Ol } from '../';

const meta = {
  title: 'Component/DADS v2/Table',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Stories />
        </>
      ),
      description: {
        component:
          'テーブル用のコンポーネントは用意していません。`table`, `caption`, `thead`, `tbody` `tr`, `th`, `td` などの HTML 要素を用いて実装してください。\n\n実装例は以下のサンプルを参照してください。',
      },
    },
  },
};

export default meta;

export const FirstRowAsHeaderCell = {
  render: () => {
    return (
      <div className='overflow-x-auto'>
        <table className='w-full min-w-max'>
          <caption className='text-left py-4 font-bold'>1行目が見出しセル</caption>
          <thead>
            <tr>
              <th
                className='px-4 py-6 border-b border-black bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
              <th
                className='px-4 py-6 border-b border-black bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
              <th
                className='px-4 py-6 border-b border-black bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
              <th
                className='px-4 py-6 border-b border-black bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
              <th
                className='px-4 py-6 border-b border-black bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
              <th
                className='px-4 py-6 border-b border-black bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
            </tr>
            <tr>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
            </tr>
            <tr>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  },
};

export const FirstColumnAsHeaderCell = {
  render: () => {
    return (
      <div className='overflow-x-auto'>
        <table className='w-full min-w-max'>
          <caption className='text-left py-4 font-bold'>1列目が見出しセル</caption>
          <tbody>
            <tr>
              <th
                className='px-4 py-6 border-r border-black bg-solid-gray-50 text-left'
                scope='row'
              >
                ラベル
              </th>
              <td className='px-4 py-6 border-r border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-r border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-r border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-r border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-r border-solid-gray-420'>データ</td>
            </tr>
            <tr>
              <th
                className='px-4 py-6 border-r border-black bg-solid-gray-50 text-left'
                scope='row'
              >
                ラベル
              </th>
              <td className='px-4 py-6 border-r border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-r border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-r border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-r border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-r border-solid-gray-420'>データ</td>
            </tr>
            <tr>
              <th
                className='px-4 py-6 border-r border-black bg-solid-gray-50 text-left'
                scope='row'
              >
                ラベル
              </th>
              <td className='px-4 py-6 border-r border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-r border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-r border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-r border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-r border-solid-gray-420'>データ</td>
            </tr>
            <tr>
              <th
                className='px-4 py-6 border-r border-black bg-solid-gray-50 text-left'
                scope='row'
              >
                ラベル
              </th>
              <td className='px-4 py-6 border-r border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-r border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-r border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-r border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-r border-solid-gray-420'>データ</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  },
};

export const FirstRowAndColumnAsHeaderCell = {
  render: () => {
    return (
      <div className='overflow-x-auto'>
        <table className='w-full min-w-max'>
          <caption className='text-left py-4 font-bold'>1行目と1列目の両方が見出しセル</caption>
          <thead>
            <tr>
              <td className='px-4 py-6 border-r border-b border-solid-gray-420 bg-solid-gray-50'></td>
              <th
                className='px-4 py-6 border-b border-solid-gray-420 bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
              <th
                className='px-4 py-6 border-b border-solid-gray-420 bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
              <th
                className='px-4 py-6 border-b border-solid-gray-420 bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
              <th
                className='px-4 py-6 border-b border-solid-gray-420 bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
              <th
                className='px-4 py-6 border-b border-solid-gray-420 bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                className='px-4 py-6 border-r border-b border-solid-gray-420 bg-solid-gray-50 text-left'
                scope='row'
              >
                ラベル
              </th>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
            </tr>
            <tr>
              <th
                className='px-4 py-6 border-r border-b border-solid-gray-420 bg-solid-gray-50 text-left'
                scope='row'
              >
                ラベル
              </th>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
            </tr>
            <tr>
              <th
                className='px-4 py-6 border-r border-b border-solid-gray-420 bg-solid-gray-50 text-left'
                scope='row'
              >
                ラベル
              </th>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  },
};

export const CondensedTable = {
  render: () => {
    return (
      <div className='overflow-x-auto'>
        <table className='w-full min-w-max'>
          <caption className='text-left py-4 font-bold'>セルの高さが狭いテーブル</caption>
          <thead>
            <tr>
              <th
                className='px-4 py-2 border-b border-black bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
              <th
                className='px-4 py-2 border-b border-black bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
              <th
                className='px-4 py-2 border-b border-black bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
              <th
                className='px-4 py-2 border-b border-black bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
              <th
                className='px-4 py-2 border-b border-black bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
              <th
                className='px-4 py-2 border-b border-black bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='px-4 py-2 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-2 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-2 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-2 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-2 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-2 border-b border-solid-gray-420'>データ</td>
            </tr>
            <tr>
              <td className='px-4 py-2 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-2 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-2 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-2 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-2 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-2 border-b border-solid-gray-420'>データ</td>
            </tr>
            <tr>
              <td className='px-4 py-2 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-2 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-2 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-2 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-2 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-2 border-b border-solid-gray-420'>データ</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  },
};

export const BorderOnRowAndColumn = {
  render: () => {
    return (
      <div className='overflow-x-auto'>
        <table className='w-full min-w-max'>
          <caption className='text-left py-4 font-bold'>行と列に罫線</caption>
          <thead>
            <tr>
              <th
                className='px-4 py-6 border border-solid-gray-420 bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
              <th
                className='px-4 py-6 border border-solid-gray-420 bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
              <th
                className='px-4 py-6 border border-solid-gray-420 bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
              <th
                className='px-4 py-6 border border-solid-gray-420 bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
              <th
                className='px-4 py-6 border border-solid-gray-420 bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
              <th
                className='px-4 py-6 border border-solid-gray-420 bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='px-4 py-6 border border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border border-solid-gray-420'>データ</td>
            </tr>
            <tr>
              <td className='px-4 py-6 border border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border border-solid-gray-420'>データ</td>
            </tr>
            <tr>
              <td className='px-4 py-6 border border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border border-solid-gray-420'>データ</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  },
};

export const TableHeaderWithColspan = {
  render: () => {
    return (
      <div className='overflow-x-auto'>
        <table className='w-full min-w-max border border-solid-gray-420'>
          <caption className='text-left py-4 font-bold'>
            テーブルヘッダーがcolspanで列結合され、階層化されたパターン
          </caption>
          <thead>
            <tr>
              <th
                className='px-4 py-6 border-b border-r border-solid-gray-420 bg-solid-gray-50 text-left'
                colSpan={3}
                scope='col'
              >
                親ラベル
              </th>
              <th
                className='px-4 py-6 border-b border-r border-solid-gray-420 bg-solid-gray-50 text-left'
                colSpan={3}
                scope='col'
              >
                親ラベル
              </th>
            </tr>
            <tr>
              <th
                className='px-4 py-6 border-b border-r border-solid-gray-420 bg-solid-gray-50 text-left'
                scope='col'
              >
                子ラベル
              </th>
              <th
                className='px-4 py-6 border-b border-r border-solid-gray-420 bg-solid-gray-50 text-left'
                scope='col'
              >
                子ラベル
              </th>
              <th
                className='px-4 py-6 border-b border-r border-solid-gray-420 bg-solid-gray-50 text-left'
                scope='col'
              >
                子ラベル
              </th>
              <th
                className='px-4 py-6 border-b border-r border-solid-gray-420 bg-solid-gray-50 text-left'
                scope='col'
              >
                子ラベル
              </th>
              <th
                className='px-4 py-6 border-b border-r border-solid-gray-420 bg-solid-gray-50 text-left'
                scope='col'
              >
                子ラベル
              </th>
              <th
                className='px-4 py-6 border-b border-r border-solid-gray-420 bg-solid-gray-50 text-left'
                scope='col'
              >
                子ラベル
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
            </tr>
            <tr>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
            </tr>
            <tr>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  },
};

export const TableHeaderWithRowspan = {
  render: () => {
    return (
      <div className='overflow-x-auto'>
        <table className='w-full min-w-max border border-solid-gray-420'>
          <caption className='text-left py-4 font-bold'>
            テーブルヘッダーがrowspanで行結合され、階層化されたパターン
          </caption>
          <tbody>
            <tr>
              <th
                className='px-4 py-6 border-b border-r border-solid-gray-420 bg-solid-gray-50 text-left'
                rowSpan={2}
                scope='row'
              >
                親ラベル
              </th>
              <th
                className='px-4 py-6 border-b border-r border-solid-gray-420 bg-solid-gray-50 text-left'
                scope='row'
              >
                子ラベル
              </th>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
            </tr>
            <tr>
              <th
                className='px-4 py-6 border-b border-r border-solid-gray-420 bg-solid-gray-50 text-left'
                scope='row'
              >
                子ラベル
              </th>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
            </tr>
            <tr>
              <th
                className='px-4 py-6 border-b border-r border-solid-gray-420 bg-solid-gray-50 text-left'
                rowSpan={2}
                scope='row'
              >
                親ラベル
              </th>
              <th
                className='px-4 py-6 border-b border-r border-solid-gray-420 bg-solid-gray-50 text-left'
                scope='row'
              >
                子ラベル
              </th>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
            </tr>
            <tr>
              <th
                className='px-4 py-6 border-b border-r border-solid-gray-420 bg-solid-gray-50 text-left'
                scope='row'
              >
                子ラベル
              </th>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  },
};

export const StripeTable = {
  render: () => {
    return (
      <div className='overflow-x-auto'>
        <table className='w-full min-w-max'>
          <caption className='text-left py-4 font-bold'>背景色ストライプ</caption>
          <thead>
            <tr>
              <th
                className='px-4 py-6 border-b border-black bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
              <th
                className='px-4 py-6 border-b border-black bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
              <th
                className='px-4 py-6 border-b border-black bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
              <th
                className='px-4 py-6 border-b border-black bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
              <th
                className='px-4 py-6 border-b border-black bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
              <th
                className='px-4 py-6 border-b border-black bg-solid-gray-50 text-left'
                scope='col'
              >
                ラベル
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='even:bg-[#f8f8fb]'>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
            </tr>
            <tr className='even:bg-[#f8f8fb]'>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
            </tr>
            <tr className='even:bg-[#f8f8fb]'>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
            </tr>
            <tr className='even:bg-[#f8f8fb]'>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
            </tr>
            <tr className='even:bg-[#f8f8fb]'>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
            </tr>
            <tr className='even:bg-[#f8f8fb]'>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
              <td className='px-4 py-6 border-b border-solid-gray-420'>データ</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  },
};

export const VerticalAlignedTextInCell = {
  render: () => {
    return (
      <div className='overflow-x-auto'>
        <table className='w-full min-w-[calc(640/16*1rem)]'>
          <caption className='text-left py-4 font-bold'>セル内でのテキスト上揃え</caption>
          <thead>
            <tr>
              <th
                className='w-36 px-4 py-6 border-b border-black bg-solid-gray-50 text-left md:w-64'
                scope='col'
              >
                項目
              </th>
              <th
                className='px-4 py-6 border-b border-black bg-solid-gray-50 text-left'
                scope='col'
              >
                例
              </th>
              <th
                className='px-4 py-6 border-b border-black bg-solid-gray-50 text-left'
                scope='col'
              >
                説明
              </th>
            </tr>
          </thead>
          <tbody className='[&_:where(td)]:align-top'>
            <tr>
              <td className='px-4 py-6 border-b border-solid-gray-420 align-top'>チャネルの種類</td>
              <td className='px-4 py-6 border-b border-solid-gray-420 align-top'>
                オンラインポータル、電話サポート、メール窓口、情報パンフ、動画案内、SNSアカウント、イベント告知、FAQページ
              </td>
              <td className='px-4 py-6 border-b border-solid-gray-420 align-top'>
                市民は自分に適した手段で情報取得やサービス利用が可能で、行政も効果的なコミュニケーションとサポートを提供できます
              </td>
            </tr>
            <tr>
              <td className='px-4 py-6 border-b border-solid-gray-420 align-top'>プロバイダー</td>
              <td className='px-4 py-6 border-b border-solid-gray-420 align-top'>
                光ファイバー、DSL、ケーブル、ワイヤレスなど
              </td>
              <td className='px-4 py-6 border-b border-solid-gray-420 align-top'>
                ユーザーは異なるプロバイダータイプから、自分のニーズに合った高速インターネット接続を選択できます
              </td>
            </tr>
            <tr>
              <td className='px-4 py-6 border-b border-solid-gray-420 align-top'>
                サービスを提供する地域
              </td>
              <td className='px-4 py-6 border-b border-solid-gray-420 align-top'>
                <Ol>
                  <li>りんご区</li>
                  <li>みかん区</li>
                  <li>ぶどう区</li>
                  <li>いちご区</li>
                  <li>なし区</li>
                </Ol>
              </td>
              <td className='px-4 py-6 border-b border-solid-gray-420 align-top'>
                特有のニーズに応えながら、高品質かつ効率的なサポートを目指しています。地元のコミュニティと密接に連携し、信頼性とアクセシビリティを大切にしています。
              </td>
            </tr>
            <tr>
              <td className='px-4 py-6 border-b border-solid-gray-420 align-top'>
                チャネルアイコン
              </td>
              <td className='px-4 py-6 border-b border-solid-gray-420 align-top'>
                テレビ、ラジオ、スマートフォン、パソコン、ニュース、ゲーム、料理、アート、音楽、カメラ
              </td>
              <td className='px-4 py-6 border-b border-solid-gray-420 align-top'>
                これらのアイコンは利用者が興味を持ちそうなチャンネルを素早く特定し、アクセスしやすくするのに役立ちます。
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  },
};
