import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SEO from '../components/SEO';
import Button from '../components/design-system/Button';

function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const experience = [
    { year: '2023-2025', title: 'Développeur React / React Native', company: 'PMU', description: 'Développement d\'applications web et mobiles complexes pour le leader des paris hippiques.' },
    { year: '2021-2022', title: 'Développeur React Native', company: 'Française des Jeux (FDJ)', description: 'Maintenance et évolution de l\'application Parions Sport Point de Vente.' },
    { year: '2019-2021', title: 'Développeur Full Stack', company: 'Reezocar', description: 'Développement de nouvelles fonctionnalités sur la plateforme e-commerce de véhicules d\'occasion.' },
  ];

  return (
    <>
      <SEO
        title="À propos | Jordan Moreira"
        description="En savoir plus sur Jordan Moreira, Développeur Full-Stack passionné par la création d'expériences digitales exceptionnelles."
        url="/about"
      />

      <div ref={containerRef} className="min-h-screen relative overflow-hidden">

        {/* Hero Section */}
        <section className="relative px-6 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 container mx-auto items-center min-h-[90vh]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <div className="inline-block mb-4 px-3 py-1 rounded-full border border-electric-violet/30 bg-electric-violet/10 backdrop-blur-md">
              <span className="text-sm font-medium text-electric-violet tracking-wide uppercase">À Propos</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-starlight leading-tight">
              Au-delà du <br />
              <span className="text-gradient">Code.</span>
            </h1>
            <p className="text-lg text-muted-mist mb-8 leading-relaxed max-w-xl">
              Je suis Jordan, un développeur qui fait le lien entre l'ingénierie et le design.
              Je suis convaincu que les meilleurs produits numériques naissent d'une compréhension approfondie de la faisabilité technique et de l'expérience utilisateur.
            </p>
            <div className="flex gap-4">
              <Button variant="primary" onClick={() => window.location.href = '/contact'}>
                Me Contacter
              </Button>
            </div>
          </motion.div>

          <motion.div
            style={{ y }}
            className="relative h-[600px] w-full rounded-2xl overflow-hidden hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent z-10" />
            <img
              src="/assets/images/Photo_MJ.jpg"
              alt="Portrait de Jordan"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>

        {/* Experience Section */}
        <section className="py-24 relative bg-midnight/50">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold mb-16 text-center text-starlight"
            >
              Expérience
            </motion.h2>

            <div className="space-y-12 relative">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 md:text-right pt-2">
                    <span className={`text-electric-violet font-mono text-sm ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} block`}>{exp.year}</span>
                  </div>

                  <div className="hidden md:flex items-start justify-center relative min-w-[20px]">
                    <div className="w-4 h-4 rounded-full bg-midnight border-2 border-electric-violet z-10" />
                  </div>

                  <div className="flex-1 pb-12 border-l border-white/10 md:border-none pl-8 md:pl-0">
                    <div className={`glass-card p-6 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <h4 className="text-muted-mist text-sm mb-4">{exp.company}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default About;

