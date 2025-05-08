/// <reference types="@testing-library/jest-dom" />
import { render, screen } from '@testing-library/react';
import DashboardCardComp from '@/components/layout/DashboardCard/DashboardCard';
import { FC } from 'react';

// Mock icon component
const MockIcon: FC<{ className?: string }> = ({ className }) => (
  <svg data-testid="mock-icon" className={className} />
);

// Utility to generate card
const createCard = (overrides = {}) => ({
  title: 'Skattframtöl',
  description: 'Tengdar upplýsingar um skattframtöl.',
  icon: MockIcon,
  ...overrides,
});

describe('DashboardCardComp', () => {
  it('renders title, description and icon correctly', () => {
    render(<DashboardCardComp card={createCard()} />);

    expect(
      screen.getByRole('heading', { name: 'Skattframtöl' }),
    ).toBeInTheDocument();
    expect(screen.getByText(/skattframtöl/i)).toBeInTheDocument();
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
  });

  it('wraps in link when title is "Skattframtöl"', () => {
    render(<DashboardCardComp card={createCard()} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/my-pages/active-tax-return');
  });

  it('does not wrap in link for other cards', () => {
    render(
      <DashboardCardComp card={createCard({ title: 'Something Else' })} />,
    );
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
