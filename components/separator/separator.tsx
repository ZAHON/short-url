import type { SeparatorProps } from './separator.types';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { SeparatorLabel } from './separator-label';
import { separatorStyles } from './separator.styles';

const defaultProps: Partial<SeparatorProps> = {
  orientation: 'horizontal',
  labelFontSize: 'sm',
};

export function Separator(props: SeparatorProps) {
  const { orientation, label, labelFontSize, labelProps, className, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  const showLabel = orientation === 'horizontal' && Boolean(label);

  return (
    <div
      role={showLabel ? 'none' : 'separator'}
      className={twMerge(separatorStyles({ orientation }), className)}
      {...others}
    >
      {showLabel && (
        <SeparatorLabel fontSize={labelFontSize} {...labelProps}>
          {label}
        </SeparatorLabel>
      )}
    </div>
  );
}
