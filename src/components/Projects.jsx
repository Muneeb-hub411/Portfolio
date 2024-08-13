import SnapSell from "../assets/SnapSell.jpg";
import EJ from "../assets/E&J.jpg";
import equipal from "../assets/Equipal.jpg";
const Projects = () => {
  return (
    <div
      name="Projects"
      className=" md:p-28 bg-gradient-to-b from-black to-gray-800 min-h-screen"
    >
      <h2 className=" font-oswald text-4xl text-white text-center">Projects</h2>
      <div className="m-20 grid md:grid-cols-3 gap-5">
        <div className="h-[350px] rounded-lg bg-gray-500 flex flex-col items-center  p-1">
          <img className="h-[250px] rounded-md" src={SnapSell} alt="" />
          <button className=" w-40 p-4 font-semibold text-purple-800 rounded-md mt-4 hover:scale-110 transition[200] text-xl bg-gradient-to-r from-blue-400 to-blue-600">
            <a href="https://github.com/Muneeb-hub411/SnapSell" target="_blank">
              Visit
            </a>
          </button>
        </div>
        <div className="h-[350px] rounded-lg bg-gray-500 flex flex-col items-center  p-1">
          <img className="h-[250px] rounded-md" src={EJ} alt="" />
          <button className=" w-40 p-4 font-semibold text-purple-800 rounded-md mt-4 hover:scale-110 transition[200] text-xl bg-gradient-to-r from-blue-400 to-blue-600">
            <a href="https://eandjequine.com/" target="_blank">
              Visit
            </a>
          </button>
        </div>
        <div className="h-[350px] rounded-lg bg-gray-500 flex flex-col items-center  p-1">
          <img className="h-[250px] rounded-md" src={equipal} alt="" />
          <button className=" w-40 p-4 font-semibold text-purple-800 rounded-md mt-4 hover:scale-110 transition[200] text-xl bg-gradient-to-r from-blue-400 to-blue-600">
            <a href="https://yourequipal.com/" target="_blank">
              Visit
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
