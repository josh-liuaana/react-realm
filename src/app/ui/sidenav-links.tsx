import {
  IoFilmOutline,
  IoHomeOutline,
  IoGameControllerOutline,
} from 'react-icons/io5'
import { CiBoxList } from 'react-icons/ci'
import { CiCalculator2 } from 'react-icons/ci'
import { FaReact } from 'react-icons/fa'

import '@/app/globals.css'

import Link from 'next/link'

const links = [
  { name: 'Home', href: '/', icon: IoHomeOutline },
  {
    name: 'Shopping List',
    href: '/shopping-list',
    icon: CiBoxList,
  },
  {
    name: 'Movies',
    href: '/movies',
    icon: IoFilmOutline,
  },
  {
    name: 'Games',
    href: '/games',
    icon: IoGameControllerOutline,
  },
  {
    name: 'Calculator',
    href: '/calculator',
    icon: CiCalculator2,
  },
  {
    name: 'React Examples',
    href: '/examples',
    icon: FaReact,
  },
]

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link
            href={link.href}
            key={link.name}
            className="nav-link flex h-12 items-center gap-2 rounded-md text-sm font-medium flex-none justify-start py-2 px-3"
          >
            <LinkIcon className="w-6 text-3xl" />
            <p className="block">{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}
