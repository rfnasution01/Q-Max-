import { Dispatch, SetStateAction } from "react";
import {
  ButtonComponent,
  MainLayoutHeaderNavigation,
  MainLayoutHeaderTitle,
} from ".";
import { Wallet } from "lucide-react";

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
      <ButtonComponent
        disabled
        className="flex gap-2 text-[14px] items-center justify-center disabled:cursor-not-allowed"
      >
        <Wallet size={16} />
        {isShow && <h5>Connect Wallet</h5>}
      </ButtonComponent>
    </div>
  );
}
