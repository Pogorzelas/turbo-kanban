import clsx from 'clsx';
import type { HeadingProps } from './heading.types';

function Heading ({ children, className, type }: HeadingProps) {
  const Element = type;

  return (
    <Element
      className={
        clsx(
          'font-sans font-semibold',
          type === 'h1' && 'text-6xl',
          type === 'h2' && 'text-5xl',
          type === 'h3' && 'text-4xl',
          type === 'h4' && 'text-3xl',
          type === 'h5' && 'text-2xl',
          type === 'h6' && 'text-xl',
          className,
        )
      }
    >
      {children}
    </Element>
  );
}

export {
  Heading
};
