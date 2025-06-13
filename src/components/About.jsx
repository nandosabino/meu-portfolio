import { motion } from "framer-motion";
import { IoMailOutline } from "react-icons/io5";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
  },
};

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariant} className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
              Sobre <span className="text-primary">Mim</span>
            </h2>

            <p className="text-muted-foreground mb-4 leading-relaxed text-base md:text-lg">
              Olá! Sou um desenvolvedor web apaixonado por tecnologia, design e
              boas experiências digitais. Tenho experiência com{" "}
              <strong>React</strong>, <strong>Node.js</strong> e{" "}
              <strong>Banco de Dados</strong>, criando interfaces modernas e
              aplicações eficientes.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed text-base md:text-lg">
              Meu foco é desenvolver soluções que unem performance,
              acessibilidade e um design envolvente. Sempre em busca de evolução
              constante para entregar resultados melhores a cada projeto.
            </p>

            <div className="space-y-3 mb-6 text-muted-foreground text-sm md:text-base">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary" size={16} />
                <span>Brasil</span>
              </div>
              <div className="flex items-center gap-2">
                <IoMailOutline className="text-primary" size={16} />
                <span>sabinofernando05@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-primary" size={16} />
                <span>+55 (85) 98973-2377</span>
              </div>
            </div>

            <motion.div className="flex gap-4 mb-8" variants={itemVariant}>
              <a
                href="https://linkedin.com/in/nandosabino"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-foreground/80 hover:text-primary transition"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://github.com/nandosabino"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-foreground/80 hover:text-primary transition"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://instagram.com/seuusuario"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-foreground/80 hover:text-primary transition"
              >
                <FaInstagram size={20} />
              </a>
            </motion.div>

            <motion.a
              href="/meu-curriculo.pdf"
              download
              variants={itemVariant}
              aria-label="Baixar meu currículo"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white hover:shadow-lg transition group"
            >
              Confira meu CV
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariant}
            whileHover={{ scale: 1.02 }}
            className="w-full h-full rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src="/foto-de-perfil-teste.png"
              alt="Minha foto de perfil"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
