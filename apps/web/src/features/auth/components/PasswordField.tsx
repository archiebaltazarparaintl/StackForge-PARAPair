import { Eye, EyeOff, Lock } from 'lucide-react';

interface Props {
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  showPassword: boolean;
  setShowPassword: (
    value: boolean,
  ) => void;
  error?: string;
  success?: string;
}

export default function PasswordField({
  label,
  value,
  onChange,
  showPassword,
  setShowPassword,
  error,
  success,
}: Props) {
  return (
    <div className="space-y-2">
      <label className="ml-1 text-[11px] uppercase tracking-[0.2em] font-bold text-slate-500">
        {label}
      </label>

      <div className="relative">
        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

        <input
          type={
            showPassword
              ? 'text'
              : 'password'
          }
          value={value}
          onChange={onChange}
          autoComplete="new-password"
          className={`
            w-full h-12 rounded-2xl
            border bg-slate-50
            pl-12 pr-12
            text-sm outline-none
            transition-all
            focus:ring-4 focus:ring-[#0EA5A5]/10
            focus:border-[#0EA5A5]
            ${
              error
                ? 'border-red-400'
                : success
                ? 'border-emerald-500'
                : 'border-slate-200'
            }
          `}
        />

        <button
          type="button"
          aria-label="Toggle password visibility"
          onClick={() =>
            setShowPassword(
              !showPassword,
            )
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#0EA5A5]"
        >
          {showPassword ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>
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