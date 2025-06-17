import { projects } from "@/data/projects";
import { motion } from "motion/react";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const containerVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.8, 0.25, 1],
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ProjectCard = ({ project }) => (
  <motion.div
    className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300"
    variants={itemVariant}
    whileHover={{ scale: 1.02 }}
  >
    <div className="aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={`Imagem do projeto ${project.title}`}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        aria-hidden="true"
      />
    </div>

    <div className="p-5">
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
        {project.description}
      </p>

      <div className="flex gap-4">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver demonstração do projeto ${project.title}`}
          className="text-foreground/80 hover:text-primary transition"
        >
          <FaExternalLinkAlt size={18} />
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver repositório no GitHub de ${project.title}`}
          className="text-foreground/80 hover:text-primary transition"
        >
          <FiGithub size={20} />
        </a>
      </div>
    </div>
  </motion.div>
);

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Projetos <span className="text-primary"> em Destaque</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Confira alguns dos meus projetos desenvolvidos com foco em
            performance, design e experiência do usuário.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.a
              href="https://github.com/nandosabino"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition"
              variants={itemVariant}
            >
              Veja meu GitHub
              <FaArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
