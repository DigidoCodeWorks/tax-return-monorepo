import { taxItems } from '@/lib/data/taxItems';
import { Typography } from '../ui/typography';

export function TaxReturnsSidebarDesktop() {
  return (
    <div className="hidden md:block flex flex-col gap-y-6 max-w-[320px] py-6 bg-primary-blue-100 rounded-lg">
      {' '}
      <Typography variant="h4" as="h4" className="text-primary-blue-600 px-8">
        Netframtal
      </Typography>
      <div className="border-b w-full border-primary-blue-200" />
      <div className="flex flex-col gap-y-4 px-8">
        {taxItems.map((item, i) => (
          <Typography
            key={i}
            variant="intro"
            className={`${
              item.highlighted
                ? 'text-primary-blue-400 font-semibold'
                : 'text-primary-blue-600'
            }`}
          >
            {item.label}
          </Typography>
        ))}
      </div>
    </div>
  );
}
