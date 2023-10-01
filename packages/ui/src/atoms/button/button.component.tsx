import clsx from 'clsx';
import type { ButtonProps } from './button.types';

function Button ({
  children,
  className,
  isDisabled,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      className={
        clsx(
          'cursor-pointer disabled:cursor-not-allowed text-sm font-sans bg-violet-500 hover:bg-violet-600 active:bg-violet-700 text-white rounded-lg font-semibold px-4 py-2 border-none disabled:opacity-50',
          className,
        )
      }
      disabled={isDisabled}
      type={type}
    >
      {children}
    </button>
  );
}

export {
  Button
};
