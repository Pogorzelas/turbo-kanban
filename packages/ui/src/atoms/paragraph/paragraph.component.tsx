import clsx from 'clsx';
import type { ParagraphProps } from './paragraph.types';

function Paragraph ({ children, className }: ParagraphProps) {
  return (
    <p
      className={
        clsx(
          'font-sans text-base',
          className,
        )
      }
    >
      {children}
    </p>
  );
}

export {
  Paragraph
};
