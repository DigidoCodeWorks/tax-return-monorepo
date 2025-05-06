'use client';
import React from 'react';
import clsx from 'clsx';
type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'p'
  | 'intro'
  | 'body'
  | 'medium'
  | 'small';
interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: Variant;
  as?: keyof HTMLElementTagNameMap;
  className?: string;
  children: React.ReactNode;
}
const variantClasses: Record<Variant, string> = {
  h1: 'text-[32px] leading-[42px] font-semibold md:text-[42px] md:leading-[52px]',
  h2: 'text-[28px] leading-[36px] font-semibold md:text-[36px] md:leading-[44px]',
  h3: 'text-[22px] leading-[30px] font-semibold md:text-[28px] md:leading-[36px]',
  h4: 'text-[18px] leading-[26px] font-semibold md:text-[22px] md:leading-[30px]',
  h5: 'text-[16px] leading-[24px] font-semibold md:text-[18px] md:leading-[26px]',
  p: 'text-[16px] leading-[24px] font-normal md:text-[18px] md:leading-[26px]',
  intro:
    'text-[16px] leading-[26px] font-normal md:text-[18px] md:leading-[28px]',
  body: 'text-[15px] leading-[24px] font-normal md:text-[16px] md:leading-[26px]',
  medium: 'text-[14px] leading-[20px] font-normal',
  small: 'text-[12px] leading-[18px] font-normal',
};
export const Typography = ({
  variant = 'p',
  as = 'p',
  className,
  children,
  ...props
}: TypographyProps) => {
  const Tag = as;
  return (
    <Tag
      className={clsx('font-sans', variantClasses[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
