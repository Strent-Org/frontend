import { useState } from "react";
import ListingCards from "./ListingCards";

const InnerListingRight = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <div className="flex-[2.7] flex flex-col gap-4 order-1 lg:order-2 mt-6 sm:mt-0">
      {/* Property Title */}
      <div className="flex flex-col gap-4">
        <h1 className="text-xl sm:text-2xl font-semibold text-[#1E1E1E] font-sora leading-snug">
          2 Bedroom Terrace Duplex
        </h1>
        <div className="flex flex-wrap gap-2 items-center">
          <img
            className="w-6 h-6 object-cover"
            src="/locationInnerShortlet.png"
            alt="Location"
          />
          <p className="text-[#1E1E1E] text-xs sm:text-sm font-inter leading-snug">Ikate Elegushi Lekki Lagos</p>
        </div>

        <h1 className="text-xl sm:text-2xl font-semibold font-sora text-[#1E1E1E] leading-snug">
          ₦ 15,000,000/year
        </h1>
        <p className="text-xs sm:text-sm text-[#1E1E1E] font-inter leading-snug">
          2 bedroom Flat & Apartment Short let Ikate Elegushi Lekki Lagos
        </p>

        <div className="flex flex-wrap items-center gap-4">
          {[
            { icon: "/bed-outline.png", text: "2 Beds" },
            { icon: "/shower.png", text: "2 Baths" },
            { icon: "/bed-outline.png", text: "3 Toilets" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-[#1E1E1E] text-xs sm:text-sm font-inter leading-snug"
            >
              <img className="w-5 h-5" src={item.icon} alt={item.text} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Saftety Tips */}
      <div className="flex flex-col gap-2 p-4 sm:p-6 bg-[#F9F9FF]">
        <h1 className="font-semibold font-sora text-lg sm:text-xl text-[#1E1E1E]">
          Safety Tips
        </h1>
        <ul className="flex flex-col gap-2 list-disc pl-5 text-sm sm:text-base font-inter text-[#1E1E1E]">
          <li>
            Do not make any inspection fee without seeing the agent and
            property.
          </li>
          <li>
            Only pay Rental fee, Shortlet fee or any upfront payment after you
            verify the Landlord.
          </li>
          <li>Ensure you meet the Agent in an open location.</li>
          <li>
            The Agent does not represent PropertyPro and PropertyPro is not
            liable for any monetary transaction between you and the Agent.
          </li>
        </ul>
      </div>

      {/* Overview Tabs */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#DDDDE1] gap-4">
        {["Overview", "Location", "Video"].map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 cursor-pointer text-lg sm:text-2xl font-semibold font-sora text-[#1E1E1E] leading-snug transition-colors duration-200 ${
              activeTab === tab
                && "border-b-2 border-[#4B3DFE]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Overview Location Video content */}
      <div>
        {activeTab === "Overview" && (
          <div className="flex flex-col gap-4 text-sm sm:text-base font-inter text-[#1E1E1E] leading-normal">
            <p>
              You will be refunded your caution fee deposit at check out once
              inspection confirms nothing is missing or damaged.
            </p>
            <p>
              Live the Island Dream: Serenity, Style & Security in the Heart of
              VI.
            </p>
            <p>
              Welcome to The Eko Retreat, a luxurious first-floor apartment
              nestled just moments away from the iconic Eko Hotel, where the
              vibrant pulse of Victoria Island meets peace, privacy, and
              polished comfort. Whether you're booking as a couple, a business
              traveler, or a small family, this apartment offers you a lifestyle
              — not just a stay.
            </p>
            <p>
              Step into an impeccably furnished space, where warm lighting and
              tasteful décor wrap you in calm. The open living room invites you
              to unwind with a smart TV loaded with Netflix, YouTube, and Prime,
              while unlimited high-speed internet keeps you connected without
              compromise.
            </p>
            <p>
              Drift into dreamland in spacious queen-size bedrooms, or convert
              the second room into your private lounge, home office, or reading
              nook — the choice is yours. The standard bathrooms are sleek,
              functional, and designed with your comfort in mind.
            </p>
            <p>
              Laundry is never a worry with your in-house washer, dryer, and
              dedicated laundry room. A housekeeper is always on standby, ready
              to refresh your space and ensure every detail is perfect.
            </p>
            <p>
              Security? You’re covered with 24/7 high-profile surveillance and
              concierge access, plus dedicated parking for your vehicle. Power
              and water run seamlessly, so you’ll never skip a beat — whether
              you’re hosting at your stylish bar or squeezing in a workout in
              the on-site gym.
            </p>
            <p>
              Take the elevator, open the door, and walk into an experience
              designed to feel like home — only better.
            </p>
            <div className="flex flex-col">
              <p>Your Victoria Island Getaway Includes: </p>
              <div className="mt-2">
                <p>
                  2 large bedrooms (also perfect as 1 bed + lounge/office setup)
                </p>
                <p>Netflix, YouTube, Prime Video</p>
                <p>Unlimited-speed WiFi</p>
                <p>24/7 electricity & water treatment</p>
                <p>Elevator access</p>
                <p>Housekeeper on request</p>
                <p>Laundry room with washer & dryer</p>
                <p>Rooftop terrace</p>
                <p>Dedicated parking</p>
                <p>Gym</p>
                <p>Secure, serene, stylish</p>
              </div>
            </div>
            <p>
              The Eko Retreat is more than a stay — it's your personal slice of
              comfort, convenience, and class in the heart of Victoria Island.
            </p>
            <p>Book now and feel the difference.</p>
          </div>
        )}

        {activeTab === "Location" && (
          <div>
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7926.73620503506!2d3.420001!3d6.42805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4cae62b65f7%3A0x6e799d3b1a02c1d1!2sEko%20Hotels%20%26%20Suites!5e0!3m2!1sen!2sng!4v1691774105023!5m2!1sen!2sng"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
                title="Eko Hotels Map"
              />
            </div>
          </div>
        )}

        {activeTab === "Video" && (
          <div>
            <div className="w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/6J1lsyf_1nc"
                title="Victoria Island & Eko Atlantic Aerial Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        )}
      </div>

      {/* Report Property */}
      <div className="w-full border border-[#DDDDE1] rounded-md px-4 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            className="w-9 h-11"
            src="/Vector.png"
            alt="Trusted Logo"
          />
          <div>
            <h1 className="font-semibold font-sora text-lg sm:text-xl leading-snug">
              Property is verified as real
            </h1>
            <p className="text-sm font-inter leading-snug">
              If reported as fake, we'll investigate to confirm if
            </p>
          </div>
        </div>
        <button className="border border-[#4B3DFE] text-[#3A2EDB] px-4 py-2 rounded-lg font-semibold font-inter text-sm sm:text-base">
          Report Property
        </button>
      </div>

      {/* Similar Listings */}
      <div className="flex flex-col gap-4">
        <h1 className="text-lg sm:text-xl font-bold text-[#1E1E1E]">
          Similar Listings
        </h1>
        <ListingCards />
        <ListingCards />
        <ListingCards />
      </div>
    </div>
  );
};

export default InnerListingRight;
