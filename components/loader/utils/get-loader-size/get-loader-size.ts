import type { LoaderProps } from '../../loader.types';

export function getLoaderSize(size: LoaderProps['size']) {
  if (typeof size === 'number') {
    return `${size / 16}rem`;
  }

  if (typeof size === 'string') {
    switch (size) {
      case 'sm': {
        return '1rem';
      }
      case 'md': {
        return '1.5rem';
      }
      case 'lg': {
        return '1.75rem';
      }
    }
  }

  throw Error(`Unknown size: ${size}`);
}
