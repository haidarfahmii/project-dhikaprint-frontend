import type { ProductOption } from "@/features/product/types";

type LedgerSelectProps = {
  label: string;
  name: string;
  value: string;
  options: ProductOption[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

export function LedgerSelect({
  label,
  name,
  value,
  options,
  onChange,
}: LedgerSelectProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs uppercase tracking-wide text-muted-foreground"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border-b-2 border-border bg-transparent py-2 text-sm text-ink focus:border-brand focus:outline-none"
      >
        {options.map((o) => (
          <option key={o.label} value={o.label}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
