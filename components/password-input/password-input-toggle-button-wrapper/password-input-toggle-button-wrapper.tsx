'use client';
import type { PasswordInputToggleButtonWrapperProps } from './password-input-toggle-button-wrapper.types';
import { twMerge } from 'tailwind-merge';
import { passwordInputToggleButtonWrapperStyles } from './password-input-toggle-button-wrapper.styles';

export function PasswordInputToggleButtonWrapper(props: PasswordInputToggleButtonWrapperProps) {
  const { size, className, children, ...others } = props;

  return (
    <div
      className={twMerge(passwordInputToggleButtonWrapperStyles({ size }), className)}
      {...others}
    >
      {children}
    </div>
  );
}
