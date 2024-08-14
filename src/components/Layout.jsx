import React from 'react'
import { LayoutGrid } from './layout-grid'
import { cards } from '@/data'

const Layout = () => {
  return (
    <div className='w-full h-[80rem] md:h-screen'>
         <LayoutGrid cards={cards} />
    </div>
  )
}

export default Layout

const SkeletonOne = ({name, des}) => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          {name}
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
         {des}
        </p>
      </div>
    );
  };

  export {
    SkeletonOne
  }