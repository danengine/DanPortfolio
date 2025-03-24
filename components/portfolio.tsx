"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { GridFadeIn } from "./GridFadeIn"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <GridFadeIn>
        <Header />
      </GridFadeIn>
      <GridFadeIn delay={0.2}>
        <AboutMe />
      </GridFadeIn>
      <GridFadeIn delay={0.4}>
        <TechStack />
      </GridFadeIn>
      <GridFadeIn delay={0.6}>
        <Clubs />
      </GridFadeIn>
      <GridFadeIn delay={0.8}>
        <Experiences />
      </GridFadeIn>
      <GridFadeIn delay={1.0}>
        <Education />
      </GridFadeIn>
    </div>
  )
}

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-3"
    >
      <div className="relative w-32 h-32 mx-auto mb-3 rounded-full overflow-hidden border-2 border-gray-200">
        <Image src="/profile.jpg?height=128&width=128" alt="Your Name" layout="fill" objectFit="cover" />
      </div>
      <h1 className="text-4xl font-bold text-gray-800">Danilo Eslawan</h1>
      <p className="text-lg text-gray-600">1st Year Computer Science Student</p>
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/danengine" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <Github className="h-5 w-5 text-gray-600 hover:text-gray-800 transition-colors" />
        </a>
        <a
          href="https://linkedin.com/in/danengine"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="h-5 w-5 text-gray-600 hover:text-gray-800 transition-colors" />
        </a>
        <a href="mailto:daniloeslawanmusic23@gmail.com" aria-label="Email Me">
          <Mail className="h-5 w-5 text-gray-600 hover:text-gray-800 transition-colors" />
        </a>
      </div>
    </motion.div>
  )
}

function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white"
    >
      <h2 className="text-xl font-semibold mb-2 text-gray-800">About Me</h2>
      <p className="text-gray-500">
        I'm passionate about back-end development, where I focus on building robust, secure, and high-performance
        systems. I enjoy working with databases and APIs to ensure seamless integration, reliability, and scalability.
        Although back-end development is my primary focus, I also work on the front end, particularly with Next.js and
        shadcn/UI, to contribute to seamless user experiences. My goal is to create efficient, scalable solutions that
        deliver exceptional results.
      </p>
    </motion.div>
  )
}

