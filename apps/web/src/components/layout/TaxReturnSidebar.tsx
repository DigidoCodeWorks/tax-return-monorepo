import clsx from 'clsx';
import Link from 'next/link';

const links = [
  { href: '/tax-returns', label: 'Nýjasta framtal' },
  { href: '/tax-returns/in-progress', label: 'Framtöl í vinnslu' },
  { href: '/tax-returns/previous', label: 'Framtöl fyrri ára' },
  { href: '#', label: 'Framtal barns' },
  { href: '#', label: 'Bráðabirgðaútreikningur' },
  { href: '#', label: 'Ársreikningur' },
];

export function TaxReturnsSidebar({ activePath }: { activePath: string }) {
  return (
    <nav className="flex flex-col gap-2 text-sm text-gray-700">
      {links.map((link) => {
        const isActive = activePath === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              'px-3 py-2 rounded-md',
              isActive
                ? 'bg-blue-100 text-blue-800 font-medium'
                : 'hover:bg-gray-100',
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
