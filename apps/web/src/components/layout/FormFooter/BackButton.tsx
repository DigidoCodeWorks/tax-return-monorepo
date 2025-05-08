'use client';
import { useRouter, useParams } from 'next/navigation';
import { updateTaxReturn } from '@/lib/actions/updateTaxReturn';
import { fetchTaxReturnsByUserId } from '@/lib/actions/fetchTaxReturns';
type Props = {
  currentStep: number;
};
const BackButton = ({ currentStep }: Props) => {
  const router = useRouter();
  const params = useParams();
  const userId = typeof params?.id === 'string' ? params.id : '';
  const handleBack = async () => {
    if (!userId || currentStep <= 1) return;
    const previousStep = currentStep === 4 ? 2 : currentStep - 1;
    const taxReturns = await fetchTaxReturnsByUserId(userId);
    const latestId = taxReturns?.[taxReturns.length - 1]?.id;
    if (!latestId) return;
    await updateTaxReturn({
      id: latestId,
      lastStep: previousStep,
    });
    router.push(`/tax-form/${userId}/step-${previousStep}`);
  };
  if (currentStep <= 1) return null;
  return (
    <button
      type="button"
      onClick={handleBack}
      className="border border-primary-blue-400 text-primary-blue-400 px-6 py-[18px] rounded-lg hover:bg-primary-blue-100 hover:cursor-pointer"
    >
      Til baka
    </button>
  );
};
export default BackButton;
