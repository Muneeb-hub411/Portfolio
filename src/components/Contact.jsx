import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full min-h-screen bg-neon-dark py-20 px-4 md:px-20 relative flex justify-center items-center"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg glass p-8 md:p-12 rounded-3xl relative z-10 border-t border-l border-white/10"
      >
        <form
          action="https://getform.io/f/bzylpyra"
          method="POST"
          className="flex flex-col space-y-6"
        >
          <div className="mb-4">
            <h2 className="font-space font-bold text-4xl text-white mb-2">
              INITIATE.<span className="text-neon-purple text-glow-purple">CONTACT()</span>
            </h2>
            <p className="text-gray-400 font-space text-sm">Send a transmission to my secure inbox.</p>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="YOUR_NAME"
              name="Name"
              required
              className="w-full p-4 bg-black/40 border border-white/10 text-white font-space placeholder-gray-500 rounded-xl focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all duration-300"
            />
            <input
              type="email"
              placeholder="YOUR_EMAIL"
              name="Email"
              required
              className="w-full p-4 bg-black/40 border border-white/10 text-white font-space placeholder-gray-500 rounded-xl focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all duration-300"
            />
            <textarea
              placeholder="TRANSMISSION_DATA"
              name="Message"
              rows="5"
              required
              className="w-full p-4 bg-black/40 border border-white/10 text-white font-space placeholder-gray-500 rounded-xl focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all duration-300 resize-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(181, 55, 242, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full p-4 text-neon-dark bg-neon-purple font-space font-bold text-lg rounded-xl transition-all duration-300 overflow-hidden relative group"
          >
            <span className="relative z-10">TRANSMIT_DATA</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
