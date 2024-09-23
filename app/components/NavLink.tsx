"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavLink() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "hover:bg-sky-100 hover:text-sky-700 active:bg-sky-100 focus:bg-sky-100 focus:text-sky-700"
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
                "hover:bg-sky-100 hover:text-sky-700 active:bg-sky-100 focus:bg-sky-100 focus:text-sky-700"
              )}
            >
              Jadwal
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:bg-sky-100 rounded-lg">
          <NavigationMenuTrigger className="hover:text-sky-700 hover:bg-sky-100 active:bg-sky-100 focus:bg-sky-100 focus:text-sky-700">
            Jenjang Pendidikan
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col bg-sky-700 justify-end rounded-md bg-gradient-to-b from-sky-400 to-sky-200 p-6 no-underline outline-none focus:shadow-md dark:bg-gradient-to-b dark:from-sky-600 dark:to-sky-900"
                    href="/"
                  >
                    <Icons.logo className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/jenjang/tkit"
                title="RA Al Akhyar"
                className="hover:bg-sky-100"
              >
                anak usia 4-6 tahun.
              </ListItem>
              <ListItem
                href="/jenjang/sdit"
                title="SD Islam Al Akhyar"
                className="hover:bg-sky-100"
              >
                anak usia 7-12 tahun.
              </ListItem>
              <ListItem
                href="/jenjang/smpit"
                title="SMP Islam Al Akhyar"
                className="hover:bg-sky-100"
              >
                anak usia 13-15 tahun.
              </ListItem>
              <ListItem
                href="/jenjang/smait"
                title="SMA Islam Al Akhyar"
                className="hover:bg-sky-100"
              >
                anak usia 16-18 tahun.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "hover:bg-sky-100 hover:text-sky-700 active:bg-sky-100 focus:bg-sky-100 focus:text-sky-700"
              )}
            >
              Brosur PPDB
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <Link ref={ref} href={props?.href as string} legacyBehavior passHref>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground dark:text-sky-700",
              className
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
