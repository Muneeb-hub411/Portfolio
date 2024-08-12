import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const Nav = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Projects" },
    { id: 4, link: "Experience" },
    { id: 5, link: "Contact" },
  ];
  return (
    <div className="w-full bg-black h-20 text-white flex items-center justify-between fixed">
      <div>
        <h2 className="font-GreyQo text-white text-6xl py-2">Muneeb</h2>
      </div>
      <ul className="sm:flex hidden ">
        {Nav.map(({ id, link }) => (
          <li
            key={id}
            className="p-4 text-2xl font-oswald cursor-pointer  hover:scale-105 transition-transform duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
      <div
        className="sm:hidden z-10 cursor-pointer pr-4  "
        onClick={() => setMenu(!menu)}
      >
        {menu ? <ImCross size={30} /> : <FaHamburger size={30} />}
      </div>
      {menu && (
        <ul className="flex flex-col justify-center items-center w-full h-screen absolute top-0 left-0 bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {Nav.map(({ id, link }) => (
            <li
              onClick={() => setMenu(false)}
              key={id}
              className="px-4 cursor-pointer py-6 text-4xl"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
