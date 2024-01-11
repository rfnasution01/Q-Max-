import { capitalizeFirstLetterFromLowercase, convertSlugToText } from "@/utils";
import React, {
  CSSProperties,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import Select, { components } from "react-select";
import { debounce } from "lodash";

interface OptionProps {
  value: string;
  label: string;
  type: string;
  currencySymbol: string;
  price: string;
  symbol: string;
  id: string;
}

interface GroupedOption {
  label: string;
  options: OptionProps[];
}

export function ListCurrency({
  fiatCurrency,
  cryptoCurrency,
  setStateCurrency,
  setIsOpen,
  loading,
  setSearch,
}: {
  loading: boolean;
  fiatCurrency: OptionProps[];
  cryptoCurrency: OptionProps[];
  setStateCurrency: Dispatch<
    SetStateAction<Record<string, string | undefined>>
  >;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setSearch: Dispatch<SetStateAction<string>>;
}) {
  const groupedOptions: GroupedOption[] = [
    {
      label: "FIAT",
      options: fiatCurrency,
    },
    {
      label: "Crypto",
      options: cryptoCurrency,
    },
  ];

  const groupStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const groupBadgeStyles: CSSProperties = {
    backgroundColor: "#EBECF0",
    borderRadius: "2em",
    color: "#172B4D",
    display: "inline-block",
    fontSize: 12,
    fontWeight: "normal",
    lineHeight: "1",
    minWidth: 1,
    padding: "0.16666666666667em 0.5em",
    textAlign: "center",
  };

  const formatGroupLabel = (data: GroupedOption) => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );

  const Option = (props: any) => {
    return (
      <components.Option {...props}>
        <div ref={props.innerRef} className="flex items-center gap-2">
          <div
            className={`font-bold p-2 min-w-[36px] min-h-[36px] text-white max-h-[36px] flex justify-center items-center rounded-full ${
              props?.data?.type === "fiat" ? "bg-amber-500" : "bg-emerald-500"
            }`}
          >
            {props.data?.currencySymbol ?? "-"}
          </div>
          <div className="text-xs">
            <h5>{convertSlugToText(props.value)}</h5>
            <h5>{capitalizeFirstLetterFromLowercase(props?.data?.type)}</h5>
          </div>
        </div>
      </components.Option>
    );
  };

  const debouncedSetSearch = debounce((value: string) => {
    setSearch(value);
  }, 300);

  useEffect(() => {
    return () => {
      debouncedSetSearch.cancel();
    };
  }, []);

  return (
    <Select
      isClearable
      isLoading={loading}
      defaultValue={groupedOptions[0].options[0]}
      options={groupedOptions}
      formatGroupLabel={formatGroupLabel}
      components={{ Option }}
      onChange={(optionSelected, e) => {
        console.log(e);

        setStateCurrency((prev) => ({
          ...prev,
          symbol: optionSelected?.symbol,
          currencySymbol: optionSelected?.currencySymbol,
          price: optionSelected?.price,
          id: optionSelected?.id,
        }));
        setIsOpen(false);
      }}
      onInputChange={(inputValue) => debouncedSetSearch(inputValue)}
    />
  );
}
