import FormSection from '@/components/forms/FormSection';
import FormFooter from '@/components/layout/FormFooter/FormFooter';
import { Typography } from '@/components/ui/typography';
import { fetchTaxReturnsByUserId } from '@/lib/actions/fetchTaxReturns';
import { fetchTaxReturnAssets } from '@/lib/actions/fetchTaxReturnAssets';

interface Props {
  params: { id: string };
}

export default async function AssetsStepPage({ params }: Props) {
  const id = params.id;
  const taxReturns = await fetchTaxReturnsByUserId(id);
  const taxReturn = await fetchTaxReturnAssets(
    taxReturns?.[taxReturns?.length - 1]?.id,
  );

  if (!taxReturn) {
    console.error(`No tax return found for ID: ${params.id}`);
    return null;
  }

  const realEstateInitialData = (taxReturn.domesticRealEstate ?? []).map(
    (item) => ({
      id: item.id,
      landlineNumber: item.landlineNumber,
      address: item.address,
      realEstateValuation: `${item.realEstateValuation.toLocaleString('is-IS')} kr.`,
    }),
  );

  const vehiclesInitialData = (taxReturn.automobiles ?? []).map((item) => ({
    id: item.id,
    plateNumber: item.plateNumber,
    yearOfPurchase: item.yearOfPurchase.toString(),
    purchasePrice: `${item.purchasePrice.toLocaleString('is-IS')} kr.`,
  }));

  return (
    <main className="ml-12 p-6 py-20 px-28 space-y-12 bg-white rounded-lg mt-12 mb-20">
      <Typography
        variant="h2"
        as="h2"
        className="text-primary-dark-400 whitespace-nowrap font-semibold"
      >
        4 Eignir í árslok 2024
      </Typography>

      <FormSection
        title="4.1 Innlendar fasteignir"
        fieldKeys={['landlineNumber', 'address', 'realEstateValuation']}
        labels={['Fastanúmer', 'Heimilisfang', 'Fasteignamat']}
        initialData={realEstateInitialData}
      />
      <FormSection
        title="4.3 Bifreiðir"
        fieldKeys={['plateNumber', 'yearOfPurchase', 'purchasePrice']}
        labels={['Númer', 'Kaupár', 'Kaupverð']}
        initialData={vehiclesInitialData}
      />

      <FormFooter />
    </main>
  );
}
