import React from 'react'
import CustomText from '../atoms/customText'

export const AboutSection = () => {
  return (
    <section
      id='about-section'
      className='
      flex flex-col h-auto w-full 
      pt-6 pb-8 
      lg:px-52
      md:px-32
      sm:px-16
      px-4
      '
      style={{
        backgroundColor: 'white'
      }}
    >
      <CustomText
        text='ABOUT ME'
        weight={600}
        color='#00BA82'
        className='
        text-4xl text-primary
        mb-4
        '
      />

      <CustomText
        weight={400}
        className='text-sm'
        text={`
        My name is Hugo Castro, and I'm a full stack developer based in Juiz de Fora, Minas Gerais, Brazil.
        With a solid background in software engineering and a passion for problem-solving, I've played essential
        roles in various companies, contributing significantly to the development of innovative systems. Currently,
        I'm exploring entrepreneurship opportunities and seeking new challenges in diverse environments.
      `}
      />
      <CustomText
        className='mt-4 text-sm'
        weight={400}
        text={`
        Throughout my career, I've been dedicated to delivering high-quality software solutions, leveraging a wide range of technologies.
        From front-end development using HTML5, CSS3, and JavaScript frameworks like React.js, Angular, and Vue.js, 
        to back-end development with Node.js, Python, and Go, I've honed my skills to tackle complex challenges effectively.
      `}
      />
      <CustomText
        className='mt-4 text-sm'
        weight={400}
        text={`
        My journey in software development began during my studies at School,
        where I pursued degrees in Software Engineering and Information Systems, respectively. Additionally,
        I've actively participated in workshops and obtained certifications from institutions like Harvard CS50.
      `}
      />
      <CustomText
        className='mt-4 text-sm'
        weight={400}
        text={`
        In addition to technical expertise, I'm fluent in Portuguese and i also have an advanced English, enabling me to collaborate effectively
        with multidisciplinary teams and engage with diverse communities. My enthusiasm for continuous learning and professional
        growth drives me to seek out new opportunities and challenges in the ever-evolving field of software development.
      `}
      />
      <CustomText
        className='mt-4 text-sm'
        weight={400}
        text={`
        Feel free to reach out to me via email or connect with me on LinkedIn or GitHub. 
        I'm always open to new collaborations and opportunities to contribute to exciting projects.
      `}
      />

    </section>
  )
}

export default AboutSection