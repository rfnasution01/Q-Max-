import { listConclusion } from "@/const";

export function DashboardIntro() {
  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "10px",
        padding: "20px",
        boxShadow:
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
      }}
      className="grid grid-cols-12 gap-4 mt-8 my-20"
    >
      {listConclusion.map((item, idx) => (
        <div className="col-span-3" key={idx}>
          <h5 className="lg:text-4xl text-lg font-semibold text-[#000] mb-1">
            {item?.title}
          </h5>
          <h5 className="lg:text-md text-sm text-[#333] font-light">
            {item?.desc}
          </h5>
        </div>
      ))}
    </div>
  );
}
