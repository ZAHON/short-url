'use client';
import type { MouseEvent } from 'react';
import type { PasswordInputToggleButtonProps } from './password-input-toggle-button.types';
import { twMerge } from 'tailwind-merge';
import { IconEyeOff, IconEye } from '@tabler/icons-react';
import { getPasswordInputToggleButtonIconSzie } from './utils';
import { passwordInputToggleButtonStyles } from './password-input-toggle-button.styles';

export function PasswordInputToggleButton(props: PasswordInputToggleButtonProps) {
  const { size, visible, inputId, className, onClick, onVisibleChange, ...others } = props;

  const label = `${visible ? 'Hide' : 'Show'} password`;
  const iconSize = getPasswordInputToggleButtonIconSzie(size);

  function getIcon() {
    if (visible) {
      return <IconEyeOff size={iconSize} aria-hidden="true" focusable="false" />;
    }

    return <IconEye size={iconSize} aria-hidden="true" focusable="false" />;
  }

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    onVisibleChange();

    if (onClick) onClick(e);
  }

  return (
    <button
      type="button"
      aria-label={label}
      aria-controls={inputId}
      onClick={handleClick}
      className={twMerge(passwordInputToggleButtonStyles({ size }), className)}
      {...others}
    >
      {getIcon()}
    </button>
  );
}
