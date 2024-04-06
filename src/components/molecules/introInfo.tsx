import React from 'react'
import CustomText from '../atoms/customText'
import CustomButton from '../atoms/customButton'
import Image from 'next/image'

const IntroInfo = () => {
  return (
    <div
      className='
      flex flex-col h-full w-full
      justify-center md:items-start
      items-center md:mb-32 mb-0

      '
    >
      <div
        className='flex  w-36 h-36 rounded-full overflow-hidden
        md:invisible visible
        '
      >
          <div
            className='
            flex bg-transparent w-44 h-44 rounded-full overflow-hidden
            -mt-8
            '
          >
            <Image
              src="/images/myself.png"
              alt="Picture of the author"
              width={1000}
              height={1200}
              className='px-1 -ml-1'
            />
          </div>
      </div>
      <CustomText
        text='Hi, my name is'
        weight={300}
        className='
        lg:text-xl
        text-sm
        '
        styles={{ marginBottom: -6 }}
      />
      <CustomText
        text='HUGO CASTRO'
        weight={600}
        className='
        -ml-0.5
        lg:text-4xl
        text-3xl
        '
      />
      <CustomText
        text='I AM A FULL STACK DEVELOPER'
        weight={400}
        className='
        lg:text-lg
        text-sm
        '
        styles={{ marginTop: -6 }}
      />
      <a href="https://api.whatsapp.com/send?phone=553299523931&text=Ol%C3%A1%20Hugo.">
      <CustomButton
        className='
        text-2xl
        relative group  px-8 pb-1 h-10 bg-primary
        before:absolute 
        before:inset-0 
      before:bg-primaryBg 
        before:scale-x-0 
        before:origin-right
        before:transition
        before:duration-500
        hover:before:scale-x-100
        hover:before:origin-left
        text-primaryBg
        hover:text-white
      '
        type='outline'
        borderSize={2}
        rounded={4}
      >
        <span className="relative uppercase text-base transition-all duration-500  ">Contact</span>

      </CustomButton>
      </a>

    </div>
  )
}

export default IntroInfo