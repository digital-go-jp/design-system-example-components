import { Controls, Description, Stories, Subtitle, Title } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { LanguageSelector } from './LanguageSelector';
import { LanguageSelectorArrowIcon } from './parts/ArrowIcon';
import { LanguageSelectorButton } from './parts/Button';
import { LanguageSelectorGlobeIcon } from './parts/GlobeIcon';
import { LanguageSelectorGlobeWithLabelIcon } from './parts/GlobeWithLabelIcon';
import { LanguageSelectorMenu } from './parts/Menu';
import { LanguageSelectorMenuItem } from './parts/MenuItem';

const meta = {
  title: 'Component/DADS v2/LanguageSelector',
  component: LanguageSelector,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof LanguageSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

const exampleLanguages = [
  {
    name: '日本語',
    code: 'ja',
    url: 'https://www.digital.go.jp/',
  },
  {
    name: 'English',
    code: 'en',
    url: 'https://www.digital.go.jp/en',
  },
  {
    name: '简体中文',
    code: 'zh-cn',
    url: '#',
  },
  {
    name: '繁体中文',
    code: 'zh-tw',
    url: '#',
  },
  {
    name: '한국어',
    code: 'ko',
    url: '#',
  },
  {
    name: 'Español',
    code: 'es',
    url: '#',
  },
  {
    name: 'Bahasa Indonesia',
    code: 'id',
    url: '#',
  },
  {
    name: 'Tiếng Việt',
    code: 'vi',
    url: '#',
  },
];

const exampleLanguages2 = [
  {
    name: '日本語',
    code: 'ja',
    url: 'https://www.digital.go.jp/',
  },
  {
    name: 'English',
    code: 'en',
    url: 'https://www.digital.go.jp/en',
  },
  {
    name: '한국어',
    code: 'ko',
    url: '#',
  },
  {
    name: '简体中文',
    code: 'zh-cn',
    url: '#',
  },
  {
    name: '繁体中文',
    code: 'zh-tw',
    url: '#',
  },
];

export const Example: Story = {
  render: () => {
    const sampleId = React.useId();
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const menuRef = React.useRef<HTMLUListElement>(null);
    const menuItemRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [currentFocusIndex, setCurrentFocusIndex] = React.useState<number>(-1);

    const setMenuItemRef = React.useCallback((el: HTMLAnchorElement | null, index: number) => {
      menuItemRefs.current[index] = el;
    }, []);

    React.useEffect(() => {
      if (isMenuOpen && currentFocusIndex >= 0 && currentFocusIndex < menuItemRefs.current.length) {
        menuItemRefs.current[currentFocusIndex]?.focus();
      }
    }, [isMenuOpen, currentFocusIndex]);

    React.useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
        if (
          !buttonRef.current?.contains(event.target as Node) &&
          !menuRef.current?.contains(event.target as Node)
        ) {
          setIsMenuOpen(false);
          setCurrentFocusIndex(-1);
        }
      };

      if (isMenuOpen) {
        document.addEventListener('mousedown', handleOutsideClick);
      }

      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, [isMenuOpen]);

    const handleButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      switch (e.key) {
        case ' ':
        case 'Enter':
        case 'ArrowDown':
          e.preventDefault();
          setIsMenuOpen(true);
          setCurrentFocusIndex(0);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setIsMenuOpen(true);
          setCurrentFocusIndex(exampleLanguages.length - 1);
          break;
      }
    };

    const setFocusByFirstCharacter = (inputChar: string) => {
      if (inputChar.length > 1) {
        return;
      }

      const char = inputChar.toLowerCase();

      const matchingIndexes = exampleLanguages
        .map((lang, index) => ({ index, char: lang.name.toLowerCase().charAt(0) }))
        .filter((item) => item.char === char)
        .map((item) => item.index);

      if (matchingIndexes.length === 0) return;

      const nextIndex =
        matchingIndexes.find((index) => index > currentFocusIndex) ?? matchingIndexes[0];

      menuItemRefs.current[nextIndex]?.focus();
      setCurrentFocusIndex(nextIndex);
    };

    const handleMenuItemKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, index: number) => {
      setCurrentFocusIndex(index);
      switch (e.key) {
        case ' ':
          e.preventDefault();
          e.currentTarget.click();
          break;
        case 'ArrowUp':
          e.preventDefault();
          menuItemRefs.current[index === 0 ? menuItemRefs.current.length - 1 : index - 1]?.focus();
          setCurrentFocusIndex(index === 0 ? menuItemRefs.current.length - 1 : index - 1);
          break;
        case 'ArrowDown':
          e.preventDefault();
          menuItemRefs.current[index === menuItemRefs.current.length - 1 ? 0 : index + 1]?.focus();
          setCurrentFocusIndex(index === menuItemRefs.current.length - 1 ? 0 : index + 1);
          break;
        case 'Home':
        case 'PageUp':
          e.preventDefault();
          menuItemRefs[0].current?.focus();
          setCurrentFocusIndex(0);
          break;
        case 'End':
        case 'PageDown':
          e.preventDefault();
          menuItemRefs.current[menuItemRefs.current.length - 1]?.focus();
          setCurrentFocusIndex(menuItemRefs.current.length - 1);
          break;
        case 'Tab':
          e.preventDefault();
          if (e.shiftKey) {
            setIsMenuOpen(false);
            setCurrentFocusIndex(-1);
            buttonRef.current?.focus();
          } else {
            setIsMenuOpen(false);
            setCurrentFocusIndex(-1);
          }
          break;
        case 'Escape':
          e.preventDefault();
          setIsMenuOpen(false);
          setCurrentFocusIndex(-1);
          buttonRef.current?.focus();
          break;
        default:
          if (e.key.length === 1 && e.key.match(/\S/)) {
            setFocusByFirstCharacter(e.key);
          }
          break;
      }
    };

    return (
      <div className='h-80'>
        <LanguageSelector>
          <LanguageSelectorButton
            aria-controls={`${sampleId}-menu`}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onKeyDown={handleButtonKeyDown}
            ref={buttonRef}
          >
            <LanguageSelectorGlobeIcon />
            <span className='mb-0.5'>Language</span>
            <LanguageSelectorArrowIcon className='mt-0.5 group-[:has([aria-expanded="true"])]:rotate-180' />
          </LanguageSelectorButton>
          <LanguageSelectorMenu
            className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 overflow-auto`}
            id={`${sampleId}-menu`}
            ref={menuRef}
          >
            {exampleLanguages.map((lang, index) => (
              <LanguageSelectorMenuItem
                aria-current={lang.code === 'ja'}
                href={lang.url}
                isCurrent={lang.code === 'ja'}
                key={lang.code}
                lang={lang.code}
                onKeyDown={(e) => handleMenuItemKeyDown(e, index)}
                ref={(el) => setMenuItemRef(el, index)}
              >
                {lang.name}
              </LanguageSelectorMenuItem>
            ))}
          </LanguageSelectorMenu>
        </LanguageSelector>
      </div>
    );
  },
};

export const WithoutLabel: Story = {
  render: () => {
    const sampleId = React.useId();
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const menuRef = React.useRef<HTMLUListElement>(null);
    const menuItemRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [currentFocusIndex, setCurrentFocusIndex] = React.useState<number>(-1);

    const setMenuItemRef = React.useCallback((el: HTMLAnchorElement | null, index: number) => {
      menuItemRefs.current[index] = el;
    }, []);

    React.useEffect(() => {
      if (isMenuOpen && currentFocusIndex >= 0 && currentFocusIndex < menuItemRefs.current.length) {
        menuItemRefs.current[currentFocusIndex]?.focus();
      }
    }, [isMenuOpen, currentFocusIndex]);

    React.useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
        if (
          !buttonRef.current?.contains(event.target as Node) &&
          !menuRef.current?.contains(event.target as Node)
        ) {
          setIsMenuOpen(false);
          setCurrentFocusIndex(-1);
        }
      };

      if (isMenuOpen) {
        document.addEventListener('mousedown', handleOutsideClick);
      }

      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, [isMenuOpen]);

    const handleButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      switch (e.key) {
        case ' ':
        case 'Enter':
        case 'ArrowDown':
          e.preventDefault();
          setIsMenuOpen(true);
          setCurrentFocusIndex(0);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setIsMenuOpen(true);
          setCurrentFocusIndex(exampleLanguages2.length - 1);
          break;
      }
    };

    const setFocusByFirstCharacter = (inputChar: string) => {
      if (inputChar.length > 1) {
        return;
      }

      const char = inputChar.toLowerCase();

      const matchingIndexes = exampleLanguages
        .map((lang, index) => ({ index, char: lang.name.toLowerCase().charAt(0) }))
        .filter((item) => item.char === char)
        .map((item) => item.index);

      if (matchingIndexes.length === 0) return;

      const nextIndex =
        matchingIndexes.find((index) => index > currentFocusIndex) ?? matchingIndexes[0];

      menuItemRefs.current[nextIndex]?.focus();
      setCurrentFocusIndex(nextIndex);
    };

    const handleMenuItemKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, index: number) => {
      setCurrentFocusIndex(index);
      switch (e.key) {
        case ' ':
          e.preventDefault();
          e.currentTarget.click();
          break;
        case 'ArrowUp':
          e.preventDefault();
          menuItemRefs.current[index === 0 ? menuItemRefs.current.length - 1 : index - 1]?.focus();
          setCurrentFocusIndex(index === 0 ? menuItemRefs.current.length - 1 : index - 1);
          break;
        case 'ArrowDown':
          e.preventDefault();
          menuItemRefs.current[index === menuItemRefs.current.length - 1 ? 0 : index + 1]?.focus();
          setCurrentFocusIndex(index === menuItemRefs.current.length - 1 ? 0 : index + 1);
          break;
        case 'Home':
        case 'PageUp':
          e.preventDefault();
          menuItemRefs[0].current?.focus();
          setCurrentFocusIndex(0);
          break;
        case 'End':
        case 'PageDown':
          e.preventDefault();
          menuItemRefs.current[menuItemRefs.current.length - 1]?.focus();
          setCurrentFocusIndex(menuItemRefs.current.length - 1);
          break;
        case 'Tab':
          e.preventDefault();
          if (e.shiftKey) {
            setIsMenuOpen(false);
            setCurrentFocusIndex(-1);
            buttonRef.current?.focus();
          } else {
            setIsMenuOpen(false);
            setCurrentFocusIndex(-1);
          }
          break;
        case 'Escape':
          e.preventDefault();
          setIsMenuOpen(false);
          setCurrentFocusIndex(-1);
          buttonRef.current?.focus();
          break;
        default:
          if (e.key.length === 1 && e.key.match(/\S/)) {
            setFocusByFirstCharacter(e.key);
          }
          break;
      }
    };

    return (
      <div className='flex justify-end items-start h-72'>
        <LanguageSelector>
          <LanguageSelectorButton
            aria-controls={`${sampleId}-menu`}
            aria-expanded={isMenuOpen}
            className='!px-0 !gap-0 !rounded hover:border-black focus-visible:border-transparent'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onKeyDown={handleButtonKeyDown}
            ref={buttonRef}
          >
            <LanguageSelectorGlobeWithLabelIcon />
            <LanguageSelectorArrowIcon className='mt-0.5 group-[:has([aria-expanded="true"])]:rotate-180' />
          </LanguageSelectorButton>
          <LanguageSelectorMenu
            className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-full right-0 overflow-auto`}
            id={`${sampleId}-menu`}
            ref={menuRef}
          >
            {exampleLanguages2.map((lang, index) => (
              <LanguageSelectorMenuItem
                aria-current={lang.code === 'ja'}
                href={lang.url}
                isCurrent={lang.code === 'ja'}
                key={lang.code}
                lang={lang.code}
                onKeyDown={(e) => handleMenuItemKeyDown(e, index)}
                ref={(el) => setMenuItemRef(el, index)}
              >
                {lang.name}
              </LanguageSelectorMenuItem>
            ))}
          </LanguageSelectorMenu>
        </LanguageSelector>
      </div>
    );
  },
};

