import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaCode, FaRobot } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "Software Engineering", icon: <FaCode size={40} />, color: "text-blue-400" },
    { name: "React", icon: <FaReact size={40} />, color: "text-cyan-400" },
    { name: "Node.js", icon: <FaNodeJs size={40} />, color: "text-green-500" },
    { name: "Express", icon: <SiExpress size={40} />, color: "text-gray-300" },
    { name: "MongoDB", icon: <SiMongodb size={40} />, color: "text-green-400" },
    { name: "JavaScript", icon: <SiJavascript size={40} />, color: "text-yellow-400" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} />, color: "text-cyan-300" },
    { name: "AI & Automation", icon: <FaRobot size={40} />, color: "text-neon-purple" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div name="Skills" className="w-full min-h-screen bg-neon-dark py-20 px-4 flex flex-col justify-center items-center">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="font-space font-bold text-5xl text-white mb-2">
            SYSTEM.<span className="text-neon-cyan text-glow">SKILLS()</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-transparent rounded-full mb-8"></div>
          <p className="text-xl text-gray-400 font-space">Technologies I've worked with and am currently exploring.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8"
        >
          {skills.map(({ name, icon, color }, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`glass p-6 rounded-xl flex flex-col items-center justify-center space-y-4 hover:shadow-[0_0_20px_rgba(0,243,255,0.2)] transition-all duration-300 border-b-4 border-transparent hover:border-neon-cyan group`}
            >
              <div className={`${color} group-hover:scale-110 transition-transform duration-300`}>
                {icon}
              </div>
              <p className="font-space text-gray-300 text-lg">{name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
