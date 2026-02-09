import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="section-container text-center !py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Get In Touch
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, my inbox is always open!
        </p>

        <a
          href="mailto:kilarisivaprasad3083@gmail.com"
          className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity mb-10"
        >
          Say Hello
        </a>

        <div className="flex items-center justify-center gap-6 mb-8">
          <a
            href="https://github.com/sivaprasadkilari/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/siva-prasad-kilari/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:kilarisivaprasad3083@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={20} />
          </a>
          <a
            href="tel:+916281525411"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone size={20} />
          </a>
        </div>

        <p className="text-xs text-muted-foreground font-mono">
          Designed & Built by Siva Prasad Kilari
        </p>
      </div>
    </footer>
  );
};

export default Footer;
