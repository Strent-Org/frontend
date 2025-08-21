import React from "react";

const InnerShortletLeft = () => {
  return (
      <div className="flex-[1] flex flex-col gap-5 order-2 lg:order-1">
            {/* Agent Info */}
            <div className="w-full flex flex-col gap-4 border border-gray-300 rounded-lg px-4 py-5">
              <h1 className="text-lg sm:text-xl font-bold">Marketed by</h1>
              <div className="flex items-center gap-2">
                <img
                  className="w-12 h-12 object-cover rounded-full"
                  src="/personImage.png"
                  alt="Owner"
                />
                <div className="flex item-center gap-1">
                  <p className="font-semibold text-[#1E1E1E]">Prince Ademola</p>
                  <img
                    className="w-5 h-5"
                    src="/bitcoin-icons_verify-filled.png"
                    alt="Verified"
                  />
                </div>
              </div>
              <span className="text-xs text-[#1E1E1E]">
                View more properties from this agent
              </span>
              <button
                className="bg-[#4B3DFE] hover:bg-[#3A2EDB] transition-colors w-full px-4 py-2 rounded-lg text-white font-semibold text-sm sm:text-base"
                type="submit"
              >
                Show Phone Number
              </button>
            </div>

            {/* Contact Agent */}
            <div className="w-full border border-gray-300 rounded-lg px-4 py-5">
              <h1 className="text-lg sm:text-xl font-bold">Contact Agent</h1>
              <form className="flex flex-col gap-3 mt-6">
                {["Name", "Phone Number", "Email"].map((placeholder, i) => (
                  <div
                    key={i}
                    className="border border-gray-400 p-2 rounded-lg"
                  >
                    <input
                      type="text"
                      placeholder={placeholder}
                      className="w-full border-none outline-none bg-transparent text-gray-400 text-sm"
                    />
                  </div>
                ))}
                <div className="border border-gray-400 p-2 rounded-lg">
                  <textarea
                    type="text"
                    placeholder="Hello Prince Ademola I would like 
to check the availability for Studio 
Pentfloor,Ikate, Lekki Ikate Lekki 
Lagos,₦ 65,000/day Thank you!"
                    className="w-full border-none outline-none bg-transparent text-gray-400 text-xs sm:text-sm"
                  />
                </div>
                <button
                  className="bg-[#4B3DFE] hover:bg-[#3A2EDB] w-full px-4 py-2 rounded-lg text-white font-semibold text-sm sm:text-base"
                  type="submit"
                >
                  Enquire Now
                </button>
                <button
                  className="bg-[#60D669] hover:bg-[#76eb80] flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg text-white font-semibold text-sm sm:text-base"
                  //   type="submit"
                >
                  <img
                    className="h-5 w-5"
                    src="/ri_whatsapp-fill.png"
                    alt="whatsapp"
                  />
                  Whatsapp
                </button>
              </form>
            </div>

            {/* Advertise */}
            <div className="w-full flex flex-col gap-4 bg-[#EDECFF] px-4 py-5">
              <p className="text-center text-base sm:text-lg font-semibold text-[#1E1E1E]">
                Advertise/market your property on Strent
              </p>
              <button
                className="bg-[#4B3DFE] hover:bg-[#3A2EDB] w-full px-4 py-2 rounded-lg text-white font-semibold text-sm sm:text-base"
                //   type="submit"
              >
                Get Started
              </button>
            </div>
          </div>
  );
};

export default InnerShortletLeft;
