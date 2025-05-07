'use client';

import { useState, useEffect } from 'react';
import Input from '@/components/forms/ui/Input';
import { Typography } from '../ui/typography';
import { Button } from '../ui/Button';
import InfoIcon from '../icons/InfoIcon';

type GenericRow = {
  id: string;
  [key: string]: string;
};

type FormSectionprops = {
  title: string;
  fieldKeys: string[];
  labels: string[];
  initialData?: GenericRow[];
  editableFields?: string[];
  allowAddRow?: boolean;
};

export default function FormSection({
  title,
  fieldKeys,
  labels,
  initialData = [],
  editableFields = [],
  allowAddRow = false,
}: FormSectionprops) {
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
    // try to find the first field that looks like an amount
    const amountField = fieldKeys.find((key) =>
      [
        'amount',
        'upphæð',
        'fasteignamat',
        'kaupverð',
        'realEstateValuation',
        'purchasePrice',
        'outstandingDebt',
      ].includes(key),
    );

    const raw = amountField ? row[amountField] : '';
    const parsed = parseInt(raw?.replace(/\D/g, ''), 10);
    return sum + (isNaN(parsed) ? 0 : parsed);
  }, 0);

  const [formattedTotal, setFormattedTotal] = useState('');

  useEffect(() => {
    setFormattedTotal(total.toLocaleString('is-IS'));
  }, [total]);

  return (
    <section className="mb-10">
      <div className="flex items-center gap-2">
        <Typography className="text-primary-dark-400 whitespace-nowrap font-normal">
          {title}
        </Typography>
        <InfoIcon />
      </div>

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
        <div key={row.id} className="grid grid-cols-3 gap-4 mb-4">
          {fieldKeys.map((key, i) => (
            <Input
              key={key + row.id}
              value={row[key] || ''}
              onChange={(e) => {
                if (key === 'amount') {
                  const input = e.target.value;
                  const cleaned = input.replace(/[^\d]/g, '');
                  updateRow(row.id, key, cleaned ? `${cleaned} kr.` : '');
                } else {
                  updateRow(row.id, key, e.target.value);
                }
              }}
              placeholder={labels[i]}
              disabled={!editableFields?.includes(key)}
            />
          ))}
        </div>
      ))}

      <div className="flex justify-between pt-4">
        {allowAddRow && (
          <div>
            <Button variant="outlined" onClick={addRow}>
              Ný lína +
            </Button>
          </div>
        )}
        <div className="ml-auto">
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
            {formattedTotal} kr.
          </Typography>
        </div>
      </div>
    </section>
  );
}
