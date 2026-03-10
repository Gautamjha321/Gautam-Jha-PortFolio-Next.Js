"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <section className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container px-4 sm:px-6 lg:px-8 relative z-[2]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-emerald-300/10 via-gray-900 to-sky-400/10 border border-white/10 text-white py-10 px-6 sm:py-12 sm:px-8 md:px-14 rounded-3xl relative overflow-hidden shadow-[0_8px_48px_-12px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.05)]"
        >
          {/* Grain overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />
          {/* Ambient glow */}
          <div className="absolute -top-24 -left-24 w-48 h-48 md:w-64 md:h-64 bg-emerald-300/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 md:w-64 md:h-64 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center relative z-10">
            {/* Left: Info */}
            <div className="flex-1 min-w-0">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-emerald-300 mb-4">
                <span className="size-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                Available for opportunities
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight">
                Let&apos;s Build Something
                <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                  {" "}Amazing Together
                </span>
              </h2>
              <p className="text-sm md:text-base mt-3 text-white/50 max-w-sm leading-relaxed">
                Whether it&apos;s a SaaS product, AI feature, or a full-stack web app — I&apos;m ready to build it with you.
              </p>

              {/* Email */}
              <div className="mt-5 flex flex-col gap-2">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=jhagautam168@gmail.com&su=Hello%20Gautam%20-%20Portfolio%20Inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-emerald-300 transition-colors group"
                >
                  <span className="text-base flex-shrink-0">✉️</span>
                  <span className="font-mono group-hover:underline break-all">jhagautam168@gmail.com</span>
                </a>
                <p className="text-xs text-white/30 pl-7">⚡ Typically responds within 24 hours</p>
              </div>

              {/* Social links */}
              <div className="mt-4 flex flex-wrap gap-2">
                <a href="https://github.com/Gautamjha321" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all">
                  🐙 GitHub
                </a>
                <a href="https://www.linkedin.com/in/gautam-kumar-jha-77111634b" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all">
                  💼 LinkedIn
                </a>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="flex flex-col items-stretch sm:items-start md:items-center gap-3 flex-shrink-0 w-full sm:w-auto">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jhagautam168@gmail.com&su=Hello%20Gautam%20-%20Portfolio%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 h-14 rounded-xl gap-2 font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 shadow-[0_0_32px_-8px_rgba(110,231,183,0.5)] hover:shadow-[0_0_48px_-8px_rgba(110,231,183,0.7)] transition-shadow whitespace-nowrap"
                >
                  <span>Send Me a Message</span>
                  <ArrowUpRightIcon className="size-4 flex-shrink-0" />
                </motion.button>
              </a>
              <p className="text-xs text-white/30 text-center">No spam, I promise 🤝</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
