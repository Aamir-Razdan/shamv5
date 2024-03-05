import React from 'react'
import {useState } from 'react'
import { Popover } from '@headlessui/react'
import { Link } from 'react-router-dom'

const Allothercategory = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-2xl items-center justify-between p-6 lg:px-3" aria-label="Global">
        <div className="flex lg:flex-1">  
        <h1>Sub Category</h1>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link to="crewneck" className="text-lg font-bold leading-6 text-gray-900">
          Crew Neck
          </Link>
          <Link to="oversized" className="text-lg font-bold leading-6 text-gray-900">
          Oversized

          </Link>
          {/* <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Company
          </Link> */}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        </div>
      </div>
     
    </header>
  )
}

export default Allothercategory
