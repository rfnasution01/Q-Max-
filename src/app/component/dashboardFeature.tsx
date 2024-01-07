"use client";
import React, { useState, CSSProperties } from "react";
import "./dashboardFeature.css";
import { listFeature } from "@/const";
import Image from "next/image";

export const DashboardFeature = () => {
  const [selectedIdx, setSelectedIdx] = useState(2);
  const [positionStyle, setPositionStyle] = useState<number>(selectedIdx + 1);

  const handleRadioChange = (index = 0) => {
    setSelectedIdx(index);
    setPositionStyle(index + 1);
  };

  const getCardStyles = (offset: number) => {
    return {
      "--offset": offset,
      backgroundColor: selectedIdx === offset - 1 ? "#fff" : "#f3f3f3",
      borderRadius: "8px",
      transition: "background-color 0.3s ease",
    } as CSSProperties;
  };

  return (
    <div className="my-20 flex flex-col">
      <h1 className="text-5xl mb-4">Feature</h1>

      <div
        id="carousel"
        style={{ "--position": positionStyle } as CSSProperties}
      >
        {listFeature.map((item, idx) => (
          <div
            key={idx}
            className={`item shadow-lg border p-8 flex flex-col`}
            style={getCardStyles(idx + 1)}
          >
            <div className="flex-1 gap-8 flex items-center justify-center">
              <Image
                src={item?.image}
                alt={item?.title}
                width={180}
                height={90}
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-2 justify-start items-start">
              <h5 className="text-lg text-[#000] font-semibold">
                {item?.title}
              </h5>
              <h6 className="text-sm text-[#333] font-light text-start">
                {item?.desc}
              </h6>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4">
        {listFeature.map((_item, idx) => (
          <input
            key={idx}
            type="radio"
            name="position"
            checked={selectedIdx === idx}
            onChange={() => handleRadioChange(idx)}
          />
        ))}
      </div>
    </div>
  );
};
