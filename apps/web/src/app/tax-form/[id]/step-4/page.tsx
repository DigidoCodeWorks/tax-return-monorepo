'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import FormSection from '@/components/forms/FormSection';
import FormFooter from '@/components/layout/FormFooter/FormFooter';
import { Typography } from '@/components/ui/typography';
import { fetchTaxReturnsByUserId } from '@/lib/actions/fetchTaxReturns';
import { fetchTaxReturnAssets } from '@/lib/actions/fetchTaxReturnAssets';
import { updateTaxReturn } from '@/lib/actions/updateTaxReturn';

interface Props {
  params: Promise<{ id: string }>;
}

type RealEstateRow = {
  id: string;
  landlineNumber: string;
  address: string;
  realEstateValuation: string;
};

type VehicleRow = {
  id: string;
  plateNumber: string;
  yearOfPurchase: string;
  purchasePrice: string;
};

export default function AssetsStepPageWrapper({ params }: Props) {
  const [realEstateRows, setRealEstateRows] = useState<RealEstateRow[]>([]);
  const [vehicleRows, setVehicleRows] = useState<VehicleRow[]>([]);
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

      const taxReturn = await fetchTaxReturnAssets(latestReturnId);

      if (!taxReturn) {
        console.error(`No tax return found for ID: ${latestReturnId}`);
        return;
      }

      const realEstate = (taxReturn.domesticRealEstate ?? []).map((item) => ({
        id: item.id,
        landlineNumber: item.landlineNumber,
        address: item.address,
        realEstateValuation: `${item.realEstateValuation.toLocaleString('is-IS')} kr.`,
      }));

      const vehicles = (taxReturn.automobiles ?? []).map((item) => ({
        id: item.id,
        plateNumber: item.plateNumber,
        yearOfPurchase: item.yearOfPurchase.toString(),
        purchasePrice: `${item.purchasePrice.toLocaleString('is-IS')} kr.`,
      }));

      setRealEstateRows(realEstate);
      setVehicleRows(vehicles);
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
      assets: {
        domesticRealEstate: realEstateRows.map((item) => ({
          id: item.id,
          landlineNumber: item.landlineNumber,
          address: item.address,
          realEstateValuation:
            parseInt(item.realEstateValuation.replace(/\D/g, '')) || 0,
        })),
        automobiles: vehicleRows.map((item) => ({
          id: item.id,
          plateNumber: item.plateNumber,
          yearOfPurchase: parseInt(item.yearOfPurchase) || 0,
          purchasePrice: parseInt(item.purchasePrice.replace(/\D/g, '')) || 0,
        })),
      },
      lastStep: 5,
    });
    router.push(`/tax-form/${userId}/step-5`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-100px)]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-blue-400 border-t-transparent" />
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <main className="ml-0 md:ml-4 lg:ml-12 p-6 py-20 px-8 md:px-20 lg:px-28 space-y-12 bg-white rounded-lg mt-0 md:mt-4 lg:mt-12 mb-0 md:mb-20">
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
          initialData={realEstateRows}
          onChange={(rows) => setRealEstateRows(rows as RealEstateRow[])}
        />

        <FormSection
          title="4.3 Bifreiðir"
          fieldKeys={['plateNumber', 'yearOfPurchase', 'purchasePrice']}
          labels={['Númer', 'Kaupár', 'Kaupverð']}
          initialData={vehicleRows}
          onChange={(rows) => setVehicleRows(rows as VehicleRow[])}
        />

        <FormFooter currentStep={4} />
      </main>
    </form>
  );
}
