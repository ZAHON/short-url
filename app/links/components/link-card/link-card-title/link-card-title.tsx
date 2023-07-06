'use client';
import type { LinkCardTitleProps } from './link-card-title.types';

export function LinkCardTitle(props: LinkCardTitleProps) {
  const { slug } = props;

  const { hostname } = location;

  const href = `${hostname}/${slug}`;

  return (
    <a
      href={`/${slug}`}
      target="_blank"
      rel="noreferrer"
      className="truncate text-sm font-medium text-success-dark focus:underline focus:outline-none"
    >
      {href}
    </a>
  );
}
