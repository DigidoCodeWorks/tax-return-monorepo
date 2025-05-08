'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import FormSection from '@/components/forms/FormSection';
import HousingLoanCard from '@/components/forms/ui/HousingLoanCard';
import InfoIcon from '@/components/icons/InfoIcon';
import FormFooter from '@/components/layout/FormFooter/FormFooter';
import { Typography } from '@/components/ui/typography';
import { fetchTaxReturnDebt } from '@/lib/actions/fetchTaxReturnDebt';
import { fetchTaxReturnsByUserId } from '@/lib/actions/fetchTaxReturns';
import { updateTaxReturn } from '@/lib/actions/updateTaxReturn';

interface Props {
  params: Promise<{ id: string }>;
}

type OtherDebtRow = {
  id: string;
  title: string;
  interestExpenses: string;
  outstandingDebt: string;
};

export default function DebtStepPage({ params }: Props) {
  const [residentialLoan, setResidentialLoan] = useState<any | null>(null);
  const [otherDebts, setOtherDebts] = useState<OtherDebtRow[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const load = async () => {
      const { id } = await params;
      setUserId(id);

      const taxReturns = await fetchTaxReturnsByUserId(id);
      const latestReturnId = taxReturns?.[taxReturns.length - 1]?.id;

      if (!latestReturnId) {
        console.error(`No tax return ID found for user: ${id}`);
        return;
      }

      const taxReturn = await fetchTaxReturnDebt(latestReturnId);

      if (!taxReturn) {
        console.error(`No tax return found for ID: ${latestReturnId}`);
        return;
      }

      if (taxReturn.residentialInterestExpenses?.length > 0) {
        setResidentialLoan(taxReturn.residentialInterestExpenses[0]);
      }

      const mappedDebts = (taxReturn.otherDebts ?? []).map((item) => ({
        id: item.id,
        title: item.title ?? '',
        interestExpenses: `${item.interestExpenses?.toLocaleString('is-IS') ?? ''} kr.`,
        outstandingDebt: `${item.outstandingDebt?.toLocaleString('is-IS') ?? ''} kr.`,
      }));

      setOtherDebts(mappedDebts);
      setLoading(false);
    };

    load();
  }, [params]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userId) return;

    const taxReturns = await fetchTaxReturnsByUserId(userId);
    const latestReturnId = taxReturns?.[taxReturns.length - 1]?.id;

    if (!latestReturnId) {
      console.error('Missing taxReturn ID');
      return;
    }

    await updateTaxReturn({
      id: latestReturnId,
      debtAndExpenses: {
        residentialInterestExpenses: residentialLoan
          ? [
              {
                id: residentialLoan.id,
                location: residentialLoan.location,
                interestExpenses: residentialLoan.interestExpenses,
                outstandingDebt: residentialLoan.outstandingDebt,
                faceValue: residentialLoan.faceValue,
                lender: residentialLoan.lender,
                loanNumber: residentialLoan.loanNumber,
                lendersIdNumber: residentialLoan.lendersIdNumber,
                loanTermYears: residentialLoan.loanTermYears,
                totalAnnualPayments: residentialLoan.totalAnnualPayments,
                yearOfPurchase: residentialLoan.yearOfPurchase,
                borrowingDate: residentialLoan.borrowingDate,
              },
            ]
          : [],
        otherDebts: otherDebts.map((item) => ({
          id: item.id,
          title: item.title,
          interestExpenses:
            parseInt(item.interestExpenses.replace(/\D/g, '')) || 0,
          outstandingDebt:
            parseInt(item.outstandingDebt.replace(/\D/g, '')) || 0,
        })),
      },
      lastStep: 4,
    });
    router.push(`/my-pages`);
  };

  if (loading) return <div className="p-12">Sæki gögn...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <main className="ml-0 md:ml-4 lg:ml-12 p-6 py-20 px-8 md:px-20 lg:px-28 space-y-12 bg-white rounded-lg mt-0 md:mt-4 lg:mt-12 mb-0 md:mb-20">
        <Typography
          variant="h2"
          as="h2"
          className="text-primary-dark-400 whitespace-nowrap font-semibold"
        >
          5 Skuldir og vaxtagjöld
        </Typography>

        <div className="flex items-center gap-2">
          <Typography className="text-primary-dark-400 whitespace-nowrap font-normal">
            5.2 Vaxtagjöld vegna íbúðarhúsnæðis til eigin nota
          </Typography>
          <InfoIcon />
        </div>

        {residentialLoan && (
          <HousingLoanCard
            location={residentialLoan.location}
            interestExpenses={residentialLoan.interestExpenses}
            outstandingDebt={residentialLoan.outstandingDebt}
          />
        )}

        <FormSection
          title="5.5 Aðrar skuldir og vaxtagjöld"
          fieldKeys={['title', 'interestExpenses', 'outstandingDebt']}
          labels={['Titill', 'Vaxtagjöld', 'Eftirstöðvar skulda']}
          initialData={otherDebts}
          onChange={(rows) => setOtherDebts(rows as OtherDebtRow[])}
        />

        <FormFooter currentStep={4} />
      </main>
    </form>
  );
}
