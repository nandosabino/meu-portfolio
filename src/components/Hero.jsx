import { motion } from "motion/react";
import { FaArrowDown } from "react-icons/fa";

import { fadeInUp, bounceAnimation } from "@/lib/motionConfig";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <motion.div
        className="container max-w-4xl mx-auto text-center z-10 space-y-6"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.4 }} // Delay somente na entrada da seção
      >
        <motion.h1 variants={itemVariant} className="text-4xl md:text-6xl font-bold tracking-tight">
          Olá, eu sou <span className="text-primary">Fernando</span>{" "}
          <span className="text-gradient ml-2">Sabino</span>
        </motion.h1>

        <motion.p
          variants={itemVariant}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Sou desenvolvedor FullStack apaixonado por criar interfaces intuitivas
          e modernas. Minha missão é transformar ideias em experiências digitais
          funcionais.
        </motion.p>

        <motion.div variants={itemVariant} className="pt-4">
          <a href="#projects" className="cosmic-button" aria-label="Veja meus projetos">
            Veja meu trabalho
          </a>
        </motion.div>

        <motion.div
          variants={itemVariant}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <motion.span {...bounceAnimation} className="text-sm text-muted-foreground mb-2">
            Rolar
          </motion.span>
          <motion.div {...bounceAnimation}>
            <FaArrowDown className="h-5 w-5 text-primary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
