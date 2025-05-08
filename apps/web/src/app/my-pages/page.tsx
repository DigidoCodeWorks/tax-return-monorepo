'use client';

import { mailboxItems } from '../../lib/data/mailBox';
import { dashboardCards } from '../../lib/data/dashboardCards';
import { Typography } from '../../components/ui/typography';
import DashboardCardComp from '@/components/layout/DashboardCard/DashboardCard';
import MailBoxItemComp from '@/components/layout/MailBoxItem/MailBoxItem';
import MyPagesIcon from '@/components/icons/MyPagesIcon';
import MailIcon from '@/components/icons/MailIcon';

export default function MyPages() {
  return (
    <main className="px-4 md:px-12 lg:px-20 py-12">
      {/* Greeting */}
      <div className="flex flex-col  gap-y-[40px] md:flex-row justify-between lg:px-28 gap-x-12 md:gap-x-36">
        <div className="flex flex-col gap-y-4">
          <Typography variant="medium" className="text-secondary-purple-400">
            Góðan dag,
          </Typography>

          <Typography variant="h2" as="h2" className="text-primary-dark-400">
            Jökull Þórðarson
          </Typography>

          <Typography variant="intro" className="text-primary-dark-400">
            Á Mínum síðum Ísland.is er markmiðið að auka þægindi og gegnsæi
            upplýsingaflæðis fyrir einstaklinga og fyrirtæki.
          </Typography>
        </div>
        <MyPagesIcon />
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-[540px_1fr] gap-10">
        {/* Mailbox Section */}
        <section className="border border-primary-blue-200 rounded-lg px-8 py-6 flex flex-col gap-y-6 h-fit">
          <Typography
            variant="h4"
            as="h4"
            className="text-primary-blue-400   flex items-center gap-x-4"
          >
            <MailIcon /> Pósthólf
          </Typography>
          <div className="border-b border-primary-blue-200"></div>
          <div className="flex flex-col gap-3">
            {mailboxItems.map((item, idx) => (
              <MailBoxItemComp key={idx} mailBoxItem={item} />
            ))}
          </div>

          <button className="w-full flex justify-center hover:cursor-pointer ">
            <Typography
              variant="medium"
              className="pb-1 w-fit font-semibold text-primary-blue-400 border-b border-primary-blue-200"
            >
              Opna pósthólf →
            </Typography>
          </button>
        </section>

        {/* Dashboard Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {dashboardCards.map((card, idx) => (
            <DashboardCardComp key={idx} card={card} />
          ))}
        </section>
      </div>
    </main>
  );
}
