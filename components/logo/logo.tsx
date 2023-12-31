'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Skeleton } from '@/components';
import logoImage from '@/public/images/logo.svg';

export function Logo() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  if (error) {
    return null;
  }

  return (
    <Link
      href="/"
      className="rounded-full focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success"
    >
      <Skeleton visible={!loading} fitContent className="rounded-full">
        <Image
          height={40}
          width={40}
          src={logoImage}
          alt="Short URL logo"
          quality={100}
          onError={() => setError(true)}
          onLoad={() => setLoading(true)}
        />
      </Skeleton>
    </Link>
  );
}
