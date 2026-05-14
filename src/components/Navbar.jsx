import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const Nav = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Skills" },
    { id: 4, link: "Projects" },
    { id: 5, link: "Contact" },
  ];
  return (
    <div className="w-full glass-dark h-20 text-white flex items-center justify-between fixed z-50 px-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-GreyQo text-neon-cyan text-glow text-6xl py-2 cursor-pointer">
          <Link to="Home" smooth duration={500}>Muneeb</Link>
        </h2>
      </motion.div>
      <ul className="sm:flex hidden space-x-6">
        {Nav.map(({ id, link }, index) => (
          <motion.li
            key={id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-4 text-xl font-space cursor-pointer hover:text-neon-cyan transition-colors duration-200"
          >
            <Link to={link} smooth duration={500} activeClass="text-neon-cyan text-glow" spy={true}>
              {link}
            </Link>
          </motion.li>
        ))}
      </ul>
      <div
        className="sm:hidden z-50 cursor-pointer pr-4 text-neon-cyan"
        onClick={() => setMenu(!menu)}
      >
        {menu ? <ImCross size={30} /> : <FaHamburger size={30} />}
      </div>
      {menu && (
        <motion.ul 
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="flex flex-col justify-center items-center w-full h-screen absolute top-0 left-0 glass-dark text-gray-300 font-space z-40"
        >
          {Nav.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer py-6 text-4xl hover:text-neon-cyan hover:text-glow transition-all duration-200">
              <Link
                onClick={() => setMenu(!menu)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default Navbar;
