import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'error';
  title: string;
  message: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div
      id="toast-container"
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-[#F9F7F3] border border-[#E6E1D8] shadow-xl p-4 rounded-2xl flex items-start gap-3 animate-slide-up transition-all duration-300"
        >
          {toast.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-[#3F4B35] shrink-0 mt-0.5" />
          ) : toast.type === 'error' ? (
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          ) : (
            <Info className="w-5 h-5 text-[#6E6A61] shrink-0 mt-0.5" />
          )}

          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-semibold text-[#24231F] leading-tight">
              {toast.title}
            </h4>
            <p className="text-[11px] text-[#6E6A61] mt-0.5 font-light leading-snug">
              {toast.message}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onDismiss(toast.id)}
            className="text-[#6E6A61] hover:text-[#24231F] p-0.5"
            aria-label="Dismiss toast"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};
