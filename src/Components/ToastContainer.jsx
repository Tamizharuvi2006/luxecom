import React from 'react';
import { useToast } from '../Context/ToastContext';
import { X, CheckCircle, Info, AlertCircle } from 'lucide-react';

const ToastContainer = () => {
    const { toasts, removeToast } = useToast();

    if (toasts.length === 0) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-3 w-full max-w-sm px-4 pointer-events-none">
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    className="pointer-events-auto bg-[#2C2C2C] text-[#F5F0E6] p-4 rounded-xl shadow-2xl border border-[#C5A059] flex items-center justify-between gap-4 animate-in slide-in-from-bottom-5 fade-in duration-300"
                >
                    <div className="flex items-center gap-3">
                        <div className="text-[#C5A059]">
                            {toast.type === 'success' && <CheckCircle size={20} />}
                            {toast.type === 'info' && <Info size={20} />}
                            {toast.type === 'error' && <AlertCircle size={20} />}
                        </div>
                        <p className="text-sm font-medium tracking-wide">{toast.message}</p>
                    </div>
                    <button
                        onClick={() => removeToast(toast.id)}
                        className="text-[#8C7B5A] hover:text-[#C5A059] transition-colors"
                    >
                        <X size={16} />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ToastContainer;
