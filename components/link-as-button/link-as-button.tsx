import type { LinkAsButtonProps } from './link-as-button.types';
import Link from 'next/link';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { linkAsButtonStyles } from './link-as-button.styles';

const defaultProps: Partial<LinkAsButtonProps> = {
  size: 'md',
  variant: 'secondary',
};

export const LinkAsButton = forwardRef<HTMLAnchorElement, LinkAsButtonProps>((props, ref) => {
  const { size, variant, fullWidth, rounded, icon, className, children, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  return (
    <Link
      ref={ref}
      className={twMerge(linkAsButtonStyles({ size, variant, fullWidth, rounded }), className)}
      {...others}
    >
      {icon && icon}
      {children}
    </Link>
  );
});

LinkAsButton.displayName = 'LinkAsButton';
