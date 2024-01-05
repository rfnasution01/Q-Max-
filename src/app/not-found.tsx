import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex gap-2 flex-col items-center justify-center">
      <div className="flex items-center gap-2">
        <h1 className="text-[90px] font-bold">4</h1>
        <AlertCircle size={60} />
        <h1 className="text-[90px] font-bold">4</h1>
      </div>
      <h2 className="text-[24px] font-medium leading-4 tracking-wide text-stone-950">
        Page Not Found
      </h2>
      <h3 className="text-[12px] font-light text-stone-500">
        Could not find requested resource{" "}
        <Link href="/" className="text-indigo-400">
          Return Home
        </Link>
      </h3>
    </div>
  );
}
