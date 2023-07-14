import { Logo, GettingStartedLink } from '..';

export function Header() {
  return (
    <div className="sticky top-0 z-50 border-b border-b-accent-2 bg-white/50 backdrop-blur-lg backdrop-saturate-100">
      <header className="flex h-14 items-center justify-between px-4 lg:mx-auto lg:max-w-7xl">
        <Logo />
        <GettingStartedLink />
      </header>
    </div>
  );
}
