'use client';
import type { UserMenuInnerTriggerProps } from './user-menu-inner-trigger.types';
import { useState } from 'react';
import Image from 'next/image';
import { IconUser } from '@tabler/icons-react';
import { Skeleton, MenuTrigger } from '@/components';

export function UserMenuInnerTrigger(props: UserMenuInnerTriggerProps) {
  const { open, image } = props;

  const [imageLoaded, setImageLoaded] = useState(false);

  const label = `${open ? 'Hide' : 'Show'} user menu`;

  function getImage() {
    if (image) {
      return (
        <Skeleton visible={!imageLoaded} fitContent className="h-9 w-9 rounded-full">
          <Image
            onLoad={() => setImageLoaded(true)}
            height={36}
            width={36}
            src={image}
            alt="User image"
          />
        </Skeleton>
      );
    }

    setImageLoaded(true);

    return <IconUser size="1.25rem" aria-hidden="true" focusable="false" />;
  }

  return (
    <MenuTrigger disabled={!imageLoaded}>
      <button
        aria-label={label}
        type="button"
        className="flex select-none items-center justify-center overflow-hidden rounded-full focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success enabled:active:translate-y-px disabled:cursor-not-allowed motion-safe:transition motion-safe:duration-150"
      >
        {getImage()}
      </button>
    </MenuTrigger>
  );
}
