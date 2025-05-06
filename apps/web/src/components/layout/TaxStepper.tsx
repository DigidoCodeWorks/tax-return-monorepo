import clsx from 'clsx';

const steps = [
  'Almennar upplýsingar',
  'Tekjur ársins 2024',
  'Fjármagnstekjur ársins 2024',
  'Eignir í árslok 2024',
  'Skuldir og vaxtagjöld',
  'Samantekt',
];

export default function TaxStepper({
  currentStep = 1,
}: {
  currentStep: number;
}) {
  return (
    <ol className="space-y-6 text-sm text-gray-700">
      {steps.map((label, i) => {
        const step = i + 1;
        const isActive = step === currentStep;
        const isComplete = step < currentStep;

        return (
          <li key={label} className="flex items-start gap-2">
            <div
              className={clsx(
                'w-6 h-6 rounded-full flex items-center justify-center font-medium border',
                {
                  'bg-blue-700 text-white border-blue-700': isActive,
                  'bg-blue-100 text-blue-700 border-blue-300': isComplete,
                  'bg-white text-gray-400 border-gray-300':
                    !isActive && !isComplete,
                },
              )}
            >
              {step}
            </div>
            <span className={clsx({ 'font-semibold text-black': isActive })}>
              {label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
