import { CSSProperties } from "react";
import "./dashboardPaymentGrafic.css";
import { listPaymentProcess } from "@/const";

export function DashboardPaymentGrafic() {
  return (
    <div className="void" id="void">
      <div className="crop">
        <ul id="card-list" style={{ "--count": 4 } as CSSProperties}>
          {listPaymentProcess.map((item, idx) => (
            <li key={idx}>
              <div className="card">
                <a href="#" className="flex flex-col items-center">
                  <span className="hidden lg:block md:block">{item?.icon}</span>
                  <span className="text-md">
                    {idx + 1}. {item?.title}
                  </span>
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div className="last-circle"></div>
        <div className="second-circle"></div>
      </div>
      <div className="mask"></div>
      <div className="center-circle"></div>
    </div>
  );
}
