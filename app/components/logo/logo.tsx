import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link
      href="/"
      className="flex select-none items-center gap-x-2 rounded-md text-xl font-medium focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success"
    >
      <Image height={28} width={28} src="/images/logo.svg" alt="Short URL logo" />
      Short URL
    </Link>
  );
}
