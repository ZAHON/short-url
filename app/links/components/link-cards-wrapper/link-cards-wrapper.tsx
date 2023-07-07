import type { LinkCardsWrapperProps } from './link-cards-wrapper.types';

export function LinkCardsWrapper(props: LinkCardsWrapperProps) {
  const { children } = props;

  return (
    <ul role="list" className="flex flex-1 flex-col gap-y-4">
      {children}
    </ul>
  );
}
