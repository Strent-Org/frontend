import { useState } from "react";

const MyListingsTab = () => {
  const [activeTab, setActiveTab] = useState("published");

  return (
    <>
      <div className="flex-1">

        {/* My Listings Tabs */}
        <h1 className="font-sora font-semibold text-2xl text-[#1E1E1E] leading-[21px] tracking-[1.12%] mb-8">
          My Listings
        </h1>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setActiveTab("published")}
            className={`w-[100px] h-[64px] sm:w-[120px] md:w-[140px] lg:w-[150px] p-4 font-inter font-semibold border border-[#DDDDDD] shadow-lg rounded-t-lg ${
              activeTab === "published" ? "bg-white" : "bg-[#F7F8FA]"
            }`}
          >
            Published (0)
          </button>
          <button
            onClick={() => setActiveTab("closed")}
            className={`w-[100px] h-[64px] sm:w-[120px] md:w-[140px] lg:w-[150px] p-4 font-inter font-semibold border border-[#DDDDDD] shadow-lg rounded-t-lg ${
              activeTab === "closed" ? "bg-white" : "bg-[#F7F8FA]"
            }`}
          >
            Closed (0)
          </button>
        </div>

        {/* Published Tab */}
        {activeTab === "published" && (
          <div className="w-full bg-white shadow-lg rounded-lg px-4 py-6 flex flex-wrap items-center gap-2">
            <input
              type="text"
              placeholder="Search by Title"
              className="border border-[#DDDDE1] h-10 w-[12%] font-inter text-[#565658] text-xs leading-[16px] tracking-[0.4%] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="border border-[#DDDDE1] h-10 w-[12%] text-xs rounded-md px-3 py-2 font-inter text-[#565658] focus:outline-none">
              <option>All</option>
            </select>
            <select className="border border-[#DDDDE1] h-10 w-[12%] text-xs rounded-md px-3 py-2 font-inter text-[#565658] focus:outline-none">
              <option>Type</option>
            </select>
            <select className="border border-[#DDDDE1] h-10 w-[12%] text-xs rounded-md px-3 py-2 font-inter text-[#565658] focus:outline-none">
              <option>Beds</option>
            </select>
            <input
              type="text"
              placeholder="Min Price"
              className="border border-[#DDDDE1] h-10 w-[12%] text-xs rounded-md px-3 py-2 font-inter text-[#B8B9BC] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Max Price"
              className="border border-[#DDDDE1] h-10 w-[12%] text-xs rounded-md px-3 py-2 font-inter text-[#B8B9BC] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="border border-[#DDDDE1] h-10 w-[12%] text-xs rounded-md px-3 py-2 font-inter text-[#565658] focus:outline-none">
              <option>Category</option>
            </select>
            <input
              type="date"
              className="border border-[#DDDDE1] h-10 w-[12%] text-xs rounded-md px-3 py-2 font-inter text-[#565658] focus:outline-none"
            />
            <input
              type="date"
              className="border border-[#DDDDE1] h-10 w-[12%] text-xs rounded-md px-3 py-2 font-inter text-[#565658] focus:outline-none"
            />
            <button className="bg-[#4B3DFE] text-white px-4 py-2 rounded-md text-sm font-inter font-bold hover:bg-[#3a2ddd]">
              Filter
            </button>
            <div className="mt-4 bg-[#F0F0F0] w-full p-4 font-inter text-xs">
              List is empty
            </div>
          </div>
        )}

        {/* Closed Tab */}
        {activeTab === "closed" && (
          <div className="w-full bg-white shadow-md rounded-lg px-4 py-6 flex flex-wrap items-center gap-2">
            <input
              type="text"
              placeholder="Search by Title"
              className="border border-[#DDDDE1] h-10 w-[12%] font-inter text-[#565658] text-xs leading-[16px] tracking-[0.4%] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="border border-[#DDDDE1] h-10 w-[12%] text-xs rounded-md px-3 py-2 font-inter text-[#565658] focus:outline-none">
              <option>All</option>
            </select>
            <select className="border border-[#DDDDE1] h-10 w-[12%] text-xs rounded-md px-3 py-2 font-inter text-[#565658] focus:outline-none">
              <option>Type</option>
            </select>
            <select className="border border-[#DDDDE1] h-10 w-[12%] text-xs rounded-md px-3 py-2 font-inter text-[#565658] focus:outline-none">
              <option>Beds</option>
            </select>
            <input
              type="text"
              placeholder="Min Price"
              className="border border-[#DDDDE1] h-10 w-[12%] text-xs rounded-md px-3 py-2 font-inter text-[#565658] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Max Price"
              className="border border-[#DDDDE1] h-10 w-[12%] text-xs rounded-md px-3 py-2 font-inter text-[#565658] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="border border-[#DDDDE1] h-10 w-[12%] text-xs rounded-md px-3 py-2 font-inter text-[#565658] focus:outline-none">
              <option>Category</option>
            </select>
            <input
              type="date"
              className="border border-[#DDDDE1] h-10 w-[12%] text-xs rounded-md px-3 py-2 font-inter text-[#565658] focus:outline-none"
            />
            <input
              type="date"
              className="border border-[#DDDDE1] h-10 w-[12%] text-xs rounded-md px-3 py-2 font-inter text-[#565658] focus:outline-none"
            />
            <button className="bg-[#4B3DFE] text-white px-4 py-2 rounded-md text-sm font-inter font-bold hover:bg-[#3a2ddd]">
              Filter
            </button>
            <div className="mt-4 bg-[#F0F0F0] w-full p-4 font-inter text-xs">
              List is empty
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyListingsTab;
