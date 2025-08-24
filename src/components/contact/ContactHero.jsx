const ContactHero = () => {
  return (
    <section
      className="w-full min-h-[60vh] px-10 sm:px-8 md:px-16 lg:px-[10.5rem] py-10 bg-center bg-cover bg-no-repeat flex flex-col"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/HeroBGImg.png')`,
      }}
    >
      <div className="flex flex-col items-start my-auto justify-center">
        <div className="flex items-center gap-4">
          <p className="text-[16px] sm:text-base text-[#E9E9E9] font-inter ">Home</p>
          <p className="text-[16px] sm:text-base text-[#E9E9E9] font-inter">&gt;</p>
          <p className="text-[16px] sm:text-base text-[#FF6B57] font-inter">Contact Us</p>
        </div>
        <p className="font-bold text-white text-3xl sm:text-4xl md:text-5xl font-sora">Contact Us</p>
      </div>
    </section>
  );
};

export default ContactHero;

