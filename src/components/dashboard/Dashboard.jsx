// import { useState } from "react";
import {
  Bell,
  User,
} from "lucide-react"; // optional icons

export default function Dashboard() {
  //   const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F7F8FA] my-8 mx-4">
      {/* Sidebar */}
      <aside className="w-56 bg-[#4B3DFE] px-2 py-6 text-white flex flex-col items-center justify-center rounded-lg">
        <div>
          <img
            src="/dashboardLogo.png"
            className="w-[180px] h-18"
            alt="dashboard logo"
          />
        </div>

        <nav className="flex-1 space-y-6 mt-16">
          <a
            href="#"
            className="flex items-center gap-4 hover:text-blue-200 font-inter md:text-base text-sm text-white leading-6 tracking-[0.4%]"
          >
            <img
              className="w-6 h-6"
              src="/dashboardIcon.png"
              alt="dashboard icon"
            />{" "}
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center gap-4 hover:text-blue-200 font-inter md:text-base text-sm text-white leading-6 tracking-[0.4%]"
          >
            <img
              className="w-6 h-6"
              src="/dashboardMyListingIcon.png"
              alt="My Listings Icon"
            />{" "}
            My Listings
          </a>
          <a
            href="#"
            className="flex items-center gap-4 hover:text-blue-200 font-inter md:text-base text-sm text-white leading-6 tracking-[0.4%]"
          >
            <img
              className="w-6 h-6"
              src="/Performance.png"
              alt="Performance icon"
            />{" "}
            Performance
          </a>
          <a
            href="#"
            className="flex items-center gap-4 hover:text-blue-200 font-inter md:text-base text-sm text-white leading-6 tracking-[0.4%]"
          >
            <img
              className="w-6 h-6"
              src="/subscriptionIcon.png"
              alt="Subscription icon"
            />{" "}
            Subscription
          </a>
          <a
            href="#"
            className="flex items-center gap-4 hover:text-blue-200 font-inter md:text-base text-sm text-white leading-6 tracking-[0.4%]"
          >
            <img
              className="w-6 h-6"
              src="/profileIcon.png"
              alt="Profile icon"
            />{" "}
            Profile
          </a>
          <a
            href="#"
            className="flex items-center gap-4 hover:text-blue-200 font-inter md:text-base text-sm text-white leading-6 tracking-[0.4%]"
          >
            <img
              className="w-6 h-6"
              src="/messageIcon.png"
              alt="My message icon"
            />{" "}
            My Messages
          </a>
          <a
            href="#"
            className="flex items-center gap-4 hover:text-blue-200 font-inter md:text-base text-sm text-white leading-6 tracking-[0.4%]"
          >
            <img
              className="w-6 h-6"
              src="/favoriteIcon.png"
              alt="Favorite icon"
            />{" "}
            Favorite
          </a>
          <a
            href="#"
            className="flex items-center gap-4 hover:text-blue-200 font-inter md:text-base text-sm text-white leading-6 tracking-[0.4%]"
          >
            <img
              className="w-6 h-6"
              src="/signoutIcon.png"
              alt="Signout icon"
            />{" "}
            Sign Out
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 mx-4">
        {/* Compliance Alert */}
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

        {/* Header */}
        <div className="flex justify-between items-center my-12">
          <h2 className="text-2xl font-sora leading-8 tracking-[1.12%] font-semibold">Good day, Oluchi Onyekpa</h2>
          <button className="bg-[#4B3DFE] text-white px-4 py-2 rounded-lg hover:bg-[#3a2ddd]">
            Post a Property
          </button>
        </div>

        {/* leads */}
        <div className="shadow-md-penumbra-6 max-w-[443px] p-4 mb-8 rounded-lg bg-white">
            <div className="flex justify-between items-center mb-2">
                <h1 className="md:text-[32px] text-[26px] font-bold font-sora text-[#1E1E1E]">0</h1>
                <img className="w-6 h-6" src="/3dot-dashboard.png" alt="3 horizontal dots" />
            </div>
            <p className="font-inter text-base leading-[24px] tracking-[0.4%] text-[#1E1E1E] mb-4">September Leads</p>
            <div className="flex items-center gap-4 font-inter text-sm">
                <button className="bg-[#4B3DFE] rounded-md px-3 whitespace-nowrap py-2 flex items-center justify-between text-white gap-2"><img className="w-4 h-4" src="/dashboardTel.png" alt="phone" /> Phone: 0</button>
                <button className="bg-[#22CD5B] rounded-md px-3 whitespace-nowrap py-2 flex items-center justify-between text-white gap-2"><img className="w-4 h-4" src="/dashboard-whatsapp.png" alt="phone" /> WhatsApp: 0</button>
                <button className="bg-[#F2F2FB] rounded-md px-3 whitespace-nowrap py-2 flex items-center justify-between text-[#1E1E1E] gap-2"><img className="w-4 h-4" src="/dashboardMainMessage.png" alt="phone" /> Messages: 0</button>
            </div>
        </div>

        {/* Listing */}
        <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
            <div>
                <div className="shadow-md-penumbra-6 max-w-[443px] p-4 mb-8 rounded-lg bg-white">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-xl font-semibold font-sora">Listing</h1>
                        <img className="w-6 h-6" src="/3dot-dashboard.png" alt="3 horizontal dots" />
                    </div>
                    <h1 className="md:text-[32px] text-[26px] font-bold font-sora text-[#1E1E1E]">0</h1>
                    <div className="text-[#1E1E1E] font-inter text-sm space-y-1">
                        <p>Total Listings: 0</p>
                        <p>Visible Listings: 0</p>
                        <p>Expired Listings: 0</p>
                    </div>
                </div>
                <div className="shadow-md-penumbra-6 max-w-[443px] p-4 mb-8 rounded-lg bg-white space-y-2">
                    <button className="bg-[#4B3DFE] py-2 px-16 rounded-md text-white w-[70%]">Performance</button>
                    <button className="bg-[#4B3DFE] py-2 px-16 rounded-md text-white w-[70%]">My Profile</button>
                    <button className="bg-[#4B3DFE] py-2 px-16 rounded-md text-white w-[70%]">Performance</button>
                </div>
            </div>

            <div className="shadow-md-penumbra-6 max-w-[443px] p-4 mb-8 rounded-lg bg-white">
                <h1><h1 className="text-xl font-semibold font-sora">Listing</h1></h1>
            </div>
        </div>

        {/* Enquiry Messages */}
        <div className="bg-white p-4 rounded-lg shadow-md-penumbra-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold font-sora text-xl text-[#1E1E1E] leading-[28px] tracking-[1.12%]">Enquiry messages</h3>
            <a href="#" className="text-sm leading-[20px] tracking-[0.4%] font-inter">
              View all
            </a>
          </div>
          <div className="overflow-x-auto ">
            <table className="w-full text-sm text-left leading-[20px] tracking-[0.4%]">
              <thead className="border-b border-[#DDDDE1]">
                <tr className="font-inter font-semibold text-[#1E1E1E]">
                  <th className="p-2">Listing</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Number</th>
                  <th className="p-2">Property Description</th>
                  <th className="p-2">View property</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 text-gray-400"></td>
                  <td className="p-2 text-gray-400"></td>
                  <td className="p-2 text-gray-400"></td>
                  <td className="p-2 text-gray-400"></td>
                  <td className="p-2 text-gray-400"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-56 bg-[#F2F2FB] p-4 hidden lg:block">
        <div className="flex items-center justify-end mb-16">
          <img src="/bell.png" alt="Notification icon"  className="w-8 h-8 cursor-pointer"/>
          <div className="flex items-center gap-2">
            <img src="/user.png" alt="User icon"  className="w-10 h-10 cursor-pointer"/>
            <img src="/CaretDown.png" alt="ArrowDown icon"  className="w-4 h-4 cursor-pointer"/>
          </div>
        </div>
        <h3 className="font-bold mb-4 md:text-lg text-base text-[#1E1E1E] font-inter">How to videos</h3>
        <div className="space-y-4">
            <p className="flex items-center justify-start gap-2">
                <img src="/videoIcon.png" alt="video icon" />
                <span className="underline font-inter text-base leading-[24px] tracking-[0.4%] text-[#1E1E1E]">How to subscribe to Plan on Strent</span>
            </p>
            <p className="flex items-center justify-start gap-2">
                <img src="/videoIcon.png" alt="video icon" />
                <span className="underline font-inter text-base leading-[24px] tracking-[0.4%] text-[#1E1E1E]">How to subscribe to Plan on Strent</span>
            </p>
        </div>
      </aside>
    </div>
  );
}
