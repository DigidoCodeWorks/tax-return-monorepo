import Input from './Input';

type IncomeRowData = {
  kennitala: string;
  name: string;
  amount: string;
};

interface IncomeRowProps {
  index: number;
  data: IncomeRowData;
  onChange: (index: number, field: keyof IncomeRowData, value: string) => void;
}

export default function IncomeRow({ index, data, onChange }: IncomeRowProps) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-4">
      <Input
        label="Kennitala"
        value={data.kennitala}
        onChange={(e) => onChange(index, 'kennitala', e.target.value)}
      />
      <Input
        label="Nafn launagreiðanda"
        value={data.name}
        onChange={(e) => onChange(index, 'name', e.target.value)}
      />
      <Input
        label="Launafjárhæð"
        value={data.amount}
        onChange={(e) => onChange(index, 'amount', e.target.value)}
      />
    </div>
  );
}
