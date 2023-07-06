'use client';
import type { ChangeEvent } from 'react';
import { useId } from 'react';
import { Label, PasswordInput, ErrorMessage } from '@/components';
import {
  usePasswordRequiredStore,
  selectPassword,
  selectIsValidPassword,
  selectSetPassword,
  selectSetIsValidPassword,
} from '../password-required-store';

export function PasswordRequiredInput() {
  const inputId = useId();
  const errorMessageId = useId();

  const password = usePasswordRequiredStore(selectPassword);
  const isValidPassword = usePasswordRequiredStore(selectIsValidPassword);

  const setPassword = usePasswordRequiredStore(selectSetPassword);
  const setIsValidPassword = usePasswordRequiredStore(selectSetIsValidPassword);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setPassword(value);
    setIsValidPassword(true);
  }

  return (
    <div role="group" className="flex flex-col gap-y-1">
      <Label htmlFor={inputId} className="pl-0.5">
        Password
      </Label>
      <PasswordInput
        id={inputId}
        invalid={!isValidPassword}
        aria-describedby={!isValidPassword ? errorMessageId : undefined}
        value={password}
        onChange={handleChange}
      />
      {!isValidPassword && (
        <ErrorMessage id={errorMessageId} className="pl-0.5">
          Invalid password
        </ErrorMessage>
      )}
    </div>
  );
}
