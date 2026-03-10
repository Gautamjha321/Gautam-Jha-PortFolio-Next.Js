"use client"
import Link from "next/link";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import { SplineModel } from "@/components/SplineModel";
import { motion } from "framer-motion";

export const HeroSection = () => {
  // Handle smooth scrolling for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 20, // Adjust for header height
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      className="py-40 md:py-72 lg:py-72 relative z-0 overflow-x-clip"
      id="hero"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5 pointer-events-none"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={500}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg  -emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-20 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container relative mt-28 md:mt-auto z-[2] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-full h-[350px] md:h-[400px] -top-52 md:-top-60 absolute -z-10 rounded-br-full ml-16 overflow-hidden">
            <SplineModel />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-950/80 border border-white/10 backdrop-blur-sm px-4 py-2 inline-flex items-center gap-3 rounded-xl shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_4px_16px_-4px_rgba(0,0,0,0.5)]"
          >
            <div className="relative flex-shrink-0">
              <div className="bg-emerald-500 size-2.5 rounded-full relative z-10" />
              <div className="bg-emerald-400 absolute inset-0 animate-ping-large rounded-full" />
            </div>
            <div className="text-xs sm:text-sm font-medium text-white/80">
              Open to work &amp; new projects
            </div>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
          {/* Name greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-center text-white/50 text-sm sm:text-base mb-3 tracking-widest uppercase font-medium"
          >
            Hi, I&apos;m <span className="text-emerald-300 font-semibold">Gautam Kumar Jha</span> 👋
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center tracking-wide leading-tight"
          >
            <span className="block">Building <span className="bg-gradient-to-r from-emerald-300 via-sky-400 to-emerald-300 bg-clip-text text-transparent bg-[length:200%_100%] animate-text-shimmer">Scalable</span></span>
            <span className="block">Full-Stack &amp; AI Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 sm:mt-6 text-center text-white/60 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            B.Tech student at Centurion University &amp; Web Dev Intern at VidHu EduTech.
            I build AI-powered SaaS products, LMS platforms, and full-stack apps with
            React, Next.js &amp; Node.js.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-8 flex flex-wrap justify-center gap-6"
          >
            {[
              { value: "3+", label: "Projects Shipped" },
              { value: "1", label: "Internship" },
              { value: "7.5", label: "GPA" },
              { value: "2026", label: "Graduating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-xs text-white/40 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center mt-8 sm:mt-10 gap-4 w-full max-w-2xl mx-auto px-4"
        >
          <Link
            href="#projects"
            onClick={(e) => handleAnchorClick(e, "projects")}
            className="w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/15 px-8 h-12 rounded-xl group cursor-pointer hover:border-emerald-300/40 transition-colors whitespace-nowrap"
            >
              <span className="font-semibold group-hover:text-emerald-300 transition-colors whitespace-nowrap">Explore My Work</span>
              <ArrowDown className="size-4 flex-shrink-0 group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </Link>
          <Link
            download
            href="/Gautam-Jha-Resume(Software).pdf"
            className="w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white bg-white text-gray-900 h-12 px-8 rounded-xl group cursor-pointer whitespace-nowrap"
            >
              <span className="group-hover:rotate-12 transition-transform flex-shrink-0">📥</span>
              <span className="font-semibold whitespace-nowrap">Download CV</span>
            </motion.button>
          </Link>
          <a href="https://github.com/Gautamjha321" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/15 px-8 h-12 rounded-xl group cursor-pointer hover:border-white/40 transition-colors whitespace-nowrap"
            >
              <span className="text-lg flex-shrink-0">🐙</span>
              <span className="font-semibold text-white/70 group-hover:text-white transition-colors whitespace-nowrap">GitHub</span>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
