import HouseIcon from '@/components/icons/HouseIcon';
import { Typography } from '@/components/ui/typography';

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
    <section className="mb-10 border border-primary-blue-200  rounded-lg px-8 pt-8  flex flex-col gap-y-4 md:flex-row items-center justify-between">
      <div className="order-2 md:order-1">
        <Typography
          variant="small"
          className="text-blue-400 font-semibold mb-1"
        >
          Íbúðalán
        </Typography>
        <Typography variant="h2" as="h2" className="mb-4">
          {location}
        </Typography>
        <div className="flex flex-col gap-y-2 sm:flex-row gap-12">
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
        <div className="mt-8 py-6 border-t border-primary-blue-200 flex items-center justify-between">
          <Typography className="text-primary-blue-400 font-semibold">
            Sjá meira
          </Typography>{' '}
        </div>
      </div>

      <div className="order-1 md:order-2">
        <HouseIcon />
      </div>
    </section>
  );
}
