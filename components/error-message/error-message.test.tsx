import type { ErrorMessageProps } from '.';
import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorMessage } from '.';

const errorMessageContent = 'Error message';

function ErrorMessageTest(props: Omit<ErrorMessageProps, 'children'>) {
  return <ErrorMessage {...props}>{errorMessageContent}</ErrorMessage>;
}

function getErrorMessageIconElement(container: HTMLElement) {
  // eslint-disable-next-line testing-library/no-node-access
  const errorMessageIconElement = container.querySelector('svg');

  return errorMessageIconElement;
}

describe('ErrorMessage', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLSpanElement>();

    render(<ErrorMessage ref={ref}>{errorMessageContent}</ErrorMessage>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('should have aria-live="assertive"', () => {
    render(<ErrorMessageTest />);
    expect(screen.getByText(errorMessageContent)).toHaveAttribute('aria-live', 'assertive');
  });

  it('should have not icon element when withIcon property not provided', () => {
    const { container } = render(<ErrorMessageTest withIcon={false} />);

    const errorMessageIconElement = getErrorMessageIconElement(container);
    expect(errorMessageIconElement).not.toBeInTheDocument();
  });

  it('should have icon element when withIcon property provided', () => {
    const { container } = render(<ErrorMessageTest withIcon={true} />);

    const errorMessageIconElement = getErrorMessageIconElement(container);
    expect(errorMessageIconElement).toBeInTheDocument();
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<ErrorMessageTest className={className} />);
    expect(screen.getByText(errorMessageContent)).toHaveClass(className);
  });
});
