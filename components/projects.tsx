"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, Mail, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useSwipeable } from "react-swipeable"

// Technology logo mapping
const techLogos: Record<string, string> = {
  React: "/react.png?height=20&width=20",
  "Next.js": "/nextjs.svg?height=20&width=20",
  Tailwind: "/tailwind.png?height=20&width=20",
  "Tailwind CSS": "/tailwind.png?height=20&width=20",
  TypeScript: "/typescript.svg?height=20&width=20",
  "Node.js": "/nodejs.png?height=20&width=20",
  Vercel: "/vercel.svg?height=20&width=20",
  PHP: "/php.png?height=20&width=20",
  MySQL: "/mysql.webp?height=20&width=20",
  "C++": "/cplusplus.png?height=20&width=20",
  "C#": "/csharp.png?height=20&width=20",
  Unity: "/unity.png?height=20&width=20",
  AWS: "/aws.webp?height=20&width=20",
  Docker: "/docker.webp?height=20&width=20",
  Firebase: "/firebase.webp?height=20&width=20",
}

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  images: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

const projects: Project[] = [
    {
      id: "project8",
      title: "Event Registration System",
      description:
          "A web-based Event Registration System featuring customizable forms for attendees to fill out. Once a form is submitted, event organizers can use the admin panel to verify the participant's payment. Upon verification and approval, the system automatically sends a confirmation email containing a unique QR code. This QR code serves as the attendee's event pass and will be scanned on the day of the event. The admin panel includes a built-in QR scanner to validate each code, ensuring it is authentic and can only be used once.",
      technologies: ["Next.js", "Node.js", "MySQL", "AWS", "Docker"],
      images: [
          "/projects/nyxeon-adminlogin.png?height=600&width=800",
          "/projects/nyxeon-adminpanel.png?height=600&width=800",
          "/projects/nyxeon-adminpanel2.png?height=600&width=800",
          "/projects/nyxeon-adminpanel3.png?height=600&width=800",
          "/projects/nyxeon-adminpanel4.png?height=600&width=800",
          "/projects/nyxeon-prereg1.png?height=600&width=800",
          "/projects/nyxeon-prereg.png?height=600&width=800",
      ],
      liveUrl: "https://nyxeon.danengine.tech",
      featured: true,
    },
    {
      id: "project7",
      title: "Mapúa Grade Tracker",
      description:
          "Mapúa Grade Tracker is a web application designed to display the term average weighted grades of BSCS Mapúa MCM students for a specific term. It also shows the course with the highest grade and is integrated with our school LMS, Blackboard Learn.",
      technologies: ["Next.js", "Node.js", "MySQL"],
      images: [
          "/projects/twa-main.png?height=600&width=800",
          "/projects/twa-main2.png?height=600&width=800",
          "/projects/twa-main3.png?height=600&width=800",
      ],
    },
    {
      id: "project6",
      title: "RFID Attendance System",
      description:
          "An attendance tracking system using RFID technology to verify attendance for organization members. The system validates membership status before recording attendance.",
      technologies: ["Next.js", "Node.js", "MySQL"],
      images: ["/projects/attendancechecker.png?height=600&width=800"],
      },
    {
      id: "project5",
      title: "Attendance Monitoring System",
      description:
      "A C++ CLI WinForms attendance monitoring system that fetches student information from my API, allows one-click attendance marking, and stores the data into a .csv file for our IT101-1 project.",
      technologies: ["C++", "Node.js"],
      images: [
      "/projects/attendance_monitoring.png?height=600&width=800",
      ],
      githubUrl: "https://github.com/danengine/attendance-monitoring-IT101-1L",
    },
    {
      id: "project4",
      title: "Code Treasury Panel",
      description:
      "A web application for managing organization membership lists and automating receipt generation for membership payments. Built with Next.js, TypeScript, and Tailwind CSS.",
      technologies: ["Next.js", "Node.js", "MySQL"],
      images: [
      "/projects/codetreasury-main.png?height=600&width=800",
      "/projects/codetreasury-attendance.png?height=600&width=800",
      ],
    },
    {
      id: "project3",
      title: "Trade Run Game",
      description:
      "Trade Run is a remake of Stick Run, a nostalgic game we decided to bring back. It was recoded from scratch using the Unity engine, and the server runs on Socket.IO.",
      technologies: ["Unity", "C#", "Node.js", "MySQL", "AWS"],
      images: [
      "/projects/tr-screenshot1.png?height=600&width=800",
      "/projects/tr-screenshot2.png?height=600&width=800",
      "/projects/tr-screenshot3.png?height=600&width=800",
      ],
      liveUrl: "https://traderun.xyz",
    },
    {
      id: "project2",
      title: "Stick Bros Game",
      description:
      "Stick Bros is a fast-paced game about running and avoiding obstacles. It was developed as a solo project and released across multiple platforms, including the App Store, Google Play Store, and Steam. The game integrates a server to handle in-app purchases for each platform.",
      technologies: ["Unity", "C#", "PHP", "MySQL", "AWS", "Firebase"],
      images: [
        "/projects/sb-wallpaper.png?height=600&width=800",
        "/projects/sb-main.jpg?height=600&width=800",
        "/projects/sb-main2.jpg?height=600&width=800",
        "/projects/sb-main3.jpg?height=600&width=800",
        "/projects/sb-main4.jpg?height=600&width=800",
        "/projects/sb-main5.jpg?height=600&width=800",
      ],
      liveUrl: "https://store.steampowered.com/app/2265960/Stick_Bros/",
      featured: true,
    },
    {
      id: "project1",
      title: "Blox Easy Web Game",
      description:
      "I made this game back in 2018 when I was 13 years old. It's a social avatar networking site, very similar to Roblox. You can dress up your character, buy limited items, and recharge Bux.",
      technologies: ["PHP","MySQL"],
      images: [
        "/projects/bloxeasy-main.png?height=PHP600&width=800",
        "/projects/bloxeasy-main2.png?height=PHP600&width=800",
        "/projects/bloxeasy-main3.png?height=PHP600&width=800",
        "/projects/bloxeasy-main4.png?height=PHP600&width=800",
      ],
    },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const modalRef = useRef<HTMLDivElement>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)

  const openProject = (project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = "hidden"
  }

  const closeProject = () => {
    setSelectedProject(null)
    document.body.style.overflow = "auto"
  }

  const nextImage = () => {
    if (!selectedProject) return
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length)
  }

  const prevImage = () => {
    if (!selectedProject) return
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
  }

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    preventScrollOnSwipe: true,
    trackMouse: true,
  })

  return (
    <div className="bg-white">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Projects</h2>

      {/* Featured Projects */}
      <div className="mb-8">
        <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-medium">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
        .filter((p) => p.featured)
        .map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer border border-gray-100"
            onClick={() => openProject(project)}
          >
            <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={project.images[0] || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex flex-wrap gap-1 mb-2">
              {project.technologies.slice(0, 3).map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs bg-white/20 text-white border-none backdrop-blur-sm flex items-center space-x-1"
            >
              <Image
                src={techLogos[tech] || "/placeholder.svg?height=20&width=20"}
                alt={tech}
                width={16}
                height={16}
                className="mr-1"
              />
              <span>{tech}</span>
            </Badge>
              ))}
              {project.technologies.length > 3 && (
            <Badge
              variant="secondary"
              className="text-xs bg-white/20 text-white border-none backdrop-blur-sm"
            >
              +{project.technologies.length - 3}
            </Badge>
              )}
            </div>
            <p className="text-sm text-white/80 line-clamp-2">{project.description}</p>
          </div>
            </div>
            <div className="p-4">
          <h3 className="font-semibold text-lg mb-1 group-hover:text-gray-900 transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center space-x-2 text-gray-500">
            {project.liveUrl && <ExternalLink className="h-4 w-4" />}
            {project.githubUrl && <Github className="h-4 w-4" />}
          </div>
            </div>
          </motion.div>
        ))}
        </div>
        {/* All Projects */}
        <div className="mt-12"></div>

        <div className="flex justify-center mb-6">
          {showAllProjects ? (
        <h3 className="text-sm uppercase tracking-wider text-gray-500 font-medium text-center">
          All Projects
        </h3>
          ) : (
        <Button
          variant="outline"
          className="px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          onClick={() => setShowAllProjects((prev) => !prev)}
        >
          Show All Projects
        </Button>
          )}
        </div>
        {showAllProjects && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md cursor-pointer border border-gray-100"
            onClick={() => openProject(project)}
          >
            <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.images[0] || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
            </div>
            <div className="p-4">
          <h3 className="font-semibold text-lg mb-1 group-hover:text-gray-900 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge
            key={tech}
            variant="secondary"
            className="text-xs py-1 px-2 bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors flex items-center space-x-1"
              >
            <Image
              src={techLogos[tech] || "/placeholder.svg?height=20&width=20"}
              alt={tech}
              width={16}
              height={16}
            />
            <span>{tech}</span>
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="secondary" className="text-xs">
            +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
            </div>
          </motion.div>
        ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={closeProject}
            ref={modalRef}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="font-semibold text-xl">{selectedProject.title}</h3>
                <Button variant="ghost" size="icon" onClick={closeProject} className="rounded-full">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="relative h-[40vh] md:h-[50vh] bg-gray-900" {...handlers}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                {selectedProject.images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full h-10 w-10 shadow-md"
                      onClick={(e) => {
                        e.stopPropagation()
                        prevImage()
                      }}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full h-10 w-10 shadow-md"
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImage()
                      }}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </>
                )}

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? "bg-primary scale-110" : "bg-gray-300"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setCurrentImageIndex(index)
                      }}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="p-6 overflow-y-auto max-h-[30vh]">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {selectedProject.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs py-1 px-2 bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors flex items-center space-x-1"
                    >
                      <Image
                        src={techLogos[tech] || "/placeholder.svg?height=20&width=20"}
                        alt={tech}
                        width={16}
                        height={16}
                      />
                      <span>{tech}</span>
                    </Badge>
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{selectedProject.description}</p>

                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="default" className="rounded-full shadow-sm">
                    <a
                      href={`mailto:daniloeslawanmusic23@gmail.com?subject=Regarding your project: ${selectedProject.title}`}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Contact About This Project
                    </a>
                  </Button>

                  {selectedProject.liveUrl && (
                    <Button asChild variant="outline" className="rounded-full">
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live
                      </a>
                    </Button>
                  )}

                  {selectedProject.githubUrl && (
                    <Button asChild variant="outline" className="rounded-full">
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}