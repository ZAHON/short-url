'use client';
import { useId } from 'react';
import { Label, Switch } from '@/components';

export function FiltersSortByClicks() {
  const switchId = useId();

  return (
    <div role="group" className="flex items-center justify-between">
      <Label htmlFor={switchId}>Sort by numbers of clicks</Label>
      <Switch id={switchId} size="sm" />
    </div>
  );
}
