import type { ButtonProps } from './button.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { ButtonInner } from './button-inner';
import { ButtonLoader } from './button-loader';
import { buttonStyles } from './button.styles';

const defaultProps: Partial<ButtonProps> = {
  type: 'button',
  size: 'md',
  variant: 'secondary',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    size,
    variant,
    disabled,
    loading,
    fullWidth,
    rounded,
    icon,
    className,
    children,
    loaderProps,
    innerProps,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={twMerge(buttonStyles({ size, variant, fullWidth, rounded }), className)}
      {...others}
    >
      <ButtonInner loading={loading} {...innerProps}>
        {icon}
        {children}
      </ButtonInner>
      {loading && <ButtonLoader size={size} {...loaderProps} />}
    </button>
  );
});

Button.displayName = 'Button';
