import FormSection from '@/components/forms/FormSection';
import FormFooter from '@/components/layout/FormFooter/FormFooter';
import { Typography } from '@/components/ui/typography';

export default function AssetsStepPage() {
  const realEstateInitialData = [
    {
      id: crypto.randomUUID(),
      landlineNumber: '210-9876',
      address: 'Bláfjallagata 12',
      realEstateValuation: '52.000.000 kr.',
    },
  ];

  const vehiclesInitialData = [
    {
      id: crypto.randomUUID(),
      plateNumber: 'KB-521',
      yearOfPurchase: '2021',
      purchasePrice: '3.100.000 kr.',
    },
    {
      id: crypto.randomUUID(),
      plateNumber: 'JU-329',
      yearOfPurchase: '2012',
      purchasePrice: '430.000 kr.',
    },
  ];

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
