"use client";
import { ModalComponent } from "@/app/component";
import { X } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ListCurrency } from ".";
import { GetRates } from "../api";
import { capitalizeFirstLetterFromLowercase, convertSlugToText } from "@/utils";
import Loading from "@/app/loading";

export interface CurrencyProps {
  id: string;
  symbol: string;
  currencySymbol: string;
  rateUsd: string;
  type: string;
}

export function ModalCurrency({
  setIsOpen,
  setStateCurrency,
  stateCurrency,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  stateCurrency: Record<string, string | undefined>;
  setStateCurrency: Dispatch<
    SetStateAction<Record<string, string | undefined>>
  >;
}) {
  const [_currency, setCurrency] = useState<CurrencyProps[]>([]);
  const [fiatCurrency, setFiatCurrency] = useState<CurrencyProps[]>([]);
  const [cryptoCurrency, setCryptoCurrency] = useState<CurrencyProps[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getDataCurrency = async () => {
      const data = await GetRates({
        setLoading,
      });
      if (data) {
        const fiatCurrencies = data?.data.filter(
          (item: CurrencyProps) => item.type === "fiat"
        );
        const cryptoCurrencies = data?.data.filter(
          (item: CurrencyProps) => item.type === "crypto"
        );

        setCurrency(data?.data);
        setCryptoCurrency(cryptoCurrencies);
        setFiatCurrency(fiatCurrencies);
      }
    };
    getDataCurrency();
  }, []);

  const handleChooseCurrency = (
    id: string,
    rate: string,
    symbol: string,
    currencySymbol: string
  ) => {
    setStateCurrency((prev) => ({
      ...prev,
      symbol: symbol,
      currencySymbol: currencySymbol,
      price: rate,
      id: id,
    }));
    setIsOpen(false);
  };

  const filteredFiatCurrency = fiatCurrency.filter(
    (item) =>
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const filteredCryptoCurrency = cryptoCurrency.filter(
    (item) =>
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ModalComponent>
      <div className="relative">
        {/* Header */}
        <div className="sticky w-full top-0 bg-white z-10">
          <div className="flex justify-between items-center p-4">
            <h4 className="text-2xl font-medium">
              Pilih Mata Uang {search ?? "-"}
            </h4>
            <span
              className="hover:text-red-300 hover:cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <X />
            </span>
          </div>
          <hr />
          <div className="flex flex-col gap-8 p-4">
            <ListCurrency
              loading={loading}
              cryptoCurrency={filteredCryptoCurrency.map((item) => ({
                value: item.id.toLowerCase(),
                label: item?.symbol,
                type: item?.type,
                currencySymbol: item?.currencySymbol,
                price: item?.rateUsd,
                symbol: item?.symbol,
                id: item?.id,
              }))}
              fiatCurrency={filteredFiatCurrency.map((item) => ({
                value: item.id.toLowerCase(),
                label: item.symbol,
                type: item?.type,
                currencySymbol: item?.currencySymbol,
                price: item?.rateUsd,
                symbol: item?.symbol,
                id: item?.id,
              }))}
              setStateCurrency={setStateCurrency}
              setIsOpen={setIsOpen}
              setSearch={setSearch}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8 p-4">
          {loading ? (
            <Loading />
          ) : (
            <div className="flex flex-col gap-2">
              <h4 className="text-md font-light">Mata Uang FIAT</h4>
              <div className="grid grid-cols-12 gap-4">
                {filteredFiatCurrency?.map((item, idx) => (
                  <div
                    className={`lg:col-span-3 md:col-span-4 col-span-6 p-4 flex items-center gap-3 rounded-lg border ${
                      item?.id === stateCurrency?.id
                        ? "border-[transparent] bg-slate-100"
                        : item?.type === "fiat"
                        ? "border-amber-600"
                        : "border-emerald-600"
                    } hover:border-[transparent] hover:cursor-pointer hover:bg-slate-100`}
                    key={idx}
                    onClick={() =>
                      handleChooseCurrency(
                        item?.id,
                        item?.rateUsd,
                        item?.symbol,
                        item?.currencySymbol
                      )
                    }
                  >
                    <div
                      className={`min-w-[45px] min-h-[45px] flex items-center justify-center rounded-full text-white ${
                        item?.type === "fiat"
                          ? "bg-amber-600"
                          : "bg-emerald-600"
                      }`}
                    >
                      <h5 className="text-md font-medium">
                        {item?.currencySymbol ?? "-"}
                      </h5>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <h5 className="text-lg font-semibold">
                        {convertSlugToText(item?.id) ?? "-"}
                      </h5>
                      <h5 className="text-sm font-light">
                        {item?.symbol ?? "-"}
                      </h5>
                      <h5
                        className={`text-sm font-light p-1 text-white rounded-md ${
                          item?.type === "fiat"
                            ? "bg-amber-600"
                            : "bg-emerald-600"
                        }`}
                      >
                        {capitalizeFirstLetterFromLowercase(item?.type) ?? "-"}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <h4 className="text-md font-light">Mata Uang Kripto</h4>
            <div className="grid grid-cols-12 gap-4">
              {filteredCryptoCurrency?.map((item, idx) => (
                <div
                  className={`lg:col-span-3 md:col-span-4 col-span-6 p-4 flex items-center gap-3 rounded-lg border hover:border-[transparent] hover:cursor-pointer hover:bg-slate-100 ${
                    item?.id === stateCurrency?.id
                      ? "border-[transparent] bg-slate-100"
                      : item?.type === "fiat"
                      ? "border-amber-600"
                      : "border-emerald-600"
                  }`}
                  key={idx}
                  onClick={() =>
                    handleChooseCurrency(
                      item?.id,
                      item?.rateUsd,
                      item?.symbol,
                      item?.currencySymbol
                    )
                  }
                >
                  <div
                    className={`min-w-[45px] min-h-[45px] flex items-center justify-center rounded-full text-white ${
                      item?.type === "fiat" ? "bg-amber-600" : "bg-emerald-600"
                    }`}
                  >
                    <h5 className="text-md font-medium">
                      {item?.currencySymbol ?? "-"}
                    </h5>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h5 className="text-lg font-semibold">
                      {convertSlugToText(item?.id) ?? "-"}
                    </h5>
                    <h5 className="text-sm font-light">
                      {item?.symbol ?? "-"}
                    </h5>
                    <h5
                      className={`text-sm font-light p-1 text-white rounded-md ${
                        item?.type === "fiat"
                          ? "bg-amber-600"
                          : "bg-emerald-600"
                      }`}
                    >
                      {capitalizeFirstLetterFromLowercase(item?.type) ?? "-"}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ModalComponent>
  );
}
