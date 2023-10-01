import {Input} from '@material-tailwind/react';
import clsx from 'clsx';
import type {Ref} from 'react';
import {forwardRef} from 'react';
import {Caption} from '../../atoms/caption';
import type { TextInputProps } from './text-input.types';

function TextInput(
  {
    label,
    helperText,
    errorMessage,
    value,
    onChange
  }: TextInputProps,
  ref: Ref<HTMLInputElement>
) {
  return (
    <div>
      <Input
        crossOrigin='anonymous'
        error={Boolean(errorMessage)}
        label={label}
        onChange={onChange}
        ref={ref}
        value={value}
        variant='outlined'
      />
      <Caption
        className={
          clsx(
            'mt-2 flex items-center gap-1 min-h-[21px]',
            errorMessage && 'text-red-500'
          )
        }
      >
        {errorMessage || helperText}
      </Caption>
    </div>
  );
}

export default forwardRef(TextInput);
