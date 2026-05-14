import { motion } from "framer-motion";
import SnapSell from "../assets/SnapSell.jpg";
import EJ from "../assets/E&J.jpg";
import equipal from "../assets/Equipal.jpg";
import registrationSystem from "../assets/RegistrationSystem.jpg";
import BlogApp from "../assets/BlogApp.jpg";

const Projects = () => {
  const projects = [
    {
      id: 0,
      title: "PerfectAi",
      desc: "Generative AI Application",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      url: "https://github.com/Muneeb-hub411/PerfectFit-AI",
    },
    { id: 1, title: "SnapSell", desc: "E-Commerce Platform", image: SnapSell, url: "https://github.com/Muneeb-hub411/SnapSell" },
    { id: 2, title: "E&J Equine", desc: "Business Website", image: EJ, url: "https://eandjequine.com/" },
    { id: 3, title: "Equipal", desc: "Services Platform", image: equipal, url: "https://yourequipal.com/" },
    { id: 4, title: "Registration System", desc: "Management System", image: registrationSystem, url: "https://github.com/Muneeb-hub411/Registration_System" },
    { id: 5, title: "BlogApp", desc: "Content Platform", image: BlogApp, url: "https://github.com/Muneeb-hub411/BlogApp" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div name="Projects" className="w-full min-h-screen bg-neon-darker py-20 px-4 md:px-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="font-space font-bold text-4xl sm:text-5xl text-white mb-2">
            SYSTEM.<span className="text-neon-cyan text-glow">PROJECTS()</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-transparent rounded-full"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map(({ id, title, desc, image, url }) => (
            <motion.div
              key={id}
              variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden glass border-white/5 hover:border-neon-cyan/50 transition-all duration-500"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-neon-dark/60 z-10 group-hover:bg-transparent transition-all duration-500"></div>
                <img 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                  src={image} 
                  alt={title} 
                />
              </div>
              <div className="p-6 relative z-20 bg-gradient-to-t from-neon-darker via-neon-darker/90 to-transparent -mt-32 pt-20">
                <h3 className="text-2xl font-space font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">{title}</h3>
                <p className="text-gray-400 font-space text-sm mb-6">{desc}</p>
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-block px-6 py-2 border border-neon-cyan text-neon-cyan rounded-full font-space text-sm hover:bg-neon-cyan hover:text-neon-dark hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] transition-all duration-300"
                >
                  EXECUTE_LINK
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
