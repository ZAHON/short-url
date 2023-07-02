import type { PasswordInputProps } from '../../../password-input.types';

type Size = PasswordInputProps['size'];

export function getPasswordInputToggleButtonIconSzie(size: Size) {
  switch (size) {
    case 'sm': {
      return '0.875rem';
    }
    case 'md': {
      return '1rem';
    }
    case 'lg': {
      return '1.25rem';
    }
    default: {
      throw Error(`Unknown size: ${size}`);
    }
  }
}
