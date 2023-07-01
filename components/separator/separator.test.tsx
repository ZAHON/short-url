import type { SeparatorProps } from '.';
import { screen, render } from '@testing-library/react';
import { Separator } from '.';

const sepratorTestId = 'seprator-test';

function SeparatorTest(props: SeparatorProps) {
  return <Separator data-testid={sepratorTestId} {...props} />;
}

describe('Separator', () => {
  describe('Horizontal orientation', () => {
    function SeparatorHorizontalTest(props: SeparatorProps) {
      return <Separator data-testid={sepratorTestId} orientation="horizontal" {...props} />;
    }

    it('should have role="separator" when label property not provided', () => {
      render(<SeparatorHorizontalTest />);
      expect(screen.getByTestId(sepratorTestId)).toHaveAttribute('role', 'separator');
    });

    it('should have role="none" when label property provided', () => {
      render(<SeparatorHorizontalTest label="Label" />);
      expect(screen.getByTestId(sepratorTestId)).toHaveAttribute('role', 'none');
    });

    it('should not contain label element when label property not provided', () => {
      render(<SeparatorHorizontalTest />);

      const separatorElement = screen.getByTestId(sepratorTestId);
      expect(separatorElement).toBeEmptyDOMElement();
    });

    it('should contain label element when label property provided', () => {
      const separatorLabel = 'Label';
      render(<SeparatorHorizontalTest label={separatorLabel} />);

      const separatorElement = screen.getByTestId(sepratorTestId);
      const separatorLabelElement = screen.getByText(separatorLabel);

      expect(separatorElement).toContainElement(separatorLabelElement);
    });
  });

  describe('Vertical orientation', () => {
    function SeparatorVerticalTest(props: SeparatorProps) {
      return <Separator data-testid={sepratorTestId} orientation="vertical" {...props} />;
    }

    it('should have role="separator" when label property not provided', () => {
      render(<SeparatorVerticalTest />);
      expect(screen.getByTestId(sepratorTestId)).toHaveAttribute('role', 'separator');
    });

    it('should have role="separator" when label property provided', () => {
      render(<SeparatorVerticalTest label="Label" />);
      expect(screen.getByTestId(sepratorTestId)).toHaveAttribute('role', 'separator');
    });

    it('should not contain label element when label property provided', () => {
      const separatorLabel = 'Label';
      render(<SeparatorVerticalTest label={separatorLabel} />);

      const separatorElement = screen.getByTestId(sepratorTestId);
      const separatorLabelElement = screen.queryByText(separatorLabel);

      expect(separatorLabelElement).not.toBeInTheDocument();
      expect(separatorElement).not.toContainElement(separatorLabelElement);
    });
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<SeparatorTest className={className} />);
    expect(screen.getByTestId(sepratorTestId)).toHaveClass(className);
  });
});
