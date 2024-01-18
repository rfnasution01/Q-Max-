"use client";
import { ChevronDown } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { ModalCurrency } from "../../ui";

export function KatalogHeaderCurrency({
  stateCurrency,
  setStateCurrency,
}: {
  stateCurrency: Record<string, string | undefined>;
  setStateCurrency: Dispatch<
    SetStateAction<Record<string, string | undefined>>
  >;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="flex gap-2 items-center lg:p-3 md:p-3 p-0 text-sm lg:text-xl md:text-lg hover:shadow-md hover:rounded-full hover:cursor-pointer"
      >
        <h5>{stateCurrency.symbol ?? "-"}</h5>
        <ChevronDown />
      </div>
      {isOpen && (
        <ModalCurrency
          setIsOpen={setIsOpen}
          setStateCurrency={setStateCurrency}
          stateCurrency={stateCurrency}
        />
      )}
    </>
  );
}
