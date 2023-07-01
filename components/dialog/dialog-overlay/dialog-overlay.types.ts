import type { HTMLAttributes } from 'react';

type HTMLAttributesToOmit = 'children';

export type DialogOverlayProps = Omit<HTMLAttributes<HTMLDivElement>, HTMLAttributesToOmit>;
