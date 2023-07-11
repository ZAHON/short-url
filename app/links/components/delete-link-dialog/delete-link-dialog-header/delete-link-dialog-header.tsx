import Image from 'next/image';
import { DialogHeader, DialogTitle } from '@/components';
import { useLinksPageStore, selectDeleteLinkUrl, selectDeleteLinkSlug } from '@links/store';

export function DeleteLinkDialogHeader() {
  const deleteLinkUrl = useLinksPageStore(selectDeleteLinkUrl);
  const deleteLinkSlug = useLinksPageStore(selectDeleteLinkSlug);

  if (deleteLinkUrl === undefined || deleteLinkSlug === undefined) {
    return null;
  }

  const { hostname } = new URL(deleteLinkUrl);

  return (
    <DialogHeader className="flex flex-col gap-y-3">
      <Image
        src={`https://www.google.com/s2/favicons?sz=64&domain_url=${deleteLinkUrl}`}
        alt={hostname}
        height={36}
        width={36}
        quality={100}
        className="h-9 w-9 select-none overflow-hidden rounded-full"
      />
      <DialogTitle className="text-xl">
        Delete {location.hostname}/${deleteLinkSlug}
      </DialogTitle>
      <p className="text-center text-sm text-accent-8 [text-wrap:balance]">
        Warning: Deleting this link will remove all of its stats. This action cannot be undone.
      </p>
    </DialogHeader>
  );
}
