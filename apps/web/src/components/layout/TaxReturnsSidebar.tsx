'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'Nýjasta framtal', slug: '' },
  { label: 'Framtöl í vinnslu', slug: '/in-progress' },
  { label: 'Framtöl fyrri ára', slug: '/previous' },
  { label: 'Framtal barns', slug: '/child' },
  { label: 'Bráðabirgðaútreikningur', slug: '/temporary' },
  { label: 'Ársreikningur', slug: '/annual' },
];

export default function TaxReturnsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 rounded-xl bg-blue-50 py-3 text-sm">
      <h2 className="px-4 pb-2 text-sm font-semibold text-blue-800">
        Netframtal
      </h2>
      <hr className="border-blue-100 mb-2" />
      <nav className="flex flex-col">
        {links.map(({ label, slug }) => {
          const isActive = pathname === `/tax-returns${slug}`;
          return (
            <div
              key={label}
              className={clsx(
                'px-4 py-2',
                isActive ? 'text-blue-800 font-medium' : 'text-blue-700',
              )}
            >
              {label}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
