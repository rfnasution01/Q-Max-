import { ReactNode } from "react";

export function ModalComponent({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative z-10"
      aria-labelledby="currency"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative max-h-[60vh] lg:max-h-[80vh] min-w-[60%] overflow-y-auto transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
