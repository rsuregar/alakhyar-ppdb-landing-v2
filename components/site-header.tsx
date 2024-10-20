'use client'

import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'
import { MainNav } from '@/components/main-nav'
import { ThemeToggle } from '@/components/theme-toggle'
import { Icons } from '@/components/icons'
import Banner from '@/app/components/Banner'
import { useFirebase } from '@/hooks/useFirebase'
import { remoteConfigs } from '@/types/firebase'

export function SiteHeader() {
  const { value } = useFirebase(remoteConfigs?.PPDB_TOGGLE_BANNER) as any
  return (
    <>
      {value && <Banner />}
      <header className="hidden sm:block sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 py-2 max-w-screen-2xl items-center">
          <MainNav items={siteConfig.mainNav} />
          <div className="sm:flex flex-1 items-center justify-end space-x-4 hidden">
            <nav className="flex items-center space-x-1">
              <Link
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: 'icon',
                    variant: 'ghost',
                  })}
                >
                  <Icons.instagram className="h-5 w-5 fill-current" />
                  <span className="sr-only">Instagram</span>
                </div>
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
