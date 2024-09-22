'use client';

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname for checking active route

import { NavItem } from "@/types/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { useFirebase } from "@/hooks/useFirebase";
import { NavLink } from "@/app/components/NavLink";

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname(); // Get current path
  const { value: tahunAjaran } = useFirebase("PPDB_TAHUN_AJARAN") as any;

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);
  return (
    <div className="flex gap-6 md:gap-10 justify-evenly items-center">
      <Link href="/" className={cn("flex items-center space-x-2")}>
        <Icons.logoV2 width="48" height="48" />
        <span className="inline-block">{siteConfig.title} <br/><div className="text-xs -mt-1">Penerimaan Peserta Didik Baru {tahunAjaran}</div></span>
      </Link>
      {items?.length && !isMobile ? (
        <nav className="sm:flex gap-6 hidden">
          {items?.map((item, index) =>
            item.href ? (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center font-medium text-muted-foreground",
                  item.disabled && "cursor-not-allowed opacity-80",
                  (pathname.includes(item?.key as string) || item.key === 'home') && "text-sky-700 font-bold" // Use includes() for partial match
                )}
              >
                {item.title}
              </Link>
            ) : (
              <NavLink/> // Added a key to this fallback
            )
          )}
        </nav>
      ) : null}
    </div>
  );
}
