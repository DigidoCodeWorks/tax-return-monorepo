import FormSection from '@/components/forms/FormSection';
import FormFooter from '@/components/layout/FormFooter/FormFooter';
import { Typography } from '@/components/ui/typography';
import { fetchTaxReturnIncome } from '@/lib/actions/fetchTaxReturnIncome';
import { fetchTaxReturnsByUserId } from '@/lib/actions/fetchTaxReturns';

interface Props {
  params: { id: string };
}

export default async function IncomeStepPage({ params }: Props) {
  const id = params.id;
  const taxReturns = await fetchTaxReturnsByUserId(id);
  const taxReturn = await fetchTaxReturnIncome(
    taxReturns?.[taxReturns?.length - 1]?.id,
  );

  console.log(taxReturn, 'return');
  if (!taxReturn) {
    console.error(`No tax return found for ID: ${params.id}`);
    return null;
  }

  const initialData_21 = [
    {
      id: '1',
      kennitala: '101010-1010',
      name: 'Norðurljós Software ehf.',
      amount: '9.360.000 kr.',
    },
    {
      id: '2',
      kennitala: '101010-1010',
      name: 'Mús & Merki ehf.',
      amount: '900.000 kr.',
    },
  ];

  const initialData_22 = [
    {
      id: '3',
      type: 'Dagpeningar',
      name: 'Norðurljós Software ehf.',
      amount: '120.000 kr.',
    },
  ];

  const initialData_23 = [
    {
      id: '4',
      type: 'Íþróttastyrkur',
      name: 'Norðurljós Software ehf.',
      amount: '75.000 kr.',
    },
    {
      id: '5',
      type: 'Starfsmenntastyrkur',
      name: 'VR',
      amount: '130.000 kr.',
    },
  ];

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
        fieldKeys={['kennitala', 'name', 'amount']}
        labels={['Kennitala', 'Nafn launagreiðanda', 'Launafjárhæð']}
        initialData={initialData_21}
        editableFields={['amount']}
        allowAddRow={true}
      />
      <FormSection
        title="2.2 Ökutækjastyrkur. Dagpeningar. Hlunnindi"
        fieldKeys={['type', 'name', 'amount']}
        labels={['Tegund', 'Nafn launagreiðanda', 'Upphæð']}
        initialData={initialData_22}
        editableFields={['amount']}
        allowAddRow={true}
      />
      <FormSection
        title="2.3 Lífeyrisgreiðslur. Tryggingastofnun. O.fl."
        fieldKeys={['type', 'name', 'amount']}
        labels={['Tegund', 'Nafn launagreiðanda', 'Upphæð']}
        initialData={initialData_23}
        editableFields={['amount']}
        allowAddRow={true}
      />

      <FormFooter />
    </main>
  );
}
