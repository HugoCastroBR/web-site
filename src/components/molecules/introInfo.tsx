import React from 'react'
import CustomText from '../atoms/customText'
import CustomButton from '../atoms/customButton'

const IntroInfo = () => {
  return (
    <div
      className='
      flex flex-col h-full w-full
      justify-center items-start

      '
    >
      <CustomText
        text='Hi, my name is'
        weight={300}
        className='
        text-xl
        '
        styles={{ marginBottom: -6 }}
      />
      <CustomText
        text='HUGO CASTRO'
        weight={600}
        className='
        -ml-0.5
        text-4xl
        '
      />
      <CustomText
        text='I AM A FULL STACK DEVELOPER'
        weight={400}
        className='
        text-2xl
        '
        styles={{ marginTop: -6 }}
      />
      <a href="https://www.linkedin.com/in/hugocastrobr/">
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