import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaDocker,
  FaNode,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiMysql,
  SiPostman,
  SiOpenai,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26", category: "front-end" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6", category: "front-end" },
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "#F7DF1E",
    category: "front-end",
  },
  { name: "React", icon: <FaReact />, color: "#61DAFB", category: "front-end" },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "#3178C6",
    category: "front-end",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "#38BDF8",
    category: "front-end",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "#000000",
    category: "front-end",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
    color: "#7952B3",
    category: "front-end",
  },
  { name: "Node.js", icon: <FaNode />, color: "#339933", category: "back-end" },
  {
    name: "Express",
    icon: <SiExpress />,
    color: "#000000",
    category: "back-end",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "#47A248",
    category: "back-end",
  },
  {
    name: "Prisma",
    icon: <SiPrisma />,
    color: "#0C344B",
    category: "back-end",
  },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1", category: "back-end" },
  {
    name: "APIs RESTful",
    icon: <TbApi />,
    color: "#f97316",
    category: "back-end",
  },
  {
    name: "Git/GitHub",
    icon: <FaGithub />,
    color: "#181717",
    category: "tools",
  },
  { name: "Docker", icon: <FaDocker />, color: "#2496ED", category: "tools" },
  { name: "Postman", icon: <SiPostman />, color: "#FF6C37", category: "tools" },
  { name: "IA", icon: <SiOpenai />, color: "#10A37F", category: "tools" },
];

const categories = ["all", "front-end", "back-end", "tools"];

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
    <section id="skills" className="py-16 sm:py-24 bg-secondary/30">
      <motion.div
        className="container mx-auto max-w-5xl p-4"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.3 }}
      >
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
            className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className="p-4 sm:p-6 rounded-lg flex items-center gap-4 bg-card border transition-transform duration-300 hover:scale-105"
                variants={itemVariant}
              >
                <div
                  className="text-3xl sm:text-4xl text-primary"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>

                <h3 className="font-semibold text-base sm:text-lg">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
