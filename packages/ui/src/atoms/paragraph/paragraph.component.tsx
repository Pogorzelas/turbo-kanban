import { Typography } from '@material-tailwind/react';
import type {Ref} from 'react';
import {forwardRef} from 'react';
import type { ParagraphProps } from './paragraph.types';

function Paragraph ({ children, className }: ParagraphProps, ref: Ref<HTMLElement>) {
  return (
    <Typography
      className={className}
      ref={ref}
      variant='paragraph'
    >
      {children}
    </Typography>
  );
}

export default forwardRef(Paragraph);
