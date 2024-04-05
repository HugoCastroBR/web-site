import React from 'react'
import Image from 'next/image'
import CustomText from '../atoms/customText'
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
          w-72 h-72 overflow-x-visible z-10
          hover:border-2 
          '
        >

        </div>
        <div
          className='
          flex flex-col absolute
          justify-end items-center
          mt-2 border-t-2 border-primaryBg
          w-72 h-72 overflow-x-visible z-0
          '
        >

        </div>
      <div
          className='
          flex flex-col 
          justify-end items-center
          mt-2 border-2 border-primaryBg
          w-72 h-72 overflow-x-visible z-20
          border-t-0
          '
        >
          <Image
            src="/images/myself.png"
            alt="Picture of the author"
            width={300}
            height={300}
          />
        </div>


    </div>
  )
}

export default IntroPicture