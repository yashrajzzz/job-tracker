"use client"
import React from 'react'
import DashNav from './components/dashnav'
import Snowfall from 'react-snowfall'

const page = () => {
    return (
        <div>
            <Snowfall color="#82C8D9" />
            <DashNav />
            <div className='h-screen w-screen text-black flex justify-center items-center bg-[#e5e5e6] dark:bg-[#0a0a0a]'>
                nigga this is dashboard
            </div>
        </div>
    )
}

export default page
