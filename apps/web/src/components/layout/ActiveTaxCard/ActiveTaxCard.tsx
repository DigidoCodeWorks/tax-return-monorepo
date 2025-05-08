import SkatturinIcon from '@/components/icons/SkatturinIcon';
import TimeIcon from '@/components/icons/TimeIcon';
import { Typography } from '@/components/ui/typography';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { fetchTaxReturnsByUserId } from '@/lib/actions/fetchTaxReturns';
import { fetchTaxReturnById } from '@/lib/actions/fetchTaxReturn';

export default async function ActiveTaxCard() {
  const cookieStore = await cookies();
  const userId = cookieStore.get('userId')?.value;

  if (!userId) return null;

  const taxReturns = await fetchTaxReturnsByUserId(userId);
  const latest = taxReturns?.[taxReturns.length - 1];
  const taxReturn = latest?.id ? await fetchTaxReturnById(latest.id) : null;

  const step = taxReturn?.lastStep ?? 1;
  const returnId = latest?.id;
  console.log(step);
  if (!returnId) return null;

  return (
    <Link href={`/tax-form/${userId}/step-${step}`}>
      <div className="px-8 py-6 border border-primary-blue-200 rounded-lg flex gap-x-6 justify-between max-w-[800px] hover:bg-blue-50 transition cursor-pointer">
        <div className="flex flex-col gap-y-4">
          <div className="flex gap-x-2 items-center">
            <TimeIcon />
            <Typography variant="small" className="text-primary-dark-400">
              05/05/2025
            </Typography>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="flex gap-x-4 items-center">
              <SkatturinIcon />
              <Typography
                variant="h3"
                as="h3"
                className="text-primary-dark-400"
              >
                Skattframtal 2024
              </Typography>
            </div>
            <Typography variant="intro" className="text-primary-dark-400">
              Skattframtalið þitt er í vinnslu. Haltu áfram til að ljúka og
              senda það inn.
            </Typography>
          </div>
          <div className="w-full h-2 rounded-full bg-primary-blue-100 mt-3">
            <div
              className="h-full bg-primary-blue-400 rounded-full transition-all duration-300"
              style={{ width: `${Math.min((step / 6) * 100, 100)}%` }}
            />
          </div>
          <Typography
            variant="medium"
            className="block md:hidden pb-1 w-fit font-semibold hover:cursor-pointer text-primary-blue-400 border-b border-primary-blue-200"
          >
            Opna pósthólf →
          </Typography>
        </div>
        <div className="flex flex-col justify-between items-end">
          <Typography
            variant="small"
            className="text-primary-blue-400 bg-primary-blue-100 w-fit min-w-[70px] !font-semibold hover:cursor-pointer p-2 border border-primary-blue-200 rounded-lg flex justify-center items-center"
          >
            Í vinnslu
          </Typography>
          <Typography
            variant="medium"
            className="hidden md:block pb-1 w-fit font-semibold hover:cursor-pointer text-primary-blue-400 border-b border-primary-blue-200"
          >
            Opna skattframtal →
          </Typography>
        </div>
      </div>
    </Link>
  );
}
