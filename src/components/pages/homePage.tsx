import React from 'react'
import Header from '../organisms/header'
import IntroSection from '../organisms/introSection'
import AboutSection from '../organisms/aboutSection'
import ExpSection from '../organisms/expSection'
function HomePage() {
  return (
    <main
      className='
      flex flex-col h-full w-full 
      bg-white min-h-screen
      overflow-x-hidden
      '
    >
      <Header />
      <IntroSection />
      <AboutSection />
      <ExpSection />
    </main>
  )
}

export default HomePage