const ShortletCards = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 p-2 border-2 border-[#DDDDE1] rounded-lg">
              {/* Image + Sponsored */}
              <div className="relative md:flex-[4] w-full md:w-auto">
                <img
                  className="w-full rounded-lg h-48 md:w-[13.25rem] md:h-[12.25rem] object-cover"
                  src="/shortlet-result-img.png"
                  alt="Filtered shortlet"
                />
                <div className="absolute top-2 left-[-5px] bg-[#FF6B57] text-white text-sm font-semibold px-3 py-1 rounded-tr-lg rounded-br-lg">
                  Sponsored
                </div>
              </div>

              {/* Details */}
              <div className="flex  flex-col gap-2 flex-[6]">
                <div className='h-[100%]'>
                  <div className="md:border-r-2  pr-6 ">
                    <h1 className="font-bold text-lg">Studio Pentfloor</h1>
                    <p className="mt-1 text-sm whitespace-nowrap">
                      Studio Pentfloor / Flat / Apartment for shortlet
                    </p>
                    <p className="flex items-center gap-2 mt-1 text-sm text-[#6E6F70]">
                      <img src="/location.png" className="w-4 h-4" alt="location" />
                      Ikate, Lekki Ikate Lekki Lagos
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["CCTV CAMERAS", "FREE WIFI", "24 HOURS SECURITY"].map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-[#EDECFF] text-[#4B3DFE] text-[10px] px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <img
                      className="w-8 h-8 object-cover rounded-full"
                      src="/personImage.png"
                      alt="Owner"
                    />
                    <p className="font-semibold">Prince Ademola</p>
                    <img
                      className="w-5 h-5"
                      src="/bitcoin-icons_verify-filled.png"
                      alt="Verified"
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    Updated 17 Jul 2025, Added 07 Jul 2025
                  </p>
                                </div>
                </div>

              {/* Price and Actions */}
              <div className="md:h-[180px] flex md:flex-col justify-between md:items-end">
                <div className="flex flex-col items-start md:items-end gap-2">
                  <h1 className="font-bold text-base">₦ 65,000/day</h1>
                  <p className="text-sm mr-auto">1 Bed 1 Bath</p>
                </div>
                <div className="flex gap-2 mt-4 md:mt-auto">
                  <button className="bg-[#4B3DFE] h-8 text-white px-3 rounded flex items-center gap-1">
                    <img src="/material-symbols_call.png" className="w-4 h-4" alt="Call" />
                    <span className="text-sm">Call</span>
                  </button>
                  <button className="bg-[#60D669] h-8 w-8 rounded flex items-center justify-center">
                    <img src="/whatsapp.png" className="w-4 h-4" alt="WhatsApp" />
                  </button>
                </div>
              </div>
            </div>
  )
}

export default ShortletCards
