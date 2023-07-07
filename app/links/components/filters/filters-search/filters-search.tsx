'use client';
import { IconSearch } from '@tabler/icons-react';
import { TextInput } from '@/components';

export function FiltersSearch() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute left-0 top-0 flex h-10 w-10 items-center justify-center text-accent-5">
        <IconSearch size="1.25rem" aria-hidden="true" focusable="false" />
      </div>
      <TextInput type="search" placeholder="Search..." className="pl-10" />
    </div>
  );
}
