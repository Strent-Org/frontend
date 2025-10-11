import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 2, y: 0 },
  { x: 3, y: 0 },
  { x: 4, y: 0 },
];

const PerformanceTab = () => {
  const [activeTab, setActiveTab] = useState("enquires");
  return (
    <>
      <div className="flex-1">
        

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
            <div className="flex items-center justify-between border-b border-[#DDDDE1] pb-2 flex-wrap text-[#1E1E1E] text-sm font-semibold font-inter">
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
            <div className="flex items-center justify-between border-b border-[#DDDDE1] pb-2 flex-wrap text-[#1E1E1E] text-sm font-semibold font-inter">
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
            <form className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <label className="text-sm text-[#1E1E1E] font-inter font-bold tracking-[0.4%]">
                  Select from date
                </label>
                <input
                  className="border font-inter font-bold text-xs border-[#DDDDE1] px-4 py-2 rounded-md"
                  type="date"
                />
              </div>
              <div className="flex items-center gap-4">
                <label className="text-sm text-[#1E1E1E] font-inter font-bold tracking-[0.4%]">
                  Select from date
                </label>
                <input
                  className="border font-inter font-bold text-xs border-[#DDDDE1] px-4 py-2 rounded-md"
                  type="date"
                />
              </div>
              <button className="bg-[#4B3DFE] hover:bg-[#3a2ddd] rounded-md px-4 py-2 font-inter font-bold text-white">
                Submit
              </button>
            </form>
            <div className="border border-[#DDDDE1] mt-4 rounded-md py-6 px-2">
              <div className="flex flex-col items-center justify-center gap-4 mb-4">
                <p className="font-sora font-semibold text-[#1E1E1E] md:text-xl text-lg leading-[28px] tracking-[1.12%]">
                  Graph
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-[63px] h-[16px] bg-[#867DFE]" />
                  <p className="font-inter text-[#171717] md:text-sm text:xs tracking-[0.4%]">
                    Leads gotten
                  </p>
                </div>
              </div>
              {/* chart */}
              <div style={{ width: "100%", height: 280 }}>
                <ResponsiveContainer>
                  <LineChart data={data}>
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <XAxis dataKey="x" hide />{" "}
                    {/* hide x labels if you only want y */}
                    <YAxis
                      domain={[0, 1]}
                      ticks={[
                        0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0,
                      ]}
                      allowDecimals={true}
                      interval={0}
                      className="text-sm font-inter"
                    />
                    <Tooltip />
                    <Line type="linear" dataKey="y" stroke="transparent" />{" "}
                    {/* invisible line */}
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="flex items-center justify-center gap-2 mt-12 mb-4">
                <div className="w-[63px] h-[16px] bg-[#FF6B57]" />
                <p className="font-inter text-[#171717] md:text-sm text:xs tracking-[0.4%]">
                  Listings posted
                </p>
              </div>
              {/* chart */}
              <div style={{ width: "100%", height: 280 }}>
                <ResponsiveContainer>
                  <LineChart data={data}>
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <XAxis dataKey="x" hide />{" "}
                    {/* hide x labels if you only want y */}
                    <YAxis
                      domain={[0, 1]}
                      ticks={[
                        0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0,
                      ]}
                      allowDecimals={true}
                      interval={0}
                      className="text-sm font-inter"
                    />
                    <Tooltip />
                    <Line type="linear" dataKey="y" stroke="transparent" />{" "}
                    {/* invisible line */}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="my-4">
              <h3 className="font-sora font-semibold lg:text-xl text-lg tracking-[1.12%] mt-4">
                Product Use History
              </h3>
              {/* table */}
              <div className="overflow-x-auto border border-[#DDDDE1] mt-4 rounded-md">
                <table className="w-full text-left leading-[20px] tracking-[0.4%]">
                  <thead className="border-b border-[#DDDDE1]">
                    <tr className="font-inter font-bold text-[#565658] text-xs">
                      <th className="p-2 border border-[#DDDDE1]">PID</th>
                      <th className="p-2 border border-[#DDDDE1]">Last use Date & Time</th>
                      <th className="p-2 border border-[#DDDDE1]">Activity</th>
                    </tr>
                  </thead>
                  <tbody className="font-inter font-bold text-[#565658] text-xs">
                    <tr>
                      <td className="p-2 border border-[#DDDDE1] flex flex-col items-start gap-2">
                        <span>Total Auto Pushup: 0</span>
                        <span>Total Near Expiration Auto Pushup: 0</span>
                      </td>
                      <td className="p-2 border border-[#DDDDE1]">Total Self Pushup: 0</td>
                      <td className="p-2 border border-[#DDDDE1]">Total Admin Pushup: 0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="my-4">
              <h3 className="font-sora font-semibold lg:text-xl text-lg tracking-[1.12%] mt-4">
                Team Member Tool History
              </h3>
              {/* table */}
              <div className="overflow-x-auto border border-[#DDDDE1] mt-4 rounded-md">
                <table className="w-full text-left leading-[20px] tracking-[0.4%]">
                  <thead className="border-b border-[#DDDDE1]">
                    <tr className="font-inter font-bold text-[#565658] text-xs">
                      <th className="p-2 border border-[#DDDDE1]">Member</th>
                      <th className="p-2 border border-[#DDDDE1]">Last use Date & Time</th>
                      <th className="p-2 border border-[#DDDDE1]">Activity</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
            <div className="mt-4 mb-8">
              <h3 className="font-sora font-semibold lg:text-xl text-lg tracking-[1.12%] mt-4">
                Viewed Requests History
              </h3>
              {/* table */}
              <div className="overflow-x-auto border border-[#DDDDE1] mt-4 rounded-md">
                <table className="w-full text-left leading-[20px] tracking-[0.4%]">
                  <thead className="border-b border-[#DDDDE1]">
                    <tr className="font-inter font-bold text-[#565658] text-xs">
                      <th className="p-2 border border-[#DDDDE1]">Last use Date & Time</th>
                      <th className="p-2 border border-[#DDDDE1]">Request Details</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        )}
        {/* leads Tab */}
        {activeTab === "leads" && (
          <div className="w-full bg-white shadow-lg rounded-lg p-6">
            <form className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <label className="text-sm text-[#1E1E1E] font-inter font-bold tracking-[0.4%]">
                  Select from date
                </label>
                <input
                  className="border font-inter font-bold text-xs border-[#DDDDE1] px-4 py-2 rounded-md"
                  type="date"
                />
              </div>
              <div className="flex items-center gap-4">
                <label className="text-sm text-[#1E1E1E] font-inter font-bold tracking-[0.4%]">
                  Select from date
                </label>
                <input
                  className="border font-inter font-bold text-xs border-[#DDDDE1] px-4 py-2 rounded-md"
                  type="date"
                />
              </div>
              <button className="bg-[#4B3DFE] hover:bg-[#3a2ddd] rounded-md px-4 py-2 font-inter font-bold text-white">
                Submit
              </button>
            </form>
            <div className="mt-4 mb-8">
              <h3 className="font-sora font-semibold lg:text-xl text-lg tracking-[1.12%] mt-4">
                Leads Daily
              </h3>
              {/* table */}
              <div className="overflow-x-auto border border-[#DDDDE1] mt-4 rounded-md">
                <table className="w-full text-left leading-[20px] tracking-[0.4%]">
                  <thead className="border-b border-[#DDDDE1]">
                    <tr className="font-inter font-bold text-[#565658] text-xs">
                      <th className="p-2 border border-[#DDDDE1]">Date</th>
                      <th className="p-2 border border-[#DDDDE1]">From Phone</th>
                      <th className="p-2 border border-[#DDDDE1]">From WhatsApp</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        )}
        {/* listingStats Tab */}
        {activeTab === "listingStats" && (
          <div className="w-full bg-white shadow-lg rounded-lg p-6">
            <form className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <label className="text-sm text-[#1E1E1E] font-inter font-bold tracking-[0.4%]">
                  Select from date
                </label>
                <input
                  className="border font-inter font-bold text-xs border-[#DDDDE1] px-4 py-2 rounded-md"
                  type="date"
                />
              </div>
              <div className="flex items-center gap-4">
                <label className="text-sm text-[#1E1E1E] font-inter font-bold tracking-[0.4%]">
                  Select from date
                </label>
                <input
                  className="border font-inter font-bold text-xs border-[#DDDDE1] px-4 py-2 rounded-md"
                  type="date"
                />
              </div>
              <button className="bg-[#4B3DFE] hover:bg-[#3a2ddd] rounded-md px-4 py-2 font-inter font-bold text-white">
                Submit
              </button>
            </form>
            <div className="mt-4 mb-8">
              <h3 className="font-sora font-semibold lg:text-xl text-lg tracking-[1.12%] mt-4">
                Leads Daily
              </h3>
              {/* table */}
              <div className="overflow-x-auto border border-[#DDDDE1] mt-4 rounded-md">
                <table className="w-full text-left leading-[20px] tracking-[0.4%]">
                  <thead className="border-b border-[#DDDDE1]">
                    <tr className="font-inter font-bold text-[#565658] text-xs">
                      <th className="p-2 border border-[#DDDDE1]">Date</th>
                      <th className="p-2 border border-[#DDDDE1]">For Rent</th>
                      <th className="p-2 border border-[#DDDDE1]">For Shortlet</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PerformanceTab;
