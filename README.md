# React サンプルコンポーネント

[デジタル庁デザインシステム](https://design.digital.go.jp/) v.1.4.2のコンポーネントの一部をReact / Tailwind CSSベースで実装したサンプル集です。

## 未実装コンポーネント

このリポジトリでは全てのコンポーネントは実装していません。  
（定期的にサンプルは追加予定です。）  
未実装のコンポーネントについてはスクラッチで書かずに、以下のようなヘッドレスUIライブラリの利用を推奨します。

- [React Aria](https://react-spectrum.adobe.com/react-aria/index.html)
- [Radix UI](https://www.radix-ui.com/)
- [Headless UI](https://headlessui.com/)

スクラッチで書く場合は、[ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/)の[Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)を参考にして実装を進める事を推奨します。

## サンプルコード

### 動作確認

以下のコマンドでStorybookを実行してください。

```sh
npm install
npm run storybook
```

### スタイリング

- [Tailwind CSS](https://www.npmjs.com/package/tailwindcss)
- [@digital-go-jp/tailwind-theme-plugin](https://www.npmjs.com/package/@digital-go-jp/tailwind-theme-plugin)

[@digital-go-jp/tailwind-theme-plugin](https://www.npmjs.com/package/@digital-go-jp/tailwind-theme-plugin) は、デジタル庁デザインシステムのデザイントークンをベースにしたTailwind CSSのプラグインです。

プラグインで定義されるトークン一覧は、[トークン一覧](https://github.com/digital-go-jp/design-system-example-components/tree/main/src/tokens) をご確認ください。

プロジェクト固有のトークン等については `tailwind.config.js` の extend で拡張してください。

### 注意事項

- サンプルコードは Google Chrome / Microsoft Edge / Safari / Firefox の最新版で動作を確認しています。
- サンプルコードはプロジェクトの特性に合わせて自由に拡張してください。
