"use client";
import vidzilly from "@/assets/images/VidZilly.png";
import lms from "@/assets/images/Lms.png";
import genup from "@/assets/images/GenUp.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { motion } from "framer-motion";

const portfolioProjects = [
  {
    title: "VidZilly — AI Short Video SaaS",
    company: "Personal Project",
    year: "2026",
    description:
      "An AI-powered short video SaaS platform built with Next.js and Supabase. Automatically generates scripts, images, voiceovers, captions, and renders videos. Users can schedule publishing to Instagram Reels & YouTube Shorts, with Razorpay payment integration.",
    link: "https://vid-zilly-com.vercel.app/",
    image: vidzilly,
    results: [
      { title: "AI Script, Image & Voiceover Generation" },
      { title: "Auto-Publish to Instagram & YouTube" },
      { title: "Razorpay Payment Integration" },
    ],
    tech: "Next.js · Supabase · Clerk · Gemini API · Razorpay",
  },
  {
    title: "Learning Management System",
    company: "Personal Project",
    year: "2025",
    description:
      "A full-stack LMS for online courses with Stripe payment integration for secure checkout and subscription management. Features user authentication, course catalog, video lessons, quizzes, progress tracking, and a fully responsive UI across desktop and mobile.",
    link: "https://lms-project-beta-eosin.vercel.app/",
    image: lms,
    results: [
      { title: "Stripe Payment & Subscription" },
      { title: "Video Lessons & Progress Tracking" },
      { title: "Responsive UI for All Devices" },
    ],
    tech: "React.js · Node.js · Express.js · Supabase · Stripe",
  },
  {
    title: "GenUP Nexus — AI Interview Prep",
    company: "Personal Project",
    year: "2025",
    description:
      "An AI-powered interview preparation platform using the MERN stack and Gemini API. Provides personalized question generation, real-time AI answer evaluation, progress tracking, targeted resource recommendations, and role-based access control.",
    link: "https://gen-up-nexus.vercel.app/",
    image: genup,
    results: [
      { title: "Personalized AI Question Generation" },
      { title: "Real-time Answer Evaluation & Feedback" },
      { title: "Role-based Access & Progress Tracking" },
    ],
    tech: "React.js · Node.js · Express.js · MongoDB · Gemini API",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={"Real-world Projects"}
          title={"Featured Projects"}
          description={
            "A selection of AI-powered and full-stack projects I've built from concept to deployment."
          }
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-12 md:gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-5 pt-6 pb-0 sm:px-8 sm:pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky overflow-hidden"
              style={{ top: `calc(64px + ${projectIndex * 32}px)` }}
            >
              {/* Two-col on lg+, single col on mobile */}
              <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16">
                {/* Text content */}
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-xs sm:text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl md:text-4xl mt-2 md:mt-5 leading-tight">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-3 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex items-start gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6 flex-shrink-0 mt-0.5" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  {project.tech && (
                    <p className="mt-4 text-xs text-emerald-300/70 font-mono leading-relaxed">{project.tech}</p>
                  )}
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-gray-950 h-11 w-full sm:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-6 md:mt-8 whitespace-nowrap"
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4 flex-shrink-0" />
                    </motion.button>
                  </a>
                </div>
                {/* Browser mockup image */}
                <div className="relative mt-6 lg:mt-0 -mx-5 sm:-mx-8 md:-mx-10 lg:mx-0">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.35 }}
                    className="w-full"
                  >
                    <div className="w-full rounded-t-2xl lg:rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-gray-900">
                      {/* Browser top bar */}
                      <div className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-gray-800 border-b border-white/10">
                        <div className="flex gap-1.5">
                          <span className="size-2.5 rounded-full bg-red-500/70 inline-block" />
                          <span className="size-2.5 rounded-full bg-yellow-400/70 inline-block" />
                          <span className="size-2.5 rounded-full bg-green-500/70 inline-block" />
                        </div>
                        <div className="flex-1 mx-2 bg-gray-700/80 rounded-md px-2 py-0.5 text-[10px] sm:text-[11px] text-white/30 truncate font-mono">
                          {project.link}
                        </div>
                      </div>
                      {/* Screenshot 16:9 */}
                      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
