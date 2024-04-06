import React from 'react'
import Image from 'next/image'
const IntroPicture = () => {
  return (
    <div
      className='
    flex w-full h-full
    justify-end items-center
    '
    >
      <div
          className='
          flex flex-col absolute
          justify-end items-center
          mb-8 -mr-6 border-2 border-white
          lg:w-72 lg:h-72 h-56 w-56
          
          overflow-x-visible z-10
          hover:border-2 
          
          '
        >

        </div>
        <div
          className='
          flex flex-col absolute
          justify-end items-center
          mt-2 border-t-2 border-primaryBg
          lg:w-72 lg:h-72 h-56 w-56 overflow-x-visible z-0
          '
        >

        </div>
      <div
          className='
          flex flex-col 
          justify-end items-center
          mt-2 border-2 border-primaryBg
          lg:w-72 lg:h-72 h-56 w-56 overflow-x-visible z-20
          border-t-0
          '
        >
          <Image
            src="/images/myself.png"
            alt="Picture of the author"
            width={1000}
            height={1000}
          />
        </div>


    </div>
  )
}

export default IntroPicture