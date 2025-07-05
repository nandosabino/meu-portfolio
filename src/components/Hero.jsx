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
      role="region"
      aria-labelledby="hero-title"
      className="relative h-screen flex flex-col items-center justify-center px-4"
    >
      <motion.div
        className="container max-w-4xl mx-auto text-center z-10 space-y-6"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.4 }}
      >
        <motion.h1
          id="hero-title"
          variants={itemVariant}
          className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto"
        >
          Olá, eu sou <span className="text-primary">Fernando</span>{" "}
          <span className="text-gradient ml-2">Sabino</span>
        </motion.h1>

        <motion.p
          variants={itemVariant}
          className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Sou desenvolvedor FullStack apaixonado por criar interfaces intuitivas
          e modernas. Minha missão é transformar ideias em experiências digitais
          funcionais.
        </motion.p>

        <motion.div variants={itemVariant} className="pt-4 mb-20 md:mb-0">
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-6 py-3 font-semibold text-primary border border-primary rounded-xl overflow-hidden transition duration-300 hover:text-white"
            aria-label="Veja meus projetos"
          >
            <span className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out z-0"></span>
            <span className="relative z-10">Veja meu trabalho</span>
          </a>
        </motion.div>

        <motion.div
          variants={itemVariant}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <motion.span
            {...bounceAnimation}
            className="text-sm text-muted-foreground mb-2"
          >
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
