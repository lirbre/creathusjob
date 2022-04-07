import { useTheme } from 'next-themes'
import Link from 'next/link'
import { memo, useMemo, useState } from 'react'
import MobileNav from './MobileNav'
import { navItems } from './navItem'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsBookFill, BsLightbulbFill, BsLightbulbOff } from 'react-icons/bs'

export interface Item {
  name: string
  href: string
}

const Nav = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const renderItems = useMemo(() => {
    return navItems.map(item => (
      <Link href={item.href} key={item.href}>
        <a>
          <p className='dark:hover:text-gray-300 hover:text-black hover:opacity-90'>{item.name}</p>
        </a>
      </Link>
    ))
  }, [])

  return (
    <nav className="bg-[#f2f2f2] dark:bg-secondary w-full py-2.5 px-10 shadow-md z-[6] mb-5 fixed top-0">
      <div className='w-full max-w-7xl mx-auto flex items-center justify-center gap-4'>
        <div className="w-min cursor-pointer hover:opacity-70">
          <Link href="/">
            <h2><BsBookFill/></h2>
          </Link>
        </div>

        <div className="w-full hidden md:flex lg:w-10/12 justify-center gap-x-10 font-black">
          {renderItems}
        </div>

        <div className="flex w-full lg:w-2/12 items-center justify-end">
          <button
            className="small"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          >
            <h4 className='hover:opacity-80'>{resolvedTheme === 'dark' ? <BsLightbulbOff/> : <BsLightbulbFill/>}</h4>
          </button>
          <h3 className="cursor-pointer ml-4 hover:opacity-80" onClick={() => setIsMobileMenuOpen(true)}><AiOutlineMenu/></h3>
        </div>

        <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      </div>
    </nav>
  )
}

export default memo(Nav)
