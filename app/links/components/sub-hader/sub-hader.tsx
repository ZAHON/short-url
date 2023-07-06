import { CreateLinkButton } from '..';

export function SubHeader() {
  return (
    <div className="border-b border-b-accent-2 bg-white">
      <div className="flex h-24 items-center justify-between px-4 lg:mx-auto lg:max-w-7xl">
        <h2 className="text-2xl">My links</h2>
        <CreateLinkButton />
      </div>
    </div>
  );
}
