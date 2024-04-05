'use client'
import React from 'react'
import CustomText from '../atoms/customText';
import Image from 'next/image';
import CustomButton from '../atoms/customButton';

const ProjectsSection = () => {
  return (
    <section
      id='projects-section'
      className='
    flex flex-col w-full px-52 pt-4 pb-8
    bg-white justify-center items-center
    '
    >
      <CustomText
        text='PROJECTS'
        color='#00BA82'
        className='text-2xl'
      />
      <div
        className='
        flex  w-full
        min-h-72 justify-between
        '
      >
        <div className='
        flex flex-col w-6/12 py-6
      
        
        ' >
          <CustomText
            text='Alaska Web OS'
            color='#00BA82'
            className='
            text-lg
            '
          />
          <CustomText
            text='Alaska OS is a web-based operating system that offers a seamless user experience. 
            It combines the power of Next.js, BrowserFS, Tailwind CSS, and Mantine UI to deliver
            a modern and intuitive interface.'
            color='#4C4C59'
            weight={400}
            className='
            text-xs
            '
          />
          <CustomText
            text='File Support'
            color='#1C1C21'
            className='
            text-xs mt-1
            '
          />
          <CustomText
            text='Built-in Code Editor'
            color='#1C1C21'
            className='
            text-xs mt-1
            '
          />
          <CustomText
            text='Window Management'
            color='#1C1C21'
            className='
            text-xs mt-1
            '
          />
          <CustomText
            text='Advanced Console'
            color='#1C1C21'
            className='
            text-xs mt-1
            '
          />
          <CustomText
            text='Compressed Files
            '
            color='#1C1C21'
            className='
            text-xs mt-1
            '
          />
          <CustomText
            text='Functional Web Browser'
            color='#1C1C21'
            className='
            text-xs mt-1
            '
          />
          <CustomText
            text='And much more...'
            color='#1C1C21'
            className='
            text-xs mt-1
            '
          />
          <a
          href='https://github.com/HugoCastroBR/ALASKA-OS'
          >
          <CustomButton
            className='
              hover:transition-all hover:ease-in hover:duration-300
            hover:bg-transparent hover:text-primary
            text-white bg-primary border-primary
              px-2 py-1 -mb-2 mt-2
              text-sm font-medium
            '
            type='outline'
            borderSize={0}
            rounded={4}
          >
            View Project
          </CustomButton>
          
          </a>


        </div>
        <div className='flex justify-center items-center w-5/12 '>
          <Image
            alt=''
            src='/images/AlaskaWebOS.png'
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>

  )
}

export default ProjectsSection