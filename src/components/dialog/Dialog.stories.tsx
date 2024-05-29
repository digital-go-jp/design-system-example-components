import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { useRef } from 'react';
import { Button } from '../';
import { Dialog, DialogBody } from './Dialog';

const meta = {
  title: 'Component/Dialog',
  component: Dialog,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    const DialogWithHooks = () => {
      const dialogRef = useRef<HTMLDialogElement>(null);
      return (
        <div>
          <Button onClick={() => dialogRef.current?.showModal()} size='lg' variant='primary'>
            ダイアログ表示
          </Button>

          <Dialog aria-labelledby='example-heading1' className='max-w-[35rem]' ref={dialogRef}>
            <DialogBody>
              <h2 className='text-std-24B-5 desktop:text-std-28B-5' id='example-heading1'>
                ダイアログタイトル
              </h2>
              <p className='text-std-16N-7'>
                ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。
              </p>
              <div className='mt-2 flex w-full max-w-xs flex-col gap-4 desktop:mt-6'>
                <Button
                  onClick={() => {
                    dialogRef.current?.close();
                  }}
                  size='lg'
                  variant='primary'
                >
                  中断する
                </Button>
                <Button
                  onClick={() => {
                    dialogRef.current?.close();
                  }}
                  size='lg'
                  variant='tertiary'
                >
                  キャンセル
                </Button>
              </div>
            </DialogBody>
          </Dialog>
        </div>
      );
    };
    return <DialogWithHooks />;
  },
};

export const DialogWithHorizontalActions: Story = {
  render: () => {
    const DialogWithHooks = () => {
      const dialogRef = useRef<HTMLDialogElement>(null);

      return (
        <div>
          <Button onClick={() => dialogRef.current?.showModal()} size='lg' variant='primary'>
            ダイアログ表示
          </Button>

          <Dialog aria-labelledby='example-heading2' className='max-w-[40rem]' ref={dialogRef}>
            <DialogBody>
              <h2 className='text-std-24B-5 desktop:text-std-28B-5' id='example-heading2'>
                ダイアログタイトル
              </h2>
              <p className='text-std-16N-7'>
                ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。
              </p>
              <div className='mt-2 flex w-full flex-col gap-4 desktop:mt-6 desktop:flex-row-reverse'>
                <Button
                  onClick={() => {
                    dialogRef.current?.close();
                  }}
                  size='lg'
                  variant='primary'
                >
                  確定する
                </Button>
                <Button
                  onClick={() => {
                    dialogRef.current?.close();
                  }}
                  size='lg'
                  variant='secondary'
                >
                  前の画面に戻る
                </Button>
                <Button
                  className='desktop:mr-auto'
                  onClick={() => {
                    dialogRef.current?.close();
                  }}
                  size='lg'
                  variant='tertiary'
                >
                  キャンセル
                </Button>
              </div>
            </DialogBody>
          </Dialog>
        </div>
      );
    };
    return <DialogWithHooks />;
  },
};

export const AlertDialog: Story = {
  render: () => {
    const DialogWithHooks = () => {
      const dialogRef = useRef<HTMLDialogElement>(null);

      return (
        <div>
          <Button onClick={() => dialogRef.current?.showModal()} size='lg' variant='primary'>
            アラートダイアログ表示
          </Button>

          <Dialog aria-labelledby='alertdialog-heading' ref={dialogRef} role='alertdialog'>
            <DialogBody>
              <h2 className='text-std-24B-5 desktop:text-std-28B-5' id='alertdialog-heading'>
                アラートダイアログタイトル
              </h2>
              <p className='text-std-16N-7'>
                これはアラートダイアログの例です。ユーザーにとって緊急性の高い通知内容が入ります。
              </p>
              <div className='mt-2 flex w-full flex-col gap-4 desktop:mt-6 desktop:flex-row-reverse'>
                <Button
                  onClick={() => {
                    dialogRef.current?.close();
                  }}
                  size='md'
                  variant='primary'
                >
                  OK
                </Button>
              </div>
            </DialogBody>
          </Dialog>
        </div>
      );
    };
    return <DialogWithHooks />;
  },
};
