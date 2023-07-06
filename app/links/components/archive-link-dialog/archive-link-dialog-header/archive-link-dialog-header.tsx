'use client';
import Image from 'next/image';
import { DialogHeader, DialogTitle } from '@/components';
import {
  useLinksPageStore,
  selectArchiveLinkUrl,
  selectArchiveLinkSlug,
  selectArchiveLinkArchived,
} from '@links/store';

export function ArchiveLinkDialogHeader() {
  const archiveLinkUrl = useLinksPageStore(selectArchiveLinkUrl);
  const archiveLinkSlug = useLinksPageStore(selectArchiveLinkSlug);
  const archiveLinkArchived = useLinksPageStore(selectArchiveLinkArchived);

  if (
    archiveLinkUrl === undefined ||
    archiveLinkSlug === undefined ||
    archiveLinkArchived === undefined
  ) {
    return null;
  }

  const { hostname } = new URL(archiveLinkUrl);

  return (
    <DialogHeader className="flex flex-col gap-y-3">
      <Image
        src={`https://www.google.com/s2/favicons?sz=64&domain_url=${archiveLinkUrl}`}
        alt={hostname}
        height={36}
        width={36}
        quality={100}
        className="h-9 w-9 select-none overflow-hidden rounded-full"
      />
      <DialogTitle className="text-xl">
        {`${archiveLinkArchived ? 'Unarchive' : 'Archive'} ${location.hostname}/${archiveLinkSlug}`}
      </DialogTitle>
      <p className="text-center text-sm text-accent-8 [text-wrap:balance]">
        {archiveLinkArchived
          ? `By unarchiving this link, it will show up on your main dashboard again.`
          : `Archived links will still work - they just won't show up on your main dashboard.`}
      </p>
    </DialogHeader>
  );
}
