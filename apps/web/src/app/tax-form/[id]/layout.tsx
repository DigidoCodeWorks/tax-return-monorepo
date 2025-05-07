import type { Metadata } from 'next';
import { taxFormFlowMetadata } from '@/lib/metadata';
import TaxStepper from '@/components/layout/TaxStepper';
import BigSkatturin from '@/components/icons/BigSkatturin';

export const metadata: Metadata = taxFormFlowMetadata;

export default function TaxFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen gap-x-12 bg-secondary-purple-100 ">
      <div className="flex-1">{children}</div>
      <div className="hidden md:flex flex-col justify-between items-center  pb-[69px]">
        <TaxStepper />
        <div className=" w-full h-full flex items-end justify-center">
          <BigSkatturin />
        </div>
      </div>
    </main>
  );
}
