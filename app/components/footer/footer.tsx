import { IconBrandGithub } from '@tabler/icons-react';
import { LinkAsButton } from '@/components';

export function Footer() {
  return (
    <div className="border-t border-t-accent-2 bg-white">
      <footer className="flex h-14 items-center justify-between px-4 lg:mx-auto lg:max-w-7xl">
        <p className="text-sm font-medium">© 2023 Konrad Trusiuk</p>
        <LinkAsButton
          href="https://github.com/ZAHON/short-url"
          variant="tertiary"
          rounded
          className="h-10 w-10 p-0"
        >
          <IconBrandGithub size="1.25rem" aria-hidden="true" focusable="false" />
          <span className="sr-only">GitHub</span>
        </LinkAsButton>
      </footer>
    </div>
  );
}
