import type { ErrorMessageProps } from '../../error-message.types';

type Size = ErrorMessageProps['fontSize'];

export function getErrorMessageIconSize(size: Size) {
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
