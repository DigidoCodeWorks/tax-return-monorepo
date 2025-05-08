/// <reference types="@testing-library/jest-dom" />
import { render, screen } from '@testing-library/react';
import ActiveTaxCard from '@/components/layout/ActiveTaxCard/ActiveTaxCard';

describe('ActiveTaxCard', () => {
  it('renders date, title, description, and status badge', () => {
    render(<ActiveTaxCard />);

    expect(screen.getByText('05/05/2025')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Skattframtal 2024' }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Skattframtalið þitt er í vinnslu/i),
    ).toBeInTheDocument();
    expect(screen.getAllByText('Opna pósthólf →')).toHaveLength(2);
    expect(screen.getByText('Í vinnslu')).toBeInTheDocument();
  });

  it('renders progress bar with 45% width', () => {
    const { container } = render(<ActiveTaxCard />);
    const progress = container.querySelector('.w-\\[45\\%\\]');
    expect(progress).not.toBeNull();
    expect(progress!).toBeInTheDocument();
  });
});
