import FormSection from '@/components/forms/FormSection';
import HousingLoanCard from '@/components/forms/ui/HousingLoanCard';
import InfoIcon from '@/components/icons/InfoIcon';
import FormFooter from '@/components/layout/FormFooter/FormFooter';
import { Typography } from '@/components/ui/typography';
import { fetchTaxReturnDebt } from '@/lib/actions/fetchTaxReturnDebt';
import { fetchTaxReturnsByUserId } from '@/lib/actions/fetchTaxReturns';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function DebtStepPage({ params }: Props) {
  const { id } = await params;
  console.log(id, 'iddddddddddddd');
  console.log('[STEP] resolved ID:', id);
  const taxReturns = await fetchTaxReturnsByUserId(id);
  console.log(taxReturns, 'returnz');

  const taxReturn = await fetchTaxReturnDebt(
    taxReturns?.[taxReturns?.length - 1]?.id,
  );

  console.log(taxReturn, 'return');
  if (!taxReturn) {
    console.error(`No tax return found for ID: ${id}`);
    return null;
  }

  const residentialInterestData = (
    taxReturn.residentialInterestExpenses ?? []
  ).map((item) => ({
    id: item.id,
    location: item.location,
    interestExpenses: item.interestExpenses,
    outstandingDebt: item.outstandingDebt,
    faceValue: item.faceValue,
    lender: item.lender,
    loanNumber: item.loanNumber,
    lendersIdNumber: item.lendersIdNumber,
    loanTermYears: item.loanTermYears,
    totalAnnualPayments: item.totalAnnualPayments,
    yearOfPurchase: item.yearOfPurchase,
    borrowingDate: item.borrowingDate,
  }));

  const otherDebtData = (taxReturn.otherDebts ?? []).map((item) => ({
    id: item.id,
    title: item.title ?? '',
    interestExpenses: `${item.interestExpenses?.toLocaleString('is-IS') ?? ''} kr.`,
    outstandingDebt: `${item.outstandingDebt?.toLocaleString('is-IS') ?? ''} kr.`,
  }));

  return (
    <main className="ml-12 p-6 py-20 px-28 space-y-12 bg-white rounded-lg mt-12 mb-20">
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

      {residentialInterestData.length > 0 && (
        <HousingLoanCard
          location={residentialInterestData[0].location}
          interestExpenses={residentialInterestData[0].interestExpenses}
          outstandingDebt={residentialInterestData[0].outstandingDebt}
        />
      )}
      <FormSection
        title="5.5 Aðrar skuldir og vaxtagjöld"
        fieldKeys={['title', 'interestExpenses', 'outstandingDebt']}
        labels={['Titill', 'Vaxtagjöld', 'Eftirstöðvar skulda']}
        initialData={otherDebtData}
        allowAddRow={false}
      />

      <FormFooter />
    </main>
  );
}
