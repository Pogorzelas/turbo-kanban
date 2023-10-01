import type { ReactNode } from 'react';

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = {
  type: HeadingType;
  className?: string;
  children?: ReactNode;
}

export type { HeadingProps, HeadingType }
