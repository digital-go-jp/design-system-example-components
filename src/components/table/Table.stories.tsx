import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Ol } from '../';
import { Table, Tbody, Td, Th, Thead, Tr } from './Table';

const meta = {
  title: 'Component/DADS v2/Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstRowAsHeaderCell: Story = {
  render: () => {
    return (
      <div className='flex flex-col px-4'>
        <Table className='w-full min-w-max'>
          <caption className='p-4 font-bold'>1行目が見出しセル</caption>
          <Thead>
            <Tr>
              <Th className='border-black bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
              <Th className='border-black bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
              <Th className='border-black bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
              <Th className='border-black bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
              <Th className='border-black bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
              <Th className='border-black bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
            <Tr>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
            <Tr>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    );
  },
};

export const FirstColumnAsHeaderCell: Story = {
  render: () => {
    return (
      <div className='flex flex-col px-4'>
        <Table className='w-full min-w-max [&_:is(th,td)]:border-b-0 [&_:is(th,td)]:border-r'>
          <caption className='p-4 font-bold'>1列目が見出しセル</caption>
          <Tbody>
            <Tr>
              <Th className='border-black bg-solid-grey-50' scope='row'>
                ラベル
              </Th>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
            <Tr>
              <Th className='border-black bg-solid-grey-50' scope='row'>
                ラベル
              </Th>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
            <Tr>
              <Th className='border-black bg-solid-grey-50' scope='row'>
                ラベル
              </Th>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
            <Tr>
              <Th className='border-black bg-solid-grey-50' scope='row'>
                ラベル
              </Th>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    );
  },
};

export const FirstRowAndColumnAsHeaderCell: Story = {
  render: () => {
    return (
      <div className='flex flex-col px-4'>
        <Table className='w-full min-w-max'>
          <caption className='p-4 font-bold'>1行目と1列目の両方が見出しセル</caption>
          <Thead>
            <Tr>
              <Td className='border-r bg-solid-grey-50'></Td>
              <Th className='bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
              <Th className='bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
              <Th className='bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
              <Th className='bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
              <Th className='bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
            </Tr>
          </Thead>
          <Tbody className=' [&_th]:border-r'>
            <Tr>
              <Th className='bg-solid-grey-50' scope='row'>
                ラベル
              </Th>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
            <Tr>
              <Th className='bg-solid-grey-50' scope='row'>
                ラベル
              </Th>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
            <Tr>
              <Th className='bg-solid-grey-50' scope='row'>
                ラベル
              </Th>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    );
  },
};

export const CondensedTable: Story = {
  render: () => {
    return (
      <div className='flex flex-col px-4'>
        <Table className='w-full min-w-max [&_:is(th,td)]:!py-2'>
          <caption className='p-4 font-bold'>セルの高さが狭いテーブル</caption>
          <Thead>
            <Tr>
              <Th className='border-black bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
              <Th className='border-black bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
              <Th className='border-black bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
              <Th className='border-black bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
              <Th className='border-black bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
              <Th className='border-black bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
            <Tr>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
            <Tr>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    );
  },
};

export const BorderOnRowAndColumn: Story = {
  render: () => {
    return (
      <div className='flex flex-col px-4'>
        <Table className='w-full min-w-max [&_:is(th,td)]:border'>
          <caption className='p-4 font-bold'>行と列に罫線</caption>
          <Thead>
            <Tr>
              <Th className='bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
              <Th className='bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
              <Th className='bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
              <Th className='bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
              <Th className='bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
              <Th className='bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
            <Tr>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
            <Tr>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    );
  },
};

export const TableHeaderWithColspan: Story = {
  render: () => {
    return (
      <div className='flex flex-col px-4'>
        <Table className='w-full min-w-max border border-solid-grey-420'>
          <caption className='p-4 font-bold'>
            テーブルヘッダーがcolspanで列結合され、階層化されたパターン
          </caption>
          <Thead className='[&_th]:border-r'>
            <Tr>
              <Th className='bg-solid-grey-50' colSpan={3} scope='col'>
                親ラベル
              </Th>
              <Th className='bg-solid-grey-50' colSpan={3} scope='col'>
                親ラベル
              </Th>
            </Tr>
            <Tr>
              <Th className='bg-solid-grey-50' scope='col'>
                子ラベル
              </Th>
              <Th className='bg-solid-grey-50' scope='col'>
                子ラベル
              </Th>
              <Th className='bg-solid-grey-50' scope='col'>
                子ラベル
              </Th>
              <Th className='bg-solid-grey-50' scope='col'>
                子ラベル
              </Th>
              <Th className='bg-solid-grey-50' scope='col'>
                子ラベル
              </Th>
              <Th className='bg-solid-grey-50' scope='col'>
                子ラベル
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
            <Tr>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
            <Tr>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    );
  },
};

