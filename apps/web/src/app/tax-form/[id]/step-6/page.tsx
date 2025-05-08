'use client';

import OpenClickBlue from '@/components/icons/OpenClickBlue';
import PdfIcon from '@/components/icons/PdfIcon';
import Step6Icon from '@/components/icons/Step6Icon';
import FormFooter from '@/components/layout/FormFooter/FormFooter';
import { Typography } from '@/components/ui/typography';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Step6Page() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.push(`/my-pages`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full bg-secondary-purple-100 md:pl-6 md:py-8"
    >
      <div className="flex flex-col  gap-y-10 bg-white rounded-lg ">
        <div className="px-6 pt-6 md:px-12 md:pt-12 lg:px-[114px] lg:pt-[114px] flex flex-col gap-y-8 pb-6">
          <Typography variant="h2" as="h2" className="text-primary-dark-400">
            Skattframtal 2025
          </Typography>
          <div className="flex flex-col gap-y-6">
            <div className="p-6 flex flex-col gap-y-[10px]  bg-accent-mint-100 rounded-lg">
              <div className="flex items-center gap-x-4">
                <div className=" bg-accent-mint-400 h-6 w-6 rounded-full flex items-center justify-center p-1">
                  <Check color="white" />
                </div>
                <Typography
                  variant="h5"
                  as="h5"
                  className="text-primary-dark-400"
                >
                  Skattframtalið þitt hefur verið sent inn{' '}
                </Typography>
              </div>
              <div className="pl-10">
                <Typography variant="body" className="text-primary-dark-400">
                  Þú getur nálgast afrit af skattframtalinu hér að neðan.
                  Framtalið birtist jafnframt í pósthólfinu á mínum síðum.{' '}
                </Typography>
              </div>
            </div>
            <div className="flex justify-between px-6 py-5 bg-primary-blue-100 rounded-lg">
              <Typography
                variant="h5"
                as="h5"
                className="text-primary-blue-400"
              >
                Skattframtal 2025
              </Typography>
              <PdfIcon />
            </div>
            <Link href="/my-pages" className="flex gap-x-2 items-center ">
              <Typography
                variant="body"
                className="text-primary-blue-400 underline underline-offset-8  font-semibold inline"
              >
                Skattframtal 2025 er skjal sem inniheldur upplýsingar um tekjur
                og
              </Typography>
              <OpenClickBlue />
            </Link>
            <div className="w-full flex justify-center">
              <Step6Icon />
            </div>
          </div>
        </div>
      </div>

      <FormFooter currentStep={6} />
    </form>
  );
}
