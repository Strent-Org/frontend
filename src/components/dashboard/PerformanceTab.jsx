import React, { useState } from 'react'

const PerformanceTab = () => {
    const [activeTab, setActiveTab] = useState("enquires")
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
            onClick={() => setActiveTab("enquires")}
            className={`w-[100px] h-[64px] sm:w-[120px] md:w-[140px] lg:w-[150px] p-4 font-inter font-semibold border border-[#DDDDDD] shadow-lg rounded-t-lg ${
              activeTab === "enquires" ? "bg-white" : "bg-[#F7F8FA]"
            }`}
          >
            Enquires
          </button>
          <button
            onClick={() => setActiveTab("requests")}
            className={`w-[100px] h-[64px] whitespace-nowrap sm:w-[120px] md:w-[140px] lg:w-[150px] p-4 font-inter font-semibold border border-[#DDDDDD] shadow-lg rounded-t-lg ${
              activeTab === "requests" ? "bg-white" : "bg-[#F7F8FA]"
            }`}
          >
            Client requests
          </button>
          <button
            onClick={() => setActiveTab("stats")}
            className={`w-[100px] h-[64px] sm:w-[120px] md:w-[140px] lg:w-[150px] p-4 font-inter font-semibold border border-[#DDDDDD] shadow-lg rounded-t-lg ${
              activeTab === "stats" ? "bg-white" : "bg-[#F7F8FA]"
            }`}
          >
            Stats
          </button>
          <button
            onClick={() => setActiveTab("leads")}
            className={`w-[100px] h-[64px] sm:w-[120px] md:w-[140px] lg:w-[150px] p-4 font-inter font-semibold border border-[#DDDDDD] shadow-lg rounded-t-lg ${
              activeTab === "leads" ? "bg-white" : "bg-[#F7F8FA]"
            }`}
          >
            Leads
          </button>
          <button
            onClick={() => setActiveTab("listingStats")}
            className={`w-[100px] h-[64px] sm:w-[120px] md:w-[140px] lg:w-[150px] p-4 font-inter font-semibold border border-[#DDDDDD] shadow-lg rounded-t-lg ${
              activeTab === "listingStats" ? "bg-white" : "bg-[#F7F8FA]"
            }`}
          >
            Listing Stats
          </button>
        </div>

        {/* enquires Tab */}
        {activeTab === "enquires" && (
          <div className="w-full bg-white shadow-lg rounded-lg p-6">
            <div className='flex items-center justify-between border-b border-[#DDDDE1] pb-2 flex-wrap text-[#1E1E1E] text-sm font-semibold font-inter'>
                <p>Date</p>
                <p>Name</p>
                <p>Number</p>
                <p>Property Description</p>
                <p>View Property</p>
            </div>
          </div>
        )}
        {/* requests Tab */}
        {activeTab === "requests" && (
          <div className="w-full bg-white shadow-lg rounded-lg p-6">
            <div className='flex items-center justify-between border-b border-[#DDDDE1] pb-2 flex-wrap text-[#1E1E1E] text-sm font-semibold font-inter'>
                <p>Date</p>
                <p>Name</p>
                <p>Number</p>
                <p>Property Description</p>
                <p>View Property</p>
            </div>
          </div>
        )}
        {/* stats Tab */}
        {activeTab === "stats" && (
          <div className="w-full bg-white shadow-lg rounded-lg p-6">
            <div className='flex items-center justify-between border-b border-[#DDDDE1] pb-2 flex-wrap text-[#1E1E1E] text-sm font-semibold font-inter'>
                <p>Date</p>
                <p>Name</p>
                <p>Number</p>
                <p>Property Description</p>
                <p>View Property</p>
            </div>
          </div>
        )}
        {/* leads Tab */}
        {activeTab === "leads" && (
          <div className="w-full bg-white shadow-lg rounded-lg p-6">
            <div className='flex items-center justify-between border-b border-[#DDDDE1] pb-2 flex-wrap text-[#1E1E1E] text-sm font-semibold font-inter'>
                <p>Date</p>
                <p>Name</p>
                <p>Number</p>
                <p>Property Description</p>
                <p>View Property</p>
            </div>
          </div>
        )}
        {/* listingStats Tab */}
        {activeTab === "listingStats" && (
          <div className="w-full bg-white shadow-lg rounded-lg p-6">
            <div className='flex items-center justify-between border-b border-[#DDDDE1] pb-2 flex-wrap text-[#1E1E1E] text-sm font-semibold font-inter'>
                <p>Date</p>
                <p>Name</p>
                <p>Number</p>
                <p>Property Description</p>
                <p>View Property</p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default PerformanceTab