import { render, screen, fireEvent } from '@testing-library/react';
import FormFooter from '@/components/layout/FormFooter/FormFooter';

describe('FormFooter', () => {
  it('renders continue button with icon and label', () => {
    render(<FormFooter />);

    const button = screen.getByRole('button', { name: /halda áfram/i });
    expect(button).toBeInTheDocument();
  });

  it('logs to console on click', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<FormFooter />);

    fireEvent.click(screen.getByRole('button', { name: /halda áfram/i }));
    expect(consoleSpy).toHaveBeenCalledWith('click ');

    consoleSpy.mockRestore();
  });
});
