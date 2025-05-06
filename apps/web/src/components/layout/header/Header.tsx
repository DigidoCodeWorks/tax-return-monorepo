'use client';

import BurgerIcon from '@/components/icons/BurgerIcon';
import LogoIcon from '@/components/icons/LogoIcon';
import ProfileIcon from '@/components/icons/ProfileIcon';
import SearchIcon from '@/components/icons/SearchIcon';
import RingIcon from '@/components/icons/RingIcon';
import { Typography } from '@/components/ui/typography';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';
import ArrowDownIcon from '@/components/icons/ArrowDownIcon';

export default function Header() {
  const pathname = usePathname();

  const isBlueBg = pathname === '/' || pathname.startsWith('/tax-returns');
  const isInfoPage = pathname.startsWith('/information');
  const isTaxFormPage = pathname.startsWith('/tax-form');

  return (
    <header
      className={clsx('w-full', isBlueBg ? 'bg-primary-blue-100' : 'bg-white')}
    >
      <div className="relative flex items-center justify-between px-12 py-8">
        <div className="flex items-center gap-16">
          <Link href="/">
            <LogoIcon />
          </Link>
          {isTaxFormPage && (
            <div>
              <Typography
                variant="medium"
                className="text-primary-dark-400 font-semibold"
              >
                Skatturinn
              </Typography>
              <Typography className="text-primary-dark-400 font-light text-nowrap">
                Skattframtal 2024
              </Typography>
            </div>
          )}
        </div>
        {isTaxFormPage && (
          <div className="absolute w-[1px] left-60 top-0 bottom-0 bg-secondary-purple-100"></div>
        )}

        <div className="flex relative items-center justify-end gap-4 w-full">
          {isInfoPage && (
            <div className="flex h-12 items-center justify-between relative gap-8 flex-grow min-w-[200px] max-w-80 rounded-lg bg-[#F6F9FC] px-4 py-[10px] border border-primary-blue-200">
              <Typography className="text-primary-dark-400 font-normal">
                Leitaðu á Ísland.is
              </Typography>
              <SearchIcon className="shrink-0" />
            </div>
          )}

          {isInfoPage && (
            <button className="flex items-center border px-4 py-3 rounded-lg gap-2 whitespace-nowrap border-primary-blue-200">
              <Typography variant="medium" className="font-semibold">
                Mínar síður
              </Typography>
              <ProfileIcon className="shrink-0" />
            </button>
          )}
          <button className="border px-4 py-3 rounded-lg border-primary-blue-200 bg-white">
            <Typography variant="medium" className="font-semibold">
              EN
            </Typography>
          </button>

          {!isInfoPage && (
            <div className="flex items-center gap-2 px-4 py-3 border border-primary-blue-200 bg-white rounded-lg">
              <Image
                src="/avatar.png"
                alt="Arrow icon"
                width={24}
                height={24}
              />
              <Typography variant="medium" className="font-semibold">
                Jökull Þórðarson
              </Typography>
              <ArrowDownIcon />
            </div>
          )}

          {isInfoPage && (
            <button className="flex items-center gap-2 px-4 py-3 border border-primary-blue-200 rounded-lg">
              <Typography variant="medium" className="font-semibold">
                Valmynd
              </Typography>
              <BurgerIcon className="mt-0.5" />
            </button>
          )}
          {!isInfoPage && (
            <div className="bg-white p-4 border border-primary-blue-200 rounded-lg">
              <RingIcon />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
