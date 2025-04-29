"use client";
import React from "react";

import { motion } from "motion/react";
import { LampContainer } from "./ui/lamp";
import { skills } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Skills = () => {
  return (
    <div className="flex flex-col  items-center justify-center py-20">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight capitalize text-transparent md:text-6xl">
        Core competencies
      </motion.h1>
      <LampContainer>
        <InfiniteMovingCards>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex  items-center justify-center gap-4 p-4">
              <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
              {/* <h2 className="text-lg font-semibold text-white">{skill.name}</h2> */}
            </div>
          ))}
        </InfiniteMovingCards>
      </LampContainer>
    </div>
  );
};

export default Skills;
