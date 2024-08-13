import profilepic from "../assets/profileyellowbg.jpg";
import resume from "../assets/MuneebSaleem_resume-2 (2).pdf";
const Home = () => {
  return (
    <div
      name="Home"
      className=" grid  md:grid-cols-2 md: w-full min-h-screen bg-gradient-to-b from-black to-gray-800"
    >
      <div className=" h-[500px] flex flex-col flex-wrap justify-center items-center mt-20">
        <div>
          <div className="text-white font-oswald text-7xl m-4">
            <h2>Hello , I am a Web Developer</h2>
          </div>
          <div className="text-gray-500 text-xl m-4">
            <p>
              As a seasoned web developer and software engineer with over two
              years of professional experience, I have honed my skills in
              crafting robust, user-friendly digital solutions. My expertise
              spans front-end and back-end technologies, allowing me to create
              seamless, full-stack applications. I am passionate about
              leveraging cutting-edge tools and methodologies to solve complex
              problems and deliver high-quality software that exceeds client
              expectations.
            </p>
            <button className=" p-4 font-semibold text-purple-800 rounded-md mt-4 hover:scale-110 transition[200] text-xl bg-gradient-to-r from-blue-400 to-blue-600">
              <a href={resume} download={true}>
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className=" h-[500px] flex flex-col justify-center items-center md:mt-[90px]">
        <img className="md:rounded-full" src={profilepic} alt="" />
      </div>
    </div>
  );
};

export default Home;
