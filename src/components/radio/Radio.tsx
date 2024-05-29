import { type ComponentProps, forwardRef } from 'react';

export type RadioProps = ComponentProps<'input'> & {
  isError?: boolean;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { children, id, isError, ...rest } = props;

  return (
    <label className={'flex w-fit items-center gap-4 py-2'} htmlFor={id}>
      <input className={'peer sr-only'} id={id} ref={ref} type='radio' {...rest} />

      <svg
        aria-hidden={true}
        className={`
          my-[2px] hidden flex-none
          peer-checked:inline-block
          peer-checked:fill-sea-800
          peer-focus-visible:rounded-8
          peer-focus-visible:outline
          peer-focus-visible:outline-2
          peer-focus-visible:-outline-offset-1
          peer-focus-visible:outline-focus-yellow
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
          my-[2px] flex-none
          ${isError ? 'fill-sun-800' : 'fill-sumi-900'}
          peer-checked:hidden
          peer-focus-visible:rounded-8
          peer-focus-visible:outline
          peer-focus-visible:outline-2
          peer-focus-visible:-outline-offset-1
          peer-focus-visible:outline-focus-yellow
          peer-disabled:fill-sumi-500
        `}
        fill='none'
        height='24'
        viewBox='0 0 24 24'
        width='24'
      >
        <g>
          <circle cx='12' cy='12' fill='white' r='9.5' />
          <path d='M12 21.5C10.6833 21.5 9.446 21.25 8.288 20.75C7.12933 20.25 6.125 19.575 5.275 18.725C4.425 17.875 3.75 16.8707 3.25 15.712C2.75 14.554 2.5 13.3167 2.5 12C2.5 10.6833 2.75 9.44567 3.25 8.287C3.75 7.129 4.425 6.125 5.275 5.275C6.125 4.425 7.12933 3.75 8.288 3.25C9.446 2.75 10.6833 2.5 12 2.5C13.3167 2.5 14.5543 2.75 15.713 3.25C16.871 3.75 17.875 4.425 18.725 5.275C19.575 6.125 20.25 7.129 20.75 8.287C21.25 9.44567 21.5 10.6833 21.5 12C21.5 13.3167 21.25 14.554 20.75 15.712C20.25 16.8707 19.575 17.875 18.725 18.725C17.875 19.575 16.871 20.25 15.713 20.75C14.5543 21.25 13.3167 21.5 12 21.5ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z' />
        </g>
      </svg>

      <span
        className={`
          text-std-16N-7
          ${isError ? 'text-error-1' : 'text-solid-grey-900'}
          peer-disabled:text-solid-grey-600
        `}
      >
        {children}
      </span>
    </label>
  );
});
