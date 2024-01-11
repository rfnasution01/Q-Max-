import { AssetsProps } from "@/app/component";

export const filterAssets = (
  data: AssetsProps[],
  stateFilter: Record<string, boolean | undefined>
) => {
  return data.slice().sort((a, b) => {
    if (stateFilter.no === true) {
      return Number(a.rank) - Number(b.rank);
    } else if (stateFilter.no === false) {
      return Number(b.rank) - Number(a.rank);
    } else if (stateFilter.nama === true) {
      return b.name.localeCompare(a.name);
    } else if (stateFilter.nama === false) {
      return a.name.localeCompare(b.name);
    } else if (stateFilter.simbol === true) {
      return b.symbol.localeCompare(a.symbol);
    } else if (stateFilter.simbol === false) {
      return a.symbol.localeCompare(b.symbol);
    } else if (stateFilter.harga === true) {
      return Number(b.priceUsd) - Number(a.priceUsd);
    } else if (stateFilter.harga === false) {
      return Number(a.priceUsd) - Number(b.priceUsd);
    } else if (stateFilter.kenaikan === true) {
      return Number(b.changePercent24Hr) - Number(a.changePercent24Hr);
    } else if (stateFilter.kenaikan === false) {
      return Number(a.changePercent24Hr) - Number(b.changePercent24Hr);
    } else if (stateFilter.marketCap === true) {
      return Number(b.marketCapUsd) - Number(a.marketCapUsd);
    } else if (stateFilter.marketCap === false) {
      return Number(a.marketCapUsd) - Number(b.marketCapUsd);
    } else if (stateFilter.volume === true) {
      return Number(b.volumeUsd24Hr) - Number(a.volumeUsd24Hr);
    } else if (stateFilter.volume === false) {
      return Number(a.volumeUsd24Hr) - Number(b.volumeUsd24Hr);
    } else {
      return Number(a.rank) - Number(b.rank);
    }
  });
};
