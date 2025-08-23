import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaCamera,
  FaBed,
  FaBath,
  FaArrowLeft,
  FaPhone, 
} from "react-icons/fa";
import ListImage from "../assets/images/unsplash_t33SZJ_ZboQ.png";
import AgentImage from "../assets/images/Frame 803.png";
import VerifiedBadge from "../assets/images/verified.png";
import like from "../assets/icons/like.svg";
import share from "../assets/icons/share.svg";
import arrowLeft from "../assets/icons/arrow-left.svg";
import PropertyBadge from "../assets/images/verified-property.png";
import InnerShortletHero from "../components/shortlet/InnerShortletHero";

const ListingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for listings
  const listings = [
    {
      id: 1,
      title: "2 Bedroom Terrace Duplex",
      description: "Studio Pentfloor / Flat / Apartment for shortlet",
      fullDescription:
        "Beautiful 2 bedroom terrace duplex located in the heart of Ikate, Lekki. This modern property features contemporary finishes, spacious rooms, and premium amenities. Perfect for professionals and small families looking for comfort and convenience. The property boasts high-quality fittings, ample natural light, and is situated in a well-secured estate with 24/7 security and CCTV surveillance.",
      location: "Ikate, Lekki Ikate Lekki Lagos",
      price: "₦ 15,000,000",
      priceType: "/year",
      bedrooms: 2,
      bathrooms: 1,
      features: ["CCTV CAMERAS", "FREE WIFI", "24 HOURS SECURITY"],
      amenities: [
        "Swimming Pool",
        "Gym",
        "24/7 Security",
        "CCTV",
        "Free WiFi",
        "Parking Space",
        "Generator",
        "Water Treatment",
        "Landscaped Gardens",
        "Children's Playground",
      ],
      agent: "Prince Ademola",
      agentPhone: "+234 801 234 5678",
      updated: "Updated 17 Jul 2025, Added 07 Jul 2025",
      photos: 10,
      sponsored: true,
      propertyType: "Duplex",
      furnishingStatus: "Furnished",
      yearBuilt: "2023",
      totalArea: "150 sqm",
      images: [
        ListImage,
        ListImage,
        ListImage,
        ListImage,
        ListImage,
        ListImage,
      ],
      propertyId: "PRP001",
      availability: "Available",
      serviceCharge: "₦ 500,000 /year",
      legalFee: "₦ 200,000",
      agencyFee: "10%",
    },
    {
      id: 2,
      title: "3 Bedroom Duplex",
      description: "Modern duplex with parking space",
      fullDescription:
        "Spacious 3 bedroom duplex in the prestigious Victoria Island area. Features modern architecture, premium fittings, and access to world-class amenities including gym and swimming pool. This property is ideal for executives and families who value luxury and convenience.",
      location: "Victoria Island, Lagos",
      price: "₦ 25,000,000",
      priceType: "/year",
      bedrooms: 3,
      bathrooms: 2,
      features: ["PARKING SPACE", "GYM", "SWIMMING POOL"],
      amenities: [
        "Swimming Pool",
        "Gym",
        "Parking Space",
        "Security",
        "Elevator",
        "Balcony",
        "Modern Kitchen",
        "Air Conditioning",
      ],
      agent: "Sarah Johnson",
      agentPhone: "+234 802 345 6789",
      updated: "Updated 16 Jul 2025, Added 05 Jul 2025",
      photos: 15,
      sponsored: true,
      propertyType: "Duplex",
      furnishingStatus: "Semi-Furnished",
      yearBuilt: "2022",
      totalArea: "200 sqm",
      images: [ListImage, ListImage, ListImage, ListImage],
      propertyId: "PRP002",
      availability: "Available",
      serviceCharge: "₦ 800,000 /year",
      legalFee: "₦ 300,000",
      agencyFee: "10%",
    },
    {
      id: 3,
      title: "4 Bedroom Detached House",
      description: "Spacious family home with garden",
      fullDescription:
        "Luxurious 4 bedroom detached house in the exclusive Ikoyi neighborhood. This property boasts a beautiful garden, spacious rooms, and premium security features. Perfect for large families who appreciate privacy and elegance.",
      location: "Ikoyi, Lagos",
      price: "₦ 45,000,000",
      priceType: "/year",
      bedrooms: 4,
      bathrooms: 3,
      features: ["GARDEN", "GARAGE", "SECURITY"],
      amenities: [
        "Garden",
        "Garage",
        "Security",
        "Maid's Room",
        "Study Room",
        "Dining Area",
        "Family Lounge",
        "Modern Kitchen",
      ],
      agent: "Mike Adebayo",
      agentPhone: "+234 803 456 7890",
      updated: "Updated 15 Jul 2025, Added 03 Jul 2025",
      photos: 20,
      sponsored: true,
      propertyType: "Detached House",
      furnishingStatus: "Unfurnished",
      yearBuilt: "2021",
      totalArea: "300 sqm",
      images: [ListImage, ListImage, ListImage, ListImage, ListImage],
      propertyId: "PRP003",
      availability: "Available",
      serviceCharge: "₦ 1,200,000 /year",
      legalFee: "₦ 400,000",
      agencyFee: "10%",
    },
    {
      id: 4,
      title: "1 Bedroom Studio Apartment",
      description: "Compact modern studio apartment",
      fullDescription:
        "Modern studio apartment perfect for young professionals. Fully furnished with contemporary furniture and appliances. Located in a secure and well-maintained complex with easy access to major business districts.",
      location: "Lekki Phase 1, Lagos",
      price: "₦ 8,000,000",
      priceType: "/year",
      bedrooms: 1,
      bathrooms: 1,
      features: ["FURNISHED", "WIFI", "AC"],
      amenities: [
        "Furnished",
        "WiFi",
        "AC",
        "Kitchen Appliances",
        "Security",
        "Laundry Service",
        "Cleaning Service",
      ],
      agent: "Grace Okonkwo",
      agentPhone: "+234 804 567 8901",
      updated: "Updated 14 Jul 2025, Added 02 Jul 2025",
      photos: 8,
      sponsored: true,
      propertyType: "Studio Apartment",
      furnishingStatus: "Fully Furnished",
      yearBuilt: "2023",
      totalArea: "50 sqm",
      images: [ListImage, ListImage, ListImage],
      propertyId: "PRP004",
      availability: "Available",
      serviceCharge: "₦ 300,000 /year",
      legalFee: "₦ 150,000",
      agencyFee: "10%",
    },
    {
      id: 5,
      title: "5 Bedroom Mansion",
      description: "Luxury mansion with modern amenities",
      fullDescription:
        "Ultra-luxury 5 bedroom mansion on the prestigious Banana Island. Features include private cinema, chef's kitchen, swimming pool, and breathtaking waterfront views. This is the epitome of luxury living in Lagos.",
      location: "Banana Island, Lagos",
      price: "₦ 80,000,000",
      priceType: "/year",
      bedrooms: 5,
      bathrooms: 4,
      features: ["POOL", "CINEMA", "CHEF KITCHEN"],
      amenities: [
        "Swimming Pool",
        "Private Cinema",
        "Chef Kitchen",
        "Gym",
        "Wine Cellar",
        "Waterfront View",
        "Private Jetty",
        "Staff Quarters",
        "Library",
      ],
      agent: "David Okafor",
      agentPhone: "+234 805 678 9012",
      updated: "Updated 13 Jul 2025, Added 01 Jul 2025",
      photos: 25,
      sponsored: true,
      propertyType: "Mansion",
      furnishingStatus: "Luxury Furnished",
      yearBuilt: "2020",
      totalArea: "500 sqm",
      images: [
        ListImage,
        ListImage,
        ListImage,
        ListImage,
        ListImage,
        ListImage,
      ],
      propertyId: "PRP005",
      availability: "Available",
      serviceCharge: "₦ 2,000,000 /year",
      legalFee: "₦ 800,000",
      agencyFee: "10%",
    },
    {
      id: 6,
      title: "2 Bedroom Apartment",
      description: "Beautiful apartment with sea view",
      fullDescription:
        "Stunning 2 bedroom apartment with panoramic sea views. Features a spacious balcony, modern fixtures, and elevator access. Perfect for those seeking tranquility by the water with easy access to the city.",
      location: "Ajah, Lagos",
      price: "₦ 12,000,000",
      priceType: "/year",
      bedrooms: 2,
      bathrooms: 2,
      features: ["SEA VIEW", "BALCONY", "ELEVATOR"],
      amenities: [
        "Sea View",
        "Balcony",
        "Elevator",
        "Parking",
        "Security",
        "Backup Generator",
        "Water Treatment",
        "Cable TV",
      ],
      agent: "Jennifer Eze",
      agentPhone: "+234 806 789 0123",
      updated: "Updated 12 Jul 2025, Added 30 Jun 2025",
      photos: 12,
      sponsored: true,
      propertyType: "Apartment",
      furnishingStatus: "Semi-Furnished",
      yearBuilt: "2022",
      totalArea: "120 sqm",
      images: [ListImage, ListImage, ListImage, ListImage],
      propertyId: "PRP006",
      availability: "Available",
      serviceCharge: "₦ 600,000 /year",
      legalFee: "₦ 250,000",
      agencyFee: "10%",
    },
  ];

  const listing = listings.find((l) => l.id === parseInt(id));

  if (!listing) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <p className="mb-4">Looking for property with ID: {id}</p>
          <Link to="/listings" className="text-[#4B3DFE] hover:underline">
            Back to Listings
          </Link>
        </div>
      </div>
    );
  }

  // const nextImage = () => {
  //   setCurrentImageIndex((prev) =>
  //     prev === listing.images.length - 1 ? 0 : prev + 1
  //   );
  // };

  // const prevImage = () => {
  //   setCurrentImageIndex((prev) =>
  //     prev === 0 ? listing.images.length - 1 : prev - 1
  //   );
  // };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <InnerShortletHero />
      
      <div className="mx-4 lg:mx-[30px]">
        <div className="max-w-7xl mx-auto px-0 lg:px-4 mt-2">
          <div className="">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <div className="flex-1 w-full">
                <p className="text-xs text-[#6E6F70]">
                  Home &gt; Listings &gt;{" "}
                  <span className="text-[#6E6F70]">{listing.title}</span>
                </p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 flex items-center gap-2 text-xs text-[#6E6F70]">
                  <img src={like} alt="Like" className="w-[20px] h-[17px]" />
                  <span className=" sm:inline">Save to Favorite</span>
                </button>
                <button className="p-2 flex items-center gap-2 text-xs text-[#6E6F70]">
                  <img src={share} alt="share" className="w-[20px] h-[17px]" />
                  <span className=" sm:inline">Share</span>
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 text-[#1E1E1E] font-[600] mt-2"
          >
            <img src={arrowLeft} alt="icon" className="w-[20px] h-[18px]" /> 
            <span className="text-sm sm:text-base">Back to search results</span>
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-0 lg:px-4 py-4 lg:py-8">
          {/* Mobile and Desktop Layout - Main Content First, Sidebar Below on Mobile */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8">
            
            {/* Main Content - First on Mobile, Second Column on Desktop */}
            <div className="order-1 lg:order-2 lg:col-span-2 space-y-4 lg:space-y-6">
              {/* Property Header */}
              <div className="bg-white rounded-lg p-4 lg:p-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h1 className="text-xl lg:text-2xl font-[600] font-sora text-[#1E1E1E] mb-2">
                      {listing.title}
                    </h1>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <FaMapMarkerAlt className="text-[#4B3DFE] text-sm" />
                      <span className="text-[12px] lg:text-[14px] font-[400] font-inter text-[#1E1E1E]">
                        {listing.location}
                      </span>
                    </div>
                    <div className="text-left">
                      <p className="text-xl lg:text-2xl font-bold text-[#1E1E1E] font-sora">
                        {listing.price}
                        <span className="text-xl lg:text-2xl font-bold text-[#1E1E1E] font-sora">
                          {listing.priceType}
                        </span>
                      </p>
                      <p className="font-[400] text-[12px] lg:text-[14px] leading-[20px] text-[#1E1E1E] mt-2 font-inter">
                        <span>
                          {listing.title} To let at {listing.location}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="flex gap-4 py-2 border-b-2 border-[#DDDDE1]">
                  <div className="flex items-center gap-2">
                    <FaBed className="text-[#4B3DFE]" />
                    <span className="text-[12px] lg:text-[14px] font-[400] font-inter text-[#1E1E1E]">
                      {listing.bedrooms} Beds
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaBath className="text-[#4B3DFE]" />
                    <span className="text-[12px] lg:text-[14px] font-[400] font-inter text-[#1E1E1E]">
                      {listing.bathrooms} Bath
                    </span>
                  </div>
                </div>
              </div>

              {/* Safety tips */}
              <div className="px-4 lg:px-5 py-4 lg:py-6 bg-[#F9F9FF]">
                <h3 className="font-sora text-[18px] lg:text-[20px] font-[600] text-[#1E1E1E] mt-2">
                  Safety Tips
                </h3>
                <ul className="list-disc pl-5 text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] text-[#1E1E1E] font-inter mt-2">
                  <li>
                    Do not make any inspection fee without seeing the agent and
                    property.
                  </li>
                  <li>
                    Only pay Rental fee, Shortlet fee or any upfront payment after
                    you verify the Landlord.
                  </li>
                  <li>Ensure you meet the Agent in an open location.</li>
                  <li>
                    The Agent does not represent PropertyPro and PropertyPro is
                    not liable for any monetary transaction between you and the
                    Agent.
                  </li>
                </ul>
              </div>

              {/* Tab Navigation */}
              <div className="bg-white rounded-lg">
                <div className="border-b border-gray-200">
                  <nav className="flex space-x-4 lg:space-x-8 px-4 lg:px-6 overflow-x-auto">
                    <button
                      onClick={() => setActiveTab("overview")}
                      className={`py-2 px-1 border-b-2 font-[600] text-[16px] lg:text-[20px] font-sora whitespace-nowrap ${
                        activeTab === "overview"
                          ? "border-[#4B3DFE] text-[#4B3DFE]"
                          : "border-transparent text-[#1E1E1E] hover:border-[#4B3DFE]"
                      }`}
                    >
                      Overview
                    </button>
                    <button
                      onClick={() => setActiveTab("location")}
                      className={`py-2 px-1 border-b-2 font-[600] text-[16px] lg:text-[20px] font-sora whitespace-nowrap ${
                        activeTab === "location"
                          ? "border-[#4B3DFE] text-[#4B3DFE]"
                          : "border-transparent text-[#1E1E1E] hover:border-[#4B3DFE]"
                      }`}
                    >
                      Location
                    </button>
                    <button
                      onClick={() => setActiveTab("video")}
                      className={`py-2 px-1 border-b-2 font-[600] text-[16px] lg:text-[20px] font-sora whitespace-nowrap ${
                        activeTab === "video"
                          ? "border-[#4B3DFE] text-[#4B3DFE]"
                          : "border-transparent text-[#1E1E1E] hover:border-[#4B3DFE]"
                      }`}
                    >
                      Video
                    </button>
                  </nav>
                </div>

                {/* Tab Content */}
                <div className="p-4 lg:p-6">
                  {/* Overview Tab */}
                  {activeTab === "overview" && (
                    <div className="space-y-4 lg:space-y-6">
                      {/* Description */}
                      <div>
                        <h2 className="text-lg lg:text-xl font-semibold mb-3 font-sora">
                          Description
                        </h2>
                        <p className="text-[14px] lg:text-[16px] font-[400] font-inter text-[#1E1E1E] leading-relaxed">
                          {listing.fullDescription}
                        </p>
                      </div>

                      {/* Property Details */}
                      <div>
                        <h2 className="text-lg lg:text-xl font-semibold mb-3 font-sora">
                          Property Details
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                          <div>
                            <p className="text-[14px] lg:text-[16px] font-[400] font-inter text-[#1E1E1E] font-medium">
                              Property Type
                            </p>
                            <p className="text-[12px] lg:text-[14px] font-[400] font-inter text-[#6E6F70]">
                              {listing.propertyType}
                            </p>
                          </div>
                          <div>
                            <p className="text-[14px] lg:text-[16px] font-[400] font-inter text-[#1E1E1E] font-medium">
                              Furnishing Status
                            </p>
                            <p className="text-[12px] lg:text-[14px] font-[400] font-inter text-[#6E6F70]">
                              {listing.furnishingStatus}
                            </p>
                          </div>
                          <div>
                            <p className="text-[14px] lg:text-[16px] font-[400] font-inter text-[#1E1E1E] font-medium">
                              Total Area
                            </p>
                            <p className="text-[12px] lg:text-[14px] font-[400] font-inter text-[#6E6F70]">
                              {listing.totalArea}
                            </p>
                          </div>
                          <div>
                            <p className="text-[14px] lg:text-[16px] font-[400] font-inter text-[#1E1E1E] font-medium">
                              Year Built
                            </p>
                            <p className="text-[12px] lg:text-[14px] font-[400] font-inter text-[#6E6F70]">
                              {listing.yearBuilt}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Amenities */}
                      <div>
                        <h2 className="text-lg lg:text-xl font-semibold mb-3 font-sora">
                          Amenities
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {listing.amenities.map((amenity, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[#4B3DFE] rounded-full flex-shrink-0"></div>
                              <span className="text-[14px] lg:text-[16px] font-[400] font-inter text-[#1E1E1E]">
                                {amenity}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Location Tab */}
                  {activeTab === "location" && (
                    <div className="space-y-4">
                      <h2 className="text-lg lg:text-xl font-semibold">Property Location</h2>
                      <p className="text-[14px] lg:text-[16px] text-gray-600 mb-4">{listing.location}</p>
                      <div className="w-full h-64 lg:h-96 bg-gray-200 rounded-lg overflow-hidden">
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

                  {/* Video Tab */}
                  {activeTab === "video" && (
                    <div className="space-y-4">
                      <h2 className="text-lg lg:text-xl font-semibold">
                        Property Video Tour
                      </h2>
                      <p className="text-[14px] lg:text-[16px] text-gray-600 mb-4">
                        Take a virtual tour of {listing.title}
                      </p>
                      <div className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden">
                        <iframe
                          src="https://www.youtube.com/embed/6J1lsyf_1nc"
                          title="Victoria Island & Eko Atlantic Aerial Tour"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-semibold mb-2 text-sm lg:text-base">Video Information</h3>
                        <p className="text-xs lg:text-sm text-gray-600">
                          This video showcases the key features and layout of{" "}
                          {listing.title}. Get a comprehensive view of the
                          property before scheduling your visit.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Report Property */}
              <div className="bg-white rounded-lg border border-[#DDDDE1] p-4 lg:p-6 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex justify-center gap-4 items-center text-center sm:text-left">
                  <img
                    src={PropertyBadge}
                    alt="Verified Property"
                    className="w-[36px] h-[44px] flex-shrink-0"
                  />
                  <div>
                    <h2 className="font-sora text-[16px] lg:text-[20px] font-[600] text-[#1E1E1E] mt-2">
                      Property is verified as real
                    </h2>
                    <p className="text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] text-[#1E1E1E] font-inter">
                      If reported as fake, we'll investigate to confirm if
                    </p>
                  </div>
                </div>
                <button className="w-full sm:w-auto border border-[#4B3DFE] bg-[#F5F6FA] hover:bg-[#352BB4] text-[#4B3DFE] hover:text-white py-3 px-4 rounded-lg font-semibold transition-colors text-sm lg:text-base">
                  Report Property
                </button>
              </div>

              {/* Similar Properties */}
              <div className="bg-white rounded-lg p-4 lg:p-6">
                <h2 className="text-lg lg:text-xl font-semibold mb-4">Similar Properties</h2>
                <div className="space-y-4">
                  {listings
                    .slice(0, 3)
                    .filter((l) => l.id !== listing.id)
                    .map((similar) => (
                      <div
                        key={similar.id}
                        className="bg-white rounded-lg border border-[#DDDDE1] p-4 lg:p-6 flex flex-col lg:flex-row gap-4 lg:gap-6"
                      >
                        {/* Image */}
                        <Link
                          to={`/listing/${similar.id}`}
                          className="rounded relative flex-shrink-0 self-center lg:self-start cursor-pointer"
                        >
                          {similar.sponsored && (
                            <span className="absolute top-2 -left-1 bg-[#FF6B57] text-white text-[10px] px-2 py-1 rounded-tr-md rounded-br-md z-10">
                              Sponsored
                            </span>
                          )}
                          <img
                            src={ListImage}
                            alt={similar.title}
                            className="w-full lg:w-[212px] h-[150px] lg:h-[196px] object-cover rounded hover:opacity-90 transition-opacity"
                          />
                          <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-[10px] px-2 py-1 rounded flex items-center gap-1">
                            <FaCamera size={12} /> {similar.photos}
                          </div>
                        </Link>

                        {/* Details Section */}
                        <div className="flex flex-col flex-1 justify-between font-inter">
                          <div>
                            <Link to={`/listing/${similar.id}`}>
                              <h3 className="font-semibold text-[14px] lg:text-[16px] xl:text-[18px] hover:text-[#4B3DFE] transition-colors cursor-pointer">
                                {similar.title}
                              </h3>
                            </Link>
                            <p className="text-[11px] lg:text-[12px] text-[#1E1E1E] mt-1">
                              {similar.description}
                            </p>
                            <div className="flex items-center gap-1 text-[#6E6F70] mt-2">
                              <FaMapMarkerAlt size={12} />
                              <span className="text-[11px] lg:text-[12px]">
                                {similar.location}
                              </span>
                            </div>

                            {/* Feature Tags */}
                            <div className="flex gap-2 mt-3 flex-wrap">
                              {similar.features.map((feature, index) => (
                                <span
                                  key={index}
                                  className="bg-[#EDECFF] text-[#4B3DFE] text-[9px] lg:text-[10px] px-2 lg:px-3 py-1 rounded"
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
                                className="w-[28px] h-[28px] lg:w-[32px] lg:h-[32px] rounded-full object-cover"
                              />
                              <p className="text-xs lg:text-sm font-[400] flex items-center gap-1">
                                {similar.agent}
                                <img
                                  src={VerifiedBadge}
                                  alt="Verified"
                                  className="w-[10px] h-[10px] lg:w-[12px] lg:h-[12px]"
                                />
                              </p>
                            </div>
                            <p className="text-[10px] lg:text-[11px] text-gray-400">
                              {similar.updated}
                            </p>
                          </div>
                        </div>

                        {/* Price & Actions */}
                        <div className="flex flex-col sm:flex-row lg:flex-col items-start justify-between font-inter border-t sm:border-t-0  pt-4 sm:pt-0 lg:pt-0 lg:pl-6 w-full lg:w-auto gap-4 sm:gap-0">
                          <div className="text-left lg:text-right lg:border-t-0 lg:border-l border-[#DDDDE1] lg:pl-6">
                            <p className="text-[16px] lg:text-[18px] font-bold text-[#1E1E1E]">
                              {similar.price}
                            </p>
                            <p className="text-[11px] lg:text-[12px] text-gray-500">
                              {similar.bedrooms} Bed {similar.bathrooms} Bath
                            </p>
                          </div>
                          <div className="flex gap-2 lg:gap-3 mt-2 lg:mt-4 w-full sm:w-auto">
                            <button className="bg-[#4B3DFE] hover:bg-[#352BB4] text-white px-3 lg:px-4 py-2 rounded-lg flex items-center gap-2 text-xs lg:text-sm flex-1 sm:flex-none justify-center">
                              <FaPhone className="transform scale-x-[-1]" /> Call
                            </button>
                            <button className="bg-green-500 hover:bg-green-600 text-white px-3 lg:px-4 py-2 rounded-lg flex items-center gap-2 text-xs lg:text-sm flex-1 sm:flex-none justify-center">
                              <FaWhatsapp />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Second on Mobile, First Column on Desktop */}
            <div className="order-2 lg:order-1 space-y-4 lg:space-y-6 mt-6 lg:mt-0">
              {/* Agent Info */}
              <div className="bg-white rounded-lg border border-[#DDDDE1] p-4 lg:p-6">
                <h2 className="text-lg lg:text-xl font-semibold mb-4">Contact Agent</h2>
                <div className="mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={AgentImage}
                      alt={listing.agent}
                      className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-sm lg:text-base">{listing.agent}</h3>
                        <img
                          src={VerifiedBadge}
                          alt="Verified"
                          className="w-3 h-3 lg:w-4 lg:h-4"
                        />
                      </div>
                      <p className="text-xs lg:text-sm text-[#FF6B57] font-[400]">
                        Verified Agent
                      </p>
                    </div>
                  </div>
                  <p className="text-xs lg:text-sm text-[#1E1E1E] font-[400] mt-2">
                    View more properties from this <span>agent</span>
                  </p>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-[#4B3DFE] hover:bg-[#352BB4] text-white py-3 rounded-lg flex items-center justify-center gap-2 font-semibold text-sm lg:text-base">
                    Show Phone Number
                  </button>
                </div>
              </div>

              {/* Request Tour */}
              <div className="bg-white rounded-lg border border-[#DDDDE1] p-4 lg:p-6">
                <h2 className="text-lg lg:text-xl font-semibold mb-4">Request a Tour</h2>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B3DFE] text-sm lg:text-base"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B3DFE] text-sm lg:text-base"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B3DFE] text-sm lg:text-base"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message (optional)"
                      rows="3"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B3DFE] text-sm lg:text-base"
                    ></textarea>
                  </div>
                  <button className="w-full border border-[#4B3DFE] bg-[#4B3DFE] hover:bg-[#352BB4] text-white py-3 rounded-lg font-semibold transition-colors text-sm lg:text-base">
                    Enquire Now
                  </button>
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-semibold text-sm lg:text-base">
                    <FaWhatsapp />
                    WhatsApp
                  </button>
                </form>
              </div>

              {/* Advertisement */}
              <div className="bg-[#EDECFF] rounded-lg border border-[#DDDDE1] p-6 lg:p-10">
                <h2 className="text-lg lg:text-xl font-semibold mb-4 text-center">
                  Advertise/market your property on Strent
                </h2>
                <button className="w-full border border-[#4B3DFE] bg-[#4B3DFE] hover:bg-[#352BB4] text-white py-3 rounded-lg font-semibold transition-colors text-sm lg:text-base">
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;