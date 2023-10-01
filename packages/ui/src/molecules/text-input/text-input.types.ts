import type {ChangeEventHandler} from 'react';

type TextInputProps = {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export type { TextInputProps }
