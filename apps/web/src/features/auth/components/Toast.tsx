'use client';

import { useEffect, useState } from 'react';
import { Check, X } from 'lucide-react';

interface ToastProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

export default function Toast({ type, message, onClose }: ToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // trigger slide-in
    const show = setTimeout(() => setVisible(true), 10);
    // trigger slide-out
    const hide = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, 3000);

    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, [onClose]);

  return (
    <div
      className={`
        fixed z-[9999] right-4
        top-4 sm:top-auto sm:bottom-6
        transition-all duration-300 ease-in-out
        ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
        flex items-center gap-3 px-5 py-3 rounded-2xl
        shadow-[0_8px_30px_rgba(0,0,0,0.15)]
        text-sm font-semibold text-white
        ${type === 'success' ? 'bg-emerald-500' : 'bg-red-500'}
      `}
    >
      {type === 'success'
        ? <Check className="w-4 h-4 shrink-0" />
        : <X className="w-4 h-4 shrink-0" />}
      {message}
    </div>
  );
}
