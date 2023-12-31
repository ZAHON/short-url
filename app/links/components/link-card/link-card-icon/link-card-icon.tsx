'use client';
import type { LinkCardIconProps } from './link-card-icon.types';
import { useState } from 'react';
import Image from 'next/image';
import { IconWorldWww, IconArchive } from '@tabler/icons-react';
import { Skeleton } from '@/components';

export function LinkCardIcon(props: LinkCardIconProps) {
  const { url, archived } = props;

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  if (archived) {
    return (
      <IconArchive
        aria-hidden="true"
        focusable="false"
        className="h-9 w-9 select-none text-accent-6"
      />
    );
  }

  const { hostname } = new URL(url);

  if (error) {
    return <IconWorldWww aria-hidden="true" focusable="false" className="h-9 w-9 select-none" />;
  }

  return (
    <Skeleton visible={!loading} fitContent className="flex-shrink-0 rounded-full">
      <Image
        onError={() => setError(true)}
        onLoad={() => setLoading(true)}
        src={`https://www.google.com/s2/favicons?sz=64&domain_url=${url}`}
        alt={hostname}
        height={36}
        width={36}
        quality={100}
        className="h-9 w-9 select-none"
      />
    </Skeleton>
  );
}
