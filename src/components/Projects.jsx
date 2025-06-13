import { motion } from "motion/react"
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const projects = [
  {
    id: 1,
    title: "Brainwave",
    description:
      "Plataforma de IA para geração de ideias criativas em tempo real.",
    image: "/projects/Projeto-1.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://nandosabino.github.io/brainwave/",
    githubUrl: "https://github.com/nandosabino/brainwave",
  },
  {
    id: 2,
    title: "Items Store",
    description: "Loja virtual desenvolvida com tecnologias modernas.",
    image: "/projects/Projeto-2.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/nandosabino/devclub-store",
  },
  {
    id: 3,
    title: "Twitter",
    description: "Clone funcional do Twitter com feed, curtidas e comentários.",
    image: "/projects/Projeto-3.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://nandosabino.github.io/twitter-clone/",
    githubUrl: "https://github.com/nandosabino/twitter-clone",
  },
  {
    id: 4,
    title: "Carrinho de Compras",
    description: "Projeto completo de carrinho de compras com React e Node.",
    image: "/projects/Projeto-4.png",
    tags: ["React", "SCSS", "Express", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Apple Store",
    description: "Landing page inspirada no site oficial da Apple.",
    image: "/projects/Projeto-5.png",
    tags: ["React", "TailwindCSS", "GSAP", "Three.js"],
    demoUrl: "https://apple-website-jg11.vercel.app",
    githubUrl: "https://github.com/nandosabino/apple-website",
  },
  {
    id: 6,
    title: "Lista de Tarefas",
    description: "Organize suas tarefas de forma simples e eficiente.",
    image: "/projects/Projeto-6.png",
    tags: ["React", "Node.js", "Express"],
    demoUrl: "https://nandosabino.github.io/todo-list/",
    githubUrl: "https://github.com/nandosabino/todo-list",
  },
];

// 🔹 Componente de cartão individual
const ProjectCard = ({ project }) => (
  <motion.div
    className="group bg-card rounded-lg overflow-hidden shadow-xs hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
    variants={cardVariants}
    whileHover={{ scale: 1.03 }}
  >
    <div className="h-48 overflow-hidden">
      <img
        src={project.image}
        alt={`Imagem do projeto ${project.title}`}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
        {project.description}
      </p>

      <div className="flex justify-between items-center">
        <div className="flex space-x-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver demonstração do projeto ${project.title}`}
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            <FaExternalLinkAlt size={20} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver repositório no GitHub de ${project.title}`}
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            <FiGithub size={20} />
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Projetos <span className="text-primary"> em Destaque</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Confira alguns dos meus projetos desenvolvidos com foco em
          performance, design e experiência do usuário.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <motion.a
            href="https://github.com/nandosabino"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            aria-label="Ver todos os projetos no meu GitHub"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Veja meu GitHub
            <FaArrowRight
              size={16}
              className="transform transition-transform duration-300 ease-out group-hover:translate-x-1"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
};
