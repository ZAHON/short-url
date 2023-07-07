'use client';
import { useId, useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Label, Switch } from '@/components';

export function FiltersSortByClicks() {
  const switchId = useId();

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const sortByClicksParam = searchParams.get('sort') === 'clicks';

  const [sortByClicks, setSortByClicks] = useState(sortByClicksParam);

  useEffect(() => {
    setSortByClicks(sortByClicksParam);
  }, [sortByClicksParam]);

  function handleCheckedChange(checked: boolean) {
    setSortByClicks(checked);

    const params = new URLSearchParams(searchParams.toString());

    if (checked) {
      params.set('sort', 'clicks');
    } else {
      params.delete('sort');
    }

    const paramsString = params.toString();

    router.push(`${pathname}?${paramsString}`);
    router.refresh();
  }

  return (
    <div role="group" className="flex items-center justify-between">
      <Label htmlFor={switchId}>Sort by numbers of clicks</Label>
      <Switch
        checked={sortByClicks}
        onCheckedChange={handleCheckedChange}
        id={switchId}
        size="sm"
      />
    </div>
  );
}
