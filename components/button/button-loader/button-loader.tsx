import type { ButtonLoaderProps } from './button-loader.types';
import { twMerge } from 'tailwind-merge';
import { Loader } from '@/components';
import { buttonLoaderWrapperStyles } from './button-loader.styles';

export function ButtonLoader(props: ButtonLoaderProps) {
  const { wrapperProps, ...others } = props;

  return (
    <Loader
      {...others}
      wrapperProps={{
        ...wrapperProps,
        className: twMerge(buttonLoaderWrapperStyles(), wrapperProps?.className),
      }}
    />
  );
}
