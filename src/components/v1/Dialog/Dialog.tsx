import { type ComponentProps, forwardRef } from 'react';

export type DialogProps = ComponentProps<'dialog'>;

/**
 * ※ ModalDialog は v1 のみのコンポーネントのため、v2 では非推奨となっています。
 * v2 に対応したダイアログは今後提供予定です。
 */
export const Dialog = forwardRef<HTMLDialogElement, DialogProps>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: light dismiss for v1 only
    <dialog
      className={`bg-transparent p-6 backdrop:bg-black/45 ${className ?? ''}`}
      onClick={(e) => {
        e.currentTarget.close();
      }}
      ref={ref}
      {...rest}
    >
      {children}
    </dialog>
  );
});

export type DialogBodyProps = ComponentProps<'div'>;

export const DialogBody = (props: DialogBodyProps) => {
  const { children, className, ...rest } = props;
  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: light dismiss for v1 only
    // biome-ignore lint/a11y/useKeyWithClickEvents: light dismiss for v1 only
    <div
      className={`flex flex-col items-center gap-4 rounded-12 border border-solid-gray-200 bg-white p-6 desktop:p-10 ${
        className ?? ''
      }`}
      onClick={(e) => {
        e.stopPropagation();
      }}
      {...rest}
    >
      {children}
    </div>
  );
};
