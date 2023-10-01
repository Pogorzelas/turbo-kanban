import { Typography } from '@material-tailwind/react';
import type { Ref } from 'react';
import { forwardRef } from 'react';
import type { CaptionProps } from './caption.types';

function Caption({ children, className }: CaptionProps, ref: Ref<HTMLElement>) {
  return (
    <Typography
      className={`font-normal ${className}`}
      color="gray"
      ref={ref}
      variant='small'
    >
      {children}
    </Typography>
  );
}

export default forwardRef(Caption);
