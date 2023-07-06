'use client';
import type { LinkCardMenuProps } from './link-card-menu.types';
import { useState } from 'react';
import { Menu, MenuPortal, MenuContent, MenuGroup, MenuSeparator } from '@/components';
import { LinkCardMenuTrigger } from './link-card-menu-trigger';
import { LinkCardMenuCopyToClipboard } from './link-card-menu-copy-to-clipboard';
import { LinkCardMenuDownloadQrCode } from './link-card-menu-download-qr-code';
import { LinkCardMenuArchive } from './link-card-menu-archive';
import { LinkCardMenuDelete } from './link-card-menu-delete';

export function LinkCardMenu(props: LinkCardMenuProps) {
  const { slug } = props;

  const [open, setOpen] = useState(false);

  return (
    <Menu open={open} onOpenChange={setOpen}>
      <LinkCardMenuTrigger open={open} />
      <MenuPortal>
        <MenuContent align="end">
          <MenuGroup>
            <LinkCardMenuCopyToClipboard slug={slug} />
            <LinkCardMenuDownloadQrCode />
          </MenuGroup>
          <MenuSeparator />
          <MenuGroup>
            <LinkCardMenuArchive />
            <LinkCardMenuDelete />
          </MenuGroup>
        </MenuContent>
      </MenuPortal>
    </Menu>
  );
}
