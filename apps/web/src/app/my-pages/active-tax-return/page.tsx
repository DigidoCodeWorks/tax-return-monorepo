import DotIcon from '@/components/icons/DotIcon';
import ActiveTaxCard from '@/components/layout/ActiveTaxCard/ActiveTaxCard';
import { TaxReturnsSidebarMobile } from '@/components/layout/TaxReturnSidebarMobile';
import { TaxReturnsSidebarDesktop } from '@/components/layout/TaxReturnsSidebarDesktop';
import { Typography } from '@/components/ui/typography';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <main className="px-4 lg:px-12 py-16 flex flex-col gap-y-8 md:flex-row gap-x-6 lg:gap-x-[138px]">
      <div className="flex flex-col gap-y-8">
        {' '}
        <Link
          href="/my-pages"
          className="w-full flex justify-start hover:cursor-pointer "
        >
          <Typography
            variant="medium"
            className="pb-1 w-fit font-semibold text-primary-blue-400 border-b border-primary-blue-200"
          >
            ← Opna pósthólf
          </Typography>
        </Link>
        <>
          <TaxReturnsSidebarDesktop />
          <TaxReturnsSidebarMobile />
        </>
      </div>

      <div className="flex flex-col gap-y-12 w-full">
        <div className="flex flex-col gap-y-[28px]">
          <div className="flex gap-x-2 items-center">
            <Typography
              variant="small"
              className="text-primary-blue-400 font-semibold"
            >
              Yfirlit
            </Typography>
            <DotIcon />
            <Typography
              variant="small"
              className="text-primary-blue-400 font-semibold"
            >
              Umsóknir
            </Typography>
            <DotIcon />
            <Typography
              variant="small"
              className="text-primary-blue-400 font-semibold"
            >
              Umsóknir í vinnslu
            </Typography>
          </div>
          <div className="flex flex-col gap-y-4">
            <Typography variant="h3" as="h3" className="text-primary-dark-400">
              Framtöl í vinnslu{' '}
            </Typography>
            <Typography variant="intro" className="text-primary-dark-400">
              Hér sérðu yfirlit yfir þau skattframtöl í vinnslu sem þú hefur
              hafið í gegnum Ísland.is.{' '}
            </Typography>
          </div>
        </div>
        <ActiveTaxCard />
      </div>
    </main>
  );
};

export default page;
