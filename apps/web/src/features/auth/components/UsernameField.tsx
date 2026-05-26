/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useEffect, useState } from 'react';
import { AtSign, Check, X, Loader2 } from 'lucide-react';
import { checkUsername } from '../services/auth.service';

const USERNAME_REGEX = /^[a-zA-Z0-9_]{3,20}$/;

interface Props {
  value: string;
  onChange: (value: string) => void;
  onAvailabilityChange: (available: boolean | null) => void;
}

export default function UsernameField({ value, onChange, onAvailabilityChange }: Props) {
  const [checking, setChecking] = useState(false);
  const [available, setAvailable] = useState<boolean | null>(null);

  const validFormat = USERNAME_REGEX.test(value);

  useEffect(() => {
    if (!validFormat) {
      setAvailable(null);
      onAvailabilityChange(null);
      return;
    }

    setChecking(true);
    setAvailable(null);
    onAvailabilityChange(null);

    const timer = setTimeout(async () => {
      try {
        const res = await checkUsername(value);
        setAvailable(res.available);
        onAvailabilityChange(res.available);
      } catch {
        setAvailable(null);
        onAvailabilityChange(null);
      } finally {
        setChecking(false);
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [value, validFormat, onAvailabilityChange]);

  const borderColor = !value
    ? 'border-slate-200'
    : !validFormat
    ? 'border-red-400'
    : checking
    ? 'border-slate-300'
    : available === true
    ? 'border-emerald-500'
    : available === false
    ? 'border-red-400'
    : 'border-slate-200';

  const statusMessage = !value
    ? null
    : !validFormat
    ? { type: 'error', text: 'Username must be 3-20 characters.' }
    : checking
    ? null
    : available === true
    ? { type: 'success', text: 'Username is available!' }
    : available === false
    ? { type: 'error', text: 'Username is already taken.' }
    : null;

  return (
    <div className="space-y-2">
      <label className="ml-1 text-[11px] uppercase tracking-[0.2em] font-bold text-slate-500">
        Username
      </label>
      <div className="relative">
        <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          value={value}
          onChange={(e) => onChange(e.target.value.replace(/\s/g, ''))}
          placeholder="kevinfrance"
          autoComplete="username"
          className={`
            w-full h-12 rounded-2xl border bg-slate-50
            pl-12 pr-10 text-sm text-slate-900
            outline-none transition-all duration-200
            focus:ring-4 focus:ring-[#0EA5A5]/10 focus:border-[#0EA5A5]
            ${borderColor}
          `}
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          {checking ? (
            <Loader2 className="w-4 h-4 text-slate-400 animate-spin" />
          ) : available === true && validFormat ? (
            <Check className="w-4 h-4 text-emerald-500" />
          ) : available === false || (value && !validFormat) ? (
            <X className="w-4 h-4 text-red-400" />
          ) : null}
        </div>
      </div>
      {statusMessage?.type === 'error' && (
        <p className="text-xs text-red-500">{statusMessage.text}</p>
      )}
      {statusMessage?.type === 'success' && (
        <p className="text-xs text-emerald-600">✓ {statusMessage.text}</p>
      )}
    </div>
  );
}
