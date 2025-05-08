/// <reference types="@testing-library/jest-dom" />
import React, { FC } from 'react';
import { render, screen } from '@testing-library/react';
import MailBoxItemComp from '@/components/layout/MailBoxItem/MailBoxItem';

// Mock icon
const MockIcon: FC<{ className?: string }> = ({ className }) => (
  <svg data-testid="mail-icon" className={className} />
);

const mockItem = {
  title: 'Skattframtal 2024',
  subject: 'Framtal þarf að skila fyrir 15. maí',
  date: '08.05.2025',
  icon: MockIcon,
};

describe('MailBoxItemComp', () => {
  it('renders title, subject, date and icon correctly', () => {
    render(<MailBoxItemComp mailBoxItem={mockItem} />);

    expect(screen.getByText('Skattframtal 2024')).toBeInTheDocument();
    expect(screen.getByText(/framtal þarf að skila/i)).toBeInTheDocument();
    expect(screen.getByText('08.05.2025')).toBeInTheDocument();
    expect(screen.getByTestId('mail-icon')).toBeInTheDocument();
  });
});
