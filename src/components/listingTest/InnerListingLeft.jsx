
const InnerListingLeft = () => {
  return (
      <div className="flex-[1] flex flex-col gap-5 order-2 lg:order-1">
            {/* Agent Info */}
            <div className="w-72 border border-[#DDDDE1] rounded-md px-4 py-6">
              <h1 className="text-lg sm:text-xl font-semibold font-sora leading-snug">Marketed by</h1>
              <div className="flex items-center gap-2 mt-4">
                <img
                  className="w-12 h-12 object-cover rounded-full"
                  src="/personImage.png"
                  alt="Owner"
                />
                <div>
                  <div className="flex item-center gap-1">
                    <p className="text-[#1E1E1E] text-sm sm:text-base font-inter">Prince Ademola</p>
                    <img
                      className="w-6 h-6 object-cover"
                      src="/bitcoin-icons_verify-filled.png"
                      alt="Verified"
                    />
                  </div>
                  <p className="font-inter text-[#FF6B57] text-xs sm:text-sm">Verified Agent</p>
                </div>
              </div>
              <span className="text-xs sm:text-sm text-[#1E1E1E]">
                View more properties from this agent
              </span>
              <button
                className="bg-[#4B3DFE] hover:bg-[#3A2EDB] transition-colors w-full px-6 py-3 rounded-lg text-white text-base font-inter font-semibold mt-4"
                type="submit"
              >
                Show Phone Number
              </button>
            </div>

            {/* Contact Agent */}
            <div className="w-72 border border-[#DDDDE1] rounded-md px-4 py-6">
              <h1 className="text-lg sm:text-xl font-semibold font-sora leading-snug">Contact Agent</h1>
              <form className="flex flex-col gap-3 mt-6">
                {["Name", "Phone Number", "Email"].map((placeholder, i) => (
                  <div
                    key={i}
                    className="w-full border border-[#B8B9BC] p-2 rounded-lg"
                  >
                    <input
                      type="text"
                      placeholder={placeholder}
                      className="w-full border-none outline-none bg-transparent text-gray-400 text-sm"
                    />
                  </div>
                ))}
                <div className="w-full border border-[#B8B9BC] p-2 rounded-lg">
                  <textarea
                    type="text"
                    placeholder="Hello Prince Ademola I would like..."
                    className="w-full border-none outline-none bg-transparent text-[#B9B9B9] text-xs sm:text-sm"
                  />
                </div>
                <button
                  className="bg-[#4B3DFE] hover:bg-[#3A2EDB] transition-colors w-full px-6 py-3 rounded-lg text-white text-base font-inter font-semibold mt-4"
                  type="submit"
                >
                  Enquire Now
                </button>
                <button
                  className="bg-[#60D669] hover:bg-[#76eb80] flex items-center justify-center gap-2 transition-colors w-full px-6 py-3 rounded-lg text-white text-base font-inter font-semibold"
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
            <div className="w-72 rounded-md flex flex-col gap-4 bg-[#EDECFF] px-4 py-5">
              <p className="text-center text-base sm:text-lg font-semibold text-[#1E1E1E]">
                Advertise/market your property on Strent
              </p>
              <button
                className="bg-[#4B3DFE] hover:bg-[#3A2EDB] transition-colors w-full px-6 py-3 rounded-lg text-white text-base font-inter font-semibold"
                //   type="submit"
              >
                Get Started
              </button>
            </div>
          </div>
  );
};

export default InnerListingLeft;
