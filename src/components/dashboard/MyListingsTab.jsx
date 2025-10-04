import React from "react";

const MyListingsTab = () => {
  return (
    <>
      <div className="flex-1 mx-4">
        <div className="flex justify-between items-center my-12">
          <h2 className="text-2xl font-sora leading-8 tracking-[1.12%] font-semibold">
            Good day, Oluchi Onyekpa
          </h2>
          <div className="flex gap-10">
            <button className="bg-[#4B3DFE] text-white px-4 py-2 rounded-lg hover:bg-[#3a2ddd]">
              Post a Property
            </button>
            <div className="flex items-center">
              <img
                src="/bell.png"
                alt="Notification icon"
                className="w-8 h-8 cursor-pointer"
              />
              <div className="flex items-center gap-2">
                <img
                  src="/user.png"
                  alt="User icon"
                  className="w-10 h-10 cursor-pointer"
                />
                <img
                  src="/CaretDown.png"
                  alt="ArrowDown icon"
                  className="w-4 h-4 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        <h1 className="font-sora font-semibold text-2xl text-[#1E1E1E] leading-[21px] tracking-[1.12%]">My Listings</h1>
      </div>
    </>
  );
};

export default MyListingsTab;
