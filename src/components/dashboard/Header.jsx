import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className=''>
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
          <Link to="posting" className="bg-[#4B3DFE] text-white px-4 py-2 rounded-lg hover:bg-[#3a2ddd]">
            Post a Property
          </Link>
          <div className="flex items-center gap-2">
            <img
              src="/bell.png"
              alt="Notification"
              className="w-8 h-8 cursor-pointer"
            />
            <div className="flex items-center gap-2">
              <img
                src="/user.png"
                alt="User"
                className="w-10 h-10 cursor-pointer"
              />
              <img
                src="/CaretDown.png"
                alt="Dropdown"
                className="w-4 h-4 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
