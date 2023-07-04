import { UserMenu } from '..';

export function Header() {
  return (
    <div className="border-b border-b-accent-2 bg-white">
      <header className="flex h-14 items-center justify-between px-4 lg:mx-auto lg:max-w-7xl">
        <div></div>
        <UserMenu />
      </header>
    </div>
  );
}
