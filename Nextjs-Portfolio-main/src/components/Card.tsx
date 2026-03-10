"use client";
import grainImage from "@/assets/images/grain.jpg";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export const Card = ({
  className,
  children,
  ...other
}: ComponentPropsWithoutRef<typeof motion.div> & { children: React.ReactNode }) => {
  return (
    <motion.div
      className={twMerge(
        "bg-gray-900 rounded-3xl relative z-0 overflow-hidden",
        "after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-[1.5px] after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/10 after:pointer-events-none",
        "shadow-[0_8px_32px_-8px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.05)]",
        className
      )}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />
      {children}
    </motion.div>
  );
};
