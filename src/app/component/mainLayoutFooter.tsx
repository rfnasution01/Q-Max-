import { mobileListNavigationMenu } from "@/const";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainLayoutFooter() {
  const pathName = usePathname();
  const pathSegements = pathName.split("/");
  const path = pathSegements[1];
  const subPath = pathSegements[2];

  return (
    <div className="px-12 flex gap-4 w-full justify-between fixed bottom-0 left-0 w-full bg-white p-4 border-t border-gray-300 z-50">
      {mobileListNavigationMenu?.map((item, idx) => (
        <Link
          href={item?.url}
          key={idx}
          className={`flex flex-col justify-center items-center gap-2 ${
            (item?.name.toLowerCase() === subPath ||
              (item?.name.toLocaleLowerCase() === path &&
                item?.name.toLowerCase() === "katalog")) &&
            "text-[#1094DD] "
          } hover:text-[#1094DD] hover:cursor-pointer ${
            !item?.access &&
            "pointer-events-none text-gray-500 no-underline cursor-not-allowed"
          }`}
        >
          <span>{item?.icon}</span>
          <h5 className="text-sm">{item?.name}</h5>
        </Link>
      ))}
    </div>
  );
}
