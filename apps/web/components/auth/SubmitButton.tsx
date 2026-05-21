import { Loader2, LucideIcon } from 'lucide-react';

interface Props {
  loading: boolean;
  disabled: boolean;
  children: React.ReactNode;
  icon: LucideIcon;
}

export default function SubmitButton({
  loading,
  disabled,
  children,
  icon: Icon,
}: Props) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`
        w-full h-14 rounded-2xl
        font-bold text-white
        transition-all duration-200
        active:scale-[0.98]
        flex items-center justify-center gap-2
        ${
          disabled
            ? 'bg-slate-300 cursor-not-allowed'
            : 'bg-[#FF7A00] hover:bg-[#e46d00] shadow-lg shadow-[#FF7A00]/20'
        }
      `}
    >
      {loading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          Creating Account...
        </>
      ) : (
        <>
          <Icon size={18} />
          {children}
        </>
      )}
    </button>
  );
}