export const TableHeaderWithRowspan: Story = {
  render: () => {
    return (
      <div className='flex flex-col px-4'>
        <Table className='w-full min-w-max border border-solid-grey-420 [&_th]:border-r'>
          <caption className='p-4 font-bold'>1列目が見出しセル</caption>
          <Tbody>
            <Tr>
              <Th className='bg-solid-grey-50' rowSpan={2} scope='row'>
                親ラベル
              </Th>
              <Th className='bg-solid-grey-50' scope='row'>
                子ラベル
              </Th>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
            <Tr>
              <Th className='bg-solid-grey-50' scope='row'>
                子ラベル
              </Th>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
            <Tr>
              <Th className='bg-solid-grey-50' rowSpan={2} scope='row'>
                親ラベル
              </Th>
              <Th className='bg-solid-grey-50' scope='row'>
                子ラベル
              </Th>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
            <Tr>
              <Th className='bg-solid-grey-50' scope='row'>
                子ラベル
              </Th>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    );
  },
};

export const StripeTable: Story = {
  render: () => {
    return (
      <div className='flex flex-col px-4'>
        <Table className='w-full min-w-max'>
          <caption className='p-4 font-bold'>背景色ストライプ</caption>
          <Thead>
            <Tr>
              <Th className='border-black bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
              <Th className='border-black bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
              <Th className='border-black bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
              <Th className='border-black bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
              <Th className='border-black bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
              <Th className='border-black bg-solid-grey-50' scope='col'>
                ラベル
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr className='even:bg-[#f8f8fb]'>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
            <Tr className='even:bg-[#f8f8fb]'>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
            <Tr className='even:bg-[#f8f8fb]'>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
            <Tr className='even:bg-[#f8f8fb]'>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
            <Tr className='even:bg-[#f8f8fb]'>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
            <Tr className='even:bg-[#f8f8fb]'>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
              <Td>データ</Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    );
  },
};

export const VerticalAlignedTextInCell: Story = {
  render: () => {
    return (
      <div className='flex flex-col px-4'>
        <Table className='w-full min-w-[calc(640/16*1rem)]'>
          <caption className='p-4 font-bold'>セル内でのテキスト上揃え</caption>
          <Thead>
            <Tr>
              <Th className='w-36 border-black bg-solid-grey-50 md:w-64' scope='col'>
                項目
              </Th>
              <Th className='border-black bg-solid-grey-50' scope='col'>
                例
              </Th>
              <Th className='border-black bg-solid-grey-50' scope='col'>
                説明
              </Th>
            </Tr>
          </Thead>
          <Tbody className='[&_td]:align-top'>
            <Tr>
              <Td>チャネルの種類</Td>
              <Td>
                オンラインポータル、電話サポート、メール窓口、情報パンフ、動画案内、SNSアカウント、イベント告知、FAQページ
              </Td>
              <Td>
                市民は自分に適した手段で情報取得やサービス利用が可能で、行政も効果的なコミュニケーションとサポートを提供できます
              </Td>
            </Tr>
            <Tr>
              <Td>プロバイダー</Td>
              <Td>光ファイバー、DSL、ケーブル、ワイヤレスなど</Td>
              <Td>
                ユーザーは異なるプロバイダータイプから、自分のニーズに合った高速インターネット接続を選択できます
              </Td>
            </Tr>
            <Tr>
              <Td>サービスを提供する地域</Td>
              <Td>
                <Ol>
                  <li>りんご区</li>
                  <li>みかん区</li>
                  <li>ぶどう区</li>
                  <li>いちご区</li>
                  <li>なし区</li>
                </Ol>
              </Td>
              <Td>
                特有のニーズに応えながら、高品質かつ効率的なサポートを目指しています。地元のコミュニティと密接に連携し、信頼性とアクセシビリティを大切にしています。
              </Td>
            </Tr>
            <Tr>
              <Td>チャネルアイコン</Td>
              <Td>
                テレビ、ラジオ、スマートフォン、パソコン、ニュース、ゲーム、料理、アート、音楽、カメラ
              </Td>
              <Td>
                これらのアイコンは利用者が興味を持ちそうなチャンネルを素早く特定し、アクセスしやすくするのに役立ちます。
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    );
  },
};
