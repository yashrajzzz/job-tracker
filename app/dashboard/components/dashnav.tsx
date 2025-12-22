import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { MenuSquareIcon, LogOutIcon } from 'lucide-react'
import { ToggleMode, ToggleModeSm } from '@/components/toggle-mode'
import { signOut } from 'next-auth/react'

const DashNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <nav className='z-10 fixed bg-white dark:bg-black w-screen flex justify-center items-center h-15 transition-colors'>
            <div className='flex justify-between items-center md:w-[60%] w-[90%]'>
                <div>
                    <Link href="/">
                        <img src="/icons/logo.svg" alt="" className='dark:invert' />
                    </Link>
                </div>
                {/* Menu */}

                <button className='md:hidden flex'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <MenuSquareIcon className='invert dark:invert-0 transition-colors' />
                </button>
            </div>
            {/* MobileView */}

            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{
                                scale: 0,
                                opacity: 0
                            }}
                            animate={{
                                y: 92,
                                scale: 1,
                                opacity: 100
                            }}
                            transition={{ duration: 0.2 }}
                            exit={{
                                opacity: 0,
                                y: 0,
                                scale: 0
                            }}
                            className='fixed translate-x-42 flex flex-col'
                        >
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}>
                                <ToggleMode />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => signOut()}>
                                <LogOutIcon className='border dark:border-white/40 border-black/40 rounded-full p-3 h-12 w-13 dark:bg-black bg-white text-black dark:text-white transition-colors' />
                            </motion.button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav >
    )
}

export default DashNav
