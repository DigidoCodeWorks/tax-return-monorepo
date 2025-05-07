import FormSection from '@/components/forms/FormSection';
import FormFooter from '@/components/layout/FormFooter/FormFooter';
import { Typography } from '@/components/ui/typography';
import { fetchTaxReturnIncome } from '@/lib/actions/fetchTaxReturnIncome';
import { fetchTaxReturnsByUserId } from '@/lib/actions/fetchTaxReturns';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function IncomeStepPage({ params }: Props) {
  const { id } = await params;
  const taxReturns = await fetchTaxReturnsByUserId(id);
  const taxReturn = await fetchTaxReturnIncome(
    taxReturns?.[taxReturns.length - 1]?.id,
  );

  if (!taxReturn) {
    console.error(`No tax return found for ID: ${id}`);
    return null;
  }
  const editable = (keys: string[]) => keys.filter((k) => k !== 'id');

  const wageIncomeData = (taxReturn.wageIncomes ?? []).map((item) => ({
    id: item.id,
    nationalId: item.ssn,
    name: item.name,
    amount: `${item.salaryAmount?.toLocaleString('is-IS')} kr.`,
  }));

  const vehicleAllowanceData = (taxReturn.vehicleAllowances ?? []).map(
    (item) => ({
      id: item.id,
      type: item.type,
      name: item.name,
      amount: `${item.amount?.toLocaleString('is-IS')} kr.`,
    }),
  );

  const pensionPaymentData = (taxReturn.pensionPayments ?? []).map((item) => ({
    id: item.id,
    type: item.type,
    name: item.name,
    amount: `${item.amount?.toLocaleString('is-IS')} kr.`,
  }));

  return (
    <main className="ml-12 p-6 py-20 px-28 space-y-12 bg-white rounded-lg mt-12 mb-20">
      <Typography
        variant="h2"
        as="h2"
        className="text-primary-dark-400 whitespace-nowrap font-semibold"
      >
        2 Tekjur ársins 2024
      </Typography>

      <FormSection
        title="2.1 Launatekjur og starfstengdar greiðslur"
        fieldKeys={['nationalId', 'name', 'amount']}
        labels={['Kennitala', 'Nafn launagreiðanda', 'Launafjárhæð']}
        initialData={wageIncomeData}
        editableFields={['nationalId', 'name', 'amount']}
        allowAddRow={true}
      />

      <FormSection
        title="2.2 Ökutækjastyrkur. Dagpeningar. Hlunnindi"
        fieldKeys={['type', 'name', 'amount']}
        labels={['Tegund', 'Nafn launagreiðanda', 'Upphæð']}
        initialData={vehicleAllowanceData}
        editableFields={['type', 'name', 'amount']}
        allowAddRow={true}
      />

      <FormSection
        title="2.3 Lífeyrisgreiðslur. Tryggingastofnun. O.fl."
        fieldKeys={['type', 'name', 'amount']}
        labels={['Tegund', 'Nafn launagreiðanda', 'Upphæð']}
        initialData={pensionPaymentData}
        editableFields={['type', 'name', 'amount']}
        allowAddRow={true}
      />

      <FormFooter />
    </main>
  );
}
