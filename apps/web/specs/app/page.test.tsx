/// <reference types="@testing-library/jest-dom" />
import { render, screen } from '@testing-library/react';
import InformationPage from '@/app/page';

describe('InformationPage', () => {
  it('renders the Skattframtal 2025 heading', async () => {
    render(await InformationPage());
    expect(
      screen.getByRole('heading', { name: /Skattframtal 2025/i }),
    ).toBeInTheDocument();
  });

  it('renders the back link', async () => {
    render(await InformationPage());
    expect(screen.getByText(/til baka/i)).toBeInTheDocument();
  });

  it('renders service provider name', async () => {
    render(await InformationPage());
    expect(screen.getAllByText(/skatturinn/i).length).toBeGreaterThan(1);
  });

  it('renders submit button', async () => {
    render(await InformationPage());
    expect(
      screen.getByRole('button', { name: /Skattframtal 2025/i }),
    ).toBeInTheDocument();
  });
});
