import {
  ArrowLeftFromLine,
  ArrowRightFromLine,
  AudioLines,
} from "lucide-react";
import Link from "next/link";

export function DashboardCoverPage() {
  return (
    <div className="min-h-[90vh] flex items-center gap-5">
      <div className="flex-1 text-left">
        <h1 className="text-4xl text-[#000] font-medium tracking-wide">
          Q-Max: Platform kripto eceran terbaik
        </h1>
        <h3 className="text-md text-[#333] my-4">
          Memberikan pengalaman yang mudah dan aman bagi pengguna yang ingin
          membeli koin kripto eceran langsung dengan rupiah. Menyederhanakan
          proses pembelian, menjadikan transaksi dari fiat money IDR ke koin
          kripto semudah mungkin.
        </h3>
        <div className="flex justify-between lg:gap-x-20 md:gap-x-10 min-h-[60px] gap-x-5 my-12">
          <Link
            href="/feature/buy"
            className="w-full flex bg-[#1094DD] text-[#fff] items-center justify-center gap-2 hover:bg-blue-400 hover:animate-pulse"
          >
            <ArrowLeftFromLine />
            <h3>Buy</h3>
          </Link>
          <Link
            href="/katalog"
            className="w-full flex items-center justify-center gap-2 hover:bg-[#1094DD] hover:text-[#fff] hover:animate-pulse"
          >
            <h3>Market</h3>
            <ArrowRightFromLine />
          </Link>
        </div>
      </div>
      <div className="flex-1 lg:flex lg:justify-center hidden lg:block">
        <AudioLines size={270} className="animate-slide" />
      </div>
    </div>
  );
}
