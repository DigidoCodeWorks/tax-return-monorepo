// Input.tsx
import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { AlertTriangle } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  errorMessage?: string;
  showCurrencyKr?: boolean;
}

export default function Input({
  label,
  className,
  error,
  errorMessage,
  showCurrencyKr = false,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}

      <div className="relative w-full">
        <input
          className={clsx(
            'px-4 py-2 border rounded-md text-base w-full pr-14',
            error
              ? 'border-primary-red-400 bg-primary-red-100 outline-none'
              : 'border-gray-300 outline outline-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500',
            className,
          )}
          {...props}
        />
        {showCurrencyKr && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
            kr.
          </span>
        )}
        {error && (
          <AlertTriangle className="w-5 h-5 text-primary-red-400 absolute right-10 top-1/2 -translate-y-1/2" />
        )}
      </div>

      {error && errorMessage && (
        <span className="text-primary-red-400 text-sm font-medium mt-1">
          {errorMessage}
        </span>
      )}
    </div>
  );
}