function TechStack() {
  const technologies = [
    { name: "React", logo: "/react.png?height=20&width=20" },
    { name: "Next.js", logo: "/nextjs.svg?height=20&width=20" },
    { name: "Tailwind", logo: "/tailwind.png?height=20&width=20" },
    { name: "TypeScript", logo: "/typescript.svg?height=20&width=20" },
    { name: "Node.js", logo: "/nodejs.png?height=20&width=20" },
    { name: "Vercel", logo: "/vercel.svg?height=20&width=20" },
    { name: "PHP", logo: "/php.png?height=20&width=20" },
    { name: "MySQL", logo: "/mysql.webp?height=20&width=20" },
    { name: "C++", logo: "/cplusplus.png?height=20&width=20" },
    { name: "C#", logo: "/csharp.png?height=20&width=20" },
    { name: "Unity", logo: "/unity.png?height=20&width=20" },
    { name: "AWS", logo: "/aws.webp?height=20&width=20" },
    { name: "Docker", logo: "/docker.webp?height=20&width=20" },
    { name: "Firebase", logo: "/firebase.webp?height=20&width=20" },
    // { name: 'Express', logo: '/placeholder.svg?height=20&width=20' },
    // { name: 'MongoDB', logo: '/placeholder.svg?height=20&width=20' },
    // { name: 'PostgreSQL', logo: '/placeholder.svg?height=20&width=20' },
    // { name: 'GraphQL', logo: '/placeholder.svg?height=20&width=20' },
    // { name: 'Docker', logo: '/placeholder.svg?height=20&width=20' },
    // { name: 'AWS', logo: '/placeholder.svg?height=20&width=20' },
    // { name: 'Git', logo: '/placeholder.svg?height=20&width=20' },
    // { name: 'CI/CD', logo: '/placeholder.svg?height=20&width=20' },
    // { name: 'Jest', logo: '/placeholder.svg?height=20&width=20' },
    // { name: 'Cypress', logo: '/placeholder.svg?height=20&width=20' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white"
    >
      <h2 className="text-xl font-semibold mb-3 text-gray-800">Tech Stack</h2>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Badge
              variant="secondary"
              className="text-xs py-1 px-2 bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors flex items-center space-x-1"
            >
              <Image src={tech.logo || "/placeholder.svg"} alt={tech.name} width={16} height={20} />
              <span>{tech.name}</span>
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function Clubs() {
  const clubs = [
    {
      title: "Web & App Developer",
      company: "Mapúa Malayan Developer Student Club",
      logo: "/mmdsc.jpg?height=48&width=48",
      period: "February 2025 - Present",
      description:
        "As a Web & App Developer, I contribute to the organization's projects by building and maintaining web and mobile applications.",
      timeline: [],
    },
    {
      title: "Project Development Member & CS Auditor",
      company: "Computing Students Society",
      logo: "/css.jpg?height=48&width=48",
      period: "September 2024 - Present",
      description:
        "As an Auditor, I oversee the organization's activities, ensuring compliance and transparency in all processes.",
      timeline: [],
    },
    {
      title: "Auditor",
      company: "Coding Organization for Digital Excellence",
      logo: "/code.png?height=48&width=48",
      period: "September 2024 - Present",
      description:
        "As an Auditor, I oversee the organization's activities, ensuring compliance and transparency in all processes.",
      timeline: [
        {
          date: "March 2025",
          role: "Attendance Checker",
          description:
            "Created an attendance checker using RFID to verify attendance, ensuring it only checks members who have paid the membership fee",
          githubUrl: "",
        },
        {
          date: "December 2024",
          role: "Code Treasury Panel",
          description:
            "Created the Code Treasury Panel to manage the organization's membership list and automate the generation of receipts for membership payments.",
          githubUrl: "https://codetreasury.danengine.tech",
        },
      ],
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-white"
    >
      <h2 className="text-xl font-semibold mb-3 text-gray-800">Organization</h2>
      <div className="space-y-3">
        {clubs.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </motion.div>
  )
}

function Experiences() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Stick Bros",
      logo: "/stickbros.jpg?height=48&width=48",
      period: "Dec 2020 - Jan 2024",
      description: "Developed the website and game client",
      timeline: [],
    },
    // {
    //   title: 'Junior Developer',
    //   company: 'StartUp Ventures',
    //   logo: '/placeholder.svg?height=48&width=48',
    //   period: 'Jun 2015 - Feb 2017',
    //   description: 'Assisted in building MVP for various startup projects.'
    // }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-white"
    >
      <h2 className="text-xl font-semibold mb-3 text-gray-800">Experience</h2>
      <div className="space-y-3">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </motion.div>
  )
}

interface Experience {
  title: string
  company: string
  logo: string
  period: string
  description: string
  timeline?: {
    date: string
    role: string
    description: string
    githubUrl?: string
  }[]
}

function ExperienceCard({ experience }: { experience: Experience }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white">
      <div className="flex items-center space-x-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <Image
          src={experience.logo || "/placeholder.svg"}
          alt={experience.company}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex-grow">
          <h3 className="font-semibold text-gray-800">{experience.company}</h3>
          <p className="text-sm text-gray-500">
            {experience.title} <span className="ml-2">{experience.period}</span>
          </p>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="ml-14 mt-2"
          >
            <p className="text-sm text-gray-700 mb-2">{experience.description}</p>

            {experience.timeline && experience.timeline.length > 0 && (
              <div className="mt-3 border-l-2 border-gray-300 pl-4 space-y-3">
                <h4 className="text-sm font-medium text-gray-700">Projects</h4>
                {experience.timeline.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[21px] mt-1.5 h-3 w-3 rounded-full bg-primary"></div>
                    <div className="pb-2">
                      <p className="text-xs font-medium text-gray-600">{item.date}</p>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-gray-800">{item.role}</p>
                        {item.githubUrl && (
                          <a
                            href={item.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                      <p className="text-xs text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface EducationProps {
  degree: string
  school: string
  logo: string
  year: string
  currentYear?: string
  achievements?: { term: string; award: string; description: string }[]
}

function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Mapúa Malayan Colleges Mindanao",
      logo: "/mcm.jpg?height=40&width=40",
      year: "2024",
    },
    {
      degree: "Information Communication Technology",
      school: "Assumption College of Davao",
      logo: "/acd.png?height=40&width=40",
      year: "2022",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="bg-white"
    >
      <h2 className="text-xl font-semibold mb-3 text-gray-800">Education</h2>
      <div className="space-y-3 mb-32">
        {education.map((edu, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Image
              src={edu.logo || "/placeholder.svg"}
              alt={edu.school}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex-grow">
              <h3 className="font-semibold text-gray-800">{edu.school}</h3>
              <p className="text-sm text-gray-500 flex justify-between">
                <span>{edu.degree}</span>
                <span>{edu.year}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}