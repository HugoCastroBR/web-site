import React from 'react'
import CustomText from '../atoms/customText'
import IntroInfo from '../molecules/introInfo'
import IntroPicture from '../molecules/intropicture'

const IntroSection = () => {
  return (
    <section
      className='
      flex h-96 w-full
      px-52
      '
      style={{
        backgroundColor: '#00BA82'
      }}
    >
      <div 
        className='
        flex flex-col h-full w-6/12
        justify-center 
        '
      >
        <IntroInfo />
      </div>
      <div
      className='
      flex flex-col h-full w-6/12
      justify-center items-center
      overflow-hidden 
      '
      >
        <IntroPicture />
      </div>
    </section>
  )
}

export default IntroSection