import { Card } from '@/components'
import Link from 'next/link'
import { memo, ReactNode, useEffect, useMemo, useState } from 'react'
import { navItems } from './navItem'

interface Props {
  children?: ReactNode
  isOpen: boolean
  setIsOpen: any
}

const MobileNav = ({ isOpen, setIsOpen }: Props) => {
  const [shouldRender, setRender] = useState(isOpen)

  useEffect(() => {
    if (isOpen) setRender(true)
  }, [isOpen])

  const onAnimationEnd = () => {
    if (!isOpen) setRender(false)
  }

  const renderItems = useMemo(() => {
    return navItems?.map(({ name, href }) => (
      <Link href={href} key={href}>
        <a
          onClick={() => setIsOpen(false)}
          className="hover:text-brand-green transition duration-500 w-full text-center"
        >
          <small>{name}</small>
        </a>
      </Link>
    ))
  }, [])

  return (
    <>
      {shouldRender && (
        <div
          onAnimationEnd={onAnimationEnd}
          style={{
            animation: `${isOpen ? 'fadeIn' : 'fadeOut'} .5s`
          }}
          className="fixed z-[4] inset-0 glass"
        >
          <div className="overlay" onClick={() => setIsOpen(false)} />
          <div
            style={{
              width: 'clamp(300px, 30vw, 600px)',
              animation: `${isOpen ? 'fromLeft' : 'toRight'} .5s`
            }}
            className="absolute max-w-full h-full right-0 z-[5]"
          >
            <Card className="h-full w-full flex flex-col justify-center items-center gap-y-8">
              <p onClick={() => setIsOpen(false)} className="absolute top-10 left-10 font-black cursor-pointer">X</p>
              {renderItems}
            </Card>
          </div>
        </div>
      )}
    </>
  )
}

export default memo(MobileNav)
