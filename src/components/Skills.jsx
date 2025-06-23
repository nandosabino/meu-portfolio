import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaDocker, FaNode, FaBootstrap,
} from "react-icons/fa";
import {
  SiTypescript, SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb,
  SiPrisma, SiMysql, SiPostman, SiOpenai,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, category: "frontend" },
  { name: "CSS", icon: <FaCss3Alt />, category: "frontend" },
  { name: "JavaScript", icon: <FaJs />, category: "frontend" },
  { name: "React", icon: <FaReact />, category: "frontend" },
  { name: "TypeScript", icon: <SiTypescript />, category: "frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "frontend" },
  { name: "Next.js", icon: <SiNextdotjs />, category: "frontend" },
  { name: "Bootstrap", icon: <FaBootstrap />, category: "frontend" },
  { name: "Node.js", icon: <FaNode />, category: "backend" },
  { name: "Express", icon: <SiExpress />, category: "backend" },
  { name: "MongoDB", icon: <SiMongodb />, category: "backend" },
  { name: "Prisma", icon: <SiPrisma />, category: "backend" },
  { name: "MySQL", icon: <SiMysql />, category: "backend" },
  { name: "APIs RESTful", icon: <TbApi />, category: "backend" },
  { name: "Git/GitHub", icon: <FaGithub />, category: "tools" },
  { name: "Docker", icon: <FaDocker />, category: "tools" },
  { name: "Postman", icon: <SiPostman />, category: "tools" },
  { name: "IA", icon: <SiOpenai />, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const containerVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.8, 0.25, 1],
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl p-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Minhas <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize border",
                activeCategory === category
                  ? "bg-primary text-primary-foreground ring-2 ring-primary border-transparent"
                  : "bg-secondary/70 text-foreground hover:bg-secondary border-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariant}
                className="bg-card border border-secondary/40 p-6 rounded-lg shadow-md flex items-center gap-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-primary"
              >
                <div className="text-4xl text-primary">{skill.icon}</div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
