import DashboardTab from "./DashboardTab";
import MyListingsTab from "./MyListingsTab";
import SubscriptionTab from "./SubscriptionTab";
import PerformanceTab from "./PerformanceTab";
import ProfileTab from "./ProfileTab";
import MyMessagesTab from "./MyMessagesTab";
import FavoriteTab from "./FavoriteTab";
import Header from "./Header";
import { NavLink, Routes, Route } from "react-router-dom";
import Posting from "./Posting";

export default function Dashboard() {

  return (
    <div className="flex min-h-screen w-full py-8 px-4 bg-[#F7F8FA]">
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
          <NavLink to="" end className="flex items-center gap-4 hover:text-blue-200 font-inter md:text-base text-sm text-white leading-6 tracking-[0.4%]">
            {({ isActive }) => (
              <>
                <img
                  className="w-6 h-6 object-contain"
                  src={isActive ? "/dashboardIcon.png" : "/dashboardIconStroke.png"}
                  alt="dashboard icon"
                />{" "}
                Dashboard
              </>
            )}
          </NavLink>

          <NavLink to="listings" className="flex items-center gap-4 hover:text-blue-200 font-inter md:text-base text-sm text-white leading-6 tracking-[0.4%]">
            {({ isActive }) => (
              <>
                <img
                  className="w-6 h-6 object-contain"
                  src={isActive ? "/dashboardMyListingIconFill.png" : "/dashboardMyListingIcon.png"}
                  alt="My Listings Icon"
                />{" "}
                My Listings
              </>
            )}
          </NavLink>

          <NavLink to="performance" className="flex items-center gap-4 hover:text-blue-200 font-inter md:text-base text-sm text-white leading-6 tracking-[0.4%]">
            {({ isActive }) => (
              <>
                <img
                  className="w-6 h-6 object-contain"
                  src={isActive ? "/PerformanceFill.png" : "/Performance.png"}
                  alt="Performance icon"
                />{" "}
                Performance
              </>
            )}
          </NavLink>

          <NavLink to="subscription" className="flex items-center gap-4 hover:text-blue-200 font-inter md:text-base text-sm text-white leading-6 tracking-[0.4%]">
            {({ isActive }) => (
              <>
                <img
                  className="w-6 h-6 object-contain"
                  src={isActive ? "/subscriptionIconFill.png" : "/subscriptionIcon.png"}
                  alt="Subscription icon"
                />{" "}
                Subscription
              </>
            )}
          </NavLink>

          <NavLink to="profile" className="flex items-center gap-4 hover:text-blue-200 font-inter md:text-base text-sm text-white leading-6 tracking-[0.4%]">
            {({ isActive }) => (
              <>
                <img
                  className="w-6 h-6 object-contain"
                  src={isActive ? "/profileIconFill.png" : "/profileIcon.png"}
                  alt="Profile icon"
                />{" "}
                Profile
              </>
            )}
          </NavLink>

          <NavLink to="messages" className="flex items-center gap-4 hover:text-blue-200 font-inter md:text-base text-sm text-white leading-6 tracking-[0.4%]">
            {({ isActive }) => (
              <>
                <img
                  className="w-6 h-6 object-contain"
                  src={isActive ? "/messageIconFill.png" : "/messageIcon.png"}
                  alt="My message icon"
                />{" "}
                My Messages
              </>
            )}
          </NavLink>

          <NavLink to="favorite" className="flex items-center gap-4 hover:text-blue-200 font-inter md:text-base text-sm text-white leading-6 tracking-[0.4%]">
            {({ isActive }) => (
              <>
                <img
                  className="w-6 h-6 object-contain"
                  src={isActive ? "/favoriteIconFill.png" : "/favoriteIcon.png"}
                  alt="Favorite icon"
                />{" "}
                Favorite
              </>
            )}
          </NavLink>

          <NavLink to="/" className="flex items-center gap-4 hover:text-blue-200 font-inter md:text-base text-sm text-white leading-6 tracking-[0.4%]">
            {() => (
              <>
                <img
                  className="w-6 h-6 object-contain"
                  src="/signoutIcon.png"
                  alt="Signout icon"
                />{" "}
                Sign Out
              </>
            )}
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col w-full mx-4">
        <Header />
        <div className="p-4">
          <Routes>
            <Route index element={<DashboardTab />} />
            <Route path="listings" element={<MyListingsTab />} />
            <Route path="performance" element={<PerformanceTab />} />
            <Route path="subscription" element={<SubscriptionTab />} />
            <Route path="profile" element={<ProfileTab />} />
            <Route path="messages" element={<MyMessagesTab />} />
            <Route path="favorite" element={<FavoriteTab />} />
            <Route path="posting" element={<Posting />} />
            {/* fallback to dashboard */}
            <Route path="*" element={<DashboardTab />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
