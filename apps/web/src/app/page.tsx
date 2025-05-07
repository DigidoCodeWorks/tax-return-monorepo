import AudioPlay from '@/components/icons/AudioPlay';
import DotIcon from '@/components/icons/DotIcon';
import DotIconRed from '@/components/icons/DotIconRed';
import OpenClick from '@/components/icons/OpenClick';
import SkatturinBigIcon from '@/components/icons/SkatturinBigIcon';
import SkatturinIcon from '@/components/icons/SkatturinIcon';
import { TaxReturnsSidebarMobile } from '@/components/layout/TaxReturnSidebarMobile';
import { TaxReturnsSidebarDesktop } from '@/components/layout/TaxReturnsSidebarDesktop';
import { Typography } from '@/components/ui/typography';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default async function InformationPage() {
  return (
    <main className="px-4 lg:px-12 py-16 flex flex-col gap-y-8 md:flex-row gap-x-6 lg:gap-x-[138px]">
      <div className="flex flex-col gap-y-8">
        {' '}
        <Link
          href="/my-pages"
          className="w-full flex justify-start hover:cursor-pointer "
        >
          <Typography
            variant="medium"
            className="pb-1 w-fit font-semibold text-primary-blue-400 border-b border-primary-blue-200"
          >
            ← Til baka
          </Typography>
        </Link>
        <div className="flex gap-x-2 bg-secondary-purple-100 px-4 py-4 rounded-lg">
          <SkatturinBigIcon />
          <div className="flex flex-col py-4">
            <Typography variant="medium" className="text-secondary-purple-600">
              Þjónustuaðili
            </Typography>
            <Typography
              variant="h4"
              as="h4"
              className="text-secondary-purple-600"
            >
              Skatturinn
            </Typography>
          </div>
        </div>
        <>
          <TaxReturnsSidebarDesktop />
          <TaxReturnsSidebarMobile />
        </>
      </div>

      <div className="flex flex-col gap-y-20 w-full mr-4 md:mr-28">
        <div className="flex flex-col gap-y-[28px]">
          <div className="flex gap-x-2 items-center">
            <Typography
              variant="small"
              className="text-primary-blue-400 font-semibold"
            >
              Ísland.is
            </Typography>
            <DotIcon />
            <Typography
              variant="small"
              className="text-primary-blue-400 font-semibold"
            >
              Skatturinn
            </Typography>
          </div>
          <div className="flex flex-col gap-y-8">
            <Typography variant="h1" as="h1" className="text-primary-dark-400">
              Skattframtal 2025
            </Typography>
            <AudioPlay />
          </div>
        </div>
        <div className="flex flex-col gap-y-14  mr-4 md:mr-28">
          <div className="p-8 bg-primary-blue-100 rounded-lg flex flex-col md:flex-row gap-y-6 justify-between items-center">
            <Typography variant="h3" as="h3" className="text-primary-blue-600">
              Skila inn skattframtali
            </Typography>
            <button className="flex bg-primary-blue-400 hover:bg-[#0052d6] py-[18px] text-white items-center gap-x-2 px-6 rounded-lg hover:cursor-pointer">
              <Typography variant="h5" as="h5">
                Skattframtal 2025{' '}
              </Typography>
              <OpenClick />
            </button>
          </div>
          <Typography variant="p" as="p" className="text-primary-dark-400">
            Allir einstaklingar og lögaðilar þurfa að skila skattframtali ár
            hvert. Skattframtal er yfirlit yfir tekjur, eignir og skuldir á
            tekjuárinu og er forsenda álagningar opinberra gjalda.
            <br />
            <br />
            <br />
            Hægt er að skila skattframtali rafrænt á skattur.is með veflykli eða
            í gegnum framtalsforrit. Þeir sem sjá um framtal annarra, t.d.
            endurskoðendur eða bókarar, þurfa sérstakan skilalykil.
          </Typography>
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2 items-start">
              <Typography
                variant="h3"
                as="h3"
                className="text-primary-dark-400 font-semi"
              >
                Tegundir framtala
              </Typography>
              <Typography variant="p" as="p" className="text-primary-dark-400">
                Skatturinn býður upp á rafræn skil á nokkrum gerðum framtala:
              </Typography>
            </div>
            <div className="flex flex-col gap-y-4">
              <span className="flex items-center gap-x-4">
                <DotIconRed /> Skattframtal einstaklinga (RSK 1.01)
              </span>
              <span className="flex items-center gap-x-4">
                <DotIconRed /> Skattframtal barns (RSK 1.02)
              </span>
              <span className="flex items-center gap-x-4">
                <DotIconRed /> Skattframtal rekstraraðila (lögaðila) (RSK 1.04)
              </span>
              <span className="flex items-center gap-x-4">
                <DotIconRed /> Framtal óskattskyldra lögaðila (RSK 1.06)
              </span>
            </div>
            <Typography variant="p" as="p" className="text-primary-dark-400">
              Skatturinn býður upp á rafræn skil á nokkrum gerðum framtala:
            </Typography>
          </div>
          <div className="flex flex-col gap-y-6">
            <Typography
              variant="h3"
              as="h3"
              className="text-primary-dark-400 font-semi"
            >
              Hvernig á að skila framtali{' '}
            </Typography>

            <div className="flex flex-col gap-y-4">
              <span className="flex items-center gap-x-4">
                <DotIconRed /> Notendur skrá sig inn með veflykli, rafrænum
                skilríkjum eða Íslykli.
              </span>
              <span className="flex items-center gap-x-4">
                <DotIconRed /> Framtal hjóna eða sambýlisfólks er hægt að skila
                sameiginlega.
              </span>
              <span className="flex items-center gap-x-4">
                <DotIconRed /> Framfærandi barns skilar framtali fyrir barn
                yngra en 16 ára.
              </span>
              <span className="flex items-center gap-x-4">
                <DotIconRed /> Eldri framtöl eru aðgengilegt undir “Mín framtöl”
                á þjónustusvæði skattur.is.
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2 items-start">
              <Typography
                variant="h3"
                as="h3"
                className="text-primary-dark-400 font-semi"
              >
                Tímasetningar og álagning{' '}
              </Typography>
              <Typography variant="p" as="p" className="text-primary-dark-400">
                Framtali er venjulega skilað í mars/apríl og byggir Skatturinn á
                því við ákvörðun barnabóta, vaxtabóta og annarra opinberra
                greiðslna. Hægt er að leiðrétta framtal áður en álagning fer
                fram.
              </Typography>
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2 items-start">
              <Typography
                variant="h3"
                as="h3"
                className="text-primary-dark-400 font-semi"
              >
                Áður en þú skilar skattframtali{' '}
              </Typography>
              <Typography variant="p" as="p" className="text-primary-dark-400">
                Allir einstaklingar sem náð hafa 16 ára aldri og höfðu tekjur,
                eignir eða skuldir á tekjuárinu þurfa að skila skattframtali.
                Framtalið er forsenda útreiknings álagðra skatta og annarra
                tengdra greiðslna eins og barnabóta og vaxtabóta.
                <br />
                <br />
                <br />
                Skattframtali er skilað rafrænt á skattur.is, annað hvort af
                einstaklingnum sjálfum eða með aðstoð bókara eða endurskoðanda.
                <br />
                <br />
                <br />
                Skilafrestur er venjulega í mars/apríl og mikilvægt er að skila
                framtalinu tímanlega til að forðast áætlaða álagningu eða tafir
                á endurgreiðslum.
              </Typography>
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2 items-start">
              <Typography
                variant="h3"
                as="h3"
                className="text-primary-dark-400 font-semi"
              >
                Ef þú þarft aðstoð{' '}
              </Typography>
              <Typography variant="p" as="p" className="text-primary-dark-400">
                Upplýsingar, leiðbeiningar og reiknivélar eru aðgengilegar á
                skattur.is. Þar er einnig hægt að finna eyðublöð, reglugerðir og
                svör við algengum spurningum.
              </Typography>
            </div>
          </div>
          <div className="flex gap-x-6 bg-secondary-purple-100 px-12 py-8 rounded-lg">
            <SkatturinBigIcon />
            <div className="flex flex-col gap-y-3 py-4">
              <Typography
                variant="medium"
                className="text-secondary-purple-600"
              >
                Þjónustuaðili
              </Typography>
              <Link
                href="/my-pages"
                className="w-full flex justify-start hover:cursor-pointer "
              >
                <Typography
                  variant="medium"
                  className="pb-1 w-fit font-semibold text-primary-blue-400 border-b border-primary-blue-200 flex items-center gap-x-2"
                >
                  Skatt­urinn <ArrowRight size={14} />
                </Typography>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
