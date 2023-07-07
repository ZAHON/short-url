'use client';
import type { ChangeEvent } from 'react';
import { useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { IconSearch } from '@tabler/icons-react';
import { TextInput } from '@/components';

export function FiltersSearch() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchParam = searchParams.get('search');

  const [searchTerm, setSearchTerm] = useState(searchParam ?? '');

  useEffect(() => {
    setSearchTerm(searchParam ?? '');
  }, [searchParam]);

  const debounced = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }

    const paramsString = params.toString();

    router.push(`${pathname}?${paramsString}`);
    router.refresh();
  }, 300);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setSearchTerm(value);
    debounced(value.trim());
  }

  return (
    <div className="relative">
      <div className="pointer-events-none absolute left-0 top-0 flex h-10 w-10 items-center justify-center text-accent-5">
        <IconSearch size="1.25rem" aria-hidden="true" focusable="false" />
      </div>
      <TextInput
        value={searchTerm}
        onChange={handleChange}
        type="search"
        placeholder="Search..."
        className="pl-10"
      />
    </div>
  );
}
