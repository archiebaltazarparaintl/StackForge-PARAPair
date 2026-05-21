import { LucideIcon } from 'lucide-react';

interface Props
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: LucideIcon;
  error?: string;
  success?: string;
}

export default function InputField({
  label,
  icon: Icon,
  error,
  success,
  className = '',
  ...props
}: Props) {
  return (
    <div className="space-y-2">
      <label className="ml-1 text-[11px] uppercase tracking-[0.2em] font-bold text-slate-500">
        {label}
      </label>

      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

        <input
          {...props}
          className={`
            w-full h-12 sm:h-13 rounded-2xl
            border bg-slate-50
            pl-12 pr-4
            text-sm text-slate-900
            outline-none
            transition-all duration-200
            focus:ring-4 focus:ring-[#0EA5A5]/10
            focus:border-[#0EA5A5]
            ${
              error
                ? 'border-red-400'
                : success
                ? 'border-emerald-500'
                : 'border-slate-200'
            }
            ${className}
          `}
        />
      </div>

      {error && (
        <p className="text-xs text-red-500">
          {error}
        </p>
      )}

      {success && (
        <p className="text-xs text-emerald-600">
          ✓ {success}
        </p>
      )}
    </div>
  );
}