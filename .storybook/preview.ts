import type { Preview } from '@storybook/react-vite';
import './globals.css';
import "./prose.css";

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
          'Documents',
          [
            'はじめに'
          ],
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

    docs: {
      codePanel: true
    }
  },
};

export default preview;
