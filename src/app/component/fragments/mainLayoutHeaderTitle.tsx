import { List, Webhook } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export function MainLayoutHeaderTitle({
  setIsShow,
}: {
  setIsShow: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="flex items-center justify-between w-full">
      <Link
        href=""
        className="flex gap-2 items-center hover:text-[#1094DD] hover:cursor-pointer"
      >
        <Webhook size={28} className="animate-spin duration-0" />
        <h5 className="text-[24px] font-medium leading-relaxed tracking-wide">
          Q-MAX
        </h5>
      </Link>
      <div
        className="hover:text-[#1094DD] hover:cursor-pointer"
        onClick={() => setIsShow(false)}
      >
        <List size={28} />
      </div>
    </div>
  );
}
