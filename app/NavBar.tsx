'use client'

import Link from 'next/link'
import React from 'react'
import classnames from 'classnames'
import { usePathname } from 'next/navigation'
import { IoBugSharp } from "react-icons/io5"

const NavBar = () => {
    const currentPath = usePathname()
    const links = [
        { label: 'Dashboard', href: '/'},
        { label: 'Issues', href: '/issues'}
    ]
  return (
    <nav className='flex items-center space-x-6 h-14 border-b px-5 mb-5'>
        <Link href="/"><IoBugSharp className='text-lg'/></Link>
        <ul className='flex space-x-6'>
            {links?.map(link => 
                <li key={link.label}>
                    <Link href={link.href} 
                      className={classnames({
                          'text-zinc-900' : link.href === currentPath,
                          'text-zinc-500' : link.href !== currentPath,
                          'hover:text-zinc-800 transitions-colors font-medium' : true
                      })}
                    >{link.label}</Link>
                </li>
            )}
        </ul>
    </nav>
  )
}

export default NavBar