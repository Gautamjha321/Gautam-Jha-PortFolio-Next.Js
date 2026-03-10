"use client";
import Link from "next/link";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { ElasticLine } from "@/components/ElasticLine";
import { motion } from "framer-motion";

const footerLinks = [
  { title: "Github", href: "https://github.com/Gautamjha321" },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/gautam-kumar-jha-77111634b",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/20 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container px-4 sm:px-6 lg:px-8 relative">
        <ElasticLine />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-8 flex flex-col md:flex-row md:justify-between items-center gap-6 relative z-20"
        >
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} Gautam Kumar Jha. All rights reserved.
            </div>
            <div className="text-white/20 text-xs">
              Built with Next.js · Tailwind CSS · Framer Motion
            </div>
          </div>
          <nav className="flex items-center gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                target="_blank"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 text-sm text-white/50 hover:text-emerald-300 hover:border-emerald-300/30 transition-all duration-200"
              >
                <motion.span
                  className="font-medium"
                  whileHover={{ color: "#6ee7b7" }}
                  transition={{ duration: 0.2 }}
                >
                  {link.title}
                </motion.span>
                <ArrowUpRightIcon className="size-3 opacity-50" />
              </Link>
            ))}
          </nav>
        </motion.div>
      </div>
    </footer>
  );
};
