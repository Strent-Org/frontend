import { useState } from "react";

const whatWeOffer = [
  {
    icon: "/aboutLogo1.png",
    title: "Verified Access & Communication",
    desc: "We connect renters directly with verified landlords and agents, building trust and ensuring transparency throughout the rental process.",
  },
  {
    icon: "/aboutLogo2.png",
    title: "Intelligent Property Search & Discovery",
    desc: "Our smart filters and recommendations help renters find properties that match their exact needs, budget, and location without the guesswork.",
  },
  {
    icon: "/aboutLogo3.png",
    title: "Visual Property Tour Experience",
    desc: "Every listing comes with rich descriptions, verified photos, and walkthrough videos helping renters make confident choices before needing a physical visit.",
  },
];

const AboutMain = () => {
  const [activeTab, setActiveTab] = useState("vision");
  return (
    <main className="h-fit w-full px-[4rem] sm:px-[9.6rem] my-16">
      {/* Top section */}
      <section className="flex flex-col md:flex-row md:mt-6 h-full relative items-center">
        {/* Left Image */}
        <div className="flex-[1.3] relative md:mr-10">
          <img
            className="relative object-cover md:object-contain md:h-[600px] w-full z-10 rounded-lg"
            src="/aboutLeft1.png"
            alt="Ikoyi Link bridge Image"
          />

          <img
            className="hidden lg:block absolute bottom-[-26px] left-[88px] object-cover w-80 h-80"
            src="/aboutPattern.png"
            alt="Image Pattern"
          />
        </div>

        {/* Right */}
        <div className="flex-[1.7] flex flex-col gap-4">
          <h2 className="text-[#4B3DFE] font-semibold text-lg md:text-xl mt-6 md:mt-0 font-sora">
            // Discover our Story
          </h2>
          <h1 className="text-xl md:text-2xl lg:text-[32px] leading-normal tracking-[1.12%] font-bold font-sora text-[#1E1E1E]">
            Simplifying Renting, <br /> Securing Homes.
          </h1>
          <p className="font-inter text-sm md:text-base leading-normal tracking-[0.04em]">
            Strent was born from a simple frustration, the endless stress of
            trying to rent a home in Nigeria. From fake listings to upfront
            agent fees and lack of trust, the rental journey has often been a
            gamble. We’ve been there, and we knew there had to be a better way.
            <br />
            That’s why we created Strent, a platform built to bring honesty,
            ease, and peace of mind back to the rental process. Whether you’re
            searching for a long-term apartment or a short-term stay, Strent
            connects you with verified agents, landlords, secure payment
            options, and a renter-first experience that puts you in control.
          </p>

          <div className="flex flex-wrap gap-4 md:gap-6 mt-2">
            {/* Vision Button */}
            <button
              className={`w-[150px] h-[48px] flex items-center justify-center p-4 rounded-md text-center font-semibold font-inter cursor-pointer text-sm md:text-base 
          ${
            activeTab === "vision"
              ? "bg-[#4B3DFE] hover:bg-[#6257f8] text-white"
              : "bg-white border border-[#C4C5C8] text-[#1E1E1E]"
          }`}
              onClick={() => setActiveTab("vision")}
            >
              Our Vision
            </button>

            {/* Mission Button */}
            <button
              className={`w-[150px] h-[48px] flex items-center justify-center p-4 rounded-md text-center font-semibold font-inter cursor-pointer text-sm md:text-base 
          ${
            activeTab === "mission"
              ? "bg-[#4B3DFE] hover:bg-[#6257f8] text-white"
              : "bg-white border border-[#C4C5C8] text-[#1E1E1E]"
          }`}
              onClick={() => setActiveTab("mission")}
            >
              Our Mission
            </button>
          </div>

          {activeTab === "vision" ? (
            <p className="font-inter text-sm md:text-base leading-normal tracking-[0.04em]">
              To become Nigeria’s most trusted home rental platform, empowering
              millions to find real homes, without the hassle, doubt, or fear.
            </p>
          ) : (
            <p className="font-inter text-sm md:text-base leading-normal tracking-[0.04em]">
              To simplify and safeguard the rental experience in Nigeria by
              providing a secure, transparent, and technology-driven platform
              for both renters and property owners.
            </p>
          )}
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="flex flex-col gap-8">
        <h1 className="text-xl md:text-2xl font-semibold text-center tracking-[1.12%] leading-snug md:mt-10 lg:mt-28 mt-8 text-[#1E1E1E]">
          What We Offer
        </h1>

        {/* Grid for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatWeOffer.map((weo, i) => (
            <div key={i} className="flex flex-col gap-4 border rounded-lg p-6 hover:shadow-md-penumbra-6 transition-shadow duration-300">
              <img className="h-12 w-12" src={weo.icon} alt="Icon" />
              <h2 className="font-semibold text-lg md:text-xl leading-snug text-[#1E1E1E] font-sora">
                {weo.title}
              </h2>
              <p className="font-inter text-sm md:text-base flex-1">{weo.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutMain;
