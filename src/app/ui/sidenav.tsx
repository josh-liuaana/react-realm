import logo from '../../../public/logo.png'
import '@/app/globals.css'
import SideNavLinks from './sidenav-links'
import { IoIosPower } from 'react-icons/io'
import Image from 'next/image'

function SideNav() {
  return (
    <nav className="flex h-full flex-col p-2 py-4">
      <div className="nav-logo-background mb-2 flex h-40 items-center justify-center rounded-md overflow-hidden">
        <Image src={logo} alt="Picture of the author" />
      </div>

      <div className="flex grow flex-col justify-between gap-2">
        <SideNavLinks />
        <div className="blank-div block h-auto w-full grow rounded-md"></div>
        <button className="nav-link flex h-12 items-center gap-2 rounded-md text-sm font-medium flex-none justify-start py-2 px-3">
          <IoIosPower className="c w-6 text-3xl" />
          <div className="block">Sign Out</div>
        </button>
      </div>
    </nav>
  )
}

export default SideNav
