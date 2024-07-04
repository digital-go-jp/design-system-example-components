import type { ComponentProps } from 'react';

type HamburgerMenuButtonProps = ComponentProps<'button'> & {
  label: string;
  isOpen: boolean;
};

/**
 * ※ HamburgerMenuButton は v1 のみのコンポーネントのため、v2 では非推奨となっています。
 * v2 に対応したハンバーガーメニューボタンは今後提供予定です。
 *
 * HamburgerMenuButton コンポーネントは「デスクトップ・モバイル共通コンポーネント」となります。原則として、ハンバーガーアイコンとテキストラベルの組み合わせから成る、この HamburgerMenuButton コンポーネントを使用してください。
 */
export const HamburgerMenuButton = (props: HamburgerMenuButtonProps) => {
  const { label, isOpen, className, ...rest } = props;

  return (
    <button
      aria-label={rest['aria-label'] ?? isOpen ? 'メニューを閉じる' : 'メニューを開く'}
      className={`
        flex w-fit items-center flex-row gap-x-1.5 touch-manipulation
        focus-visible:rounded focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
        ${className ?? ''}
      `}
      {...rest}
    >
      {isOpen ? (
        <svg
          aria-hidden={true}
          className='mt-0.5'
          fill='none'
          height='24'
          viewBox='0 0 24 24'
          width='24'
        >
          <path
            d='M6.39961 18.6496L5.34961 17.5996L10.9496 11.9996L5.34961 6.39961L6.39961 5.34961L11.9996 10.9496L17.5996 5.34961L18.6496 6.39961L13.0496 11.9996L18.6496 17.5996L17.5996 18.6496L11.9996 13.0496L6.39961 18.6496Z'
            fill='currentColor'
          />
        </svg>
      ) : (
        <svg aria-hidden={true} className='mt-0.5' height='24' viewBox='0 0 24 24' width='24'>
          <path
            clipRule='evenodd'
            d='M21 5.5H3V7H21V5.5ZM21 11.2998H3V12.7998H21V11.2998ZM3 17H21V18.5H3V17Z'
            fill='currentColor'
            fillRule='evenodd'
          />
        </svg>
      )}
      <span className='text-oln-16N-1'>{label}</span>
    </button>
  );
};
