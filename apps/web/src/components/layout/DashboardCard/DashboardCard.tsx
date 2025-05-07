import { Typography } from '@/components/ui/typography';
import { DashboardCard } from '@/lib/data/dashboardCards';
import React from 'react';
import Link from 'next/link';

type Props = {
  card: DashboardCard;
};

const DashboardCardContent = ({ card }: Props) => (
  <div className="bg-white border border-primary-blue-200 hover:bg-blue-100 hover:cursor-pointer rounded-lg px-8 py-6 flex flex-col gap-y-2 shadow-light hover:shadow-strong transition">
    <div className="flex items-center gap-x-4">
      <card.icon className="w-6 h-6 text-primary-blue-400 p-2.5" />
      <Typography variant="h4" as="h4" className="text-primary-blue-400 ">
        {card.title}
      </Typography>
    </div>
    <Typography variant="body" className="text-dark-300">
      {card.description}
    </Typography>
  </div>
);

const DashboardCardComp = ({ card }: Props) => {
  const isTaxCard = card.title === 'Skattframtöl';

  return isTaxCard ? (
    <Link href="/my-pages/active-tax-return">
      <DashboardCardContent card={card} />
    </Link>
  ) : (
    <DashboardCardContent card={card} />
  );
};

export default DashboardCardComp;
