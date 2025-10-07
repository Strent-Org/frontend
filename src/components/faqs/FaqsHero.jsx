const FaqHero = () => {
  return (
    <section
      className="w-full min-h-[50vh] px-[4rem] py-[4rem] sm:px-[9.6rem] sm:py-[4.5rem] py-10 bg-center bg-cover bg-no-repeat flex flex-col"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/HeroBGImg.png')`,
      }}
    >
      <div className="flex flex-col items-start my-auto justify-center gap-2">
        <div className="flex items-center gap-4">
          <p className="text-sm sm:text-base text-[#E9E9E9]"><a href="/">Home</a></p>
          <p className="text-sm sm:text-base text-[#E9E9E9]">&gt;</p>
          <p className="text-sm sm:text-base text-[#FF6B57]">Frequently Asked Questions</p>
        </div>
        <p className="font-bold text-white text-3xl font-sora">Frequently Asked Questions</p>
      </div>
    </section>
  );
};

export default FaqHero;

