import { listPaymentMethod, listPaymentProcess } from "@/const";
import React, { useState } from "react";

export const DashboardPaymentStep = ({ title }: { title: string }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <div className="border shadow-md mb-5 lg:mb-0 md:mb-0">
      <h1 className="text-2xl mb-4">{title}</h1>
      <div className="flex">
        <div className="border-r-2 min-w-[40%] md:min-w-[40%] max-w-[40%]">
          {title === "Payment Process"
            ? [
                "Mengisi Form",
                "Metode Pembayaran",
                "Menunggu Pembayaran",
                "Proses Transfer",
              ].map((item, idx) => (
                <div
                  className={`text-start p-2 pr-4 border-r-2 mb-1 ${
                    selectedIdx === idx
                      ? "border-[#1094DD] text-[#1094DD]"
                      : "border-[transparent]"
                  } hover:border-r-2 hover:border-[#1094DD] hover:text-[#1094DD] hover:cursor-pointer`}
                  key={idx}
                  onClick={() => setSelectedIdx(idx)}
                >
                  <h4>{item}</h4>
                </div>
              ))
            : ["Gopay", "Dana", "OVO"].map((item, idx) => (
                <div
                  className={`text-start p-2 pr-4 border-r-2 mb-1 ${
                    selectedIdx === idx
                      ? "border-[#1094DD] text-[#1094DD]"
                      : "border-[transparent]"
                  } hover:border-r-2 hover:border-[#1094DD] hover:text-[#1094DD] hover:cursor-pointer`}
                  key={idx}
                  onClick={() => setSelectedIdx(idx)}
                >
                  <h4>{item}</h4>
                </div>
              ))}
        </div>
        <div className="flex-1 ml-4">
          {title === "Payment Process"
            ? listPaymentProcess.find((item) => item?.id === selectedIdx) && (
                <div className="text-left">
                  <p className="flex items-center justify-center my-4">
                    {
                      listPaymentProcess.find(
                        (item) => item?.id === selectedIdx
                      )?.icon
                    }
                  </p>
                  <p className="text-2xl font-medium">
                    {
                      listPaymentProcess.find(
                        (item) => item?.id === selectedIdx
                      )?.title
                    }
                  </p>
                  <p className="text-md font-light">
                    {
                      listPaymentProcess.find(
                        (item) => item?.id === selectedIdx
                      )?.desc
                    }
                  </p>
                </div>
              )
            : listPaymentMethod.find((item) => item?.id === selectedIdx) && (
                <div className="text-left">
                  <p className="text-2xl font-medium text-center mb-3">
                    {
                      listPaymentMethod.find((item) => item?.id === selectedIdx)
                        ?.title
                    }
                  </p>
                  <p className="text-md font-light">
                    {listPaymentMethod
                      .find((item) => item?.id === selectedIdx)
                      ?.desc?.map((step, index) => (
                        <span key={index}>
                          {index + 1}. {step}
                          <br />
                        </span>
                      ))}
                  </p>
                </div>
              )}
        </div>
      </div>
    </div>
  );
};
