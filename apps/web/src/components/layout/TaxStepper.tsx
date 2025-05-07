'use client';

import { usePathname } from 'next/navigation';
import { Check } from 'lucide-react';
import clsx from 'clsx';
import { Typography } from '../ui/typography';

const steps = [
  'Gagnaöflun',
  'Tekjur ársins 2024',
  'Fjármagnstekjur ársins 2024',
  'Eignir í árslok 2024',
  'Skuldir og vaxtagjöld',
  'Samantekt',
];

export default function TaxStepper() {
  const pathname = usePathname();
  const match = pathname.match(/step-(\d+)/);
  const currentStep = match ? parseInt(match[1], 10) : 1;

  return (
    <div className="md:flex gap-4  w-[300px] pl-12 pr-6 py-20">
      {/* Dots column */}
      <div className="flex flex-col items-center pt-2 gap-y-[36px] relative">
        {steps.map((_, i) => {
          const step = i + 1;
          const isActive = step === currentStep;
          const isComplete = step < currentStep;

          return (
            <div key={step} className="relative flex flex-col items-center">
              {/* line to next dot */}

              {/* dot */}
              <div
                className={clsx(
                  'flex items-center justify-center text-white text-xs font-bold rounded-full',
                  {
                    'bg-secondary-purple-400 w-6 h-6': isActive || isComplete,
                    'bg-primary-dark-200 w-6 h-6': !isActive && !isComplete,
                  },
                )}
              >
                {isComplete ? (
                  <Check className="w-4 h-4" />
                ) : isActive ? (
                  step
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      {/* Labels column */}
      <div className="flex flex-col pt-2 gap-y-10 text-sm">
        {steps.map((label, i) => {
          const step = i + 1;
          const isActive = step === currentStep;

          return (
            <Typography
              key={label}
              variant="medium"
              className={clsx({
                'font-semibold text-primary-dark-400': isActive,
                'text-primary-dark-300': !isActive,
              })}
            >
              {label}
            </Typography>
          );
        })}
      </div>
    </div>
  );
}
