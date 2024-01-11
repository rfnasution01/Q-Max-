import { Dispatch, SetStateAction } from "react";
import { KatalogHeaderCurrency, KatalogHeaderInfo } from "./fragments";

export function KatalogPageHeader({
  stateCurrency,
  setStateCurrency,
}: {
  stateCurrency: Record<string, string | undefined>;
  setStateCurrency: Dispatch<
    SetStateAction<Record<string, string | undefined>>
  >;
}) {
  return (
    <div className="flex items-center lg:justify-between w-full gap-10">
      <KatalogHeaderInfo stateCurrency={stateCurrency} />
      <div className="hidden lg:block md:block">
        <KatalogHeaderCurrency
          stateCurrency={stateCurrency}
          setStateCurrency={setStateCurrency}
        />
      </div>
    </div>
  );
}
