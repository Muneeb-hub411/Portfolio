import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      name="About"
      className="flex flex-col justify-center items-center w-full min-h-screen bg-neon-dark py-20 px-4 md:px-20 relative"
    >
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-neon-purple rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-neon-cyan rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl glass p-8 md:p-12 rounded-2xl relative z-10"
      >
        <div className="mb-8">
          <h2 className="font-space font-bold text-5xl text-white mb-2">
            SYSTEM.<span className="text-neon-purple text-glow-purple">ABOUT()</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-purple to-transparent rounded-full"></div>
        </div>

        <div className="text-lg md:text-xl text-gray-300 font-space font-light leading-relaxed space-y-6">
          <p>
            I am a passionate software engineer with a strong background in web
            development, having graduated from SS CASE IT in Islamabad. Over the
            past two years, I have worked extensively as a junior web developer at
            022 Marketing Agency and IT Verticals, where I played a pivotal role
            in creating and managing a variety of websites tailored to different
            client needs.
          </p>
          <p>
            My core expertise lies in the <span className="text-neon-cyan font-bold">MERN stack</span> and WordPress,
            which allows me to develop full-stack applications and user-friendly
            content management systems. From dynamic eCommerce platforms to
            customized websites, I have honed my ability to translate business
            requirements into functional, aesthetically pleasing digital
            experiences.
          </p>
          <p>
            My experience working with US-based companies has exposed
            me to global standards and the importance of delivering scalable,
            high-performance solutions. Whether working on the front-end or
            back-end, I always aim to innovate, staying at the forefront of
            technology trends to ensure that every project I work on exceeds
            expectations. My commitment to quality and my continuous learning
            mindset drive me to solve complex problems with precision and
            creativity.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
