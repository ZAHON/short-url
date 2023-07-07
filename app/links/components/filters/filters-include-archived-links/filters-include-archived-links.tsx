'use client';
import { useId, useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Label, Switch } from '@/components';

export function FiltersIncludeArchivedLinks() {
  const switchId = useId();

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const showArchivedParam = searchParams.get('showArchived') === 'true';

  const [showArchived, setShowArchived] = useState(showArchivedParam);

  useEffect(() => {
    setShowArchived(showArchivedParam);
  }, [showArchivedParam]);

  function handleCheckedChange(checked: boolean) {
    setShowArchived(checked);

    const params = new URLSearchParams(searchParams.toString());

    if (checked) {
      params.set('showArchived', 'true');
    } else {
      params.delete('showArchived');
    }

    const paramsString = params.toString();

    router.push(`${pathname}?${paramsString}`);
    router.refresh();
  }

  return (
    <div role="group" className="flex items-center justify-between">
      <Label htmlFor={switchId}>Include archived links</Label>
      <Switch
        checked={showArchived}
        onCheckedChange={handleCheckedChange}
        id={switchId}
        size="sm"
      />
    </div>
  );
}
