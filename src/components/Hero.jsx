import { motion } from "motion/react"
import { FaArrowDown } from "react-icons/fa";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Olá, eu sou <span className="text-primary">Fernando</span>{" "}
          <span className="text-gradient ml-2">Sabino</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Sou desenvolvedor FullStack apaixonado por criar interfaces intuitivas
          e modernas. Minha missão é transformar ideias em experiências digitais
          funcionais.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: "easeInOut" }}
          className="pt-4"
        >
          <a href="#projects" className="cosmic-button">
            Veja meu trabalho
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
        >
          <span className="text-sm text-muted-foreground mb-2">Rolar</span>
          <FaArrowDown className="h-5 w-5 text-primary" />
        </motion.div>
      </div>
    </section>
  );
};
