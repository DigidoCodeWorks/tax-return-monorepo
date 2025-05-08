import AirplaneIcon from '@/components/icons/AirplaneIcon';
import CardIcon from '@/components/icons/CardIcon';
import HammerIcon from '@/components/icons/HammerIcon';
import HeartIcon from '@/components/icons/HeartIcon';
import HomeIcon from '@/components/icons/HomeIcon';
import LockIcon from '@/components/icons/LockIcon';
import NetworkIcon from '@/components/icons/NetworkIcon';
import PersonIcon from '@/components/icons/PersonIcon';
import SchoolIcon from '@/components/icons/SchoolIcon';
import WalletIcon from '@/components/icons/WalletIcon';
import { FC } from 'react';

export const dashboardCards = [
  {
    title: 'Umsóknir',
    description: 'Staða umsókna sem þú hefur sótt um í gegnum Ísland.is',
    icon: SchoolIcon,
  },
  {
    title: 'Skattframtöl',
    description: 'Yfirlit yfir skattframtöl, útreikninga og ársreikninga',
    icon: LockIcon,
  },
  {
    title: 'Aðgangsstýring',
    description: 'Umbossetning og yfirlit yfir umboð sem þú hefur gefið',
    icon: LockIcon,
  },
  {
    title: 'Mínar upplýsingar',
    description:
      'Gögn um þig og fjölskyldu þína, undirskriftalistar og miðlægasafnanir',
    icon: PersonIcon,
  },
  {
    title: 'Framfærsla',
    description: 'Yfirlit yfir greiðslur frá almannatryggingum',
    icon: CardIcon,
  },
  {
    title: 'Eignir og tæki',
    description: 'Þínar fasteignir, ökutæki, hugverk og fleira',
    icon: HomeIcon,
  },
  {
    title: 'Fjármál',
    description: 'Ýmsar upplýsingar um fjármál þín frá ríkissjóði og stofnunum',
    icon: NetworkIcon,
  },
  {
    title: 'Skirteini',
    description: 'Upplýsingar um skírteini og réttindi sem þeim fylgja',
    icon: WalletIcon,
  },
  {
    title: 'Heilsa',
    description: 'Heilsutengd gögn um þig birtast hér',
    icon: HeartIcon,
  },
  {
    title: 'Starfsleyfi',
    description: 'Upplýsingar um þau starfsleyfi sem þú hefur fengið',
    icon: NetworkIcon,
  },
  {
    title: 'Loftbrú',
    description: 'Lægri flugfargjöld fyrir búða lands',
    icon: AirplaneIcon,
  },
  {
    title: 'Menntun',
    description:
      'Upplýsingar frá öllum skólastigum birtast hér ásamt skírteinum',
    icon: SchoolIcon,
  },
  {
    title: 'Lög og reglur',
    description: 'Þín mál í dómskerfinu',
    icon: HammerIcon,
  },
];

export type DashboardCard = {
  title: string;
  description: string;
  icon: FC<React.SVGProps<SVGSVGElement>>;
};
export type DashboardCards = DashboardCard[];
