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
import DotLogoIcon from '@/components/icons/DotLogoIcon';
import PersonIconSmall from '@/components/icons/PersonIconSmall';

export default function Header() {
  const pathname = usePathname();

  const isHidden = pathname.startsWith('/login');
  const isLandingPage = pathname === '/';
  const isMyPage = pathname.startsWith('/my-pages');
  const isTaxFormPage = pathname.startsWith('/tax-form');

  if (isHidden) return null;
  return (
    <header
      className={clsx(
        'w-full',
        isHidden ? '!hidden !bg-transparent' : 'block',
        isMyPage ? 'bg-primary-blue-100' : 'bg-white',
      )}
    >
      <div className="relative w-full flex items-center justify-between px-6 md:px-12 py-5 md:py-8">
        <div className="flex items-center gap-4  md:gap-16">
          <Link className="hidden sm:block" href="/my-pages">
            <LogoIcon />
          </Link>
          <Link className="sm:hidden" href="/my-pages">
            <DotLogoIcon />
          </Link>

          {isTaxFormPage && (
            <>
              <div className="hidden md:block absolute w-0.5 left-60 top-0 bottom-0 bg-secondary-purple-100"></div>
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
            </>
          )}
        </div>

        {isTaxFormPage && (
          <div className="flex gap-4">
            <div className="flex items-center gap-2 px-4 py-3 border border-primary-blue-200 bg-white rounded-lg">
              <Image
                src="/avatar.png"
                alt="Arrow icon"
                width={24}
                height={24}
              />
              <Typography
                variant="medium"
                className="hidden sm:block font-semibold whitespace-nowrap"
              >
                Jökull Þórðarson
              </Typography>
              <ArrowDownIcon className="shrink-0" />
            </div>
            <div className="hidden xl:block bg-white p-4 border border-primary-blue-200 rounded-lg">
              <RingIcon />
            </div>
          </div>
        )}

        {isMyPage && (
          <>
            <div className="flex relative items-center justify-end gap-4 w-full">
              <button className="hidden sm:block border px-4 py-3 rounded-lg border-primary-blue-200 bg-white">
                <Typography variant="medium" className="font-semibold">
                  EN
                </Typography>
              </button>
              <div className="hidden sm:flex items-center gap-2 px-4 py-3 border border-primary-blue-200 bg-white rounded-lg">
                <Image
                  src="/avatar.png"
                  alt="Arrow icon"
                  width={24}
                  height={24}
                />
                <Typography
                  variant="medium"
                  className="font-semibold whitespace-nowrap"
                >
                  Jökull Þórðarson
                </Typography>
                <ArrowDownIcon className="shrink-0" />
              </div>
              <div className="sm:hidden bg-white p-4 border border-primary-blue-200 rounded-lg">
                <PersonIconSmall width="16" height="16" />
              </div>
              <div className="bg-white p-4 border border-primary-blue-200 rounded-lg">
                <RingIcon />
              </div>
              <button className="bg-white sm:hidden flex items-center gap-2 px-4 py-3 border border-primary-blue-200 rounded-lg">
                <Typography variant="medium" className="font-semibold">
                  Valmynd
                </Typography>
                <BurgerIcon className="mt-0.5" />
              </button>
            </div>
          </>
        )}
        {isLandingPage && (
          <div className="flex relative items-center justify-end gap-4 w-full">
            <div className="hidden xl:flex h-12 items-center justify-between relative gap-8 flex-grow min-w-[200px] max-w-80 rounded-lg bg-[#F6F9FC] px-4 py-[10px] border border-primary-blue-200">
              <Typography className="text-primary-dark-400 font-normal">
                Leitaðu á Ísland.is
              </Typography>
              <SearchIcon className="shrink-0" />
            </div>

            <button className="hidden sm:flex items-center border px-4 py-3 rounded-lg gap-2 whitespace-nowrap border-primary-blue-200">
              <Typography variant="medium" className="font-semibold">
                Mínar síður
              </Typography>
              <ProfileIcon className="shrink-0" />
            </button>

            <button className="hidden sm:block border px-4 py-3 rounded-lg border-primary-blue-200 bg-white">
              <Typography variant="medium" className="font-semibold">
                EN
              </Typography>
            </button>

            <button className="hidden sm:flex items-center gap-2 px-4 py-3 border border-primary-blue-200 rounded-lg">
              <Typography variant="medium" className="font-semibold">
                Valmynd
              </Typography>
              <BurgerIcon className="mt-0.5" />
            </button>

            <div className="sm:hidden flex border border-primary-blue-200 rounded-lg">
              <div className="p-4">
                <SearchIcon />
              </div>
              <div className="w-[1px] bg-primary-blue-200"></div>
              <button className="flex items-center gap-2 px-4 py-3">
                <Typography variant="medium" className="font-semibold">
                  Valmynd
                </Typography>
                <BurgerIcon className="mt-0.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
