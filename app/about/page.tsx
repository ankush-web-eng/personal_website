import { Header } from '@/components/header'
import { Navbar } from '@/components/navbar'
import React from 'react'

function page() {
  return (
    <div>
      <div className='hidden md:flex'>
        <Navbar />
        <div className='h-screen space-y-6 pl-6 pt-8 w-1/2 flex flex-col'>
          <Header />
          <div className=''></div>
        </div>
      </div>
      <div className='flex md:hidden'></div>
    </div>
  )
}

export default page