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
        styles={{ marginBottom: -8 }}
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
        styles={{ marginTop: -8 }}
      />
      <CustomButton
      className='
        hover:transition-all hover:ease-in hover:duration-300
        hover:bg-primaryBg hover:text-white 
        text-primaryBg
        px-6 py-2 -mb-4 mt-4
        text-2xl
      '
      type='outline'
      borderSize={2}
      rounded={4}
      >
        CONTACT
      </CustomButton>

    </div>
  )
}

export default IntroInfo