export const WithPopoverAPI: Story = {
  render: () => {
    const sampleId = React.useId();
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const menuRef = React.useRef<HTMLUListElement>(null);
    const menuItemRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);
    const [currentFocusIndex, setCurrentFocusIndex] = React.useState<number>(-1);

    const setMenuItemRef = React.useCallback((el: HTMLAnchorElement | null, index: number) => {
      menuItemRefs.current[index] = el;
    }, []);

    const handleButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      switch (e.key) {
        case ' ':
        case 'Enter':
        case 'ArrowDown':
          e.preventDefault();
          menuRef.current?.showPopover();
          menuItemRefs.current[0]?.focus();
          break;
        case 'ArrowUp':
          e.preventDefault();
          menuRef.current?.showPopover();
          menuItemRefs.current[menuItemRefs.current.length - 1]?.focus();
          break;
      }
    };

    const setFocusByFirstCharacter = (inputChar: string) => {
      if (inputChar.length > 1) {
        return;
      }

      const char = inputChar.toLowerCase();

      const matchingIndexes = exampleLanguages
        .map((lang, index) => ({ index, char: lang.name.toLowerCase().charAt(0) }))
        .filter((item) => item.char === char)
        .map((item) => item.index);

      if (matchingIndexes.length === 0) return;

      const nextIndex =
        matchingIndexes.find((index) => index > currentFocusIndex) ?? matchingIndexes[0];

      menuItemRefs.current[nextIndex]?.focus();
      setCurrentFocusIndex(nextIndex);
    };

    const handleMenuItemKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, index: number) => {
      setCurrentFocusIndex(index);
      switch (e.key) {
        case ' ':
          e.preventDefault();
          e.currentTarget.click();
          break;
        case 'ArrowUp':
          e.preventDefault();
          menuItemRefs.current[index === 0 ? menuItemRefs.current.length - 1 : index - 1]?.focus();
          setCurrentFocusIndex(index === 0 ? menuItemRefs.current.length - 1 : index - 1);
          break;
        case 'ArrowDown':
          e.preventDefault();
          menuItemRefs.current[index === menuItemRefs.current.length - 1 ? 0 : index + 1]?.focus();
          setCurrentFocusIndex(index === menuItemRefs.current.length - 1 ? 0 : index + 1);
          break;
        case 'Home':
        case 'PageUp':
          e.preventDefault();
          menuItemRefs[0].current?.focus();
          setCurrentFocusIndex(0);
          break;
        case 'End':
        case 'PageDown':
          e.preventDefault();
          menuItemRefs.current[menuItemRefs.current.length - 1]?.focus();
          setCurrentFocusIndex(menuItemRefs.current.length - 1);
          break;
        case 'Tab':
          e.preventDefault();
          if (e.shiftKey) {
            menuRef.current?.hidePopover();
            buttonRef.current?.focus();
          } else {
            menuRef.current?.hidePopover();
          }
          break;
        default:
          if (e.key.length === 1 && e.key.match(/\S/)) {
            setFocusByFirstCharacter(e.key);
          }
          break;
      }
    };

    return (
      <div className='h-64'>
        <h2 className='mb-4 text-std-32B-5'>
          Popover API と CSS Anchor Positioning を使った実装サンプル
        </h2>
        <p className='mb-8'>
          ※ 2024年8月時点のFirefoxとSafariではCSS Anchor
          Positioningはサポートされていません。そのため、それらのブラウザではメニューの表示位置に問題が出る可能性がありますのでご注意ください。
        </p>
        <LanguageSelector>
          <LanguageSelectorButton
            className='[anchor-name:--trigger]'
            onKeyDown={handleButtonKeyDown}
            popovertarget={`${sampleId}-menu`}
            ref={buttonRef}
          >
            <LanguageSelectorGlobeIcon />
            <span className='mb-0.5'>Language</span>
            <LanguageSelectorArrowIcon className='mt-0.5 group-[:has(:popover-open)]:rotate-180' />
          </LanguageSelectorButton>
          <LanguageSelectorMenu
            className='absolute top-[anchor(--trigger_bottom)] left-[anchor(--trigger_left)] [position-try-fallbacks:flip-block] inset-[unset]'
            id={`${sampleId}-menu`}
            popover='auto'
            ref={menuRef}
          >
            {exampleLanguages.map((lang, index) => (
              <LanguageSelectorMenuItem
                aria-current={lang.code === 'ja'}
                href={lang.url}
                isCurrent={lang.code === 'ja'}
                key={lang.code}
                lang={lang.code}
                onKeyDown={(e) => handleMenuItemKeyDown(e, index)}
                ref={(el) => setMenuItemRef(el, index)}
              >
                {lang.name}
              </LanguageSelectorMenuItem>
            ))}
          </LanguageSelectorMenu>
        </LanguageSelector>
      </div>
    );
  },
};

