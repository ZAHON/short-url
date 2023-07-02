'use client';
import type { PasswordInputProps } from './password-input.types';
import { forwardRef, useState, useId } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { PasswordInputWrapper } from './password-input-wrapper';
import { PasswordInputToggleButtonWrapper } from './password-input-toggle-button-wrapper';
import { PasswordInputToggleButton } from './password-input-toggle-button';
import { passwordInputStyles } from './password-input.styles';

const defaultProps: Partial<PasswordInputProps> = {
  size: 'md',
  visibleLabel: 'Your password is shown',
  noVisibleLabel: 'Your password is hidden',
};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>((props, ref) => {
  const {
    id,
    size,
    defaultVisible,
    visible,
    onVisibleChange,
    disabled,
    invalid,
    required,
    visibleLabel,
    noVisibleLabel,
    wrapperProps,
    toggleButtonWrapperProps,
    toggleButtonProps,
    className,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const uuid = useId();
  const [_visible, setVisible] = useState(defaultVisible ?? false);

  const inputId = id ?? uuid;
  const visibleState = visible ?? _visible;

  function handleVisibleChange() {
    if (onVisibleChange) {
      onVisibleChange(!visibleState);
      return;
    }

    setVisible(!visibleState);
  }

  return (
    <PasswordInputWrapper {...wrapperProps}>
      <input
        ref={ref}
        id={inputId}
        type={visibleState ? 'text' : 'password'}
        disabled={disabled}
        aria-required={required ? true : undefined}
        aria-invalid={invalid ? true : undefined}
        className={twMerge(passwordInputStyles({ size, invalid }), className)}
        {...others}
      />
      {!disabled && (
        <PasswordInputToggleButtonWrapper size={size} {...toggleButtonWrapperProps}>
          <PasswordInputToggleButton
            inputId={inputId}
            size={size}
            visible={visibleState}
            onVisibleChange={handleVisibleChange}
            {...toggleButtonProps}
          />
        </PasswordInputToggleButtonWrapper>
      )}
      <span className="sr-only" aria-live="polite">
        {visibleState ? visibleLabel : noVisibleLabel}
      </span>
    </PasswordInputWrapper>
  );
});

PasswordInput.displayName = 'PasswordInput';
