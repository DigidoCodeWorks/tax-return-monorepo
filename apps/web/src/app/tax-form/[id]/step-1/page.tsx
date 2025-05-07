import DocumentIcon from '@/components/icons/DocumentIcon';
import FormFooter from '@/components/layout/FormFooter/FormFooter';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/typography';
import { stepMetadata } from '@/lib/metadata';
import { ArrowRight } from 'lucide-react';
export const metadata = stepMetadata[1];

export default function TaxReturnStep1Page() {
  return (
    <main className="w-full h-full bg-secondary-purple-100 md:pl-6 md:py-8">
      <div className="flex flex-col gap-y-10 bg-white rounded-lg ">
        <div className="px-12 pt-12 lg:px-[114px] lg:pt-[114px] flex flex-col gap-y-8">
          <Typography variant="h2" as="h2" className="text-primary-dark-400">
            Skattframtal 2025
          </Typography>

          <div className="flex flex-col gap-y-8  items-start gap-x-4">
            <div className="flex gap-x-4 items-center">
              {' '}
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
              <Typography variant="p" as="p" className="text-primary-dark-400 ">
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
              <Typography variant="p" as="p" className="text-primary-dark-400 ">
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
                Upplýsingar úr ökutækjaskrá{' '}
              </Typography>
              <Typography variant="p" as="p" className="text-primary-dark-400 ">
                Upplýsingar úr ökutækjaskrá
              </Typography>
            </div>
            <div className="flex flex-col">
              <Typography
                variant="h5"
                as="h5"
                className="text-primary-blue-400"
              >
                Upplýsingar frá Fjársýslunni{' '}
              </Typography>
              <Typography variant="p" as="p" className="text-primary-dark-400 ">
                Um stöðu bifreiðagjalda{' '}
              </Typography>
            </div>
          </div>
        </div>
        <div className="w-full px-12 lg:px-[114px] pb-12">
          <div className=" px-8 py-6 bg-primary-blue-100 border border-primary-blue-200 rounded-lg flex gap-x-4 items-center">
            {' '}
            <input
              className="w-4 h-4 text-primary-blue-400 rounded-lg border-none"
              type="checkbox"
              id="checkbox"
            />
            <Typography
              variant="intro"
              className="text-primary-dark-400 font-semibold"
            >
              Ég hef kynnt mér ofangreint varðandi gagnaöflun
            </Typography>
          </div>
        </div>
      </div>
      <FormFooter />
    </main>
  );
}
