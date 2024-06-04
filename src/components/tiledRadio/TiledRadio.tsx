import { type ComponentProps, forwardRef } from 'react';

export type TiledRadioItemProps = {
  title: string;
  description?: string;
  isDisabled?: boolean;
};

export const TiledRadioItem = (props: TiledRadioItemProps) => {
  const { isDisabled } = props;

  return (
    <span className='flex flex-1 flex-col'>
      <span
        className={`text-std-16N-7 ${isDisabled ? 'text-solid-grey-420' : 'text-solid-grey-900'}`}
      >
        {props.title}
      </span>
      {props.description && (
        <span
          className={`text-[0.75rem] leading-1-7 ${
            isDisabled ? 'text-solid-grey-420' : 'text-solid-grey-600'
          }`}
        >
          {props.description}
        </span>
      )}
    </span>
  );
};

export type TiledRadioProps = ComponentProps<'input'> & {
  isError?: boolean;
};

export const TiledRadio = forwardRef<HTMLInputElement, TiledRadioProps>((props, ref) => {
  const { children, id, isError, ...rest } = props;

  return (
    <label
      className={`
        flex cursor-pointer items-center gap-4 rounded-8
        ${isError ? 'border-2 border-error-1 p-[14px]' : 'border border-solid-grey-900 p-[15px]'}
        focus-within:outline
        focus-within:outline-2
        focus-within:outline-offset-2
        focus-within:outline-focus-yellow
        has-[input:disabled]:cursor-default has-[input:checked]:border-2
        has-[input:disabled]:border
        has-[input:checked]:border-blue-900
        has-[input:disabled]:border-solid-grey-420
        has-[input:disabled]:bg-solid-grey-50
        has-[input:checked]:p-[14px]
      `}
      htmlFor={id}
    >
      <input className={'peer sr-only'} id={id} ref={ref} type='radio' {...rest} />

      <svg
        aria-hidden={true}
        className={`
          hidden
          peer-checked:inline-block
          peer-checked:fill-blue-900
        `}
        fill='none'
        height='24'
        viewBox='0 0 24 24'
        width='24'
      >
        <g>
          <circle cx='12' cy='12' fill='white' r='9.5' />
          <path d='M12 16.5C13.25 16.5 14.3127 16.0627 15.188 15.188C16.0627 14.3127 16.5 13.25 16.5 12C16.5 10.75 16.0627 9.68733 15.188 8.812C14.3127 7.93733 13.25 7.5 12 7.5C10.75 7.5 9.68733 7.93733 8.812 8.812C7.93733 9.68733 7.5 10.75 7.5 12C7.5 13.25 7.93733 14.3127 8.812 15.188C9.68733 16.0627 10.75 16.5 12 16.5ZM12 21.5C10.6833 21.5 9.446 21.25 8.288 20.75C7.12933 20.25 6.125 19.575 5.275 18.725C4.425 17.875 3.75 16.8707 3.25 15.712C2.75 14.554 2.5 13.3167 2.5 12C2.5 10.6833 2.75 9.44567 3.25 8.287C3.75 7.129 4.425 6.125 5.275 5.275C6.125 4.425 7.12933 3.75 8.288 3.25C9.446 2.75 10.6833 2.5 12 2.5C13.3167 2.5 14.5543 2.75 15.713 3.25C16.871 3.75 17.875 4.425 18.725 5.275C19.575 6.125 20.25 7.129 20.75 8.287C21.25 9.44567 21.5 10.6833 21.5 12C21.5 13.3167 21.25 14.554 20.75 15.712C20.25 16.8707 19.575 17.875 18.725 18.725C17.875 19.575 16.871 20.25 15.713 20.75C14.5543 21.25 13.3167 21.5 12 21.5ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z' />
        </g>
      </svg>

      <svg
        aria-hidden={true}
        className={`
          ${isError ? 'fill-error-1' : 'fill-solid-grey-900'}
          peer-checked:hidden
          peer-disabled:fill-solid-grey-420
        `}
        height='24'
        viewBox='0 0 24 24'
        width='24'
      >
        <g>
          <circle cx='12' cy='12' fill='none' r='9.5' />
          <path d='M12 21.5C10.6833 21.5 9.446 21.25 8.288 20.75C7.12933 20.25 6.125 19.575 5.275 18.725C4.425 17.875 3.75 16.8707 3.25 15.712C2.75 14.554 2.5 13.3167 2.5 12C2.5 10.6833 2.75 9.44567 3.25 8.287C3.75 7.129 4.425 6.125 5.275 5.275C6.125 4.425 7.12933 3.75 8.288 3.25C9.446 2.75 10.6833 2.5 12 2.5C13.3167 2.5 14.5543 2.75 15.713 3.25C16.871 3.75 17.875 4.425 18.725 5.275C19.575 6.125 20.25 7.129 20.75 8.287C21.25 9.44567 21.5 10.6833 21.5 12C21.5 13.3167 21.25 14.554 20.75 15.712C20.25 16.8707 19.575 17.875 18.725 18.725C17.875 19.575 16.871 20.25 15.713 20.75C14.5543 21.25 13.3167 21.5 12 21.5ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z' />
        </g>
      </svg>

      {children}
    </label>
  );
});
