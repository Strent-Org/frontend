// import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ListImage from "../assets/images/unsplash_t33SZJ_ZboQ.png";
import AgentImage from "../assets/images/Frame 803.png";
import VerifiedBadge from "../assets/images/verified.png";
import AdvertImage from "../assets/images/advert2.png";
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaCamera } from "react-icons/fa";
import ListingHero from '../components/Listing/ListingHero.jsx';

const Listings = () => {
  const listings = [
    {
      id: 1,
      title: "2 Bedroom Terrace Duplex",
      description: "Studio Pentfloor / Flat / Apartment for shortlet",
      location: "Ikate, Lekki Ikate Lekki Lagos",
      price: "₦ 15,000,000 /year",
      bedrooms: 1,
      bathrooms: 1,
      features: ["CCTV CAMERAS", "FREE WIFI", "24 HOURS SECURITY"],
      agent: "Prince Ademola",
      updated: "Updated 17 Jul 2025, Added 07 Jul 2025",
      photos: 10,
      sponsored: true
    },
    {
      id: 2,
      title: "3 Bedroom Duplex",
      description: "Modern duplex with parking space",
      location: "Victoria Island, Lagos",
      price: "₦ 25,000,000 /year",
      bedrooms: 3,
      bathrooms: 2,
      features: ["PARKING SPACE", "GYM", "SWIMMING POOL"],
      agent: "Sarah Johnson",
      updated: "Updated 16 Jul 2025, Added 05 Jul 2025",
      photos: 15,
      sponsored: true
    },
    {
      id: 3,
      title: "4 Bedroom Detached House",
      description: "Spacious family home with garden",
      location: "Ikoyi, Lagos",
      price: "₦ 45,000,000 /year",
      bedrooms: 4,
      bathrooms: 3,
      features: ["GARDEN", "GARAGE", "SECURITY"],
      agent: "Mike Adebayo",
      updated: "Updated 15 Jul 2025, Added 03 Jul 2025",
      photos: 20,
      sponsored: true
    },
    {
      id: 4,
      title: "1 Bedroom Studio Apartment",
      description: "Compact modern studio apartment",
      location: "Lekki Phase 1, Lagos",
      price: "₦ 8,000,000 /year",
      bedrooms: 1,
      bathrooms: 1,
      features: ["FURNISHED", "WIFI", "AC"],
      agent: "Grace Okonkwo",
      updated: "Updated 14 Jul 2025, Added 02 Jul 2025",
      photos: 8,
      sponsored: true
    },
    {
      id: 5,
      title: "5 Bedroom Mansion",
      description: "Luxury mansion with modern amenities",
      location: "Banana Island, Lagos",
      price: "₦ 80,000,000 /year",
      bedrooms: 5,
      bathrooms: 4,
      features: ["POOL", "CINEMA", "CHEF KITCHEN"],
      agent: "David Okafor",
      updated: "Updated 13 Jul 2025, Added 01 Jul 2025",
      photos: 25,
      sponsored: true
    },
    {
      id: 6,
      title: "2 Bedroom Apartment",
      description: "Beautiful apartment with sea view",
      location: "Ajah, Lagos",
      price: "₦ 12,000,000 /year",
      bedrooms: 2,
      bathrooms: 2,
      features: ["SEA VIEW", "BALCONY", "ELEVATOR"],
      agent: "Jennifer Eze",
      updated: "Updated 12 Jul 2025, Added 30 Jun 2025",
      photos: 12,
      sponsored: true
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <ListingHero />

      <div className="max-w-7xl mx-auto px-12 py-8 grid grid-cols-1 lg:grid-cols-4 gap-10 mt-6">
        {/* Left Sidebar - Advanced Search, Latest Properties, Advertisement */}
        <aside className="space-y-6 order-1 lg:order-1">
          {/* Advanced Search */}
          <div className="bg-white w-full rounded-lg p-6 border border-[#DDDDE1] border font-inter">
            <h2 className="font-semibold mb-4">Advanced Search</h2>
            <select className="w-full mb-3 border rounded p-2 text-[#B9B9B9] font-[400] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#4B3DFE]">
              <option className="text-[#000]  font-[400] text-[14px]">Location</option>
            </select>
            <select className="w-full mb-3 border rounded p-2 text-[#B9B9B9] font-[400] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#4B3DFE]">
              <option>Category</option>
            </select>
            <select className="w-full mb-3 border rounded p-2 text-[#B9B9B9] font-[400] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#4B3DFE]">
              <option>Property Type</option>
            </select>
            <select className="w-full mb-3 border rounded p-2 text-[#B9B9B9] font-[400] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#4B3DFE]">
              <option>Number of Beds</option>
            </select>

            {/* Price range placeholder */}
            <div className="mt-4">
              <p className="text-xs sm:text-sm text-center">From NGN 0 to 5,000,000,000</p>
              <input
                type="range"
                className="w-full h-2 bg-gray-300 rounded-lg cursor-pointer accent-[#4B3DFE] hover:accent-[#352BB4] focus:outline-none focus:ring-2 focus:ring-[#4B3DFE]"
              />
            </div>
            <button className="w-full bg-[#4B3DFE] hover:bg-[#352BB4] text-white py-2 rounded mt-4 text-sm transition-colors">
              Find Property
            </button>
          </div>

          {/* Latest Properties */}
          <div className="bg-white rounded-lg p-6 border border-[#DDDDE1] border font-inter">
            <h2 className="font-semibold mb-6">Latest Properties</h2>
            {listings.slice(0, 3).map((listing, i) => (
              <Link key={i} to={`/listing/${listing.id}`} className="flex gap-3 mb-6 hover:bg-gray-50 p-2 rounded transition-colors">
                <div className=''>
                  <img
                    src={ListImage}
                    alt="Listing"
                    className="w-[78px] h-[78px] object-cover rounded-[8px]"
                  />
                </div>
                <div>
                  <h3 className="font-[400] text-[14px] mb-1 hover:text-[#4B3DFE]">
                    {listing.title}
                  </h3>
                  <span className="text-[12px] text-[#FF6B57] font-semibold">{listing.price}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Advertisement */}
          <div className="rounded-lg">
            <img
              src={AdvertImage}
              alt="Advertisement"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-3 order-2 lg:order-2">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 border rounded p-3 font-inter gap-2">
            <p className="text-xs sm:text-sm">Showing 1 - {listings.length} of 150 results</p>
            <select className="text-sm p-1 bg-transparent">
              <option>Sort by: Default</option>
            </select>
          </div>

          {/* Listings */}
          <div className="space-y-6">
            {listings.map((listing) => (
              <div key={listing.id} className="bg-white rounded-lg border border-[#DDDDE1] p-6 flex flex-col lg:flex-row gap-6 border">
                {/* Image */}
                <Link to={`/listing/${listing.id}`} className="rounded relative flex-shrink-0 self-center lg:self-start cursor-pointer">
                  {listing.sponsored && (
                    <span className="absolute top-2 -left-1 bg-[#FF6B57] text-white text-[10px] px-2 py-1 rounded-tr-md rounded-br-md z-10">
                      Sponsored
                    </span>
                  )}
                  <img
                    src={ListImage}
                    alt={listing.title}
                    className="w-full lg:w-[212px] h-[196px] object-cover rounded hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-[10px] px-2 py-1 rounded flex items-center gap-1">
                    <FaCamera size={12} /> {listing.photos}
                  </div>
                </Link>

                {/* Details Section */}
                <div className="flex flex-col flex-1 justify-between font-inter">
                  <div>
                    <Link to={`/listing/${listing.id}`}>
                      <h3 className="font-semibold text-[16px] lg:text-[18px] hover:text-[#4B3DFE] transition-colors cursor-pointer">
                        {listing.title}
                      </h3>
                    </Link>
                    <p className="text-[12px] text-[#1E1E1E] mt-1">
                      {listing.description}
                    </p>
                    <div className="flex items-center gap-1 text-[#6E6F70] mt-2">
                      <FaMapMarkerAlt size={14} />
                      <span className="text-[12px]">
                        {listing.location}
                      </span>
                    </div>

                    {/* Feature Tags */}
                    <div className="flex gap-2 mt-3 flex-wrap">
                      {listing.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-[#EDECFF] text-[#4B3DFE] text-[10px] px-3 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Agent Info */}
                  <div className="flex flex-col gap-1 mt-4 font-inter">
                    <div className="flex gap-2 items-center">
                      <img
                        src={AgentImage}
                        alt="Agent"
                        className="w-[32px] h-[32px] rounded-full object-cover"
                      />
                      <p className="text-sm font-[400] flex items-center gap-1">
                        {listing.agent}
                        <img
                          src={VerifiedBadge}
                          alt="Verified"
                          className="w-[12px] h-[12px]"
                        />
                      </p>
                    </div>
                    <p className="text-[11px] text-gray-400">
                      {listing.updated}
                    </p>
                  </div>
                </div>

                {/* Price & Actions */}
                <div className="flex flex-col items-start lg:items-end justify-between font-inter border-t lg:border-t-0  pt-4 lg:pt-0 lg:pl-6 w-full lg:w-auto">
                  <div className="text-left lg:text-right lg:border-l border-[#DDDDE1] lg:pl-6">
                    <p className="text-[18px] font-bold text-[#1E1E1E]">
                      {listing.price}
                    </p>
                    <p className="text-[12px] text-gray-500">
                      {listing.bedrooms} Bed {listing.bathrooms} Bath
                    </p>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button className="bg-[#4B3DFE] hover:bg-[#352BB4] text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm">
                      <FaPhone className="transform scale-x-[-1]" /> Call
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm">
                      <FaWhatsapp />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12 space-x-2">
            <button className="px-4 py-2 border rounded hover:bg-gray-100">1</button>
            <button className="px-4 py-2 border rounded hover:bg-gray-100  ">2</button>
            <button className="px-4 py-2 border rounded hover:bg-gray-100">3</button>
            <span className="px-4 py-2">...</span>
            <button className="px-4 py-2 border rounded hover:bg-gray-100">Next</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Listings;