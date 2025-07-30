'use client';

import { type ComponentProps, type KeyboardEvent, type Ref, useRef } from 'react';

export type DatePickerSize = 'lg' | 'md' | 'sm';

export type DatePickerProps = Omit<ComponentProps<'div'>, 'children'> & {
  size?: DatePickerSize;
  isError?: boolean;
  isDisabled?: boolean;
  children: (props: {
    yearRef: Ref<HTMLInputElement>;
    monthRef: Ref<HTMLInputElement>;
    dateRef: Ref<HTMLInputElement>;
  }) => JSX.Element;
};

export const DatePicker = (props: DatePickerProps) => {
  const { className, size = 'lg', isError, isDisabled, children, ...rest } = props;

  const yearRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowRight') {
      moveRight(event);
    } else if (event.key === 'ArrowLeft') {
      moveLeft(event);
    } else if (event.key.match(/^[^0-9]$/)) {
      if (!event.ctrlKey && !event.metaKey) {
        event.preventDefault();
      }
    }
  }

  function moveRight(event: KeyboardEvent<HTMLInputElement>) {
    const input = event.target as HTMLInputElement;
    if (input.selectionStart !== input.selectionEnd) {
      return;
    }
    if (input.selectionEnd === input.value.length) {
      event.preventDefault();
      if (input === yearRef.current) {
        monthRef.current?.focus();
      } else if (input === monthRef.current) {
        dateRef.current?.focus();
      }
    }
  }

  function moveLeft(event: KeyboardEvent<HTMLInputElement>) {
    const input = event.target as HTMLInputElement;
    if (input.selectionStart !== input.selectionEnd) {
      return;
    }
    if (input.selectionStart === 0) {
      event.preventDefault();
      if (input === monthRef.current) {
        yearRef.current?.focus();
      } else if (input === dateRef.current) {
        monthRef.current?.focus();
      }
    }
  }

  return (
    <div
      className={`inline-flex h-14 -space-x-1 rounded-8 border border-solid-gray-600 bg-[--bg] p-0.5 pe-0 text-solid-gray-900 [--bg:theme(colors.white)] focus-within:border-black hover:border-solid-gray-900 data-[size=md]:h-12 data-[size=sm]:h-10 data-[disabled]:border-solid-gray-300 data-[error]:border-error-1 data-[disabled]:text-solid-gray-420 data-[disabled]:[--bg:theme(colors.solid-gray.50)] data-[error]:focus-within:border-red-1000 data-[error]:hover:border-red-1000 forced-colors:data-[disabled]:border-[GrayText] forced-colors:data-[disabled]:text-[GrayText] ${className ?? ''}`}
      data-size={size}
      data-error={isError || null}
      data-disabled={isDisabled || null}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {children({ yearRef, monthRef, dateRef })}
    </div>
  );
};
