import { useState } from "react";

const MyListingsTab = () => {
  const [activeTab, setActiveTab] = useState("published");

  return (
    <>
      <div className="flex-1 mx-4">
        {/* Alert banner */}
        <div className="w-full bg-[#D41800] text-white p-4 rounded-lg mb-6 text-sm flex items-center gap-2">
          <img src="/alert.png" alt="" className="w-6 h-6" />
          <div className="font-inter font-normal leading-[20px] tracking-[0.4%]">
            <span className="font-semibold">Compliance Update:</span> All agents
            are required to submit means of identity for verification purposes.{" "}
            <a href="#" className="underline font-semibold text-base">
              Upload your documents
            </a>
          </div>
        </div>

        {/* Header section */}
        <div className="flex justify-between items-center mt-12 mb-14">
          <h2 className="text-2xl font-sora leading-8 tracking-[1.12%] font-semibold">
            Good day, Oluchi Onyekpa
          </h2>
          <div className="flex gap-10">
            <button className="bg-[#4B3DFE] text-white px-4 py-2 rounded-lg hover:bg-[#3a2ddd]">
              Post a Property
            </button>
            <div className="flex items-center gap-2">
              <img src="/bell.png" alt="Notification" className="w-8 h-8 cursor-pointer" />
              <div className="flex items-center gap-2">
                <img src="/user.png" alt="User" className="w-10 h-10 cursor-pointer" />
                <img src="/CaretDown.png" alt="Dropdown" className="w-4 h-4 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

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
