import type { Metadata } from 'next';
import TaxReturnsSidebar from '@/components/layout/TaxReturnsSidebarDesktop';
import { taxReturnsMetadata } from '@/lib/metadata';

export const metadata: Metadata = taxReturnsMetadata;

export default function TaxReturnsPage() {
  return (
    <main className="flex">
      <TaxReturnsSidebar />
      Tax Returns in progress
    </main>
  );
}
