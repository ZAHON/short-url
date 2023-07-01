import { render, screen } from '@testing-library/react';
import { Loader } from '.';

function getSvgElement() {
  const wrapperElement = screen.getByRole('status');
  // eslint-disable-next-line testing-library/no-node-access
  const svgElement = wrapperElement.querySelector('svg');

  return svgElement;
}

describe('Loader', () => {
  it('should have role="status" ', () => {
    render(<Loader />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('should support custom size when size property provided as number', () => {
    const size = 48;

    render(<Loader size={size} />);

    const svgElement = getSvgElement();
    expect(svgElement).toHaveAttribute('width', `${size / 16}rem`);
  });

  it('should support custom animation speed provided by speed property', () => {
    const speed = 500;

    render(<Loader speed={speed} />);
    const loaderElement = screen.getByRole('status');
    // eslint-disable-next-line testing-library/no-node-access
    const animateElements = loaderElement.querySelectorAll('animate');
    animateElements.forEach((animateElement) =>
      expect(animateElement).toHaveAttribute('dur', `${speed}ms`)
    );
  });

  it('should have fallback text provided by label property', () => {
    const label = 'Loading...';

    render(<Loader label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<Loader className={className} />);

    const svgElement = getSvgElement();
    expect(svgElement).toHaveClass(className);
  });
});
