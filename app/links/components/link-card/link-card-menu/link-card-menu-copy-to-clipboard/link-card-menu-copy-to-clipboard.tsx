'use client';
import { LinkCardMenuCopyToClipboardProps } from './link-card-menu-copy-to-clipboard.types';
import useClipboard from 'react-use-clipboard';
import { IconClipboard } from '@tabler/icons-react';
import { MenuItem } from '@/components';

export function LinkCardMenuCopyToClipboard(props: LinkCardMenuCopyToClipboardProps) {
  const { slug } = props;

  const [, setCopied] = useClipboard(`${location.origin}/${slug}`);

  return (
    <MenuItem
      onClick={setCopied}
      icon={<IconClipboard size="1rem" aria-hidden="true" focusable="false" />}
    >
      Copy to clipboard
    </MenuItem>
  );
}
