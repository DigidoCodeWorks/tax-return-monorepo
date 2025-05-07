'use client';

import DotLogoIcon from '@/components/icons/DotLogoIcon';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/typography';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [phone, setPhone] = useState('');
  const [remember, setRemember] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] px-4">
      <div className="ml-auto mr-auto w-1/3">
        <div className="relative max-w-md rounded-lg border border-primary-blue-200 bg-white pt-[57px] pb-[41px] px-[33px]">
          <div className="absolute bg-white top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-center mb-6 p-[15px]">
            <DotLogoIcon />
          </div>

          <div className="flex flex-col gap-2">
            <Typography
              variant="medium"
              className="text-primary-blue-400 font-semibold text-center"
            >
              Rafræn skilríki í síma
            </Typography>
            <Typography
              variant="h2"
              as="h2"
              className="text-primary-dark-400 font-semibold text-center"
            >
              Skráðu þig inn
            </Typography>
            <Typography className="text-primary-dark-400 text-center">
              Ísland.is – Mínar síður
            </Typography>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 space-y-6"
          >
            <div className="relative w-full">
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder=" "
                className="peer w-full rounded-md bg-[#F6F9FC] border border-[#D0E3FC] px-6 pt-6 pb-2 text-[24px] font-semibold text-primary-dark-400 placeholder-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0061FF]"
                aria-label="Símanúmer"
              />
              <Typography
                as="label"
                htmlFor="phone"
                variant="small"
                className="
      absolute left-6 text-[#0061FF] transition-all duration-200 ease-in-out
      pointer-events-none
      peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
      peer-focus:top-2 peer-focus:text-xs peer-focus:translate-y-0
      peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:translate-y-0
    "
              >
                Símanúmer
              </Typography>
            </div>

            <label className="flex items-center gap-2 text-sm text-[#1B1B1B]">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 border-[#D0E3FC] text-[#0061FF] focus:ring-[#0061FF]"
              />
              Muna símanúmer
            </label>

            <Button type="submit">Auðkenna</Button>
          </form>

          <div className="flex items-center relative my-6 text-center text-sm text-[#9CA3AF]">
            <div className="bg-primary-blue-200 h-[1px] w-full"></div>
            <Typography
              variant="medium"
              className="text-primary-dark-400 text-center px-4 whitespace-nowrap font-normal z-10 bg-white"
            >
              Eða skráðu þig inn með
            </Typography>
            <div className="bg-primary-blue-200 h-[1px] w-full"></div>
          </div>

          <div className="space-y-3">
            <Button variant="outlined">Auðkennisappinu</Button>
            <Button variant="outlined">Skilríki á korti</Button>
          </div>
        </div>

        <div
          className="flex justify-between items-center mt-5 pointer-events-none"
          role="navigation"
          aria-label="Footer links"
        >
          <Link
            href="/terms"
            className="whitespace-nowrap font-semibold text-primary-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0061FF] rounded-sm"
          >
            <Typography variant="body">Skilmálar</Typography>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/en"
              className="px-4 whitespace-nowrap font-semibold text-primary-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0061FF] rounded-sm"
            >
              <Typography variant="body">English</Typography>
            </Link>

            <div
              className="h-4 w-px bg-primary-blue-200"
              role="separator"
              aria-hidden="true"
            />

            <Link
              href="/help"
              className="px-4 whitespace-nowrap font-semibold text-primary-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0061FF] rounded-sm"
            >
              <Typography variant="body">Aðstoð</Typography>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
