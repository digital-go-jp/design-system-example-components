import type { Preview } from '@storybook/react';
import './globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    options: {
      storySort: {
        order: [
          'Getting Started',
          'Component',
          [
            'アコーディオン',
            'パンくずリスト',
            'インプットテキスト',
            'カレンダー',
            '緊急時バナー',
            'セレクトボックス',
            'チェックボックス',
            'テーブル',
            'ディスクロージャー',
            'ディバイダー',
            'テキストエリア',
            'ドロワー',
            'ノティフィケーションバナー',
            'ハンバーガーメニューボタン',
            '日付ピッカー',
            'フォームコントロールラベル',
            'ボタン',
            'ユーティリティリンク',
            'ラジオボタン',
            'ランゲージセレクター',
            'リスト',
            'リンク',
            '*',
            'Parts',
            'DADS v1',
          ],
          'tokens',
        ],
      },
    },
  },
};

export default preview;
