import type { SwitchProps } from '@/components';

export type CreateLinkDialogPasswordProtectionSwitchProps = Required<
  Pick<SwitchProps, 'checked' | 'onCheckedChange'>
>;
