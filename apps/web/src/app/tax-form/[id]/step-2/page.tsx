import IncomeSection from '@/components/forms/IncomeSection';
import FormFooter from '@/components/layout/FormFooter/FormFooter';
import { Typography } from '@/components/ui/typography';

export default function IncomeStepPage() {
  const initialData: any = [];

  return (
    <main className="ml-12 p-6 py-20 px-28 space-y-12 bg-white rounded-lg mt-12 mb-20">
      <Typography
        variant="h2"
        as="h2"
        className="text-primary-dark-400 whitespace-nowrap font-semibold"
      >
        2 Tekjur ársins 2024
      </Typography>

      <IncomeSection
        title="2.1 Launatekjur og starfstengdar greiðslur"
        fieldKeys={['kennitala', 'name', 'amount']}
        labels={['Kennitala', 'Nafn launagreiðanda', 'Launafjárhæð']}
        initialData={initialData}
      />
      <IncomeSection
        title="2.2 Ökutækjastyrkur. Dagpeningar. Hlunnindi"
        fieldKeys={['tegund', 'name', 'upphæð']}
        labels={['Tegund', 'Nafn launagreiðanda', 'Upphæð']}
      />
      <IncomeSection
        title="2.3 Lífeyrisgreiðslur. Tryggingastofnun. O.fl."
        fieldKeys={['tegund', 'name', 'upphæð']}
        labels={['Tegund', 'Nafn launagreiðanda', 'Upphæð']}
      />
      <FormFooter />
    </main>
  );
}
