const ContactHero = () => {
  return (
    <section
      // className="w-full min-h-[50vh] px-10 sm:px-8 md:px-16 lg:px-[10.5rem] py-10 bg-center bg-cover bg-no-repeat flex flex-col"
      className="w-full min-h-[50vh] px-[4rem] py-[4rem] sm:px-[9.6rem] sm:py-[4.5rem] py-10 bg-center bg-cover bg-no-repeat flex flex-col"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/HeroBGImg.png')`,
      }}
    >
      <div className="flex flex-col items-start my-auto justify-center gap-2">
        <div className="flex items-center gap-4 font-inter">
          <p className="text-sm sm:text-base text-[#E9E9E9]">Home</p>
          <p className="text-sm sm:text-base text-[#E9E9E9]">&gt;</p>
          <p className="text-sm sm:text-base text-[#FF6B57]">Contact Us</p>
        </div>
        <p className="font-bold text-white text-3xl font-sora">Contact Us</p>
      </div>
    </section>
  );
};

export default ContactHero;

