interface Props {
  type: 'success' | 'error';
  message: string;
}

export default function AlertMessage({
  type,
  message,
}: Props) {
  return (
    <div
      role="alert"
      className={`
        rounded-2xl border px-4 py-3 text-sm font-medium animate-in fade-in duration-300
        ${
          type === 'success'
            ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
            : 'border-red-200 bg-red-50 text-red-600'
        }
      `}
    >
      {message}
    </div>
  );
}