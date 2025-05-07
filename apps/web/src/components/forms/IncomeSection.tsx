'use client';

import { useState } from 'react';
import Input from '@/components/forms/ui/Input';
import { Typography } from '../ui/typography';
import { Button } from '../ui/Button';
type GenericRow = {
  id: string;
  [key: string]: string;
};

type IncomeSectionProps = {
  title: string;
  fieldKeys: string[];
  labels: string[];
  initialData?: GenericRow[];
};

export default function IncomeSection({
  title,
  fieldKeys,
  labels,
  initialData = [],
}: IncomeSectionProps) {
  const [rows, setRows] = useState<GenericRow[]>(() => {
    if (initialData.length > 0) {
      return initialData.map((row) => ({
        ...row,
        id: row.id ?? crypto.randomUUID(),
      }));
    }

    return [
      {
        id: crypto.randomUUID(),
        ...Object.fromEntries(fieldKeys.map((k) => [k, ''])),
      } as GenericRow,
    ];
  });

  const addRow = () => {
    const newRow = Object.fromEntries(
      fieldKeys.map((k) => [k, '']),
    ) as GenericRow;
    newRow.id = crypto.randomUUID();
    setRows((prev) => [...prev, newRow]);
  };

  const updateRow = (id: string, field: string, value: string) => {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [field]: value } : row)),
    );
  };

  const total = rows.reduce((sum, row) => {
    const amount = row.amount || row.upphæð; // support both 2.1 & 2.3 key names
    const parsed = parseInt(amount?.replace(/\D/g, ''), 10);
    return sum + (isNaN(parsed) ? 0 : parsed);
  }, 0);

  return (
    <section className="mb-10">
      <Typography className="text-primary-dark-400 whitespace-nowrap font-normal">
        {title}
      </Typography>
      <div className="grid grid-cols-3 gap-4 mt-6 text-sm font-semibold text-gray-500 mb-2">
        {labels.map((label) => (
          <Typography
            variant="medium"
            key={label}
            className="text-primary-blue-400 whitespace-nowrap font-semibold"
          >
            {label}
          </Typography>
        ))}
      </div>

      {rows.map((row) => (
        <div
          key={row.id ?? crypto.randomUUID()}
          className="grid grid-cols-3 gap-4 mb-4"
        >
          {fieldKeys.map((key, i) => (
            <Input
              key={key}
              value={row[key] || ''}
              onChange={(e) => updateRow(row.id, key, e.target.value)}
              placeholder={labels[i]}
            />
          ))}
        </div>
      ))}

      <div className="flex justify-between pt-4">
        <div>
          <Button variant="outlined" onClick={addRow}>
            Ný lína +
          </Button>
        </div>
        <div>
          <Typography
            variant="medium"
            className="text-primary-dark-400 whitespace-nowrap font-semibold"
          >
            Samtals
          </Typography>
          <Typography
            as="h5"
            className="text-primary-dark-400 whitespace-nowrap font-semibold"
          >
            {total.toLocaleString('is-IS')} kr.
          </Typography>
        </div>
      </div>
    </section>
  );
}
