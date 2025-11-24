"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Toast = { id: number; message: string; type?: "success" | "error" };

type ToastContextValue = {
  toasts: Toast[];
  showToast: (message: string, type?: "success" | "error") => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

let toastId = 0;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: "success" | "error" = "success") => {
    const id = ++toastId;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ toasts, showToast }}>
      {children}
      <div className="fixed right-4 top-4 z-[9999] space-y-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={
              "rounded-xl border px-4 py-2 text-xs shadow-lg backdrop-blur " +
              (t.type === "error"
                ? "border-red-500/70 bg-red-500/10 text-red-200"
                : "border-emerald-500/70 bg-emerald-500/10 text-emerald-200")
            }
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return ctx;
}


