"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, Mail, ExternalLink, Github, Maximize2, Minimize2 } from "lucide-react"
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
  "Socket.io": "/socketio.png?height=20&width=20",
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
  // {
  //   id: "project10",
  //   title: "ParseIt Grammar-Based Tokenizer",
  //   description:
  //     "Analyze arithmetic expressions and regex patterns, confirm validity, and reveal their construction according to context-free grammar.",
  //   technologies: ["React", "Vercel"],
  //   images: [
  //     "/projects/parseit-home.png?height=600&width=800",
  //     "/projects/parseit-playground-0.png?height=600&width=800",
  //     "/projects/parseit-playground-1.png?height=600&width=800",
  //     "/projects/parseit-playground-2.png?height=600&width=800",
  //   ],
  //   liveUrl: "https://parseit.danengine.tech",
  //   featured: true,
  // },
  {
    id: "project9",
    title: "CCIS Quiz Multiplayer",
    description:
      "A quiz platform similar to Kahoot, where players can join using a QR code. The server handles player synchronization, and participants can answer questions on their devices in real-time.",
    technologies: ["Next.js", "Socket.io", "Node.js", "AWS"],
    images: [
      "/projects/ccis-quiz-load.png?height=600&width=800",
      "/projects/ccis-quiz-menu.png?height=600&width=800",
      "/projects/ccis-quiz-question.png?height=600&width=800",
      "/projects/ccis-quiz-complete.png?height=600&width=800",
    ],
    liveUrl: "https://ccis.danengine.tech/adminonly",
    featured: true,
  },
  {
    id: "project8",
    title: "Event Registration System",
    description:
      "A web-based Event Registration System with customizable forms for attendees. After form submission, organizers verify payments via an admin panel. Once approved, a confirmation email with a unique QR code is sent as the event pass. The admin panel includes a built-in QR scanner to validate and ensure one-time use of each code on event day.",
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
    images: ["/projects/attendance_monitoring.png?height=600&width=800"],
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
    technologies: ["Unity", "C#", "Socket.io", "Node.js", "MySQL", "AWS"],
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
    featured: false,
  },
  {
    id: "project1",
    title: "Blox Easy Web Game",
    description:
      "I made this game back in 2018 when I was 13 years old. It's a social avatar networking site, very similar to Roblox. You can dress up your character, buy limited items, and recharge Bux.",
    technologies: ["PHP", "MySQL"],
    images: [
      "/projects/bloxeasy-main.png?height=PHP600&width=800",
      "/projects/bloxeasy-main2.png?height=PHP600&width=800",
      "/projects/bloxeasy-main3.png?height=600&width=800",
      "/projects/bloxeasy-main4.png?height=600&width=800",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const modalRef = useRef<HTMLDivElement>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [isImageFullScreen, setIsImageFullScreen] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 })

  // Add this useEffect to handle URL query parameters
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const projectParam = params.get("project")

      if (projectParam) {
        // Find the project that matches the title (case insensitive)
        const project = projects.find((p) => p.title.toLowerCase() === decodeURIComponent(projectParam).toLowerCase())

        if (project) {
          openProject(project)
        }
      }
    }
  }, [])

  const openProject = (project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    setImageLoaded(false)
    setImageDimensions({ width: 0, height: 0 })
    document.body.style.overflow = "hidden"

    // Update URL with project parameter without refreshing the page
    const url = new URL(window.location.href)
    url.searchParams.set("project", project.title)
    window.history.pushState({}, "", url)
  }

  const closeProject = () => {
    setSelectedProject(null)
    setIsImageFullScreen(false)
    document.body.style.overflow = "auto"

    // Remove project parameter from URL
    const url = new URL(window.location.href)
    url.searchParams.delete("project")
    window.history.pushState({}, "", url)
  }

  const toggleImageFullScreen = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsImageFullScreen(!isImageFullScreen)
  }

  const nextImage = () => {
    if (!selectedProject) return
    setImageLoaded(false)
    setImageDimensions({ width: 0, height: 0 })
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length)
  }

  const prevImage = () => {
    if (!selectedProject) return
    setImageLoaded(false)
    setImageDimensions({ width: 0, height: 0 })
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
  }

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.target as HTMLImageElement
    setImageDimensions({
      width: img.naturalWidth,
      height: img.naturalHeight,
    })
    setImageLoaded(true)
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
                    unoptimized
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
            <h3 className="text-sm uppercase tracking-wider text-gray-500 font-medium text-center">All Projects</h3>
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
                    unoptimized
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
          <>
            {/* Regular modal */}
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
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center p-4 border-b">
                  <h3 className="font-semibold text-xl">{selectedProject.title}</h3>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleImageFullScreen}
                      className="rounded-full"
                      aria-label="View image fullscreen"
                    >
                      <Maximize2 className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={closeProject} className="rounded-full">
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <div className="relative bg-gray-100 w-full flex-grow flex items-center justify-center" {...handlers}>
                    <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <div className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-gray-100">
                      <img
                        src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                        className={`max-h-full max-w-full object-contain transition-opacity duration-300 ${
                        imageLoaded ? "opacity-100" : "opacity-0"
                        }`}
                        onLoad={handleImageLoad}
                      />
                      </div>
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

                <div className="p-6 overflow-y-auto">
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

            {/* Fullscreen image overlay */}
            <AnimatePresence>
              {isImageFullScreen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black z-[60] flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsImageFullScreen(false)
                  }}
                >
                  <div className="absolute top-4 right-4 z-10 flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsImageFullScreen(false)
                      }}
                      className="rounded-full bg-black/50 hover:bg-black/70 text-white"
                    >
                      <Minimize2 className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation()
                        closeProject()
                      }}
                      className="rounded-full bg-black/50 hover:bg-black/70 text-white"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="relative w-full h-full flex items-center justify-center" {...handlers}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative max-w-[95%] max-h-[95%] flex items-center justify-center"
                      >
                        <img
                          src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                          alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                          className="max-w-full max-h-full object-contain"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </motion.div>
                    </AnimatePresence>

                    {selectedProject.images.length > 1 && (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full h-12 w-12 shadow-md"
                          onClick={(e) => {
                            e.stopPropagation()
                            prevImage()
                          }}
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full h-12 w-12 shadow-md"
                          onClick={(e) => {
                            e.stopPropagation()
                            nextImage()
                          }}
                        >
                          <ChevronRight className="h-6 w-6" />
                        </Button>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}