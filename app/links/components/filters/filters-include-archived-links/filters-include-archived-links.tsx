'use client';
import { useId } from 'react';
import { Label, Switch } from '@/components';

export function FiltersIncludeArchivedLinks() {
  const switchId = useId();

  return (
    <div role="group" className="flex items-center justify-between">
      <Label htmlFor={switchId}>Include archived links</Label>
      <Switch id={switchId} size="sm" />
    </div>
  );
}
