'use client';
import { useState } from 'react';
import { Typography } from '../ui/typography';
import { ChevronDown } from 'lucide-react';
import { taxItems } from '@/lib/data/taxItems';

export function TaxReturnsSidebarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden bg-primary-blue-100 rounded-lg px-4 py-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between"
      >
        <Typography variant="intro" className="text-primary-blue-600">
          Framtöl í vinnslu
        </Typography>
        <div className="p-2 rounded-full bg-primary-blue-200">
          <ChevronDown
            color="#0061FF"
            className={`transition-transform duration-200  ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-y-3">
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
    </div>
  );
}
