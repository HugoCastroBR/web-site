'use client'


import React, { useEffect, useState } from 'react'
import CustomButton from '../atoms/customButton'
import CustomText from '../atoms/customText'
import { generateWhatsAppMessage, sendWhatsAppMessage, wait } from '@/utils'



const FloatMessage = () => {

  const [message, setMessage] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    wait(10000).then(() => {
      setIsVisible(true)
    })
  }, [])

  return (
    <div
      className={`
      flex flex-col fixed
      justify-evenly items-center
      w-32 h-28 overflow-x-visible z-10
      right-4 bg-white border-primaryBg
      border rounded
      transition-all duration-700
      ${isVisible ? 'bottom-4 visible' : '-bottom-40 invisible'}
      `}
    >
      <div
        className='
        flex flex-row justify-end items-start 
        w-32 h-1/6
        '
      >
        <CustomButton
          onClick={() => setIsVisible(false)}
          type='outline'
          className='
          w-4 h-4
          text-primaryBg
          text-sm
          font-bold
          '
        >
          X
        </CustomButton>
      </div>
      <div className='
      flex flex-col h-5/6
      justify-evenly items-center
      '>
        <CustomText
          text='Leave a message'
          weight={400}
          className='
        text-xs
        
        '
        />
        <textarea
          className='
        w-28 h-8
        outline-none
        border-1 border-primaryBg
        rounded text-xs
        p-0.5
        '
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Message'
        />
        <CustomButton
          onClick={() => {
            sendWhatsAppMessage(generateWhatsAppMessage(message))
            setIsVisible(false)
          }}
          type='outline'
          className='
        w-16 h-6
        bg-primary
        text-white
        text-sm
        '
        >
          Send
        </CustomButton>
      </div>
    </div>
  )
}

export default FloatMessage