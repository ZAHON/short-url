import type { LinkCardProps } from './link-card.types';
import { formatDate } from '@/utils';
import { LinkCardIcon } from './link-card-icon';
import { LinkCardTitle } from './link-card-title';
import { LinkCardMenu } from './link-card-menu';

export function LinkCard(props: LinkCardProps) {
  const { id, url, slug, archived, clicks, createdAt } = props;

  const addedText = `Added ${formatDate(createdAt)}`;
  const clicksText = `${clicks} clicks`;

  return (
    <li className="flex items-center justify-between gap-x-4 rounded-lg border border-accent-2 bg-white p-4 drop-shadow-sm">
      <div className="flex items-center gap-x-4 overflow-hidden">
        <LinkCardIcon url={url} archived={archived} />
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-shrink flex-col justify-center gap-y-0.5 overflow-hidden">
            <LinkCardTitle slug={slug} archived={archived} />
            <p className="truncate text-sm">{url}</p>
          </div>
          <div className="flex flex-col gap-y-0.5">
            <p className="truncate text-xs text-accent-6">{clicksText}</p>
            <p className="truncate text-xs text-accent-6">{addedText}</p>
          </div>
        </div>
      </div>
      <LinkCardMenu id={id} url={url} slug={slug} archived={archived} />
    </li>
  );
}
