import HouseIcon from '@/components/icons/HouseIcon';
import { Typography } from '@/components/ui/typography';
import Image from 'next/image';

interface HousingLoanCardProps {
  location: string;
  interestExpenses: number;
  outstandingDebt: number;
  faceValue?: number;
  lender?: string;
  loanNumber?: string;
  lendersIdNumber?: string;
  loanTermYears?: number;
  totalAnnualPayments?: number;
  yearOfPurchase?: number;
  borrowingDate?: string;
}

export default function HousingLoanCard({
  location,
  interestExpenses,
  outstandingDebt,
}: HousingLoanCardProps) {
  return (
    <section className="mb-10 border rounded-lg px-8 pt-8 pb-6 flex items-center justify-between">
      <div>
        <Typography
          variant="small"
          className="text-blue-400 font-semibold mb-1"
        >
          Íbúðalán
        </Typography>
        <Typography variant="h2" as="h2" className="mb-4">
          {location}
        </Typography>
        <div className="flex gap-12">
          <div>
            <Typography variant="medium" className="text-gray-500 text-sm">
              Vaxtagjöld
            </Typography>
            <Typography className="font-semibold">
              {interestExpenses} kr.
            </Typography>
          </div>
          <div>
            <Typography variant="medium" className="text-gray-500 text-sm">
              Eftirstöðvar skulda
            </Typography>
            <Typography className="font-semibold">
              {outstandingDebt} kr.
            </Typography>
          </div>
        </div>
        <div className="mt-4">
          <Typography className="text-primary-blue-400 font-semibold">
            Sjá meira
          </Typography>{' '}
        </div>
      </div>

      <div>
        <HouseIcon />
      </div>
    </section>
  );
}
