import { Logo } from '@/components';

export function Header() {
  return (
    <header className="flex flex-col items-center gap-y-3 border-b border-b-accent-2 bg-accent-1 px-8 py-4">
      <Logo />
      <h3 className="text-xl font-medium">Sign in to Short URL</h3>
      <p className="text-sm text-accent-8">Start creating short links with superpowers.</p>
    </header>
  );
}
