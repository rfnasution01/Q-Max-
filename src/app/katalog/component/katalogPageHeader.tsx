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
    <div className="flex items-center lg:justify-between w-full gap-10 mt-12 pt-4 lg:mt-0 lg:pt-0 md:mt-0 md:pt-0">
      <KatalogHeaderInfo stateCurrency={stateCurrency} />
      <div>
        <KatalogHeaderCurrency
          stateCurrency={stateCurrency}
          setStateCurrency={setStateCurrency}
        />
      </div>
    </div>
  );
}
