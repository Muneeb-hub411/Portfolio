import SnapSell from "../assets/SnapSell.jpg";
import EJ from "../assets/E&J.jpg";
import equipal from "../assets/Equipal.jpg";
import registrationSystem from "../assets/RegistrationSystem.jpg";
const Projects = () => {
  const project = [
    { id: 1, name: SnapSell, url: "https://github.com/Muneeb-hub411/SnapSell" },
    {
      id: 2,
      name: EJ,
      url: "https://eandjequine.com/",
    },
    {
      id: 3,
      name: equipal,
      url: "https://yourequipal.com/",
    },
    {
      id: 4,
      name: registrationSystem,
      url: "https://github.com/Muneeb-hub411/Registration_System",
    },
  ];
  return (
    <div
      name="Projects"
      className=" md:p-28 bg-gradient-to-b from-black to-gray-800 min-h-screen"
    >
      <h2 className=" font-oswald text-4xl text-white text-center">Projects</h2>
      <div className="m-20 grid md:grid-cols-3 gap-5">
        {project.map(({ id, name, url }) => (
          <div
            key={id}
            className="h-[350px] rounded-lg bg-gray-500 flex flex-col items-center sm:p-0 xs:p-0  p-1"
          >
            <img className="h-[250px] rounded-md" src={name} alt="" />
            <button className=" w-40 p-4 font-semibold text-purple-800 rounded-md mt-4 hover:scale-110 transition[200] text-xl bg-gradient-to-r from-blue-400 to-blue-600">
              <a href={url} target="_blank">
                Visit
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
