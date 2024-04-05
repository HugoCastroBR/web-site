'use client'
import React from 'react'
import CustomButton from '../atoms/customButton'
import CustomText from '../atoms/customText'


const Header = () => {
  return (
    <header
      className='
      fixed
      flex h-6 w-full items-center
      p-2 px-52 bg-transparent justify-between
      backdrop-blur-lg  bg-opacity-25
      bg-primary z-30
      '
    >
      <div
        className='w-7/12 h-10
        flex items-center 
        '
      >
        <CustomText
          text='HUGO CASTRO'
          className='text-sm'
          color='#1C1C21'
          weight={600}
        />
      </div>
      <div
        className=' w-5/12 h-10
        flex flex-row-reverse items-center  
        justify-between
        '
      >
        <CustomButton
        >
          <CustomText
            text='CONTACT'
            className='text-xs'
            color='#1C1C21'
            weight={500}
          />
        </CustomButton>
        <CustomButton
        >
          <CustomText
            text='PROJECTS'
            className='text-xs'
            color='#1C1C21'
            weight={500}
          />
        </CustomButton>
        <CustomButton
        >
          <CustomText
            text='EXPERIENCE'
            className='text-xs'
            color='#1C1C21'
            weight={500}
          />
        </CustomButton>
        <CustomButton
        >
          <CustomText
            text='ABOUT'
            className='text-xs'
            color='#1C1C21'
            weight={500}
          />
        </CustomButton>
      </div>
    </header>
  )
}

export default Header