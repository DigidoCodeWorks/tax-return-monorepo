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

type FieldErrorMap = {
  [rowId: string]: {
    [field: string]: string;
  };
};

type FormSectionProps = {
  title: string;
  fieldKeys: string[];
  labels: string[];
  initialData?: GenericRow[];
  editableFields?: string[];
  allowAddRow?: boolean;
  onChange?: (rows: GenericRow[]) => void;
  errors?: FieldErrorMap;
};

export default function FormSection({
  title,
  fieldKeys,
  labels,
  initialData = [],
  editableFields = [],
  allowAddRow = false,
  onChange,
  errors = {},
}: FormSectionProps) {
  const [rows, setRows] = useState<GenericRow[]>([]);

  useEffect(() => {
    setRows(
      (initialData.length > 0
        ? initialData
        : [
            {
              id: crypto.randomUUID(),
              ...Object.fromEntries(fieldKeys.map((k) => [k, ''])),
            } as GenericRow,
          ]
      ).map((row) => ({
        ...row,
        id: row.id ?? crypto.randomUUID(),
      })),
    );
  }, []);

  useEffect(() => {
    onChange?.(rows);
  }, [rows, onChange]);

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

  const totals = fieldKeys.reduce(
    (acc, key) => {
      if (
        [
          'amount',
          'upphæð',
          'fasteignamat',
          'kaupverð',
          'realEstateValuation',
          'purchasePrice',
          'outstandingDebt',
          'interestExpenses',
        ].includes(key)
      ) {
        const sum = rows.reduce((sum, row) => {
          const raw = row[key];
          const parsed = parseInt(raw?.replace(/\D/g, ''), 10);
          return sum + (isNaN(parsed) ? 0 : parsed);
        }, 0);
        acc[key] = sum;
      }
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <section className="mb-10">
      <div className="flex items-center gap-2">
        <Typography className="text-primary-dark-400 whitespace-nowrap font-normal">
          {title}
        </Typography>
        <InfoIcon />
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:grid grid-cols-3 gap-4 mt-6 text-sm font-semibold text-gray-500 mb-2">
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

      <div className="hidden lg:grid gap-4">
        {rows.map((row) => (
          <div key={row.id} className="grid grid-cols-3 gap-4 mb-4">
            {fieldKeys.map((key, i) => {
              const fieldError = errors?.[row.id]?.[key];
              return (
                <div key={key + row.id}>
                  <Input
                    value={row[key] || ''}
                    onChange={(e) => {
                      let value = e.target.value;

                      if (key === 'nationalId') {
                        const digitsOnly = value.replace(/\D/g, '');
                        value =
                          digitsOnly.length <= 6
                            ? digitsOnly
                            : `${digitsOnly.slice(0, 6)}-${digitsOnly.slice(6, 10)}`;
                      }

                      if (
                        [
                          'amount',
                          'upphæð',
                          'fasteignamat',
                          'kaupverð',
                          'realEstateValuation',
                          'purchasePrice',
                          'outstandingDebt',
                          'interestExpenses',
                        ].includes(key)
                      ) {
                        const cleaned = value.replace(/[^\d]/g, '');
                        updateRow(row.id, key, cleaned ? `${cleaned} kr.` : '');
                      } else {
                        updateRow(row.id, key, value);
                      }
                    }}
                    placeholder={labels[i]}
                    disabled={!editableFields.includes(key)}
                    error={!!fieldError}
                  />
                  {fieldError && (
                    <Typography
                      variant="small"
                      className="text-primary-red-400 mt-1"
                    >
                      {fieldError}
                    </Typography>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden space-y-6 mt-6">
        {rows.map((row) => (
          <div key={row.id} className="space-y-4">
            {fieldKeys.map((key, i) => {
              const fieldError = errors?.[row.id]?.[key];
              return (
                <div className="flex flex-col gap-y-2" key={key + row.id}>
                  <Typography
                    variant="medium"
                    className="text-primary-blue-400 font-semibold"
                  >
                    {labels[i]}
                  </Typography>
                  <Input
                    value={row[key] || ''}
                    onChange={(e) => {
                      let value = e.target.value;

                      if (key === 'nationalId') {
                        const digitsOnly = value.replace(/\D/g, '');
                        value =
                          digitsOnly.length <= 6
                            ? digitsOnly
                            : `${digitsOnly.slice(0, 6)}-${digitsOnly.slice(6, 10)}`;
                      }

                      if (
                        [
                          'amount',
                          'upphæð',
                          'fasteignamat',
                          'kaupverð',
                          'realEstateValuation',
                          'purchasePrice',
                          'outstandingDebt',
                          'interestExpenses',
                        ].includes(key)
                      ) {
                        const cleaned = value.replace(/[^\d]/g, '');
                        updateRow(row.id, key, cleaned ? `${cleaned} kr.` : '');
                      } else {
                        updateRow(row.id, key, value);
                      }
                    }}
                    placeholder={labels[i]}
                    disabled={!editableFields.includes(key)}
                    error={!!fieldError}
                  />
                  {fieldError && (
                    <Typography
                      variant="small"
                      className="text-primary-red-400 mt-1"
                    >
                      {fieldError}
                    </Typography>
                  )}

                  {/* Inline mobile total per field */}
                  {totals[key] !== undefined && (
                    <Typography
                      variant="medium"
                      className="text-primary-dark-400 whitespace-nowrap font-semibold"
                    >
                      Samtals: {totals[key].toLocaleString('is-IS')} kr.
                    </Typography>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="flex justify-between pt-4">
        {allowAddRow && (
          <div>
            <Button variant="outlined" className="" onClick={addRow}>
              Ný lína +
            </Button>
          </div>
        )}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 w-full">
          {fieldKeys.map((key) => {
            const total = totals[key];
            return (
              <div key={key} className="text-right">
                {total !== undefined && (
                  <>
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
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
