"use client";
import { listNavigationMenu } from "@/const";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function MainLayoutHeaderNavigation({ isShow }: { isShow: boolean }) {
  const pathName = usePathname();
  const pathSegements = pathName.split("/");
  const path = pathSegements[1];
  const subPath = pathSegements[2];
  const [isDropdown, setIsDropDown] = useState<boolean>(false);

  useEffect(() => {
    if (path === "feature") {
      setIsDropDown(true);
    } else {
      setIsDropDown(false);
    }
  }, [path]);

  return (
    <nav>
      <ul>
        {listNavigationMenu?.map((item, idx) => (
          <li key={idx}>
            <Link
              href={
                item?.name === "Dashboard"
                  ? "/"
                  : `/${item?.name.toLowerCase()}`
              }
              key={idx}
              className={`flex items-center ${
                isShow ? "justify-start" : "justify-center"
              } gap-3 my-2 p-2 border-l-2 ${
                (item?.name.toLowerCase() === "dashboard" && path === "") ||
                item?.name.toLowerCase() === path
                  ? "border-[#1094DD] bg-[#F2F8FF] text-[#1094DD]"
                  : "border-[transparent]"
              } hover:border-l-2 hover:border-[#1094DD] hover:bg-[#F2F8FF] hover:text-[#1094DD] ${
                item?.access
                  ? "hover:cursor-pointer"
                  : "pointer-events-none text-gray-500 no-underline cursor-not-allowed"
              } transition duration-300 ease-in-out`}
            >
              <span>{item?.icon}</span>
              {isShow && <h5 className="text-[14px]">{item?.name}</h5>}
            </Link>
            <ul>
              {item?.subMenu &&
                isDropdown &&
                item?.subMenu.map((data, idx) => (
                  <li key={idx}>
                    <Link
                      href={`/feature/${data?.name.toLowerCase()}`}
                      className={`${isShow && "ml-8"} flex items-center ${
                        isShow ? "justify-start" : "justify-center"
                      } gap-3 my-2 p-2 border-l-2 ${
                        data?.name.toLowerCase() === subPath
                          ? "border-[#1094DD] bg-[#F2F8FF] text-[#1094DD]"
                          : "border-[transparent]"
                      } hover:border-l-2 hover:border-[#1094DD] hover:bg-[#F2F8FF] hover:text-[#1094DD] ${
                        data?.access
                          ? "hover:cursor-pointer"
                          : "pointer-events-none text-gray-500 no-underline cursor-not-allowed"
                      } transition duration-300 ease-in-out`}
                    >
                      <span>{data?.icon}</span>
                      {isShow && <h5 className="text-[14px]">{data?.name}</h5>}
                    </Link>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
