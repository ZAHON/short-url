import type { TextInputProps } from './text-input.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { textInputStyles } from './text-input.styles';

const defaultProps: Partial<TextInputProps> = {
  size: 'md',
  type: 'text',
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { size, invalid, required, className, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <input
      ref={ref}
      aria-required={required ? true : undefined}
      aria-invalid={invalid ? true : undefined}
      className={twMerge(textInputStyles({ size, invalid }), className)}
      {...others}
    />
  );
});

TextInput.displayName = 'TextInput';
