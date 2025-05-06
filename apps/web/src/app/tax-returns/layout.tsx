import type { Metadata } from 'next';
import { taxFormFlowMetadata } from '@/lib/metadata';
import TaxStepper from '@/components/layout/TaxStepper';

export const metadata: Metadata = taxFormFlowMetadata;

export default function TaxFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen">
      <TaxStepper currentStep={0} />
      <div className="flex-1 px-4 py-6">{children}</div>
    </main>
  );
}
