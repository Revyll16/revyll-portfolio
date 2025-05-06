import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaTerminal,
  FaRobot,
  FaEnvelope,
  FaBars,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import {
  SiLinux,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
} from 'react-icons/si';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const App = () => {
  const [showChat, setShowChat] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm('service_akiovyl', 'template_861c1r9', e.currentTarget, 'jx-7Tt94OmWcywP78')
      .then(
        () => {
          alert('Message envoyé avec succès !');
        },
        (error) => {
          alert('Une erreur est survenue. Essaie encore.');
          console.error(error.text);
        },
      );

    e.currentTarget.reset(); // vide le formulaire après envoi
  };

  const projects = [
    {
      name: 'Portfolio V1',
      image: '/projects/portfolio-v1.png',
      stack: ['React', 'TailwindCSS'],
      github: 'https://github.com/Revyll16/portfolio-v1',
      demo: 'https://revyll.dev',
    },
    {
      name: 'API NodeJS Blog',
      image: '/projects/node-blog.png',
      stack: ['Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/Revyll16/node-blog',
      demo: 'https://revyll-node-blog.netlify.app',
    },
    {
      name: 'AI Prompt App',
      image: '/projects/ai-prompter.png',
      stack: ['Next.js', 'Tailwind', 'MongoDB'],
      github: 'https://github.com/Revyll16/ai-prompter',
      demo: 'https://promptify-ai.netlify.app',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-purple-900 to-black text-white relative overflow-hidden">
      {/* Navbar */}
      <nav className="w-full px-6 py-4 bg-black/60 backdrop-blur-md fixed top-0 left-0 z-50 flex justify-between items-center border-b border-white/10">
        <h1 className="text-2xl font-bold text-pink-500">Revyll.dev</h1>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
            <FaBars />
          </button>
        </div>
        <ul
          className={`md:flex space-x-6 text-sm md:text-base ${menuOpen ? 'block absolute top-full left-0 w-full bg-black text-center py-4 md:static md:w-auto md:py-0' : 'hidden md:flex'}`}
        >
          <li className="py-2 md:py-0">
            <a href="#about" className="hover:text-pink-400 transition">
              À propos
            </a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#skills" className="hover:text-pink-400 transition">
              Compétences
            </a>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/projects" className="hover:text-pink-400 transition">
              Projets
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <a href="#contact" className="hover:text-pink-400 transition">
              Contact
            </a>
          </li>
          <li className="py-2 md:py-0">
            <a href="/cv-revyll.pdf" target="_blank" className="hover:text-pink-400 transition">
              Voir mon CV
            </a>
          </li>
        </ul>
      </nav>

      <div className="pt-24 px-6 py-12 flex flex-col items-center space-y-16">
        {/* Hero Section */}
        <motion.section
          className="text-center max-w-3xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Salut, moi c'est <span className="text-pink-500">Revyll</span> 👋
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Développeur web passionné par les interfaces modernes, le design futuriste et les outils
            open source.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/projects"
              className="px-6 py-3 bg-pink-600 rounded-full text-white font-semibold hover:bg-pink-700 transition"
            >
              Voir mes projets
            </Link>

            <a
              href="/cv-revyll.pdf"
              download
              className="px-6 py-3 border border-white rounded-full text-white font-semibold hover:bg-white hover:text-black transition"
            >
              Télécharger mon CV
            </a>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-400">À propos de moi</h2>
          <p className="text-gray-300 text-lg">
            Je suis un développeur web full-stack curieux et motivé, toujours prêt à apprendre de
            nouvelles technologies et à relever des défis. J'aime concevoir des interfaces uniques
            et dynamiques en combinant design et performance. Quand je ne code pas, je bidouille des
            setups Linux ou j'expérimente avec des intelligences artificielles 🤖.
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="w-full max-w-5xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">Mes Compétences</h2>
          <div className="flex flex-wrap justify-center gap-8 text-5xl text-white">
            <SiJavascript title="JavaScript" className="hover:text-yellow-400 transition" />
            <SiTypescript title="TypeScript" className="hover:text-blue-400 transition" />
            <SiReact title="React" className="hover:text-cyan-400 transition" />
            <SiTailwindcss title="Tailwind CSS" className="hover:text-teal-300 transition" />
            <SiNextdotjs title="Next.js" className="hover:text-white transition" />
            <SiMongodb title="MongoDB" className="hover:text-green-300 transition" />
            <SiLinux title="Linux" className="hover:text-gray-400 transition" />
          </div>
        </motion.section>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
          <motion.div
            className="bg-black rounded-2xl p-4 shadow-lg border border-blue-700 hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold mb-2">Triple Ultra-Wide Monitors</h2>
            <p>
              Clean layout with futuristic UI and terminals. Click below to view my GitHub projects!
            </p>
            <a
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 border border-white text-white rounded-md hover:bg-blue-600 transition"
              href="https://github.com/Revyll16"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
          </motion.div>

          <motion.div
            className="bg-black rounded-2xl p-4 shadow-lg border border-pink-600 hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold mb-2">Linux OS & Glowing Terminal</h2>
            <p>Built for performance. Launch my favorite dev tools and terminal here!</p>
            <Link
              to="/projects/linux-terminal"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 border border-white text-white rounded-md hover:bg-pink-600 transition"
            >
              <FaTerminal /> Virtual Terminal
            </Link>
          </motion.div>

          <motion.div
            className="bg-black rounded-2xl p-4 shadow-lg border border-cyan-400 hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
            <div className="flex space-x-4 text-3xl mt-2">
              <SiLinux title="Linux" />
              <SiReact title="React" />
              <SiTailwindcss title="Tailwind CSS" />
            </div>
          </motion.div>
        </div>

        {/* New Projects Section */}
        <motion.section
          id="projects"
          className="w-4xl max-w-5xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pink-400">Mes Projets</h2>
          <Slider {...settings}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-black border border-pink-500 rounded-2xl p-6 shadow-xl mx-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-60 object-cover rounded-xl mb-4"
                />
                <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-3">Stack : {project.stack.join(', ')}</p>
                <div className="flex justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
                  >
                    <FaGithub /> Code source
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-pink-500 rounded-full hover:bg-pink-500 hover:text-white transition"
                  >
                    <FaExternalLinkAlt /> Démo
                  </a>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="w-full max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-400">Contact</h2>
          <p className="text-gray-300 mb-6">
            Une question, un projet ou une collaboration ? Envoie-moi un message ci-dessous !
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 text-left bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl"
          >
            <div>
              <label className="block mb-1 text-white">Nom</label>
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                className="w-full px-4 py-2 rounded bg-black/80 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-white">Email</label>
              <input
                type="email"
                name="email"
                placeholder="email@example.com"
                className="w-full px-4 py-2 rounded bg-black/80 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-white">Message</label>
              <textarea
                name="message"
                className="w-full px-4 py-2 rounded bg-black/80 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500"
                rows={4}
                placeholder="Votre message..."
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold transition"
            >
              Envoyer
            </button>
          </form>

          <div className="mt-6">
            <a
              href="mailto:revyll44@gmail.com"
              className="inline-flex items-center gap-2 text-pink-400 hover:text-white transition"
            >
              <FaEnvelope /> revyll.dev@gmail.com
            </a>
          </div>
        </motion.section>

        {/* Floating Revyll-bot Assistant */}
        <motion.div
          className="absolute bottom-10 right-10 text-5xl text-pink-400 cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          onMouseEnter={() => {
            speak("Hello, I am Revyll's Assistant. How can I help you today?");
            setShowChat(true);
          }}
          onMouseLeave={() => setShowChat(false)}
          title="Hello, I'm Revyll Assistant!"
        >
          <FaRobot />
          {showChat && (
            <motion.div
              className="absolute bottom-16 right-0 bg-black border border-pink-500 rounded-xl p-4 w-72 text-sm shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-pink-300 font-bold mb-2">Revyll-Assistant:</p>
              <p>
                Hello, I'm here to assist you with coding or portfolio guidance. Ask me anything!
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default App;

// service ID: service_akiovyl
// template ID: template_861c1r9
//public_key: jx-7Tt94OmWcywP78
