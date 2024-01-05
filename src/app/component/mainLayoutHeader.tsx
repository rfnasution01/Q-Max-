import { List, Webhook } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { MainLayoutHeaderNavigation, MainLayoutHeaderTitle } from "./fragments";

export function MainLayoutHeader({
  isShow,
  setIsShow,
}: {
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="h-screen flex flex-col p-4 justify-between">
      <div className="flex flex-col gap-8">
        <MainLayoutHeaderTitle isShow={isShow} setIsShow={setIsShow} />
        <MainLayoutHeaderNavigation isShow={isShow} />
      </div>
    </div>
  );
}
