'use client';
import type { PasswordInputWrapperProps } from './password-input-wrapper.types';
import { twMerge } from 'tailwind-merge';
import { passwordInputWrapperStyles } from './password-input-wrapper.styles';

export function PasswordInputWrapper(props: PasswordInputWrapperProps) {
  const { className, children, ...others } = props;

  return (
    <div className={twMerge(passwordInputWrapperStyles(), className)} {...others}>
      {children}
    </div>
  );
}
