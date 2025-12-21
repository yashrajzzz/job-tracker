import React, { useState } from 'react'
import { motion } from 'motion/react'
import { SunDimIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

const ToggleMode = () => {
    const {setTheme, theme} = useTheme()
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            <SunDimIcon className='border dark:border-white/40 rounded-full md:p-1 md:h-9 md:w-9 p-3 h-12 w-12 bg-black' />
        </motion.button>
    )
}

export default ToggleMode
