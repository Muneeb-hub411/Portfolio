import { motion } from "framer-motion";

const Skills = () => {
  const categories = [
    {
      id: 1,
      title: "FRONTEND_TECH",
      skills: "html,css,js,react,nextjs,redux,tailwind,bootstrap"
    },
    {
      id: 2,
      title: "BACKEND_TECH",
      skills: "nodejs,express,mongodb,mysql,postgres"
    },
    {
      id: 3,
      title: "DEVOPS_TOOLS",
      skills: "docker,git,github,vercel,linux"
    },
    {
      id: 4,
      title: "LANGUAGES",
      skills: "js,python,ts,cpp,cs"
    }
  ];

  const aiSkills = [
    { name: "OpenAI", style: "border-[#8A63FF] text-[#8A63FF] hover:bg-[#8A63FF] hover:text-white hover:shadow-[0_0_15px_rgba(138,99,255,0.5)]" },
    { name: "LangChain", style: "border-[#4ade80] text-[#4ade80] hover:bg-[#4ade80] hover:text-gray-900 hover:shadow-[0_0_15px_rgba(74,222,128,0.5)]" },
    { name: "n8n", style: "border-[#EA4B71] text-[#EA4B71] hover:bg-[#EA4B71] hover:text-white hover:shadow-[0_0_15px_rgba(234,75,113,0.5)]" },
    { name: "Claude AI", style: "border-[#D97757] text-[#D97757] hover:bg-[#D97757] hover:text-white hover:shadow-[0_0_15px_rgba(217,119,87,0.5)]" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div name="Skills" className="w-full min-h-screen bg-neon-dark py-20 px-4 md:px-8 flex flex-col justify-center items-center relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full relative z-10">
        <div className="pb-12 text-center md:text-left">
          <h2 className="font-space font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-2 tracking-tight">
            SYSTEM.<span className="text-neon-cyan text-glow">SKILLS()</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-transparent rounded-full mb-6 mx-auto md:mx-0"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-space max-w-2xl">
            My technical arsenal. Building robust web applications while exploring the frontiers of Agentic AI.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 w-full"
        >
          {categories.map(({ id, title, skills }) => (
            <motion.div
              key={id}
              variants={itemVariants}
              className="glass p-6 md:p-8 rounded-2xl border border-white/5 hover:border-neon-cyan/30 hover:shadow-[0_0_20px_rgba(0,243,255,0.05)] transition-all duration-300 group"
            >
              <h3 className="text-xl md:text-2xl font-space font-bold text-gray-300 mb-6 flex items-center">
                <span className="text-neon-cyan mr-2 opacity-70">const</span> {title} <span className="text-neon-cyan ml-2 opacity-70">=</span>
              </h3>
              <div className="w-full overflow-hidden flex items-center justify-center bg-black/30 p-6 rounded-xl border border-white/5 group-hover:bg-black/50 transition-colors">
                <img 
                  src={`https://skillicons.dev/icons?i=${skills}&theme=dark&perline=6`} 
                  alt={title}
                  className="max-w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}

          {/* AI & Automation Special Card */}
          <motion.div
            variants={itemVariants}
            className="glass p-6 md:p-8 rounded-2xl border border-neon-purple/30 hover:border-neon-purple shadow-[0_0_15px_rgba(181,55,242,0.1)] hover:shadow-[0_0_25px_rgba(181,55,242,0.2)] transition-all duration-300 md:col-span-2"
          >
            <h3 className="text-xl md:text-2xl font-space font-bold text-white mb-6 flex items-center">
              <span className="text-neon-purple text-glow-purple mr-2 opacity-80">async function</span> AI_AUTOMATION <span className="text-neon-purple ml-2 opacity-80">() {'{'}</span>
            </h3>
            <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start pl-0 md:pl-8">
              {aiSkills.map((skill, index) => (
                <div 
                  key={index}
                  className={`px-6 py-3 rounded-xl border-2 ${skill.style} bg-black/40 backdrop-blur-md font-space font-bold transition-all duration-300 cursor-default transform hover:-translate-y-1`}
                >
                  {skill.name}
                </div>
              ))}
            </div>
            <div className="mt-8 text-gray-400 font-space text-sm border-t border-white/10 pt-4 flex flex-col md:flex-row items-start md:items-center justify-between">
              <p>Exploring LLMs, Agents, and workflow automation.</p>
              <p className="text-neon-purple mt-2 md:mt-0 font-bold">&lt;Goal 2026: Ship Autonomous Agent /&gt;</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
