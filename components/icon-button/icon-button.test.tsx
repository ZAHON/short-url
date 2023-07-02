import type { IconButtonProps } from '.';
import { createRef } from 'react';
import { screen, render } from '@testing-library/react';
import { IconButton } from '.';

const IconPlaceholderTestId = 'icon-placeholder-test-id';

function IconButtonTest(props: Partial<IconButtonProps>) {
  return (
    <IconButton aria-label="icon-button" {...props}>
      <div data-testid={IconPlaceholderTestId} />
    </IconButton>
  );
}

describe('IconButton', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLButtonElement>();

    render(
      <IconButton ref={ref} aria-label="icon-button">
        <div data-testid={IconPlaceholderTestId} />
      </IconButton>
    );
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('should have type="button"', () => {
    render(<IconButtonTest />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<IconButtonTest className={className} />);
    expect(screen.getByRole('button')).toHaveClass(className);
  });
});
