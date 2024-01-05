import { List, Webhook } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { MainLayoutHeaderTitle } from "./fragments";

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
        <MainLayoutHeaderTitle setIsShow={setIsShow} />
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
