import { Separator } from '@/components';
import { FiltersSearch } from './filters-search';
import { FiltersSortByClicks } from './filters-sort-by-clicks';
import { FiltersIncludeArchivedLinks } from './filters-include-archived-links';

export function Filters() {
  return (
    <aside className="flex flex-shrink-0 flex-col gap-y-4 rounded-lg border border-accent-2 bg-white p-4 drop-shadow-sm lg:sticky lg:top-[4.5rem] lg:z-30 lg:h-fit lg:w-80">
      <FiltersSearch />
      <Separator />
      <FiltersSortByClicks />
      <Separator />
      <FiltersIncludeArchivedLinks />
    </aside>
  );
}
