import { Typography } from '@material-tailwind/react';
import type { Ref} from 'react';
import {forwardRef} from 'react';
import type { HeadingProps } from './heading.types';

function Heading ({ children, className, type }: HeadingProps, ref: Ref<HTMLElement>) {
  return (
    <Typography
      className={className}
      ref={ref}
      variant={type}
    >
      {children}
    </Typography>
  );
}

export default forwardRef(Heading);
