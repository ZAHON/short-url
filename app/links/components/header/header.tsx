import Link from 'next/link';
import Image from 'next/image';
import { UserMenu } from '..';

export function Header() {
  return (
    <div className="sticky top-0 z-30 border-b border-b-accent-2 bg-white">
      <header className="flex h-14 items-center justify-between px-4 lg:mx-auto lg:max-w-7xl">
        <Link
          href="/"
          className="flex select-none items-center gap-x-2 rounded-md text-xl font-medium focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success"
        >
          <Image height={28} width={28} src="/images/logo.svg" alt="Short URL logo" />
          Short URL
        </Link>
        <UserMenu />
      </header>
    </div>
  );
}
