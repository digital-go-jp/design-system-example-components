import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { Fragment } from 'react';
import { Link, Ul } from './../';

const meta = {
  title: 'Getting Started/Introduction',
  component: Fragment,
} satisfies Meta<typeof Fragment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Introduction: Story = {
  render: () => {
    return (
      <div className='p-4 text-std-17N-170 md:p-8'>
        <h1 className='text-std-28B-150 mt-0 mb-8 md:text-std-45B-140 md:mb-12'>
          React サンプルコンポーネント
        </h1>
        <p className='my-4'>
          <Link href='https://design.digital.go.jp/' target='_blank'>
            デジタル庁デザインシステム
          </Link>
          のコンポーネントの一部をReact / Tailwind CSSベースで実装したサンプル集です。
        </p>
        <h2 className='text-std-24B-150 md:text-std-32B-150 my-8 md:my-10'>コンセプト</h2>
        <h3 className='text-std-22B-150 md:text-std-24B-150 my-6 md:my-8'>
          アクセシビリティファースト
        </h3>
        <p className='my-4'>アクセシビリティを最優先事項として位置付けています。</p>
        <p className='my-4'>
          公開されているすべてのコンポーネントは、
          <Link href='https://waic.jp/translations/WCAG22/' target='_blank'>
            WCAG
          </Link>
          等のアクセシビリティガイドラインを最大限に取り込んだデジタル庁デザインシステムのガイドラインを基に作られており、アクセシビリティの専門家によるチェックも受けています。
        </p>
        <p className='my-4'>
          これにより、デジタル庁デザインシステムのコンポーネントを使うことで、WCAGの各達成基準に適合または適合が容易になります。
        </p>
        <h3 className='text-std-22B-150 md:text-std-24B-150 my-6 md:my-8'>
          HTML ネイティブ機能の活用
        </h3>
        <p className='my-4'>
          保守性の観点から、可能な限りHTMLネイティブの機能を使用することを重視して開発をしています。
        </p>
        <p className='my-4'>
          <Link href='https://html.spec.whatwg.org' target='_blank'>
            HTML Living Standard
          </Link>
          や
          <Link href='https://open-ui.org/' target='_blank'>
            Open UI
          </Link>
          の動向を常に確認し、新しい
          HTMLネイティブの機能が利用可能になった際には、既存の実装を最新の標準に置き換えていきます。この取り組みにより、一部のブラウザではまだ実装されていない最新機能を試験的に導入することもあります。
        </p>
        <p className='my-4'>
          HTMLネイティブ機能だけでは実現できないコンポーネントに関しては、ヘッドレスUIライブラリの使用を推奨します。
        </p>
        <p className='my-4'>
          一部のサンプルコードでは、Reactの機能を使った実装も提供していますので、実装の参考にしてください。WAI-ARIAやキーボード操作などの挙動については
          <Link href='ARIA Authoring Practices Guide (APG)' target='_blank'>
            ARIA Authoring Practices Guide (APG)
          </Link>
          の
          <Link href='https://www.w3.org/WAI/ARIA/apg/patterns/' target='_blank'>
            Patterns
          </Link>
          を参考にして実装しています。
        </p>

        <h2 className='text-std-24B-150 md:text-std-32B-150 my-8 md:my-10'>
          コンポーネントのバージョンについて
        </h2>
        <p className='my-4'>
          DADS v2はv2.0.0以降の最新のガイドラインとデザインデータを基に作られたコンポーネントです。
        </p>
        <p className='my-4'>
          v1.x系統が基となっているDADS
          v1のコンポーネントは非推奨となっています。それらのコンポーネントのガイドラインとデザインデータがv2に追加され次第、順次DADS
          v2に置き換えていく予定です。
        </p>
        <h2 className='text-std-24B-150 md:text-std-32B-150 my-8 md:my-10'>検証済み環境</h2>
        <p className='my-4'>以下のブラウザの最新版で動作確認を行なっています。</p>
        <Ul className='my-4 md:my-6 space-y-2'>
          <li>Google Chrome</li>
          <li>Microsoft Edge</li>
          <li>Safari</li>
          <li>Firefox</li>
        </Ul>
        <p className='my-4'>また、以下のスクリーンリーダーでも動作検証を行なっています。</p>
        <Ul className='my-4 md:my-6 space-y-2'>
          <li>NVDA</li>
          <li>iOS VoiceOver</li>
          <li>TalkBack</li>
          <li>Mac VoiceOver</li>
        </Ul>
        <h2 className='text-std-24B-150 md:text-std-32B-150 my-8 md:my-10'>リソース</h2>
        <p className='my-4'>
          デジタル庁が提供する、デジタル庁デザインシステムのガイドラインやデザインデータなど、連携可能な各種リソースです。用途の必要性に応じてあわせてご利用ください。
        </p>
        <Ul className='my-4 md:my-6 space-y-2'>
          <li>
            <Link href='https://design.digital.go.jp/' target='_blank'>
              デジタル庁デザインシステムウェブサイト（ガイドライン）
            </Link>
          </li>
          <li>
            <Link href='https://www.figma.com/community/file/1377880368787735577' target='_blank'>
              デザインデータ（Figma）
            </Link>
          </li>
          <li>
            <Link
              href='https://www.digital.go.jp/resources/introduction-to-web-accessibility-guidebook'
              target='_blank'
            >
              ウェブアクセシビリティ導入ガイドブック
            </Link>
          </li>
        </Ul>
        <h2 className='text-std-24B-150 md:text-std-32B-150 my-8 md:my-10'>
          不具合報告・機能要望について
        </h2>
        <p className='my-4'>
          コンポーネントに関する不具合や機能要望は、
          <Link
            href='https://github.com/digital-go-jp/design-system-example-components'
            target='_blank'
          >
            GitHubのリポジトリ
          </Link>
          からIssueを作成して報告してください。
        </p>
      </div>
    );
  },
};
