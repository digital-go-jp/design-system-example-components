import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CloseIcon, CloseWithLabelIcon, HamburgerIcon, HamburgerWithLabelIcon } from './';
import { HamburgerMenuButton } from './HamburgerMenuButton';

const meta = {
  title: 'Component/DADS v2/HamburgerMenuButton',
  component: HamburgerMenuButton,
  tags: ['autodocs'],
} satisfies Meta<typeof HamburgerMenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    const sampleId = React.useId();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
      <div className='m-4 flex flex-col gap-2'>
        <HamburgerMenuButton
          className='p-0.5'
          aria-controls={`${sampleId}-menu`}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <>
              <CloseIcon className='flex-none' />
              閉じる
            </>
          ) : (
            <>
              <HamburgerIcon className='flex-none' />
              メニュー
            </>
          )}
        </HamburgerMenuButton>
        {isMenuOpen && (
          <div className='h-40 w-60 border border-solid-grey-420 p-4' id={`${sampleId}-menu`}>
            サンプルメニュー
          </div>
        )}
      </div>
    );
  },
};

export const WithoutLabel: Story = {
  render: () => {
    const sampleId = React.useId();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
      <div className='m-4 flex flex-col gap-2'>
        <HamburgerMenuButton
          className='hover:border-black'
          aria-controls={`${sampleId}-menu`}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseWithLabelIcon /> : <HamburgerWithLabelIcon />}
        </HamburgerMenuButton>
        {isMenuOpen && (
          <div className='h-40 w-60 border border-solid-grey-420 p-4' id={`${sampleId}-menu`}>
            サンプルメニュー
          </div>
        )}
      </div>
    );
  },
};

export const WithoutLabelEN: Story = {
  render: () => {
    const sampleId = React.useId();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
      <div className='m-4 flex flex-col gap-2'>
        <HamburgerMenuButton
          className='hover:border-black'
          aria-controls={`${sampleId}-menu`}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <CloseWithLabelIcon isEnglish={true} />
          ) : (
            <HamburgerWithLabelIcon isEnglish={true} />
          )}
        </HamburgerMenuButton>
        {isMenuOpen && (
          <div className='h-40 w-60 border border-solid-grey-420 p-4' id={`${sampleId}-menu`}>
            サンプルメニュー
          </div>
        )}
      </div>
    );
  },
};

export const Responsive: Story = {
  render: () => {
    const sampleId = React.useId();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
      <div className='m-4 flex flex-col gap-2'>
        <HamburgerMenuButton
          className='hover:border-black desktop:p-0.5 desktop:hover:border-transparent'
          aria-controls={`${sampleId}-menu`}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <>
              <CloseWithLabelIcon className='desktop:hidden' />
              <CloseIcon className='hidden desktop:inline flex-none' />
              <span className='hidden desktop:inline'>閉じる</span>
            </>
          ) : (
            <>
              <HamburgerWithLabelIcon className='desktop:hidden' />
              <HamburgerIcon className='hidden desktop:inline flex-none' />
              <span className='hidden desktop:inline'>メニュー</span>
            </>
          )}
        </HamburgerMenuButton>
        {isMenuOpen && (
          <div className='h-40 w-60 border border-solid-grey-420 p-4' id={`${sampleId}-menu`}>
            サンプルメニュー
          </div>
        )}
      </div>
    );
  },
};

export const WithFocusTrap: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    const sampleId = React.useId();
    const triggerRef = React.useRef<HTMLButtonElement>(null);
    const lastItemRef = React.useRef<HTMLAnchorElement>(null);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const sampleMenuLinkClasses = `
      flex min-h-[calc(44/16*1rem)] items-center px-4 py-3 text-dns-16N-2
      hover:bg-solid-grey-50 hover:underline hover:underline-offset-[calc(3/16*1rem)]
      focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:-outline-offset-4 focus-visible:bg-yellow-300 focus-visible:ring-[calc(6/16*1rem)] focus-visible:ring-inset focus-visible:ring-yellow-300
    `;
    const sampleMenu = [
      {
        id: 'sample1',
        name: 'メニューアイテム1',
        url: '#',
      },
      {
        id: 'sample2',
        name: 'メニューアイテム2',
        url: '#',
      },
      {
        id: 'sample3',
        name: 'メニューアイテム3',
        url: '#',
      },
      {
        id: 'sample4',
        name: 'メニューアイテム4',
        url: '#',
      },
    ];
    React.useEffect(() => {
      const onKeyUp = (e: KeyboardEvent) => {
        if (e.code === 'Escape') {
          setIsMenuOpen(false);
          triggerRef.current?.focus();
        }
      };

      if (isMenuOpen) {
        document.addEventListener('keyup', onKeyUp);
      }

      return () => {
        document.removeEventListener('keyup', onKeyUp);
      };
    }, [isMenuOpen]);
    return (
      <div className='p-4 h-80'>
        {isMenuOpen && (
          /* biome-ignore lint/a11y/noNoninteractiveTabindex: For focus trap */
          <div onFocus={() => lastItemRef.current?.focus()} tabIndex={0}></div>
        )}
        <HamburgerMenuButton
          aria-controls={`${sampleId}-menu`}
          aria-expanded={isMenuOpen}
          className='relative p-0.5 z-20'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          ref={triggerRef}
        >
          {isMenuOpen ? (
            <>
              <CloseIcon className='flex-none' />
              閉じる
            </>
          ) : (
            <>
              <HamburgerIcon className='flex-none' />
              メニュー
            </>
          )}
        </HamburgerMenuButton>
        {isMenuOpen && (
          <div
            className='fixed top-0 bottom-0 left-0 pt-14 px-4 w-72 shadow-1 z-10'
            id={`${sampleId}-menu`}
          >
            <ul className='py-2'>
              {sampleMenu.map((menu, index) => (
                <li key={menu.id}>
                  <a
                    className={sampleMenuLinkClasses}
                    href={menu.url}
                    ref={index === sampleMenu.length - 1 ? lastItemRef : undefined}
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
            {/* biome-ignore lint/a11y/noNoninteractiveTabindex: For focus trap */}
            <div onFocus={() => triggerRef.current?.focus()} tabIndex={0}></div>
          </div>
        )}
      </div>
    );
  },
};
