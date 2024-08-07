import type { ComponentProps } from 'react';

type HamburgerMenuButtonMobileConditionalProps = ComponentProps<'button'> & {
  isOpen: boolean;
  isEnglish?: boolean;
};

/**
 * ※ HamburgerMenuButtonMobileConditional は v1 のみのコンポーネントのため、v2 では非推奨となっています。
 *
 * ※ HamburgerMenuButtonMobileConditional コンポーネントは「モバイル条件付きコンポーネント」となります。モバイル表示時にヘッダーの領域が限定され、「デスクトップ・モバイル共通コンポーネント」である HamburgerMenuButton コンポーネントを使用するために十分な領域が確保できない場合に限り使用してください。
 */
export const HamburgerMenuButtonMobileConditional = (
  props: HamburgerMenuButtonMobileConditionalProps,
) => {
  const { isOpen, isEnglish, className, ...rest } = props;

  return (
    <button
      aria-label={
        rest['aria-label'] ?? isEnglish
          ? isOpen
            ? 'Close menu'
            : 'Open menu'
          : isOpen
            ? 'メニューを閉じる'
            : 'メニューを開く'
      }
      className={`
        flex w-fit items-center justify-center min-w-11 min-h-11 touch-manipulation
        focus-visible:rounded focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
        ${className ?? ''}
      `}
      {...rest}
    >
      {isOpen ? (
        <svg aria-hidden={true} fill='none' height='44' viewBox='0 0 44 44' width='44'>
          <g>
            <path
              d='M11.7336 34.1909L9.80859 32.2659L20.0753 21.9993L9.80859 11.7326L11.7336 9.80762L22.0003 20.0743L32.2669 9.80762L34.1919 11.7326L23.9253 21.9993L34.1919 32.2659L32.2669 34.1909L22.0003 23.9243L11.7336 34.1909Z'
              fill='currentColor'
            />
          </g>
        </svg>
      ) : (
        <>
          {isEnglish ? (
            <svg aria-hidden={true} fill='none' height='44' viewBox='0 0 44 44' width='44'>
              <path
                d='M35.7079 37.1562C33.7519 37.1562 32.4199 36.0882 32.4199 33.2082V28.1562H33.8119V33.3042C33.8119 35.2962 34.6039 35.9442 35.7079 35.9442C36.8239 35.9442 37.6399 35.2962 37.6399 33.3042V28.1562H38.9839V33.2082C38.9839 36.0882 37.6639 37.1562 35.7079 37.1562Z'
                fill='currentColor'
              />
              <path
                d='M23.1758 37.0002V28.1562H24.6038L27.5318 33.3522L28.4558 35.2242H28.5158C28.4438 34.3122 28.3358 33.2442 28.3358 32.2842V28.1562H29.6558V37.0002H28.2278L25.2998 31.7922L24.3758 29.9442H24.3158C24.3878 30.8562 24.4958 31.8762 24.4958 32.8362V37.0002H23.1758Z'
                fill='currentColor'
              />
              <path
                d='M15.5 37.0002V28.1562H20.72V29.3322H16.892V31.7922H20.132V32.9682H16.892V35.8242H20.852V37.0002H15.5Z'
                fill='currentColor'
              />
              <path
                d='M5.05859 37.0002V28.1562H6.65459L8.27459 32.6322C8.47859 33.2202 8.65859 33.8202 8.86259 34.4082H8.92259C9.12659 33.8202 9.29459 33.2202 9.49859 32.6322L11.0946 28.1562H12.7026V37.0002H11.4066V32.6322C11.4066 31.8402 11.5146 30.7002 11.5866 29.8962H11.5386L10.8306 31.9362L9.29459 36.1482H8.43059L6.88259 31.9362L6.18659 29.8962H6.13859C6.19859 30.7002 6.30659 31.8402 6.30659 32.6322V37.0002H5.05859Z'
                fill='currentColor'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M39 9.8002H5V8.2002H39V9.8002Z'
                fill='currentColor'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M39 20.8002H5V19.2002H39V20.8002Z'
                fill='currentColor'
              />
            </svg>
          ) : (
            <svg aria-hidden={true} fill='none' height='44' viewBox='0 0 44 44' width='44'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M39 9.80001H5V8.20001H39V9.80001Z'
                fill='currentColor'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M39 20.8H5V19.2H39V20.8Z'
                fill='currentColor'
              />
              <path
                d='M30.9668 31.324C31.3217 31.3536 32.0413 31.3832 32.5539 31.3832H37.8477C38.311 31.3832 38.7447 31.3437 39.001 31.324V32.8717C38.7645 32.8618 38.2617 32.8224 37.8477 32.8224H32.5539C31.992 32.8224 31.3315 32.8421 30.9668 32.8717V31.324Z'
                fill='currentColor'
              />
              <path
                d='M29.0629 31.186C29.0136 31.3142 28.9841 31.5015 28.9644 31.6C28.8855 32.1817 28.6292 33.8772 28.4813 34.8137H29.1122C29.3685 34.8137 29.822 34.8039 30.0783 34.7743V36.046C29.8811 36.0361 29.3981 36.0164 29.1319 36.0164H23.9466C23.5918 36.0164 23.3453 36.0263 22.9707 36.046V34.7645C23.2369 34.794 23.6016 34.8137 23.9466 34.8137H27.1406C27.2786 33.9758 27.4955 32.576 27.5251 32.0239H24.8634C24.548 32.0239 24.1635 32.0535 23.8776 32.0732V30.772C24.1339 30.8016 24.5874 30.8311 24.8536 30.8311H27.3772C27.5842 30.8311 27.9884 30.7917 28.1067 30.7227L29.0629 31.186Z'
                fill='currentColor'
              />
              <path
                d='M14.4824 29.1946C14.8373 29.234 15.3006 29.2537 15.6358 29.2537H19.717C20.1113 29.2537 20.5352 29.2242 20.8112 29.1946V30.624C20.5253 30.6141 20.062 30.5846 19.717 30.5846H15.6456C15.271 30.5846 14.8175 30.6043 14.4824 30.624V29.1946ZM13.6543 34.0151C14.0388 34.0447 14.5021 34.0743 14.8865 34.0743H20.545C20.8802 34.0743 21.2942 34.0546 21.6294 34.0151V35.5234C21.2844 35.484 20.8408 35.4643 20.545 35.4643H14.8865C14.5021 35.4643 14.019 35.4938 13.6543 35.5234V34.0151Z'
                fill='currentColor'
              />
              <path
                d='M12.3442 28.6426C12.216 28.8694 12.0287 29.3031 11.9302 29.5298C11.6344 30.3086 11.1908 31.3043 10.6092 32.2112C11.4767 32.921 12.3048 33.68 12.9751 34.3898L11.9597 35.5136C11.2697 34.7053 10.5599 34.0152 9.77126 33.335C8.90376 34.38 7.77009 35.4742 6.10409 36.3811L5 35.3855C6.60685 34.6067 7.77009 33.6505 8.74603 32.4774C8.03626 31.9155 7.08989 31.2156 6.08438 30.6044L6.92231 29.5988C7.71094 30.0819 8.74603 30.7917 9.54453 31.3831C10.0473 30.5945 10.3825 29.8157 10.6388 29.0369C10.7275 28.7806 10.8359 28.3863 10.8754 28.13L12.3442 28.6426Z'
                fill='currentColor'
              />
            </svg>
          )}
        </>
      )}
    </button>
  );
};
