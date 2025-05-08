'use client';
import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { z } from 'zod';

import FormSection from '@/components/forms/FormSection';
import FormFooter from '@/components/layout/FormFooter/FormFooter';
import { Typography } from '@/components/ui/typography';
import { fetchTaxReturnIncome } from '@/lib/actions/fetchTaxReturnIncome';
import { fetchTaxReturnsByUserId } from '@/lib/actions/fetchTaxReturns';
import { updateTaxReturn } from '@/lib/actions/updateTaxReturn';

interface Props {
  params: Promise<{ id: string }>;
}

const rowSchema = z.object({
  type: z.string().min(1, 'Reitur má ekki vera tómur.').optional(),
  nationalId: z.string().min(1, 'Reitur má ekki vera tómur.').optional(),
  name: z.string().min(1, 'Reitur má ekki vera tómur.'),
  amount: z.string().min(1, 'Reitur má ekki vera tómur.'),
});

export default function IncomeStepPageWrapper({ params }: Props) {
  const [wageRows, setWageRows] = useState<any[]>([]);
  const [vehicleRows, setVehicleRows] = useState<any[]>([]);
  const [pensionRows, setPensionRows] = useState<any[]>([]);
  const [errors, setErrors] = useState<{
    [rowId: string]: { [field: string]: string };
  }>({});
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const routeParams = useParams();
  useEffect(() => {
    const load = async () => {
      const { id } = await params;
      const taxReturns = await fetchTaxReturnsByUserId(id);
      const taxReturn = await fetchTaxReturnIncome(
        taxReturns?.[taxReturns.length - 1]?.id,
      );
      console.log(id, 'id alo');
      console.log(taxReturn, 'taxReturn');
      console.log(taxReturns, 'taxReturns');

      if (!taxReturn) {
        console.error(`No tax return found for ID: ${id}`);
        return;
      }

      setWageRows(
        (taxReturn.wageIncomes ?? []).map((item) => ({
          id: item.id,
          nationalId: item.ssn,
          name: item.name,
          amount: `${item.salaryAmount?.toLocaleString('is-IS')} kr.`,
        })),
      );

      setVehicleRows(
        (taxReturn.vehicleAllowances ?? []).map((item) => ({
          id: item.id,
          type: item.type,
          name: item.name,
          amount: `${item.amount?.toLocaleString('is-IS')} kr.`,
        })),
      );

      setPensionRows(
        (taxReturn.pensionPayments ?? []).map((item) => ({
          id: item.id,
          type: item.type,
          name: item.name,
          amount: `${item.amount?.toLocaleString('is-IS')} kr.`,
        })),
      );

      setLoading(false);
    };

    load();
  }, [params]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-100px)]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-blue-400 border-t-transparent" />
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allRows = [...wageRows, ...vehicleRows, ...pensionRows];
    const newErrors: typeof errors = {};

    for (const row of allRows) {
      const result = rowSchema.safeParse(row);
      if (!result.success) {
        const rowErrors = result.error.flatten().fieldErrors;
        const errorMap = Object.entries(rowErrors).reduce(
          (acc, [key, val]) => {
            if (val?.[0]) acc[key] = val[0];
            return acc;
          },
          {} as Record<string, string>,
        );
        newErrors[row.id] = errorMap;
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const id = routeParams?.id;

    if (id && typeof id === 'string') {
      const { id } = await params;
      const taxReturns = await fetchTaxReturnsByUserId(id);
      const latestReturnId = taxReturns?.[taxReturns.length - 1]?.id;

      if (!latestReturnId) {
        console.error('Missing latest tax return ID');
        return;
      }
      await updateTaxReturn({
        id: latestReturnId, // ✅ correct field name,
        revenue: {
          wageIncomes: wageRows.map((row) => ({
            id: row.id,
            ssn: row.nationalId,
            name: row.name,
            salaryAmount: parseInt(row.amount.replace(/\D/g, '')) || 0,
          })),
          pensionPayments: pensionRows.map((row) => ({
            id: row.id,
            type: row.type,
            name: row.name,
            amount: parseInt(row.amount.replace(/\D/g, '')) || 0,
          })),
          vehicleAllowances: vehicleRows.map((row) => ({
            id: row.id,
            type: row.type,
            name: row.name,
            amount: parseInt(row.amount.replace(/\D/g, '')) || 0,
          })),
        },
        lastStep: 3,
      });
      router.push(`/tax-form/${id}/step-3`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <main className="ml-0 md:ml-4 lg:ml-12 p-6 py-20 px-8 md:px-20 lg:px-28 space-y-12 bg-white rounded-lg mt-0 md:mt-4 lg:mt-12 mb-0 md:mb-20">
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
          initialData={wageRows}
          editableFields={['nationalId', 'name', 'amount']}
          allowAddRow={true}
          onChange={setWageRows}
          errors={errors}
        />

        <FormSection
          title="2.2 Ökutækjastyrkur. Dagpeningar. Hlunnindi"
          fieldKeys={['type', 'name', 'amount']}
          labels={['Tegund', 'Nafn launagreiðanda', 'Upphæð']}
          initialData={vehicleRows}
          editableFields={['type', 'name', 'amount']}
          allowAddRow={true}
          onChange={setVehicleRows}
          errors={errors}
        />

        <FormSection
          title="2.3 Lífeyrisgreiðslur. Tryggingastofnun. O.fl."
          fieldKeys={['type', 'name', 'amount']}
          labels={['Tegund', 'Nafn launagreiðanda', 'Upphæð']}
          initialData={pensionRows}
          editableFields={['type', 'name', 'amount']}
          allowAddRow={true}
          onChange={setPensionRows}
          errors={errors}
        />

        <FormFooter currentStep={2} />
      </main>
    </form>
  );
}
