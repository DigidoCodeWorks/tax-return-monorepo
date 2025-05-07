import type { Metadata } from 'next';
import { taxReturnsMetadata } from '@/lib/metadata';

export const metadata: Metadata = taxReturnsMetadata;

export default function TaxReturnsPage() {
  return <main className="flex">Tax Returns in progress</main>;
}
