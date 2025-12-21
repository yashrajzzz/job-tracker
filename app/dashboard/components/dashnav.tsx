import React from 'react'
import Link from 'next/link'

const DashNav = () => {
    return (
        <nav className='fixed bg-white dark:bg-black w-screen flex justify-center items-center h-15'>
            <div className='flex justify-between items-center md:w-[60%] w-[95%]'>
                <div>
                    <Link href="/">
                        <img src="/icons/logo.svg" alt="" className='dark:invert' />
                    </Link>
                </div>
                <div className='flex justify-evenly'>
                    hi
                    <div>
                        hi
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default DashNav
