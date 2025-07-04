'use client';
import { useState } from 'react';
import { z } from 'zod';
import DocumentIcon from '@/components/icons/DocumentIcon';
import FormFooter from '@/components/layout/FormFooter/FormFooter';
import { Typography } from '@/components/ui/typography';
import { AlertTriangle } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

const schema = z.object({
  consent: z.literal(true, {
    errorMap: () => ({
      message: 'Vinsamlegast hakaðu í þennan reit til að halda áfram.',
    }),
  }),
});

export default function Step1Page() {
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const params = useParams(); // contains the dynamic id

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse({ consent });

    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setError(null);

    const id = params?.id; // assuming your file structure is /tax-form/[id]/step-1
    if (id && typeof id === 'string') {
      router.push(`/tax-form/${id}/step-2`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full bg-secondary-purple-100 md:pl-6 md:py-8"
    >
      <div className="flex flex-col gap-y-10 bg-white rounded-lg">
        <div className="px-12 pt-12 lg:px-[114px] lg:pt-[114px] flex flex-col gap-y-8">
          <Typography variant="h2" as="h2" className="text-primary-dark-400">
            Skattframtal 2025
          </Typography>

          <div className="flex flex-col gap-y-8 items-start gap-x-4">
            <div className="flex gap-x-4 items-center">
              <DocumentIcon />
              <Typography
                variant="h4"
                as="h4"
                className="text-primary-dark-400"
              >
                Eftirfarandi gögn verða sótt rafrænt
              </Typography>
            </div>

            <div className="flex flex-col">
              <Typography
                variant="h5"
                as="h5"
                className="text-primary-blue-400"
              >
                Upplýsingar úr Þjóðskrá/Fyrirtækjaskrá
              </Typography>
              <Typography variant="p" as="p" className="text-primary-dark-400">
                Til þess að auðvelda fyrir sækjum við persónuupplýsingar úr
                Þjóðskrá til þess að fylla út umsóknina
              </Typography>
            </div>

            <div className="flex flex-col">
              <Typography
                variant="h5"
                as="h5"
                className="text-primary-blue-400"
              >
                Netfang og símanúmer úr þínum stillingum
              </Typography>
              <Typography variant="p" as="p" className="text-primary-dark-400">
                Til þess að auðvelda umsóknarferlið er gott að hafa fyllt út
                netfang og símanúmer á mínum síðum
              </Typography>
            </div>

            <div className="flex flex-col">
              <Typography
                variant="h5"
                as="h5"
                className="text-primary-blue-400"
              >
                Upplýsingar úr ökutækjaskrá
              </Typography>
              <Typography variant="p" as="p" className="text-primary-dark-400">
                Upplýsingar úr ökutækjaskrá
              </Typography>
            </div>

            <div className="flex flex-col">
              <Typography
                variant="h5"
                as="h5"
                className="text-primary-blue-400"
              >
                Upplýsingar frá Fjársýslunni
              </Typography>
              <Typography variant="p" as="p" className="text-primary-dark-400">
                Um stöðu bifreiðagjalda
              </Typography>
            </div>

            <div className="flex flex-col">
              <Typography
                variant="h5"
                as="h5"
                className="text-primary-blue-400"
              >
                Upplýsingar frá Skattinum
              </Typography>
              <Typography variant="p" as="p" className="text-primary-dark-400">
                Til að sækja fyrirliggjandi upplýsingar um tekjur (t.d. laun frá
                vinnuveitendum), fjármagnstekjur og aðrar lykilupplýsingar sem
                Skatturinn hefur þegar móttekið.
              </Typography>
            </div>

            <div className="flex flex-col">
              <Typography
                variant="h5"
                as="h5"
                className="text-primary-blue-400"
              >
                Upplýsingar frá Fasteignaskrá
              </Typography>
              <Typography variant="p" as="p" className="text-primary-dark-400">
                Til að sækja upplýsingar um skráðar fasteignir í þinni eigu, svo
                sem fasteignamat og stærð.
              </Typography>
            </div>
          </div>
        </div>

        {/* Consent box */}
        <div className="w-full px-12 lg:px-[114px] pb-12">
          <div
            className={`px-8 py-6 border rounded-lg flex gap-x-4 items-start ${
              error
                ? 'border-primary-red-400 bg-primary-red-100'
                : 'border-primary-blue-200 bg-primary-blue-100'
            }`}
          >
            <input
              type="checkbox"
              id="consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="w-4 h-4 mt-1 text-primary-blue-400 rounded-lg border-none"
            />
            <label htmlFor="consent" className="flex-1">
              <Typography
                variant="intro"
                className="text-primary-dark-400 font-semibold"
              >
                Ég samþykki að ofangreindra gagna verður aflað í umsóknarferlinu
              </Typography>
            </label>
          </div>
          {error && (
            <div className="flex items-center mt-3 text-primary-red-400 gap-x-2">
              <AlertTriangle className="w-5 h-5" />
              <Typography variant="medium" className="font-semibold">
                {error}
              </Typography>
            </div>
          )}
        </div>
      </div>

      <FormFooter currentStep={1} />
    </form>
  );
}
