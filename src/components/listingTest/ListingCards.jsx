
const ListingCards = () => {
  return (
    <section className="w-full max-w-full lg:max-w-[640px] mx-auto flex lg:flex-row flex-col lg:items-start items-center py-6 sm:px-4 px-2 border border-[#DDDDE1] bg-white rounded-lg">

    {/* <section className="w-full lg:max-w-[640px] mx-auto flex lg:flex-row flex-col lg:items-start items-center py-6 px-4 border border-[#DDDDE1] bg-white rounded-lg"> */}
      {/* Left (image)  */}
      <div class="flex-1 relative">
        <img
          className="w-full max-w-[220px] h-[180px] rounded-lg object-cover"
          src="/ListingCardsBig.jpg"
          alt="Filtered shortlet"
        />
        <div className="absolute top-2 left-[-5px] bg-[#FF6B57] text-white text-xs font-inter font-semibold px-3 py-1 rounded-tr-lg rounded-br-lg">
          Sponsored
        </div>
      </div>

      {/* Center  */}
      <div class="flex-1 flex flex-col lg:mt-0 mt-4 px-4">
        <h1 className="font-inter font-bold text-[#1E1E1E] text-base mb-3">
          2 Bedroom Terrace Duplex
        </h1>
        <p className="font-inter text-[#1E1E1E] text-[10px] lg:whitespace-nowrap tracking-[0.4%] leading-none mb-2">
          Studio Pentfloor / Flat / Apartment for shortlet
        </p>
        <p className="flex items-center gap-1 mb-3">
          <img src="/location.png" className="w-4 h-4" alt="location" />
          <span className="font-inter text-[10px] text-[#6E6F70]">
            Ikate, Lekki Ikate Lekki Lagos
          </span>
        </p>
        <p className="flex items-center gap-1 mb-6">
          <span className="bg-[#EDECFF] text-[#4B3DFE] text-[8px] font-inter rounded-md whitespace-nowrap p-1 tracking-[0.4%] leading-none">
            CCTV CAMERAS
          </span>
          <span className="bg-[#EDECFF] text-[#4B3DFE] text-[8px] font-inter rounded-md whitespace-nowrap p-1 tracking-[0.4%] leading-none">
            FREE WIFI
          </span>
          <span className="bg-[#EDECFF] text-[#4B3DFE] text-[8px] font-inter rounded-md whitespace-nowrap p-1 tracking-[0.4%] leading-none">
            24 HOURS SECURITY
          </span>
        </p>
        <div className="flex items-center gap-1 mb-1">
          <img
            className="w-8 h-8 object-cover rounded-full"
            src="/personImage.png"
            alt="Owner"
          />
          <p className="font-inter text-sm text-[#1E1E1E] tracking-[0.4%]">
            Prince Ademola
          </p>
          <img
            className="w-6 h-6 object-cover"
            src="/bitcoin-icons_verify-filled.png"
            alt="Verified"
          />
        </div>
        <p className="font-inter text-[10px] text-[#1E1E1E] tracking-[0.4%] leading-snug">
          Updated 17 Jul 2025, Added 07 Jul 2025
        </p>
      </div>

      <div className="h-[72px] border border-[#DDDDE1] lg:block hidden"></div>

      {/* Right  */}
      <div class="flex-[0.7] items-start flex flex-col lg:ml-4">
        <h1 className="font-inter font-bold text-base tracking-[0.4%] leading-normal lg:mb-[11px] lg:mb-2 lg:mt-0 mt-4">
          ₦ 15,000,000 /year
        </h1>
        <p className="font-inter text-[10px] text-[#1E1E1E] tracking-[0.4%] leading-tight lg:mb-[70px] mb-2 lg:mt-0 mt-2">
          1 Bed 1 Bath
        </p>
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center gap-2 bg-[#4B3DFE] text-white font-inter text-sm rounded-md px-4 py-2">
            <img
            src="/material-symbols_call.png"
            className="w-4 h-4"
            alt="Call"
          />
          Call
          </button>
          <button className="flex items-center justify-center bg-[#60D669] p-[10px] rounded-md">
            <img src="/whatsapp.png" className="w-4 h-4" alt="WhatsApp" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ListingCards;


