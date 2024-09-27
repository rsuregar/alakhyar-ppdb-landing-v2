"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { usePathname } from "next/navigation";

export default function NotFound() {
//   const pathname = usePathname();

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <h2 className="text-9xl tracking-widest mb-6 font-bold">404</h2>
      <h2 className="text-2xl font-semibold">
        Not Found
        {/* <code className="block p-2 text-xs font-mono font-light text-white bg-slate-700 rounded-lg">
          {pathname}
        </code> */}
      </h2>
      <p className="mt-0.5">Could not find requested resource</p>
      <Link href="/" className="mt-4 hover:underline">
        <Button variant={"ghost"} size={"sm"}>
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
