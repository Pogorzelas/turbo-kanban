import type { ReactNode } from 'react';

type ButtonTypes = 'button' | 'submit' | 'reset';

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  type?: ButtonTypes;
  isDisabled?: boolean;
}

export type { ButtonProps, ButtonTypes }
