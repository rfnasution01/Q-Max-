import { listComparison } from "@/const";
import {
  Banknote,
  Bitcoin,
  CalendarCheck,
  CalendarX,
  RefreshCw,
  Rotate3D,
  ShieldCheck,
  ShieldX,
} from "lucide-react";

export function DashboardComparison() {
  return (
    <div className="my-20 flex flex-col gap-20">
      <h1 className="text-5xl">Comparison to Other Platform</h1>
      <div className="flex lg:flex-row md:flex-row flex-col lg:gap-10 md:gap-10 gap-5">
        {listComparison.map((item, idx) => (
          <div
            key={idx}
            className="lg:flex-1 md:flex-1 shadow hover:cursor-pointer hover:animate-pulse text-left"
          >
            <h5 className="text-2xl font-medium lg:p-8 md:p-4 p-3">
              {item?.title}
            </h5>
            <hr />
            <div className="lg:p-8 md:p-4 p-3">
              <div className="flex flex-col gap-1 mb-1 mb-6">
                <h5 className="text-lg">Waktu prosessing</h5>
                <div className="flex gap-2 items-center">
                  {idx > 0 ? (
                    <span className="text-[#1094DD]">
                      <CalendarCheck />
                    </span>
                  ) : (
                    <span className="text-red-600">
                      <CalendarX />
                    </span>
                  )}
                  <h6 className="text-sm font-light">{item?.transaksi}</h6>
                </div>
              </div>
              <div className="flex flex-col gap-1 mb-1 mb-6">
                <h5 className="text-lg">Biaya Transaksi</h5>
                <div className="flex gap-2 items-center">
                  {idx > 0 ? (
                    <span className="text-[#1094DD]">
                      <Banknote />
                    </span>
                  ) : (
                    <span className="text-red-600">
                      <Banknote />
                    </span>
                  )}
                  <h6 className="text-sm font-light">{item?.biaya}</h6>
                </div>
              </div>
              <div className="flex flex-col gap-1 mb-1 mb-6">
                <h5 className="text-lg">Keamanan Transaksi</h5>
                <div className="flex gap-2 items-center">
                  {idx > 0 ? (
                    <span className="text-[#1094DD]">
                      <ShieldCheck />
                    </span>
                  ) : (
                    <span className="text-red-600">
                      <ShieldX />
                    </span>
                  )}
                  <h6 className="text-sm font-light">{item?.kepercayaan}</h6>
                </div>
              </div>
              <div className="flex flex-col gap-1 mb-1 mb-6">
                <h5 className="text-lg">Koin yang Ditawarkan</h5>
                <div className="flex gap-2 items-center">
                  {idx > 0 ? (
                    <span className="text-[#1094DD]">
                      <Bitcoin />
                    </span>
                  ) : (
                    <span className="text-red-600">
                      <Bitcoin />
                    </span>
                  )}
                  <h6 className="text-sm font-light">{item?.scability}</h6>
                </div>
              </div>
              <div className="flex flex-col gap-1 mb-1 mb-6">
                <h5 className="text-lg">Experience</h5>
                <div className="flex gap-2 items-center">
                  {idx > 0 ? (
                    <span className="text-[#1094DD]">
                      <Rotate3D />
                    </span>
                  ) : (
                    <span className="text-red-600">
                      <RefreshCw />
                    </span>
                  )}
                  <h6 className="text-sm font-light">{item?.experience}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
