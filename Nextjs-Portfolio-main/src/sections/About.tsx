"use client"
import Image from "next/image"
import { Card } from "@/components/Card"
import { SectionHeader } from "@/components/SectionHeader"
import bookImage from "@/assets/images/book-cover.png"
import JavascriptIcon from "@/assets/icons/js.svg"
import HTMLIcon from "@/assets/icons/html5.svg"
import CSSIcon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import GithubIcon from "@/assets/icons/github.svg"
import GitIcon from "@/assets/icons/git.svg"
import NextJsIcon from "@/assets/icons/nextjs.svg"
import NodeJsIcon from "@/assets/icons/nodejs.svg"
import CppIcon from "@/assets/icons/cpp.svg"
import TailwindIcon from "@/assets/icons/tailwind.svg"
import TypescriptIcon from "@/assets/icons/typescript.svg"
import VSCodeIcon from "@/assets/icons/vscode.svg"
import profileImage from "@/assets/images/gautam.png"
import { CardHeader } from "@/components/CardHeader"
import { ToolboxItems } from "@/components/ToolboxItems"
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "Html5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "TypeScript",
    iconType: TypescriptIcon,
  },
  {
    title: "Git",
    iconType: GitIcon,
  },
  {
    title: "C++",
    iconType: CppIcon,
  },
  {
    title: "NodeJs",
    iconType: NodeJsIcon,
  },
  {
    title: "NextJs",
    iconType: NextJsIcon,
  },
  {
    title: "Tailwind",
    iconType: TailwindIcon,
  },
  {
    title: "VSCode",
    iconType: VSCodeIcon,
  },
]

const hobbies = [
  { title: "Cricket", emoji: "🏏", left: "4%", top: "4%" },
  { title: "Full-Stack Dev", emoji: "💻", left: "48%", top: "4%" },
  { title: "AI & ML", emoji: "🤖", left: "4%", top: "38%" },
  { title: "Gaming", emoji: "🎮", left: "55%", top: "35%" },
  { title: "Comp. Coding", emoji: "🧩", left: "28%", top: "22%" },
  { title: "Open Source", emoji: "🌐", left: "8%", top: "68%" },
  { title: "Problem Solving", emoji: "🧠", left: "42%", top: "65%" },
]

export const AboutSection = () => {
  const constrainRef = useRef(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <section className="py-16 lg:py-28" id="about">
      <div className="container px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About Me"
          title="The Developer Behind the Code"
          description="B.Tech student, Full-Stack Developer, and AI enthusiast from Bihar, India — building real products with modern tech."
        />
        <div className="mt-12 md:mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1 overflow-hidden group"
            >
              {/* Dark Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>

              {/* Geometric Halo (Removed as per user request) */}

              {/* Chromatic Prism Effect */}
              <div className="h-full w-full relative flex items-end justify-center">
                {/* Red Channel (Left Shift) */}
                <div className="absolute inset-0 flex items-end justify-center mix-blend-screen opacity-0 group-hover:opacity-70 transition-opacity duration-300 group-hover:translate-x-[-4px] pointer-events-none">
                  <Image
                    src={profileImage || "/placeholder.svg"}
                    alt="Chromatic Red"
                    className="h-[90%] w-auto object-cover object-bottom opacity-80"
                    style={{ filter: 'sepia(100%) saturate(300%) hue-rotate(-50deg)' }}
                  />
                </div>

                {/* Blue Channel (Right Shift) */}
                <div className="absolute inset-0 flex items-end justify-center mix-blend-screen opacity-0 group-hover:opacity-70 transition-opacity duration-300 group-hover:translate-x-[4px] pointer-events-none">
                  <Image
                    src={profileImage || "/placeholder.svg"}
                    alt="Chromatic Blue"
                    className="h-[90%] w-auto object-cover object-bottom opacity-80"
                    style={{ filter: 'sepia(100%) saturate(300%) hue-rotate(180deg)' }}
                  />
                </div>

                {/* Main Image */}
                <Image
                  src={profileImage || "/placeholder.svg"}
                  alt="Gautam Kumar Jha - Professional Profile"
                  className="h-[90%] w-auto object-cover object-bottom relative z-10 grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Film Grain Overlay */}
              <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
            </Card>
            <Card
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-2 lg:col-span-2"
            >
              <CardHeader
                title="My Toolbox"
                description="The technologies and tools I use to craft modern digital experiences."
              />
              <ToolboxItems items={toolboxItems} itemsWrapperClassName="animate-move-left [animation-duration:40s]" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:20s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-[380px] sm:h-[400px] p-0 flex flex-col md:col-span-2 lg:col-span-2"
            >
              <CardHeader
                title="Beyond the Code"
                description="My interests, passions, and hobbies outside the terminal."
                className="px-6 py-5"
              />
              <div className="relative flex-1 min-h-0" ref={constrainRef}>
                {isMounted ? hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-1.5 px-3 sm:px-5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1 sm:py-1.5 absolute hover:cursor-grab select-none"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constrainRef}
                    dragElastic={0.2}
                    whileDrag={{ scale: 1.12, cursor: "grabbing", zIndex: 50 }}
                    dragMomentum={false}
                    whileHover={{ scale: 1.08 }}
                  >
                    <span className="font-medium text-gray-950 text-xs sm:text-sm whitespace-nowrap">{hobby.title}</span>
                    <span className="text-sm sm:text-base">{hobby.emoji}</span>
                  </motion.div>
                )) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 text-sm">Loading interests...</span>
                  </div>
                )}
              </div>
            </Card>
            <Card
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-2 lg:col-span-1 p-6 flex flex-col gap-4"
            >
              <CardHeader title="Education & Experience" description="My academic and professional journey." />
              <div className="flex flex-col gap-3 mt-1">
                {/* Internship */}
                <div className="flex gap-3 items-start">
                  <div className="mt-1 size-8 rounded-full bg-emerald-300/10 border border-emerald-300/20 flex items-center justify-center flex-shrink-0 text-sm">💼</div>
                  <div>
                    <p className="text-sm font-semibold text-white">Web Dev Intern</p>
                    <p className="text-xs text-emerald-300">VidHu EduTech Pvt. Ltd.</p>
                    <p className="text-xs text-white/40">Feb 2024 – May 2024 · Remote</p>
                  </div>
                </div>
                {/* Education */}
                <div className="flex gap-3 items-start">
                  <div className="mt-1 size-8 rounded-full bg-sky-300/10 border border-sky-300/20 flex items-center justify-center flex-shrink-0 text-sm">🎓</div>
                  <div>
                    <p className="text-sm font-semibold text-white">B.Tech — ECE</p>
                    <p className="text-xs text-sky-300">Centurion University, Odisha</p>
                    <p className="text-xs text-white/40">2022 – 2026 · GPA: 7.5</p>
                  </div>
                </div>
                {/* Location */}
                <div className="flex gap-3 items-start">
                  <div className="mt-1 size-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-sm">📍</div>
                  <div>
                    <p className="text-sm font-semibold text-white">Munger, Bihar — India</p>
                    <p className="text-xs text-white/40">Open to remote opportunities</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
