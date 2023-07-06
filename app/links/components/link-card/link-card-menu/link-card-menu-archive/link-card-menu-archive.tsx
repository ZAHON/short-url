'use client';
import { LinkCardMenuArchiveProps } from './link-card-menu-archive.types';
import { IconArchive } from '@tabler/icons-react';
import { MenuItem } from '@/components';
import {
  useLinksPageStore,
  selectSetArchiveLinkDialogOpen,
  selectSetArchiveLinkId,
  selectSetArchiveLinkUrl,
  selectSetArchiveLinkSlug,
  selectSetArchiveLinkArchived,
} from '@links/store';

export function LinkCardMenuArchive(props: LinkCardMenuArchiveProps) {
  const { id, url, slug, archived } = props;

  const setArchiveLinkDialogOpen = useLinksPageStore(selectSetArchiveLinkDialogOpen);
  const setArchiveLinkId = useLinksPageStore(selectSetArchiveLinkId);
  const setArchiveLinkUrl = useLinksPageStore(selectSetArchiveLinkUrl);
  const setArchiveLinkSlug = useLinksPageStore(selectSetArchiveLinkSlug);
  const setArchiveLinkArchived = useLinksPageStore(selectSetArchiveLinkArchived);

  function handleOpenArchiveLinkDialog() {
    setArchiveLinkDialogOpen(true);
    setArchiveLinkId(id);
    setArchiveLinkUrl(url);
    setArchiveLinkSlug(slug);
    setArchiveLinkArchived(archived);
  }

  return (
    <MenuItem
      onSelect={handleOpenArchiveLinkDialog}
      icon={<IconArchive size="1rem" aria-hidden="true" focusable="false" />}
    >
      {archived ? 'Unarchive' : 'Archive'}
    </MenuItem>
  );
}
