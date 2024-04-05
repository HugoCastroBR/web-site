import React from 'react'
import Header from '../organisms/header'
import IntroSection from '../organisms/introSection'
import AboutSection from '../organisms/aboutSection'
import ExpSection from '../organisms/expSection'
import ProjectsSection from '../organisms/projectsSection'
import Footer from '../organisms/footer'
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
      <ProjectsSection />
      <Footer/>
    </main>
  )
}

export default HomePage