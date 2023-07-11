'use client';
import type { LinkCardMenuDeleteProps } from './link-card-menu-delete.types';
import { IconTrash } from '@tabler/icons-react';
import { MenuItem } from '@/components';
import {
  useLinksPageStore,
  selectSetDeleteLinkDialogOpen,
  selectSetDeleteLinkId,
  selectSetDeleteLinkUrl,
  selectSetDeleteLinkSlug,
} from '@links/store';

export function LinkCardMenuDelete(props: LinkCardMenuDeleteProps) {
  const { id, url, slug } = props;

  const setDeleteLinkDialogOpen = useLinksPageStore(selectSetDeleteLinkDialogOpen);
  const setDeleteLinkId = useLinksPageStore(selectSetDeleteLinkId);
  const setDeleteLinkUrl = useLinksPageStore(selectSetDeleteLinkUrl);
  const setDeleteLinkSlug = useLinksPageStore(selectSetDeleteLinkSlug);

  function handleOpenDeleteLinkDialog() {
    setDeleteLinkDialogOpen(true);
    setDeleteLinkId(id);
    setDeleteLinkUrl(url);
    setDeleteLinkSlug(slug);
  }

  return (
    <MenuItem
      onSelect={handleOpenDeleteLinkDialog}
      variant="error"
      icon={<IconTrash size="1rem" aria-hidden="true" focusable="false" />}
    >
      Delete
    </MenuItem>
  );
}
