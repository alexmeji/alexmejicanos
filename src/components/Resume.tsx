'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
import { ScrollArea } from './ui/scroll-area';

import {
  FaJava,
  FaAws,
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaPython,
} from 'react-icons/fa';

import {
  SiMongodb,
  SiDocker,
  SiElixir,
  SiKubernetes,
  SiPhp,
  SiN8N,
} from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';
import { TbBrandCSharp } from 'react-icons/tb';

const about = {
  title: 'About me',
  description:
    'I am a senior software engineer with a passion for web development. I enjoy building solutions and solving problems. Recently, I have started integrating AI into new solutions to enhance functionality and efficiency.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Alex Mejiacnos',
    },
    {
      fieldName: 'Phone',
      fieldValue: '+502 3035-8525',
    },
    {
      fieldName: 'Experience',
      fieldValue: '12 years',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Guatemalan',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Location',
      fieldValue: 'Guatemala',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'Spanish, English',
    },
    {
      fieldName: 'Email',
      fieldValue: 'alexmejicanos@outlook.com  ',
    },
  ],
};

const experience = {
  icon: '',
  title: 'Experience',
  description: 'I have worked as a full stack developer for 12 years.',
  jobs: [
    {
      company: 'MangoChango',
      position: 'Full Stack Engineer',
      duration: '2024 - 2025',
    },
    {
      company: 'Asseco',
      position: 'Update Developer',
      duration: '2018 - 2020',
    },
    {
      company: 'Zubale',
      position: 'Senior Software Engineer',
      duration: '2021 - 2023',
    },
    {
      company: 'Xoom - A PayPal Service',
      position: 'Software Engineer II',
      duration: '2019 - 2021',
    },
    {
      company: 'Fox International Channels',
      position: 'Full Stack Developer',
      duration: '2017 - 2019',
    },
    {
      company: 'Royale Studios',
      position: 'Full Stack Developer',
      duration: '2016 - 2017',
    },
    {
      company: 'Research Mobile',
      position: 'Full Stack Developer',
      duration: '2013 - 2016',
    },
  ],
};

const education = {
  icon: '',
  title: 'Education',
  description: 'I have a degree in computer science.',
  schools: [
    {
      insitution: 'University Mariano Galvez of Guatemala',
      degree: 'Master in Information Security',
      duration: '2021 - 2022',
    },
    {
      insitution: 'University Mariano Galvez of Guatemala',
      degree: 'Information Systems Engineering',
      duration: '2011 - 2019',
    },
  ],
};

const skills = {
  title: 'Skills',
  description: 'I have experience with the following technologies.',
  tech: [
    {
      icon: <FaNodeJs />,
      name: 'Node JS',
    },
    {
      icon: <FaJava />,
      name: 'Java',
    },
    {
      icon: <SiElixir />,
      name: 'Elixir',
    },
    {
      icon: <FaPython />,
      name: 'Python',
    },
    {
      icon: <SiPhp />,
      name: 'PHP',
    },
    {
      icon: <FaLaravel />,
      name: 'Laravel',
    },
    {
      icon: <FaReact />,
      name: 'React',
    },
    {
      icon: <RiNextjsFill />,
      name: 'Next JS',
    },
    {
      icon: <SiDocker />,
      name: 'Docker',
    },
    {
      icon: <SiMongodb />,
      name: 'Mongo DB',
    },
    {
      icon: <SiKubernetes />,
      name: 'Kubernetes',
    },
    {
      icon: <FaAws />,
      name: 'AWS',
    },
    {
      icon: <SiN8N />,
      name: 'N8N',
    },
    {
      icon: <TbBrandCSharp />,
      name: 'C#',
    },
  ],
};

export default function Resume() {
  return (
    <section className="flex items-center justify-center" id="resume">
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[50vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.jobs.map((job, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent-default">
                          {job.duration}
                        </span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {job.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* Dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent-default" />
                          <p className="text-white/60">{job.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.schools.map((school, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent-default">
                          {school.duration}
                        </span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {school.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* Dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent-default" />
                          <p className="text-white/60">{school.insitution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex- flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.tech.map((tech, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent-default transition-all duration-300">
                              {tech.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{tech.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((info, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{info.fieldName}</span>
                      <span className="text-xl">{info.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
