import profilepic from "../assets/profileyellowbg.jpg";
import resume from "../assets/Muneeb_Saleem_CV.pdf";
const Home = () => {
  return (
    <div
      name="Home"
      className="  grid  md:grid-cols-2 md: w-full min-h-screen bg-gradient-to-b from-black to-gray-800"
    >
      <div className="  h-[500px] flex flex-col flex-wrap justify-center items-center mt-20 ">
        <div className=" ">
          <div className="text-white font-oswald md:text-7xl md:m-4 xs:text-3xl xs:p-2 s8:text-4xl mt-20">
            <h2 className="">I am a MERN Developer</h2>
          </div>
          <div className="text-gray-500 text-xl m-4 leading-8">
            <p>
              As a dedicated web developer with a strong foundation in software
              engineering, I have accumulated two years of experience in web
              development. Specializing in both the MERN stack and WordPress, I
              have successfully built dynamic, user-centric applications that
              balance functionality and design. I am passionate about utilizing
              the latest technologies to develop efficient solutions,
              continually delivering high-quality work that aligns with client
              goals.
            </p>
            <button className=" p-4 font-semibold text-purple-800 rounded-md mt-4 hover:scale-110 transition[200] text-xl bg-gradient-to-r from-blue-400 to-blue-600">
              <a href={resume} download={true}>
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className=" h-[500px] mt-8 flex flex-col justify-center items-center md:mt-[90px]">
        <img className="md:rounded-full" src={profilepic} alt="" />
      </div>
    </div>
  );
};

export default Home;
