import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const mySocials = [
  { href: "https://github.com", icon: <FaGithub /> },
  { href: "https://linkedin.com", icon: <FaLinkedin /> },
  { href: "https://www.instagram.com/_nandosabino/", icon: <FaInstagram /> },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-[hsl(var(--border))] text-[hsl(var(--foreground))] bg-[hsl(var(--background))] py-8 text-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left">
          <a href="#" className="hover:text-[hsl(var(--primary))] transition">
            Termos & Condições
          </a>
          <a href="" className="over:text-[hsl(var(--primary))] transition">
            Políticas de Privacidade
          </a>
        </div>

        <div className="flex gap-5 text-xl">
          {mySocials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="text-center md:text-right text-xs opacity-70 text-[hsl(var(--foreground))]">
          <p>© {new Date().getFullYear()} Ali. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
