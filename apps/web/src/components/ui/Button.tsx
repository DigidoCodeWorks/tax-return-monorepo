import { Typography } from '@/components/ui/typography';
import clsx from 'clsx';
import React from 'react';

type ButtonVariant = 'filled' | 'outlined';

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

export const Button = ({
  children,
  variant = 'filled',
  className,
  ...props
}: PrimaryButtonProps) => {
  const baseClasses = 'w-full rounded-md transition text-center';

  const variantClasses = {
    filled: 'bg-[#0061FF] hover:bg-[#0052d6] py-[18px] text-white',
    outlined:
      'border border-[#0061FF] text-[#0061FF] hover:bg-[#F6F9FC] py-[10px]',
  };

  return (
    <button
      className={clsx(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      <Typography
        as="h5"
        variant="h5"
        className={clsx(
          'font-semibold cursor-pointer',
          variant === 'outlined' ? 'text-[#0061FF]' : 'text-white',
        )}
      >
        {children}
      </Typography>
    </button>
  );
};
