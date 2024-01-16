"use client";
import { useEffect, useState } from "react";
import { KatalogPageInfo } from ".";
import { AssetsProps } from "../component";
import { GetAsset } from "./api";
import { filterAssets } from "@/utils";
import { debounce } from "lodash";

export default function KatalogPage() {
  const [_dataAssets, setDataAssets] = useState<AssetsProps[]>([]);
  const [_loading, setLoading] = useState<boolean>(false);

  const [stateFilter, setStateFilter] = useState<
    Record<string, boolean | undefined>
  >({
    no: undefined,
    nama: undefined,
    simbol: undefined,
    harga: undefined,
    kenaikan: undefined,
    marketCap: undefined,
    volume: undefined,
  });

  const [search, setSearch] = useState<string | undefined>("");
  const [page, setPage] = useState<number>(1);
  const [offset, setOffset] = useState<number>(0);
  const [limit, _setLimit] = useState<number>(100);

  useEffect(() => {
    const getData = async () => {
      const data = await GetAsset({
        stateReq: {
          search: search,
          limit: limit,
          offset: offset,
        },
        setLoading,
      });

      if (data) {
        const filteredData = filterAssets(
          data?.data as AssetsProps[],
          stateFilter
        );
        setDataAssets(filteredData);
      }
    };

    const debouncedGetData = debounce(getData, 900);
    debouncedGetData();

    return () => {
      debouncedGetData.cancel();
    };
  }, [limit, offset, search, stateFilter]);

  return (
    <div className="">
      <KatalogPageInfo />
    </div>
  );
}
