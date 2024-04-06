import React from 'react'
import CustomText from '../atoms/customText'
import IntroInfo from '../molecules/introInfo'
import IntroPicture from '../molecules/introPicture'

const IntroSection = () => {
  return (
    <section
      className='
      flex  
      w-full
      lg:px-52
      md:px-32
      sm:px-16
      px-4
      h-96
      '
      style={{
        backgroundColor: '#00BA82'
      }}
    >
      <div 
        className='
        flex flex-col h-full 
        md:w-6/12
        w-full
        justify-center 
        '
      >
        <IntroInfo />
      </div>
      <div
      className='
      flex flex-col h-96 
      justify-center items-center
      overflow-hidden 
      md:visible invisible
      md:w-6/12 w-0
      '
      >
        <IntroPicture />
      </div>
    </section>
  )
}

export default IntroSection