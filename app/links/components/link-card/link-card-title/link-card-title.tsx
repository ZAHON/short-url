'use client';
import type { LinkCardTitleProps } from './link-card-title.types';

export function LinkCardTitle(props: LinkCardTitleProps) {
  const { slug, archived } = props;

  const { hostname } = location;

  const href = `${hostname}/${slug}`;

  return (
    <a
      href={`/${slug}`}
      target="_blank"
      rel="noreferrer"
      className={`truncate text-sm font-medium focus:underline focus:outline-none ${
        archived ? 'text-accent-6' : 'text-success-dark'
      }`}
    >
      {href}
    </a>
  );
}
