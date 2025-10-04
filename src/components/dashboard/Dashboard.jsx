import { useState } from "react";
import DashboardTab from "./DashboardTab";
import MyListingsTab from "./MyListingsTab";
import SubscriptionTab from "./SubscriptionTab";
import PerformanceTab from "./PerformanceTab";
import ProfileTab from "./ProfileTab";
import MyMessagesTab from "./MyMessagesTab";
import FavoriteTab from "./FavoriteTab";


export default function Dashboard() {
    const [activePage, setActivePage] = useState("dashboard");

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
          <button
            onClick={() => setActivePage("dashboard")}
            className="flex items-center gap-4 hover:text-blue-200 font-inter md:text-base text-sm text-white leading-6 tracking-[0.4%]"
          >
            <img
              className="w-6 h-6 object-contain"
              src={`${activePage === "dashboard"  ? "/dashboardIcon.png" : "dashboardIconStroke.png"}`}
              alt="dashboard icon"
            />{" "}
            Dashboard
          </button>
          <button
            onClick={() => setActivePage("listings")}
            className="flex items-center gap-4 hover:text-blue-200 font-inter md:text-base text-sm text-white leading-6 tracking-[0.4%]"
          >
            <img
              className="w-6 h-6 object-contain"
              src={`${activePage === "listings"  ? "/dashboardMyListingIconFill.png" : "/dashboardMyListingIcon.png"}`}
              alt="My Listings Icon"
            />{" "}
            My Listings
          </button>
          <button
            onClick={() => setActivePage("performance")}
            className="flex items-center gap-4 hover:text-blue-200 font-inter md:text-base text-sm text-white leading-6 tracking-[0.4%]"
          >
            <img
              className="w-6 h-6 object-contain"
              src={`${activePage === "performance"  ? "/PerformanceFill.png" : "/Performance.png"}`}
              alt="Performance icon"
            />{" "}
            Performance
          </button>
          <button
            onClick={() => setActivePage("subscription")}
            className="flex items-center gap-4 hover:text-blue-200 font-inter md:text-base text-sm text-white leading-6 tracking-[0.4%]"
          >
            <img
              className="w-6 h-6 object-contain"
              src={`${activePage === "subscription"  ? "/subscriptionIconFill.png" : "/subscriptionIcon.png"}`}
              alt="Subscription icon"
            />{" "}
            Subscription
          </button>
          <button
            onClick={() => setActivePage("profile")}
            className="flex items-center gap-4 hover:text-blue-200 font-inter md:text-base text-sm text-white leading-6 tracking-[0.4%]"
          >
            <img
              className="w-6 h-6 object-contain"
              src={`${activePage === "profile"  ? "/profileIconFill.png" : "/profileIcon.png"}`}
              alt="Profile icon"
            />{" "}
            Profile
          </button>
          <button
            onClick={() => setActivePage("messages")}
            className="flex items-center gap-4 hover:text-blue-200 font-inter md:text-base text-sm text-white leading-6 tracking-[0.4%]"
          >
            <img
              className="w-6 h-6 object-contain"
              src={`${activePage === "messages"  ? "/messageIconFill.png" : "/messageIcon.png"}`}
              alt="My message icon"
            />{" "}
            My Messages
          </button>
          <button
            onClick={() => setActivePage("favorite")}
            className="flex items-center gap-4 hover:text-blue-200 font-inter md:text-base text-sm text-white leading-6 tracking-[0.4%]"
          >
            <img
              className="w-6 h-6 object-contain"
              src={`${activePage === "favorite"  ? "/favoriteIconFill.png" : "/favoriteIcon.png"}`}
              alt="Favorite icon"
            />{" "}
            Favorite
          </button>
          <button
            onClick={() => setActivePage("signout")}
            className="flex items-center gap-4 hover:text-blue-200 font-inter md:text-base text-sm text-white leading-6 tracking-[0.4%]"
          >
            <img
              className="w-6 h-6 object-contain"
              src="/signoutIcon.png"
              alt="Signout icon"
            />{" "}
            Sign Out
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      {activePage === "dashboard" && <DashboardTab />}
      {activePage === "listings" && <MyListingsTab />}
      {activePage === "performance" && <PerformanceTab />}
      {activePage === "subscription" && <SubscriptionTab />}
      {activePage === "profile" && <ProfileTab />}
      {activePage === "messages" && <MyMessagesTab />}
      {activePage === "favorite" && <FavoriteTab />}

      
    </div>
  );
}