export const CondensedMenu: Story = {
  render: () => {
    const sampleId = React.useId();
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const menuRef = React.useRef<HTMLUListElement>(null);
    const menuItemRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [currentFocusIndex, setCurrentFocusIndex] = React.useState<number>(-1);

    const setMenuItemRef = React.useCallback((el: HTMLAnchorElement | null, index: number) => {
      menuItemRefs.current[index] = el;
    }, []);

    React.useEffect(() => {
      if (isMenuOpen && currentFocusIndex >= 0 && currentFocusIndex < menuItemRefs.current.length) {
        menuItemRefs.current[currentFocusIndex]?.focus();
      }
    }, [isMenuOpen, currentFocusIndex]);

    React.useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
        if (
          !buttonRef.current?.contains(event.target as Node) &&
          !menuRef.current?.contains(event.target as Node)
        ) {
          setIsMenuOpen(false);
          setCurrentFocusIndex(-1);
        }
      };

      if (isMenuOpen) {
        document.addEventListener('mousedown', handleOutsideClick);
      }

      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, [isMenuOpen]);

    const handleButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      switch (e.key) {
        case ' ':
        case 'Enter':
        case 'ArrowDown':
          e.preventDefault();
          setIsMenuOpen(true);
          setCurrentFocusIndex(0);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setIsMenuOpen(true);
          setCurrentFocusIndex(exampleLanguages.length - 1);
          break;
      }
    };

    const setFocusByFirstCharacter = (inputChar: string) => {
      if (inputChar.length > 1) {
        return;
      }

      const char = inputChar.toLowerCase();

      const matchingIndexes = exampleLanguages
        .map((lang, index) => ({ index, char: lang.name.toLowerCase().charAt(0) }))
        .filter((item) => item.char === char)
        .map((item) => item.index);

      if (matchingIndexes.length === 0) return;

      const nextIndex =
        matchingIndexes.find((index) => index > currentFocusIndex) ?? matchingIndexes[0];

      menuItemRefs.current[nextIndex]?.focus();
      setCurrentFocusIndex(nextIndex);
    };

    const handleMenuItemKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, index: number) => {
      setCurrentFocusIndex(index);
      switch (e.key) {
        case ' ':
          e.preventDefault();
          e.currentTarget.click();
          break;
        case 'ArrowUp':
          e.preventDefault();
          menuItemRefs.current[index === 0 ? menuItemRefs.current.length - 1 : index - 1]?.focus();
          setCurrentFocusIndex(index === 0 ? menuItemRefs.current.length - 1 : index - 1);
          break;
        case 'ArrowDown':
          e.preventDefault();
          menuItemRefs.current[index === menuItemRefs.current.length - 1 ? 0 : index + 1]?.focus();
          setCurrentFocusIndex(index === menuItemRefs.current.length - 1 ? 0 : index + 1);
          break;
        case 'Home':
        case 'PageUp':
          e.preventDefault();
          menuItemRefs[0].current?.focus();
          setCurrentFocusIndex(0);
          break;
        case 'End':
        case 'PageDown':
          e.preventDefault();
          menuItemRefs.current[menuItemRefs.current.length - 1]?.focus();
          setCurrentFocusIndex(menuItemRefs.current.length - 1);
          break;
        case 'Tab':
          e.preventDefault();
          if (e.shiftKey) {
            setIsMenuOpen(false);
            setCurrentFocusIndex(-1);
            buttonRef.current?.focus();
          } else {
            setIsMenuOpen(false);
            setCurrentFocusIndex(-1);
          }
          break;
        case 'Escape':
          e.preventDefault();
          setIsMenuOpen(false);
          setCurrentFocusIndex(-1);
          buttonRef.current?.focus();
          break;
        default:
          if (e.key.length === 1 && e.key.match(/\S/)) {
            setFocusByFirstCharacter(e.key);
          }
          break;
      }
    };
    return (
      <div className='h-64'>
        <LanguageSelector>
          <LanguageSelectorButton
            aria-controls={`${sampleId}-menu`}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onKeyDown={handleButtonKeyDown}
            ref={buttonRef}
          >
            <LanguageSelectorGlobeIcon />
            <span className='mb-0.5'>Language</span>
            <LanguageSelectorArrowIcon className='mt-0.5 group-[:has([aria-expanded="true"])]:rotate-180' />
          </LanguageSelectorButton>
          <LanguageSelectorMenu
            className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 overflow-auto`}
            id={`${sampleId}-menu`}
            isCondensed={true}
            ref={menuRef}
          >
            {exampleLanguages.map((lang, index) => (
              <LanguageSelectorMenuItem
                aria-current={lang.code === 'ja'}
                href={lang.url}
                isCondensed={true}
                isCurrent={lang.code === 'ja'}
                key={lang.code}
                lang={lang.code}
                onKeyDown={(e) => handleMenuItemKeyDown(e, index)}
                ref={(el) => setMenuItemRef(el, index)}
              >
                {lang.name}
              </LanguageSelectorMenuItem>
            ))}
          </LanguageSelectorMenu>
        </LanguageSelector>
      </div>
    );
  },
};

export const Responsive: Story = {
  render: () => {
    const sampleId = React.useId();
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const menuRef = React.useRef<HTMLUListElement>(null);
    const menuItemRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [currentFocusIndex, setCurrentFocusIndex] = React.useState<number>(-1);

    const setMenuItemRef = React.useCallback((el: HTMLAnchorElement | null, index: number) => {
      menuItemRefs.current[index] = el;
    }, []);

    React.useEffect(() => {
      if (isMenuOpen && currentFocusIndex >= 0 && currentFocusIndex < menuItemRefs.current.length) {
        menuItemRefs.current[currentFocusIndex]?.focus();
      }
    }, [isMenuOpen, currentFocusIndex]);

    React.useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
        if (
          !buttonRef.current?.contains(event.target as Node) &&
          !menuRef.current?.contains(event.target as Node)
        ) {
          setIsMenuOpen(false);
          setCurrentFocusIndex(-1);
        }
      };

      if (isMenuOpen) {
        document.addEventListener('mousedown', handleOutsideClick);
      }

      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, [isMenuOpen]);

    const handleButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      switch (e.key) {
        case ' ':
        case 'Enter':
        case 'ArrowDown':
          e.preventDefault();
          setIsMenuOpen(true);
          setCurrentFocusIndex(0);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setIsMenuOpen(true);
          setCurrentFocusIndex(exampleLanguages2.length - 1);
          break;
      }
    };

    const setFocusByFirstCharacter = (inputChar: string) => {
      if (inputChar.length > 1) {
        return;
      }

      const char = inputChar.toLowerCase();

      const matchingIndexes = exampleLanguages
        .map((lang, index) => ({ index, char: lang.name.toLowerCase().charAt(0) }))
        .filter((item) => item.char === char)
        .map((item) => item.index);

      if (matchingIndexes.length === 0) return;

      const nextIndex =
        matchingIndexes.find((index) => index > currentFocusIndex) ?? matchingIndexes[0];

      menuItemRefs.current[nextIndex]?.focus();
      setCurrentFocusIndex(nextIndex);
    };

    const handleMenuItemKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, index: number) => {
      setCurrentFocusIndex(index);
      switch (e.key) {
        case ' ':
          e.preventDefault();
          e.currentTarget.click();
          break;
        case 'ArrowUp':
          e.preventDefault();
          menuItemRefs.current[index === 0 ? menuItemRefs.current.length - 1 : index - 1]?.focus();
          setCurrentFocusIndex(index === 0 ? menuItemRefs.current.length - 1 : index - 1);
          break;
        case 'ArrowDown':
          e.preventDefault();
          menuItemRefs.current[index === menuItemRefs.current.length - 1 ? 0 : index + 1]?.focus();
          setCurrentFocusIndex(index === menuItemRefs.current.length - 1 ? 0 : index + 1);
          break;
        case 'Home':
        case 'PageUp':
          e.preventDefault();
          menuItemRefs[0].current?.focus();
          setCurrentFocusIndex(0);
          break;
        case 'End':
        case 'PageDown':
          e.preventDefault();
          menuItemRefs.current[menuItemRefs.current.length - 1]?.focus();
          setCurrentFocusIndex(menuItemRefs.current.length - 1);
          break;
        case 'Tab':
          e.preventDefault();
          if (e.shiftKey) {
            setIsMenuOpen(false);
            setCurrentFocusIndex(-1);
            buttonRef.current?.focus();
          } else {
            setIsMenuOpen(false);
            setCurrentFocusIndex(-1);
          }
          break;
        case 'Escape':
          e.preventDefault();
          setIsMenuOpen(false);
          setCurrentFocusIndex(-1);
          buttonRef.current?.focus();
          break;
        default:
          if (e.key.length === 1 && e.key.match(/\S/)) {
            setFocusByFirstCharacter(e.key);
          }
          break;
      }
    };
    return (
      <div className='flex justify-center items-start h-64'>
        <LanguageSelector>
          <LanguageSelectorButton
            aria-controls={`${sampleId}-menu`}
            aria-expanded={isMenuOpen}
            className='!px-0 !gap-0 !rounded hover:border-black desktop:!px-2 desktop:!gap-1 desktop:!rounded-lg desktop:hover:border-transparent'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onKeyDown={handleButtonKeyDown}
            ref={buttonRef}
          >
            <LanguageSelectorGlobeIcon className='hidden desktop:block' />
            <LanguageSelectorGlobeWithLabelIcon className='block desktop:hidden' />
            <span className='hidden desktop:block desktop:mb-0.5'>Language</span>
            <LanguageSelectorArrowIcon className='mt-0.5 group-[:has([aria-expanded="true"])]:rotate-180' />
          </LanguageSelectorButton>
          <LanguageSelectorMenu
            className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-full right-0 min-w-full overflow-auto`}
            id={`${sampleId}-menu`}
            isCondensed={true}
            ref={menuRef}
          >
            {exampleLanguages2.map((lang, index) => (
              <LanguageSelectorMenuItem
                aria-current={lang.code === 'ja'}
                href={lang.url}
                isCondensed={true}
                isCurrent={lang.code === 'ja'}
                key={lang.code}
                lang={lang.code}
                onKeyDown={(e) => handleMenuItemKeyDown(e, index)}
                ref={(el) => setMenuItemRef(el, index)}
              >
                {lang.name}
              </LanguageSelectorMenuItem>
            ))}
          </LanguageSelectorMenu>
        </LanguageSelector>
      </div>
    );
  },
};

