import { HelpCircle, Wallet, Webhook } from "lucide-react";
import Link from "next/link";
import { ButtonComponent } from ".";

export function MobileMainLayoutHeader() {
  return (
    <nav className="flex w-full justify-between items-center fixed top-0 left-0 w-full bg-white text-black p-4 border-t border-gray-300 z-50 block md:hidden">
      <Link
        href="/"
        className="flex gap-2 items-center hover:text-[#1094DD] hover:cursor-pointer"
      >
        <Webhook size={20} className="animate-spin duration-0" />
        <h5 className="text-lg font-medium leading-relaxed tracking-wide">
          Q-MAX
        </h5>
      </Link>
      <div className="flex items-center gap-3">
        <ButtonComponent
          disabled
          className="flex gap-2 items-center justify-center disabled:cursor-not-allowed text-xs bg-white text-black hover:text-white"
        >
          <Wallet size={16} />
          <h5 className="text-sm">Connect</h5>
        </ButtonComponent>
        <Link
          href="/bantuan"
          className="flex gap-2 items-center hover:text-[#1094DD] hover:cursor-pointer pointer-events-none"
        >
          <HelpCircle size={20} />
          <h5 className="text-sm">Help</h5>
        </Link>
      </div>
    </nav>
  );
}
