import type { IconButtonProps } from './icon-button.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { iconButtonStyles } from './icon-button.styles';

const defaultProps: Partial<IconButtonProps> = {
  size: 'md',
  variant: 'secondary',
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const { size, variant, rounded, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <button
      ref={ref}
      type="button"
      className={twMerge(iconButtonStyles({ size, variant, rounded }), className)}
      {...others}
    >
      {children}
    </button>
  );
});

IconButton.displayName = 'IconButton';