export const OnlyUI = {
  render: () => {
    const sampleId = React.useId();
    return (
      <div className='flex h-64 gap-8'>
        <LanguageSelector>
          <LanguageSelectorButton>
            <LanguageSelectorGlobeIcon />
            <span className='mb-0.5'>Language</span>
            <LanguageSelectorArrowIcon className='mt-0.5 rotate-180' />
          </LanguageSelectorButton>
          <LanguageSelectorMenu
            className='absolute overflow-auto'
            id={`${sampleId}-menu`}
            isCondensed={true}
          >
            {exampleLanguages2.map((lang) => (
              <LanguageSelectorMenuItem
                aria-current={lang.code === 'ja'}
                href={lang.url}
                isCondensed={true}
                isCurrent={lang.code === 'ja'}
                key={lang.code}
                lang={lang.code}
              >
                {lang.name}
              </LanguageSelectorMenuItem>
            ))}
          </LanguageSelectorMenu>
        </LanguageSelector>

        <LanguageSelector>
          <LanguageSelectorButton className='!px-0 !py-0 !gap-0 !rounded hover:border-black focus-visible:border-transparent'>
            <LanguageSelectorGlobeWithLabelIcon />
            <LanguageSelectorArrowIcon className='mt-0.5 rotate-180' />
          </LanguageSelectorButton>
          <LanguageSelectorMenu className='absolute overflow-auto' id={`${sampleId}-menu`}>
            {exampleLanguages.map((lang) => (
              <LanguageSelectorMenuItem
                aria-current={lang.code === 'ja'}
                href={lang.url}
                isCurrent={lang.code === 'ja'}
                key={lang.code}
                lang={lang.code}
              >
                {lang.name}
              </LanguageSelectorMenuItem>
            ))}
          </LanguageSelectorMenu>
        </LanguageSelector>
      </div>
    );
  },
};
