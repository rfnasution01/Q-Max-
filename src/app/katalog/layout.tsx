"use client";
import React, { useState } from "react";
import { KatalogPageHeader } from "./component";

interface LayoutProps {
  children: React.ReactNode;
}

export default function KatalogLayout({ children }: LayoutProps) {
  const [stateCurrency, setStateCurrency] = useState<
    Record<string, string | undefined>
  >({
    symbol: "USD",
    currencySymbol: "$",
    price: "1",
    id: "united-states-dollar",
  });

  return (
    <div className="p-8">
      <KatalogPageHeader
        stateCurrency={stateCurrency}
        setStateCurrency={setStateCurrency}
      />

      {children}
    </div>
  );
}
