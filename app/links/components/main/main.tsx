import type { MainProps } from './main.types';

export function Main(props: MainProps) {
  const { children } = props;

  return (
    <div className="bg-accent-1">
      <main className="min-h-[calc(100vh-9.625rem)] p-4 lg:mx-auto lg:max-w-7xl">{children}</main>
    </div>
  );
}
