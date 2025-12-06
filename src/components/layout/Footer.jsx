import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-deep-space pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-display font-bold text-starlight mb-4">Jordan <span className="text-electric-violet">Moreira</span></h2>
            <p className="text-muted-mist max-w-sm">
              Créer des expériences numériques qui allient excellence esthétique et précision technique.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-muted-mist">
              <li><a href="/" className="hover:text-electric-violet transition-colors">Accueil</a></li>
              <li><a href="/projects" className="hover:text-electric-violet transition-colors">Projets</a></li>
              <li><a href="/about" className="hover:text-electric-violet transition-colors">À Propos</a></li>
              <li><a href="/contact" className="hover:text-electric-violet transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Réseaux</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/jolebowski"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/5 rounded-full hover:bg-electric-violet hover:text-white transition-all duration-300 text-muted-mist"
                aria-label="Voir mon profil GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/iamjomoreira/"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/5 rounded-full hover:bg-electric-violet hover:text-white transition-all duration-300 text-muted-mist"
                aria-label="Voir mon profil LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-mist">
          <p>© {new Date().getFullYear()} Jordan Moreira. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
