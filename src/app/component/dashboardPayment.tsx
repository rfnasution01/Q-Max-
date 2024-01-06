"use client";
import { listPaymentProcess } from "@/const";
import {
  Banknote,
  BookText,
  Landmark,
  MoveDown,
  MoveLeft,
  MoveRight,
  Send,
} from "lucide-react";
import { useState } from "react";

export function DashboardPayment() {
  const [id, setId] = useState<number>(0);

  return (
    <div className="my-20 flex flex-col gap-20">
      <h1 className="text-5xl">Payment Proccess</h1>
      <div className="grid grid-cols-12 gap-10">
        <div className="lg:col-span-8 col-span-12 flex flex-col gap-4">
          <hr className="border-stone-300" />
          {listPaymentProcess.map((item, idx) => (
            <div key={idx}>
              <div
                className="flex gap-5 text-start mb-4 hover:cursor-pointer"
                onMouseEnter={() => setId(idx + 1)}
                onMouseLeave={() => setId(0)}
              >
                <h5 className="flex-1 text-lg font-medium">{item?.title}</h5>
                <h6 className="flex-1 text-md font-light">{item?.desc}</h6>
              </div>
              <hr className="border-stone-300" />
            </div>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-12 flex gap-5">
          <div className="flex flex-col justify-between items-center flex-1">
            <div
              className={`relative border ${
                id === 1 ? "border-[#1094DD]" : "border-black"
              } p-6 rounded-full`}
            >
              <span
                className={`absolute top-0 right-0 ${
                  id === 1 ? "bg-[#1094DD]" : "bg-black"
                } text-white w-6 h-6 flex items-center justify-center rounded-full`}
              >
                1
              </span>
              <BookText
                size={60}
                className={`${id === 1 && "text-[#1094DD]"}`}
              />
            </div>
            <div
              className={`relative border ${
                id === 4 ? "border-[#1094DD]" : "border-black"
              } p-6 rounded-full`}
            >
              <span
                className={`absolute top-0 right-0 ${
                  id === 4 ? "bg-[#1094DD]" : "bg-black"
                } text-white w-6 h-6 flex items-center justify-center rounded-full`}
              >
                4
              </span>
              <Send size={60} className={`${id === 4 && "text-[#1094DD]"}`} />
            </div>
          </div>
          <div className="flex flex-col justify-between items-center flex-1 my-8">
            <MoveRight size={40} />
            <MoveLeft size={40} />
          </div>
          <div className="flex flex-col justify-between items-center flex-1 gap-10">
            <div
              className={`relative border ${
                id === 2 ? "border-[#1094DD]" : "border-black"
              } p-6 rounded-full`}
            >
              <span
                className={`absolute top-0 right-0 ${
                  id === 2 ? "bg-[#1094DD]" : "bg-black"
                } text-white w-6 h-6 flex items-center justify-center rounded-full`}
              >
                2
              </span>
              <Banknote
                size={60}
                className={`${id === 2 && "text-[#1094DD]"}`}
              />
            </div>
            <MoveDown size={40} />
            <div
              className={`relative border ${
                id === 3 ? "border-[#1094DD]" : "border-black"
              } p-6 rounded-full`}
            >
              <span
                className={`absolute top-0 right-0 ${
                  id === 3 ? "bg-[#1094DD]" : "bg-black"
                } text-white w-6 h-6 flex items-center justify-center rounded-full`}
              >
                3
              </span>
              <Landmark
                size={60}
                className={`${id === 3 && "text-[#1094DD]"}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
