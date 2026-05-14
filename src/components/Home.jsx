import { motion } from "framer-motion";
import profilepic from "../assets/profileyellowbg.jpg";
import resume from "../assets/MuneebSaleem_Resume.pdf";

const Home = () => {
  return (
    <div
      name="Home"
      className="grid lg:grid-cols-2 w-full min-h-screen bg-neon-dark pt-20 overflow-hidden"
    >
      <div className="flex flex-col justify-center items-start px-6 sm:px-8 lg:px-20 py-10 lg:py-0 relative z-10 order-2 lg:order-1">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="font-space font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 lg:mb-6">
            Hi, I'm <br />
            <span className="text-neon-cyan text-glow">Muneeb Saleem</span>
          </h2>
          <h3 className="text-xl sm:text-2xl lg:text-3xl text-gray-400 font-oswald mb-4 lg:mb-6 tracking-wider uppercase">
            MERN Stack <span className="text-neon-purple text-glow-purple">& AI Automation</span> Developer
          </h3>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 font-space font-light">
            Crafting intelligent, high-performance web applications. I merge robust software engineering with cutting-edge technologies to build digital experiences that are as intelligent as they are beautiful.
          </p>
          
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00f3ff" }}
            whileTap={{ scale: 0.95 }}
            href={resume}
            download={true}
            className="inline-block px-6 py-3 lg:px-8 lg:py-4 font-space font-bold text-neon-dark bg-neon-cyan rounded-full transition-all duration-300 relative overflow-hidden group text-sm lg:text-base text-center w-full sm:w-auto"
          >
            <span className="relative z-10">INITIALIZE_DOWNLOAD()</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </motion.a>
        </motion.div>
      </div>

      <div className="flex flex-col justify-center items-center py-10 lg:py-0 relative z-10 order-1 lg:order-2 mt-10 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Decorative glowing rings */}
          <div className="absolute inset-0 rounded-full border border-neon-cyan/30 animate-pulse-slow scale-110"></div>
          <div className="absolute inset-0 rounded-full border border-neon-purple/20 animate-pulse-slow scale-125" style={{ animationDelay: '1s' }}></div>
          
          <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-neon-cyan relative z-10 shadow-[0_0_30px_rgba(0,243,255,0.3)] mx-auto">
            <img 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
              src={profilepic} 
              alt="Muneeb Saleem" 
            />
            {/* Subtle scanline effect overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.1)_1px,transparent_1px)] bg-[length:100%_4px] pointer-events-none opacity-50"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
