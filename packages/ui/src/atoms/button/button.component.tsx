import { Button as BaseButton } from '@material-tailwind/react';
import type { Ref} from 'react';
import {forwardRef} from 'react';
import type { ButtonProps } from './button.types';

function Button(
  {
    children,
    className,
    isDisabled,
    type = 'button',
  }: ButtonProps,
  ref: Ref<HTMLButtonElement>
) {
  return (
    <BaseButton
      className={className}
      disabled={isDisabled}
      ref={ref}
      type={type}
    >
      {children}
    </BaseButton>
  );
}

export default forwardRef(Button);
