import type { ErrorMessageProps } from './error-message.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { IconAlertCircle } from '@tabler/icons-react';
import { applayComponentDefaultProps } from '@/utils';
import { getErrorMessageIconSize } from './utils';
import { errorMessageStyles } from './error-message.styles';

const defaultProps: Partial<ErrorMessageProps> = {
  fontSize: 'md',
  withIcon: true,
};

export const ErrorMessage = forwardRef<HTMLSpanElement, ErrorMessageProps>((props, ref) => {
  const { fontSize, withIcon, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <span
      ref={ref}
      aria-live="assertive"
      className={twMerge(errorMessageStyles({ fontSize }), className)}
      {...others}
    >
      {withIcon && (
        <IconAlertCircle
          size={getErrorMessageIconSize(fontSize)}
          aria-hidden="true"
          focusable="false"
        />
      )}
      {children}
    </span>
  );
});

ErrorMessage.displayName = 'ErrorMessage';
