'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export function NavBarLink({link, name}: {link: string, name: string}) {
    const pathname = usePathname()
    const isActive = (href:string) => pathname === href
  
    if (isActive(link)) {
      return (
        <Link key={link} href={link}
          className="transition-all hover:text-neutral-200 dark:hover:text-nordblue text-nordblue flex align-middle relative py-1 px-2 m-1"
          >
          {name}
        </Link>
      )
    } else {
      return (
        <Link href={link}
          className="transition-all hover:text-neutral-200 dark:hover:text-nordblue flex align-middle relative py-1 px-2 m-1"
          >
          {name}
        </Link>
      )
    }
  }

const navDirectionLeft = 'pl-3'
const navDirectionRight = 'justify-end'
let isDarkMode = true

  const navDirection = navDirectionRight

export function Navbar({title, navItems}: {title: string, navItems: {[key:string]: {[key:string]: string}}}) {    
    return (
      <aside className="mb-16 tracking-tight">
        <div className="lg:sticky lg:top-20 bg-nordzero pb-4">
          <nav
            className={`flex flex-col md:flex-row items-center md:items-end relative ${navDirection} px-0 pb-0 pt-3 fade md:overflow-auto scroll-pr-6 md:relative`}
            id="nav"
          >
            <Link href="/" className='flex-grow text-2xl py-1 text-center ps-16'>{title}</Link>
            { /*<Image src="/moon_stars.svg" alt="Dark mode icon" className="dark:invert" width={25} height={12} /> */ }
            
            <div className="flex flex-row space-x-0 md:pr-10">
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <NavBarLink key={path} link={path} name={name} />
                )
              })}
            </div>
          </nav>
        </div>
      </aside>
    )
  }