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
      p-2 px-52 justify-between
      backdrop-blur-sm bg-primary  bg-opacity-70
      z-30
      '
    >
      <div
        className='w-8/12 h-10
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
        className=' w-4/12 h-10
        flex flex-row-reverse items-center  
        justify-between
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