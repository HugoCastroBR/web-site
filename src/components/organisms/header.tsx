'use client'
import React from 'react'
import CustomButton from '../atoms/customButton'
import CustomText from '../atoms/customText'


const Header = () => {
  return (
    <header
      className='
      relative
      md:fixed
      flex h-6 w-full items-center
      p-2  justify-between
      backdrop-blur-sm bg-primary  bg-opacity-100
      z-30
      lg:px-52
      md:px-32
      sm:px-16
      md:bg-opacity-70
      px-0
      '
    >
      <div
        className='w-0 lg:w-8/12 md:w-7/12  md:visible invisible h-10
        flex items-center 
        '
      >
        <CustomText
          text='HUGO CASTRO'
          className='text-xs
          lg:text-sm
          '
          color='#1C1C21'
          weight={600}
        />
      </div>
      <div
        className=' h-10
        flex flex-row-reverse items-center  
        justify-evenly
        md:justify-between lg:w-5/12 md-5/12  w-screen
        '
      >
        <a
          href='#projects-section'
        >
          <CustomButton
          >
            <CustomText
              text='PROJECTS'
              className='text-xs'
              color='#1C1C21'
              weight={500}
            />
          </CustomButton>
        </a>
        <a
          href='#exp-section'
        >
          <CustomButton
          >
            <CustomText
              text='EXPERIENCE'
              className='text-xs'
              color='#1C1C21'
              weight={500}
            />
          </CustomButton>
        </a>
        <a
          href='#about-section'
        >
          <CustomButton
          >
            <CustomText
              text='ABOUT'
              className='text-xs'
              color='#1C1C21'
              weight={500}
            />
          </CustomButton>
        </a>
      </div>
    </header>
  )
}

export default Header