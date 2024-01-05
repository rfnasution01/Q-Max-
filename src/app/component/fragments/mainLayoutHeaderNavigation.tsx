import { listNavigationMenu } from "@/const";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainLayoutHeaderNavigation({ isShow }: { isShow: boolean }) {
  const pathName = usePathname();
  const pathSegements = pathName.split("/");
  const path = pathSegements[1];

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
              className={`flex ${
                isShow ? "justify-start" : "justify-center"
              } gap-3 my-4 p-2 border-l-2 ${
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
              {isShow && <h5>{item?.name}</h5>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
