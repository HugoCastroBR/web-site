'use client'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Stepper, rem } from '@mantine/core';
import {
  IconCalendar
} from '@tabler/icons-react';
import CustomText from '../atoms/customText';
const ExpSection = () => {
  const [active, setActive] = useState(0);

  const FreelancerExp = () => {
    return (
      <div
        className="flex flex-col overflow-y-auto lg:pb-0 pb-28"
      >
        <CustomText
          text='FREELANCER'
          className='text-lg'
          color='#00BA82'
          weight={600}
        />
        <CustomText
          text="Throughout my career as a software engineer, I've successfully completed numerous projects, delivering high-quality software solutions to clients across various industries. My expertise spans both front-end and back-end development, where I've demonstrated proficiency in a wide range of technologies. For instance, I'm skilled in front-end technologies such as HTML5, CSS3, and JavaScript, as well as popular frameworks like React.js, Angular, and Vue.js. This proficiency allows me to create engaging and responsive user interfaces that meet the needs of modern web applications."
          color="white"
          weight={200}
          className="text-xs"
        />
        <CustomText
          text="In addition to front-end development, I'm also adept at back-end development, leveraging technologies such as Node.js, AdonisJS, NestJS, and GraphQL to ensure robust and scalable server-side implementations. This includes designing and implementing RESTful APIs and GraphQL endpoints, enabling seamless communication between the front-end and back-end systems. My expertise in database management, covering both SQL and NoSQL databases like MySQL, PostgreSQL, MongoDB, and DynamoDB, ensures efficient data storage and retrieval, further enhancing the performance and reliability of the applications I develop."
          color="white"
          weight={200}
          className="text-xs mt-2"
        />
        <CustomText
          text="Furthermore, my experience extends to software testing, DevOps practices, and development methodologies. I'm well-versed in software testing methodologies and tools such as Jest and Cypress, which I utilize to ensure the reliability and stability of software applications. Additionally, I'm experienced in DevOps practices, using tools like Jenkins, Docker, Kubernetes, and AWS services to streamline the software development lifecycle. My familiarity with development methodologies such as Microservices, Kanban, and Scrum enables me to effectively manage projects and ensure efficient project delivery. Overall, my proficiency in using Adobe Creative Suite for design tasks and Microsoft Office for documentation and communication purposes further complements my technical skills, allowing me to deliver comprehensive solutions to clients' needs."
          color="white"
          weight={200}
          className="text-xs mt-2"
        />
        <CustomText
          text="But wait, you asked for an example, didn't you? Behold, Alaska OS, a web-based utopia! Woven with Next.js, BrowserFS, EmulatorJS, Tailwind CSS, and Mantine UI, it beckons users with promises of digital serenity. In this grand endeavor, I wielded my skills to craft front-end wonders, sculpt back-end marvels, and ensure the stability of the digital cosmos. Through Alaska OS and beyond, I continue to push the boundaries of digital creation, sculpting worlds of wonder with every line of code."
          color="white"
          weight={200}
          className="text-xs mt-2"
        /></div>
    );

  }

  const HarmoExp = () => {
    return (
      <div
        className="flex flex-col overflow-y-auto lg:pb-0 pb-28"
      >
        <CustomText
          text='BACK-END ENGINEER'
          className='text-lg'
          color='#00BA82'
          weight={600}
        />
        <CustomText
          text='As a back-end engineer, I play a key role in a team dedicated to meeting the critical demands of our customers. My responsibilities include 
          carrying out emergency corrections and implementing solutions quickly, in line with a project management process based on the Kanban 
          method. My core competencies center on vital technologies such as Node.js, Go, Python and the efficient management of PostgreSQL 
          databases. I am committed to ensuring our clients receive high-quality, effective solutions in a timely manner.'
          color='white'
          weight={200}
          className='text-xs'
        />
      </div>
    )
  }

  const QRPointExp = () => {
    return (
      <div
        className='flex flex-col overflow-y-auto lg:pb-0 pb-28'
      >
        <CustomText
          text='FULL STACK SOFTWARE ENGINEER'
          className='text-lg'
          color='#00BA82'
          weight={600}
        />
        <CustomText
          text='During my time as a full software engineer on a temporary contract, I played an essential role in defining the architecture required for the 
          international expansion of the system. My responsibilities included managing critical tasks, establishing efficient workflows, and creating detailed 
          documentation. My contribution played a vital role in the success of the project, ensuring the implementation of the new architecture was 
          successful and prepared to meet the needs of global expansion'
          color='white'
          weight={200}
          className='text-xs'
        />
      </div>
    )
  }

  const LubyExp = () => {
    return (
      <div className='flex flex-col overflow-y-auto lg:pb-0 pb-28'>
        <CustomText
          text='JUNIOR SOFTWARE DEVELOPER'
          className='text-lg'
          color='#00BA82'
          weight={600}
        />
        <CustomText
          text='As a Junior Software Developer at LUBY SOFTWARE, I was responsible for the development and architecture of a wide range of systems, each 
          with its own goals and challenges. I worked with various technologies to meet the specific needs of each project, ensuring an adaptable and 
          innovative approach. Furthermore, I maintained effective communication with multidisciplinary teams, where English played a fundamental role 
          in our success, allowing for fluid and productive collaboration. My ability to work flexibly and interdisciplinary was a differentiator in delivering 
          high-quality solutions in a dynamic environment.'
          color='white'
          weight={200}
          className='text-xs '
        />
        <CustomText
          text='SOFTWARE DEVELOPER INTERN'
          className='text-lg mt-2'
          color='#00BA82'
          weight={600}
        />
        <CustomText
          text='In my position as Software Developer Intern at LUBY SOFTWARE, I played a key role in the development of several systems, employing a variety 
          of technologies, including JavaScript, TypeScript, Node.js, Angular, React.js, React Native, AdonisJS, NestJS, GraphQL , RestAPI, MySQL, HTML5 
          and CSS3. Furthermore, my exposure to agile methodologies allowed me to collaborate efficiently within agile teams, delivering high-quality 
          solutions within stipulated deadlines.
          Furthermore, I had the privilege of participating in several workshops, expanding my knowledge and skills. I also had the opportunity to share my 
          knowledge, giving an introduction to Svelte, demonstrating my commitment to continuous learning and sharing knowledge with the community. 
          My diverse experience and enthusiasm for professional growth are essential elements of my journey as a software developer'
          color='white'
          weight={200}
          className='text-xs'
        />
      </div>
    )
  }



  const renderActiveStep = () => {
    switch (active) {
      case 0:
        return FreelancerExp();
      case 1:
        return HarmoExp();
      case 2:
        return QRPointExp();
      case 3:
        return LubyExp();
      default:
        return FreelancerExp();
    }
  }

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <section className='
    flex  w-full pt-6 pb-8
    bg-primaryBg transition-all
    lg:px-52
    md:px-32
    sm:px-16
    px-4
    lg:h-2/3
    h-96
    '
    id='exp-section'
    >
      {screenWidth < 1100 ? 
      <div className='flex flex-col'>
      <div className='flex flex-col h-full w-full  '>
      <CustomText
        text='EXPERIENCE'
        className='text-lg mb-4'
        color='#00BA82'
        weight={600}
      />
      <Stepper
        active={active}
        onStepClick={setActive}
        orientation={'horizontal'}
        size='xs'
        iconSize={24}
        color='#00BA82'
        styles={{

          stepIcon: {
            backgroundColor: '#00BA82',
            borderColor: '#00BA82',
          },
          stepLabel: {
            color: '#00BA82',
          },
          stepDescription: {
            color: 'lightgray',
          },
        }}
      >
        <Stepper.Step
          label="FREELANCER"
          description="10/2023 - Present"
          completedIcon={<IconCalendar size={16} />}
          icon={<IconCalendar size={16} color='white' />}
        />
        <Stepper.Step
          label="Harmo"
          description="03/2023 - 09/2023"
          completedIcon={<IconCalendar size={16} />}
          icon={<IconCalendar size={16} color='white' />}
          name='email'

        />
        <Stepper.Step
          label="QR Point"
          description="12/2022 - 03/2023"
          completedIcon={<IconCalendar size={16} />}
          icon={<IconCalendar size={16} color='white' />}
          name='email'

        />
        <Stepper.Step
          label="Luby Software"
          description="03/2021 - 12/2022"
          completedIcon={<IconCalendar size={16} />}
          icon={<IconCalendar size={16} color='white' />}
          name='email'
        />
      </Stepper>
    </div>
    <div className='flex flex-col h-full w-full mt-2 '>
      {renderActiveStep()}
    </div>
      </div>
      :
      <>
        <div className='flex flex-col h-full w-3/12 '>
        <CustomText
          text='EXPERIENCE'
          className='text-lg mb-4'
          color='#00BA82'
          weight={600}
        />
        <Stepper
          active={active}
          onStepClick={setActive}
          orientation={'vertical'}
          size='sm'
          color='#00BA82'
          styles={{

            stepIcon: {
              backgroundColor: '#00BA82',
              borderColor: '#00BA82',
            },
            stepLabel: {
              color: '#00BA82',
            },
            stepDescription: {
              color: 'lightgray',
            },
          }}
        >
          <Stepper.Step
            label="FREELANCER"
            description="10/2023 - Present"
            completedIcon={<IconCalendar size={20} />}
            icon={<IconCalendar size={20} color='white' />}
          />
          <Stepper.Step
            label="Harmo"
            description="03/2023 - 09/2023"
            completedIcon={<IconCalendar size={20} />}
            icon={<IconCalendar size={20} color='white' />}
            name='email'

          />
          <Stepper.Step
            label="QR Point"
            description="12/2022 - 03/2023"
            completedIcon={<IconCalendar size={20} />}
            icon={<IconCalendar size={20} color='white' />}
            name='email'

          />
          <Stepper.Step
            label="Luby Software"
            description="03/2021 - 12/2022"
            completedIcon={<IconCalendar size={20} />}
            icon={<IconCalendar size={20} color='white' />}
            name='email'
          />
        </Stepper>
      </div>
      <div className='flex flex-col h-full w-9/12 '>
        {renderActiveStep()}
      </div>
      </>
      }
    </section>
  );
}

export default ExpSection