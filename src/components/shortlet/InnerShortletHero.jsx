import React from "react";

const InnerShortletHero = () => {
  return (
    <section className="w-full min-h-[80vh] flex flex-col md:flex-row">
      {/* Left Panel */}
      <div
        className="relative flex-1 bg-cover bg-center min-h-[200px]"
        style={{ backgroundImage: "url('/InnerShortletHero1.png')" }}
      >
        {/* <button className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-4xl">
      &lt;
    </button> */}
      </div>

      {/* Middle Panel */}
      <div
        className="flex-1 bg-cover bg-center min-h-[200px]"
        style={{ backgroundImage: "url('/InnerShortletHero2.png')" }}
      ></div>

      {/* Right Panel */}
      <div
        className="flex-1 bg-cover bg-center min-h-[200px]"
        style={{ backgroundImage: "url('/InnerShortletHero3.png')" }}
      >
        {/* <button className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-4xl">
      &gt;
    </button> */}
      </div>
    </section>
  );
};

export default InnerShortletHero;
