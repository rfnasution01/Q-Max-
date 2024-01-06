import { listAdvantage } from "@/const";

export function DashboardAdvantage() {
  return (
    <div className="flex flex-col lg:gap-20 md:gap-10 gap-8">
      <h1 className="text-5xl">Competitive Advantage</h1>
      <div className="grid grid-cols-12 gap-10">
        {listAdvantage.map((item, idx) => (
          <div
            className="shadow-lg hover:shadow-2xl p-8 hover:cursor-pointer hover:transform hover:translate-y-[-20px] flex flex-col items-center justify-start lg:col-span-3 md:col-span-6 col-span-6"
            key={idx}
          >
            <span className="mb-2">{item?.icon}</span>
            <h5 className="text-2xl text-[#000] font-semibold mb-2">
              {item?.title}
            </h5>
            <h5 className="text-sm text-[#333] font-light">{item?.desc}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
