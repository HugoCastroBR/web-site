'use client'
import React from 'react'
import CustomText from '../atoms/customText'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconMail
} from  '@tabler/icons-react'

const Footer = () => {
  return (
    <section className='
    flex  w-full pt-2
    bg-primaryBg transition-all
    lg:px-52
    md:px-32
    sm:px-16
    px-4
    pb-2
    '
    style={{
      height: '160px',
    }}
    >
      <div
        className='
        flex flex-col h-full w-full
        justify-between items-center
        '
      >
        <div
          className='
          flex w-full
          '
        >

        </div>
        <a
          className='
          flex flex-row gap-4
          justify-center items-center
          cursor-pointer
          '
          href='https://www.linkedin.com/in/hugocastrobr/'
        >
          <IconBrandLinkedin
            size={28}
            color='white'
          />
          <CustomText
            text='Hugo Castro'
            className='text-xs'
            color='white'
          />
        </a>
        <a
          className='
          flex flex-row gap-4
          justify-center items-center
          cursor-pointer
          '
          href='https://wa.me/5532999523931/'
        >
          <IconBrandWhatsapp
            size={28}
            color='white'
          />
          <CustomText
            text='+55 (32) 9 9952-3931'
            className='text-xs'
            color='white'
          />
        </a>
        <a
          className='
          flex flex-row gap-4
          justify-center items-center
          cursor-pointer
          href="mailto:hugocastrohc@outlook.com"
          '
        >
          <IconMail
            size={28}
            color='white'
          />
          <CustomText
            text='hugocastrohc@outlook.com'
            className='text-xs'
            color='white'
          />
        </a>
        <a
          className='
          flex flex-row gap-4
          justify-center items-center
          '
          href='https://github.com/HugoCastroBR'
        >
          <IconBrandGithub
            size={28}
            color='white'
          />
          <CustomText
            text='HugoCastroBR'
            className='text-xs'
            color='white'
          />
        </a>
        <CustomText
          text='© 2024 Hugo Castro. All rights reserved.'
          className='text-xs'
          weight={200}
          color='white'
        />
      </div>
    </section>
  )
}

export default Footer