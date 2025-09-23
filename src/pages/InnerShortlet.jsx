import InnerShortletHero from "../components/shortlet/InnerShortletHero";
import InnerShortletRight from "../components/shortlet/InnerShortletRight";
import InnerShortletLeft from "../components/shortlet/InnerShortletLeft";

const InnerShortlet = () => {
  return (
    <>
      <InnerShortletHero />

      <main className="h-fit w-full px-[4rem] sm:px-[9.6rem] my-16">
        {/* Breadcrumb + Actions */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <ul className="flex flex-wrap items-center gap-2 leading-normal font-inter sm:text-sm text-xs text-[#6E6F70]">
            <li>
              <a href="/">Home</a>
            </li>
            &gt;{" "}
            <li>
              <a href="/shortlet">Shortlets</a>
            </li>{" "}
            &gt;{" "}
            <li>
              <a href="/innershortlet/1">Property for shortlet in Lekki</a>
            </li>{" "}
            &gt;{" "}
            <li>
              <a href="/innershortlet/1">
                Flat Apartment for shortlet in Lekki
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-4 md:ml-auto text-[#1E1E1E] leading-normal font-inter text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <img
                className="w-5 h-5 object-cover"
                src="/heart.png"
                alt="Heart emoji"
              />
              <span>Save to Favorite</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="w-5 h-5 object-cover"
                src="/share.png"
                alt="Heart emoji"
              />
              <span>Share</span>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="flex gap-2 items-center mt-2">
          <img src="/arrow-left.png" alt="Back-arrow" className="w-4 h-4" />
          <a
            className="text-[#1E1E1E] font-bold font-inter text-sm sm:text-base leading-normal"
            href="/shortlet"
          >
            Back to search results
          </a>
        </div>

        {/* Two-Column Layout */}
        <div className="flex flex-col p-1 lg:flex-row mt-8 gap-5">
          {/* Left Sidebar */}
          <InnerShortletLeft />

          {/* Right Content */}
          <InnerShortletRight />
        </div>
      </main>
    </>
  );
};

export default InnerShortlet;
