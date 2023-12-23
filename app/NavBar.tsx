import Link from 'next/link'
import React from 'react'
import { IoBugSharp } from "react-icons/io5"

const NavBar = () => {
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
                    <Link href={link.href} className='text-zinc-500 hover:text-zinc-800 transitions-colors'>{link.label}</Link>
                </li>
            )}
        </ul>
    </nav>
  )
}

export default NavBar