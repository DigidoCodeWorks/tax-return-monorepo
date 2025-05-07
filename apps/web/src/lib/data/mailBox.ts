import GovernmentIcon from '@/components/icons/GovernmentIcon';
import HusnaedisIcon from '@/components/icons/HusnaedisIcon';
import Kopavogsbaer from '@/components/icons/Kopavogsbaer';
import RannosoknIsland from '@/components/icons/RannosoknIsland';
import SkatturinIcon from '@/components/icons/SkatturinIcon';
import { FC } from 'react';

export const mailboxItems = [
  {
    title: 'Fjársýsla ríkisins',
    subject: 'Tilkynning um ráðstöfun bóta',
    date: '24.04.2025',
    icon: GovernmentIcon,
  },
  {
    title: 'Rannsóknarmiðstöð Íslands',
    subject: 'Svarbréf varðandi umsókn í Sprota hjá Tækniþróunarsjóði',
    date: '19.02.2025',
    icon: RannosoknIsland,
  },
  {
    title: 'Húsnæðis- og mannvirkjastofnun',
    subject: 'Tilkynning um fasteignamat er tekur gildi 31.12.2024',
    date: '16.01.2025',
    icon: HusnaedisIcon,
  },
  {
    title: 'Fjársýsla ríkisins',
    subject: 'Tilkynning um ráðstöfun bóta',
    date: '12.10.2024',
    icon: GovernmentIcon,
  },
  {
    title: 'Kópavogsbær',
    subject: 'Álagningarseðill fasteignagjalda 2025',
    date: '17.10.2024',
    icon: Kopavogsbaer,
  },
  {
    title: 'Skatturinn',
    subject: 'Inneignartilbúð',
    date: '05.09.2024',
    icon: SkatturinIcon,
  },
  {
    title: 'Skatturinn',
    subject: 'Niðurstaða álagningar 2024',
    date: '11.07.2024',
    icon: SkatturinIcon,
  },
];

export type MailBoxItem = {
  title: string;
  subject: string;
  date: string;
  icon: FC<React.SVGProps<SVGSVGElement>>;
};
export type MailBoxItems = MailBoxItem[];
