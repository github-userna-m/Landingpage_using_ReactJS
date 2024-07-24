const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-4 lg:mt-20 ">
     
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide">
          CodeVR build tools
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            {" "}
            for developers
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Empower your creativity and bring your VR app ideas to life with our
          intuitive development tools. Get started today and turn your imagination
          into immersive reality!
        </p>
        <div className="flex justify-center my-10">
          <a
            href="#"
            className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md"
          >
            Start for free
          </a>
          <a href="#" className="py-3 px-4 mx-3 rounded-md border">
            Documentation
          </a>
        </div>
  





      {/* <div className="grid min-h-[140px] w-fullp-6 rounded-lg">
        <img className="rounded-lg h-96 object-contain object-center" src="/src/assets/profile-pictures/vr.avif" alt="" />
       
      </div> */}
    </div>
  );
};

export default HeroSection;