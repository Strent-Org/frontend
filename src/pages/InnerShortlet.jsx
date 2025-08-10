import InnerShortletHero from "../components/shortlet/InnerShortletHero";
import InnerShortletRight from "../components/shortlet/InnerShortletRight";
import InnerShortletLeft from "../components/shortlet/InnerShortletLeft";

const InnerShortlet = () => {
  return (
    <>
      <InnerShortletHero />
      
      <main className="relative px-4 sm:px-8 md:px-16 lg:px-[10.5rem] py-6 md:py-10 mt-6">
        <img
        className="hidden lg:block absolute right-4 bottom-[142rem] w-16 h-16"
        src="/chat.png"
        alt="chat icon"
      />
        {/* Breadcrumb + Actions */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <ul className="flex flex-wrap items-center gap-1 text-sm sm:text-base text-[#6E6F70]">
            <li>Home</li>&gt; <li>Shortlets</li> &gt;{" "}
            <li>Property for shortlet in Lekki</li> &gt;{" "}
            <li>Flat Apartment for shortlet in Lekki</li>
          </ul>
          <div className="flex items-center gap-4 md:ml-auto text-[#1E1E1E] text-sm sm:text-base">
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
        <div className="flex gap-2 items-center mt-4">
          <img src="/arrow-left.png" alt="Back-arrow" className="w-4 h-4" />
          <a className="text-[#1E1E1E] font-medium text-sm sm:text-base" href="/shortlet">
            Back to search results
          </a>
        </div>

        {/* Two-Column Layout */}
        <div className="flex flex-col p-4 lg:flex-row mt-8 gap-6">
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
