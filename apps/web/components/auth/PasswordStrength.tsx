import {
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';

interface Props {
  passwordChecks: {
    minLength: boolean;
    uppercase: boolean;
    lowercase: boolean;
    number: boolean;
    special: boolean;
  };
}

export default function PasswordStrength({
  passwordChecks,
}: Props) {
  const score = Object.values(
    passwordChecks,
  ).filter(Boolean).length;

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((step) => (
          <div
            key={step}
            className={`
              h-2 flex-1 rounded-full transition-all
              ${
                step <= score
                  ? 'bg-[#0EA5A5]'
                  : 'bg-slate-200'
              }
            `}
          />
        ))}
      </div>

      <div className="space-y-2">
        <Rule
          valid={
            passwordChecks.minLength
          }
          text="At least 8 characters"
        />

        <Rule
          valid={
            passwordChecks.uppercase
          }
          text="One uppercase letter"
        />

        <Rule
          valid={
            passwordChecks.lowercase
          }
          text="One lowercase letter"
        />

        <Rule
          valid={passwordChecks.number}
          text="One number"
        />

        <Rule
          valid={
            passwordChecks.special
          }
          text="One special character"
        />
      </div>
    </div>
  );
}

function Rule({
  valid,
  text,
}: {
  valid: boolean;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 text-sm">
      {valid ? (
        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
      ) : (
        <AlertCircle className="w-4 h-4 text-red-400" />
      )}

      <span
        className={
          valid
            ? 'text-emerald-700'
            : 'text-slate-500'
        }
      >
        {text}
      </span>
    </div>
  );
}