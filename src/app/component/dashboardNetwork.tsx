import { listNetwork } from "@/const";
import Image from "next/image";

export function DashboardNetwork() {
  return (
    <div className="my-20 flex flex-col gap-20">
      <h1 className="text-5xl">Available Network</h1>
      <div className="flex flex-wrap items-center justify-center lg:gap-20 md:gap-10 gap-7">
        {listNetwork.map((item, idx) => (
          <div
            className="flex items-center gap-x-4 hover:cursor-pointer"
            key={idx}
          >
            <Image src={item?.logo} width={40} height={40} alt={item?.desc} />
            <h5 className="text-lg text-[#333] tracking-wide font-light">
              {item?.title}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}
