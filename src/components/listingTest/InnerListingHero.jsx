
// import { useState } from "react";

// const panels = [
//   { img: "/innerListingHero1.jpg" },
//   { img: "/innerListingHero2.jpg" },
//   { img: "/innerListingHero3.jpg" },
// ];

// const InnerListingHero = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const prevSlide = () => {
//     setActiveIndex((prev) => (prev === 0 ? panels.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setActiveIndex((prev) => (prev === panels.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <section className="w-full min-h-[60vh] flex items-center justify-center relative overflow-hidden">
//       {/* Active Slide */}
//       <div
//         className="w-full min-h-[60vh] bg-cover bg-center transition-all duration-500"
//         style={{ backgroundImage: `url(${panels[activeIndex].img})` }}
//       ></div>

//       {/* Left Arrow */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-4xl flex items-center justify-center rounded-full border border-white p-2 hover:bg-black/50 ml-4"
//       >
//         <img src="/innerShortletArrowLeft.png" alt="arrow Left" />
//       </button>

//       {/* Right Arrow */}
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-4xl flex items-center justify-center rounded-full border border-white p-2 hover:bg-black/50 mr-4"
//       >
//         <img src="/innerShortletArrowRight.png" alt="arrow Right" />
//       </button>
//     </section>
//   );
// };

// export default InnerListingHero;


import { useState } from "react";

const panels = [
  {
    img: ["/innerListingHero1.jpg", "/test/D.png", "/test/desktop-design.jpg"],
  },
  { img: ["/innerListingHero2.jpg", "/test/space.png", "/test/N.jpg"] },
  { img: ["/innerListingHero3.jpg", "/test/watch.png", "/test/whatever.png"] },
];

const InnerListingHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? panels.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === panels.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center relative overflow-hidden">

      {/* Active Slide */}
      <div className="w-full min-h-[60vh] flex flex-col md:flex-row">
        {/* Left Panel */}
        <div
          className="relative flex-1 bg-cover bg-center min-h-[200px]"
          style={{ backgroundImage: `url(${panels[activeIndex].img[0]})` }}
        >
        </div>

        {/* Middle Panel */}
        <div
          className="flex-1 bg-cover bg-center min-h-[200px]"
          style={{ backgroundImage: `url(${panels[activeIndex].img[1]})` }}
        ></div>

        {/* Right Panel */}
        <div
          className="relative flex-1 bg-cover bg-center min-h-[200px]"
          style={{ backgroundImage: `url(${panels[activeIndex].img[2]})` }}
        >
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-4xl flex items-center justify-center rounded-full border border-white p-2 hover:bg-black/50 ml-4"
      >
        <img src="/innerShortletArrowLeft.png" alt="arrow Left" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-4xl flex items-center justify-center rounded-full border border-white p-2 hover:bg-black/50 mr-4"
      >
        <img src="/innerShortletArrowRight.png" alt="arrow Right" />
      </button>
    </section>
  );
};

export default InnerListingHero;
