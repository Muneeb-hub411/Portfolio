const Contact = () => {
  return (
    <div
      name="Contact"
      className="min-h-screen flex justify-center items-center bg-gradient-to-b -mt-20 md:mt-0 from-gray-800 to-black p-4 md:p-0"
    >
      <form
        action="https://getform.io/f/bzylpyra"
        method="POST"
        className=" -mt-12 bg-transparent flex flex-col space-y-4 w-full max-w-md"
      >
        <h2 className="text-white text-4xl font-oswald text-center">
          Contact Me
        </h2>
        <input
          type="text"
          placeholder="Name"
          name="Name"
          className="p-4 bg-transparent border border-gray-400 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          name="Email"
          className="p-4 bg-transparent border border-gray-400 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          name="Message"
          rows="4"
          className="p-4 bg-transparent border border-gray-400 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="p-4 text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-md hover:scale-110 transition-transform duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
