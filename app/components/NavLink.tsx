"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function NavLink() {
  const pathname = usePathname();
   // Split the pathname by "/" and get the last part
   const lastSegment = pathname?.split('/').filter(Boolean).pop();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "hover:bg-sky-100 hover:text-sky-700 active:bg-sky-100 focus:bg-sky-100 focus:text-sky-700 bg-transparent",
                lastSegment === undefined && "text-sky-700 bg-sky-100"
              )}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/jadwal" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "hover:bg-sky-100 hover:text-sky-700 active:bg-sky-100 focus:bg-sky-100 focus:text-sky-700 bg-transparent",
                lastSegment === "jadwal" && "text-sky-700 bg-sky-100"
              )}
            >
              Jadwal
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:bg-sky-100 rounded-lg">
          <NavigationMenuTrigger
            className={cn(
              navigationMenuTriggerStyle(),
              "hover:bg-sky-100 hover:text-sky-700 active:bg-sky-100 focus:bg-sky-100 focus:text-sky-700 bg-transparent",
              pathname.includes("jenjang") && "text-sky-700 bg-sky-100"
            )}
          >
            Jenjang Pendidikan
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col bg-sky-700 justify-end rounded-md bg-gradient-to-b from-sky-400 to-sky-200 no-underline outline-none focus:shadow-md dark:bg-gradient-to-b dark:from-sky-600 dark:to-sky-900"
                    href="/"
                  >
                    <div className="p-4 text-sm border-l-4 border-sky-500 text-stone-700 dark:text-stone-200">
                      <blockquote className="italic">
                      &quot;Education is the most powerful weapon which you can use
                        to change the world.&ldquo;
                      </blockquote>
                      <p className="mt-2 text-xs text-gray-600 dark:text-white">
                        - Nelson Mandela
                      </p>
                    </div>
                    <Image
                      src="/assets/ba-2.png"
                      alt="Logo"
                      width={600}
                      height={700}
                    />
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/jenjang/tkit"
                title="RA Al Akhyar"
                className="hover:bg-sky-100"
              >
                Informasi lengkap Pendaftaran calon peserta didik RA Al Akhyar
              </ListItem>
              <ListItem
                href="/jenjang/sdit"
                title="SD Islam Al Akhyar"
                className="hover:bg-sky-100"
              >
                Informasi lengkap Pendaftaran calon peserta didik SD Islam Al Akhyar
              </ListItem>
              <ListItem
                href="/jenjang/smpit"
                title="SMP Islam Al Akhyar"
                className="hover:bg-sky-100"
              >
                Informasi lengkap Pendaftaran calon peserta didik SMP Islam Al
                Akhyar
              </ListItem>
              <ListItem
                href="/jenjang/smait"
                title="SMA Islam Al Akhyar"
                className="hover:bg-sky-100"
              >
                Informasi lengkap Pendaftaran calon peserta didik SMA Islam Al
                Akhyar
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  const param = usePathname();
  const lastSegment = param?.split("/").filter(Boolean).pop();
  return (
    <li>
      <Link ref={ref} href={props?.href as string} legacyBehavior passHref>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground dark:text-sky-300 dark:hover:text-sky-700",
              className,
              props?.href?.includes(lastSegment as string) && "bg-sky-50 dark:text-sky-700"
            )}
            {...props}
          >
            <div className="text-sm font-bold leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";
