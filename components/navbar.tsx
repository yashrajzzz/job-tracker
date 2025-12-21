"use client"
import React from 'react'
import { useState } from 'react'
import { Authenticated, UnAuthenticated } from './auth-guard'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { LogInIcon, MenuSquareIcon } from 'lucide-react'
import ToggleMode from './toggle-mode'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <>
            <nav className='z-10 fixed bg-white dark:bg-black w-screen flex justify-center items-center h-15'>
                <div className='flex justify-between items-center md:w-[60%] w-[90%]'>
                    <div>
                        <Link href="/">
                            <img src="/icons/logo.svg" alt="" className='dark:invert' />
                        </Link>
                    </div>
                    <div className='hidden md:flex justify-center gap-3'>
                        <Authenticated>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}>
                                <Link href="/dashboard" className='text-sm font-semibold text-black dark:text-white bg-[#747488] dark:bg-zinc-700 px-4 py-1.5 rounded-4xl text-center'>
                                    Dashboard
                                </Link>
                            </motion.button>
                        </Authenticated>
                        <UnAuthenticated>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}>
                                <Link href="/auth" className='text-sm text-black dark:text-white bg-[#747488] dark:bg-zinc-900 px-2 py-1.5 rounded-4xl w-40 text-center flex items-center justify-center gap-2'>
                                    <LogInIcon />
                                    LogIn / SignUp
                                </Link>
                            </motion.button>
                        </UnAuthenticated>
                        {/* ChangeSchemeMode */}
                    <ToggleMode />
                    </div>

                    {/* Menu */}

                    <button className='md:hidden flex border border-black'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <MenuSquareIcon className='invert dark:invert-0' />
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
                                    y: 70,
                                    scale: 1,
                                    opacity: 100
                                }}
                                transition={{ duration: 0.2 }}
                                exit={{
                                    opacity: 0,
                                    y: 0,
                                    scale: 0
                                }}
                                className='fixed translate-x-42'
                            >
                                <Authenticated>
                                    <motion.button>
                                        <Link href="/dashboard">HEHE</Link>
                                    </motion.button>
                                </Authenticated>
                                <UnAuthenticated>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}>
                                        <Link href="/auth">
                                            <LogInIcon className='border dark:border-white/40 rounded-full p-3 h-12 w-12 bg-black' />
                                        </Link>
                                    </motion.button>
                                </UnAuthenticated>
                            </motion.div>
                            <motion.div
                                initial={{
                                    scale: 0,
                                    opacity: 0
                                }}
                                animate={{
                                    y: 130,
                                    scale: 1,
                                    opacity: 100
                                }}
                                transition={{ duration: 0.2 }}
                                exit={{
                                    opacity: 0,
                                    y: 0,
                                    scale: 0
                                }}
                                className='fixed translate-x-42'
                            >
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}>
                                    <ToggleMode />
                                </motion.button>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </nav >
        </>
    )
}

export default Navbar
