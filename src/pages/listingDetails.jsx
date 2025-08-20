import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaCamera,
  FaBed,
  FaBath,
  FaRuler,
  FaCalendarAlt,
  FaArrowLeft,
  FaPhone, // Added missing import
} from "react-icons/fa";
import ListImage from "../assets/images/unsplash_t33SZJ_ZboQ.png";
import AgentImage from "../assets/images/Frame 803.png";
import VerifiedBadge from "../assets/images/verified.png";
import like from "../assets/icons/like.svg";
import share from "../assets/icons/share.svg";
import arrowLeft from "../assets/icons/arrow-left.svg";
import PropertyBadge from "../assets/images/verified-property.png";

const ListingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
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

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === listing.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? listing.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <p className="text-xs text-[#6E6F70]">
                Home &gt; Listings &gt;{" "}
                <span className="text-[#6E6F70]">{listing.title}</span>
              </p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 flex items-center gap-2 text-xs text-[#6E6F70]">
                <img src={like} alt="Like" className="w-[20px] h-[17px]" />
                <p>Save to Favorite</p>
              </button>
              <button className="p-2 flex items-center gap-2 text-xs text-[#6E6F70]">
                <img src={share} alt="share" className="w-[20px] h-[17px]" />
                <p>Share</p>
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-[#1E1E1E] font-[600] "
        >
          <img src={arrowLeft} alt="icon" className="w-[20px] h-[18px]" /> Back
          to search results
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Agent Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Contact Agent</h2>
              <div className="mb-4">
                <div className="flex items-center gap-3 ">
                  <img
                    src={AgentImage}
                    alt={listing.agent}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{listing.agent}</h3>
                      <img
                        src={VerifiedBadge}
                        alt="Verified"
                        className="w-4 h-4"
                      />
                    </div>
                    <p className="text-sm text-[#FF6B57] font-[400]">
                      Verified Agent
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[#1E1E1E] font-[400]">
                  View more properties from this <span>agent</span>
                </p>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-[#4B3DFE] hover:bg-[#352BB4] text-white py-3 rounded-lg flex items-center justify-center gap-2 font-semibold">
                  Show Phone Number
                </button>
              </div>
            </div>

            {/* Request Tour */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Request a Tour</h2>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B3DFE]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B3DFE]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B3DFE]"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message (optional)"
                    rows="3"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B3DFE]"
                  ></textarea>
                </div>
                <button className="w-full border border-[#4B3DFE]  bg-[#4B3DFE] hover:bg-[#352BB4] text-white py-3 rounded-lg font-semibold transition-colors">
                  Enquire Now
                </button>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-semibold">
                  <FaWhatsapp />
                  WhatsApp
                </button>
              </form>
            </div>

            {/* Advertisement */}
            <div className="bg-[#EDECFF] rounded-lg shadow-sm p-10">
              <h2 className="text-xl font-semibold mb-4 text-center">
                Advertise/market your property on Strent
              </h2>
              <button className="w-full border border-[#4B3DFE]  bg-[#4B3DFE] hover:bg-[#352BB4] text-white py-3 rounded-lg font-semibold transition-colors">
                Enquire Now
              </button>
            </div>
          </div>
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative">
                <img
                  src={listing.images[currentImageIndex]}
                  alt={listing.title}
                  className="w-full h-[400px] object-cover"
                />
                {listing.sponsored && (
                  <span className="absolute top-4 left-0 bg-[#FF6B57] text-white text-sm px-3 py-1 rounded-r-md">
                    Sponsored
                  </span>
                )}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white text-sm px-3 py-1 rounded flex items-center gap-1">
                  <FaCamera /> {currentImageIndex + 1} / {listing.images.length}
                </div>

                {/* Navigation arrows */}
                {listing.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full"
                    >
                      <FaArrowLeft />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full"
                    >
                      <FaArrowLeft className="transform rotate-180" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Property Header */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h1 className="text-2xl font-[600] font-sora text-[#1E1E1E] mb-2">
                    {listing.title}
                  </h1>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <FaMapMarkerAlt className="text-[#4B3DFE]" />
                    <span className="text-[14px] font-[400] font-inter text[#1E1E1E]">{listing.location}</span>
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-[#1E1E1E] font-sora">
                      {listing.price}
                      <span className="text-2xl font-bold text-[#1E1E1E] font-sora">
                        {listing.priceType}
                      </span>
                    </p>
                    <p className="font-[400] text-[14px] leading-[20px] text-[#1E1E1E] mt-2 font-inter">
                      <span>
                        {listing.title} To let at {listing.location}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="lg:flex md:grid gap-4 grid-cols-2 md:grid-cols-4 py-2 border-b-2 border-[#DDDDE1]">
                <div className="flex items-center gap-2">
                  <FaBed className="text-[#4B3DFE]" />
                  <span className="text-[14px] font-[400] font-inter text[#1E1E1E]">{listing.bedrooms} Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBath className="text-[#4B3DFE]" />
                  <span className="text-[14px] font-[400] font-inter text[#1E1E1E]">{listing.bathrooms} Bath</span>
                </div>
              </div>
            </div>

            {/* Safety tips */}
            <div className="px-5 py-6 bg-[#F9F9FF]">
              <h3 className="font-sora text-[20px] font-[600] text-[#1E1E1E] mt-2">
                Safety Tips
              </h3>
              <ul className="list-disc pl-5 text-[16px] leading-[24px] text-[#1E1E1E] font-inter mt-2">
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
            <div className="bg-white rounded-lg shadow-sm">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`py-2 px-1 border-b-2 font-[600] text-[20px] font-sora ${
                      activeTab === "overview"
                        ? "border-[#4B3DFE] text-[#4B3DFE]"
                        : "border-transparent text-[#1E1E1E] hover:border-[#4B3DFE]"
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab("location")}
                    className={`py-2 px-1 border-b-2 font-[600] text-[20px] font-sora ${
                      activeTab === "location"
                        ? "border-[#4B3DFE] text-[#4B3DFE]"
                        : "border-transparent text-[#1E1E1E] hover:border-[#4B3DFE]"
                    }`}
                  >
                    Location
                  </button>
                  <button
                    onClick={() => setActiveTab("video")}
                    className={`py-2 px-1 border-b-2 font-[600] text-[20px] font-sora ${
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
              <div className="p-6">
                {/* Overview Tab */}
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <h2 className="text-xl font-semibold mb-3 font-sora ">
                        Description
                      </h2>
                      <p className="text-[16px] font-[400] font-inter text[#1E1E1E] leading-relaxed">
                        {listing.fullDescription}
                      </p>
                    </div>

                    {/* Property Details */}
                    <div>
                      <h2 className="text-xl font-semibold mb-3 font-sora">
                        Property Details
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-[16px] font-[400] font-inter text[#1E1E1E]">Property Type</p>
                          <p className="text-[14px] font-[400] font-inter text[#1E1E1E]">
                            {listing.propertyType}
                          </p>
                        </div>
                        <div>
                          <p className="text-[16px] font-[400] font-inter text[#1E1E1E]">
                            Furnishing Status
                          </p>
                          <p className="text-[14px] font-[400] font-inter text[#1E1E1E]">
                            {listing.furnishingStatus}
                          </p>
                        </div>
                        <div>
                          <p className="text-[16px] font-[400] font-inter text[#1E1E1E]">Total Area</p>
                          <p className="text-[14px] font-[400] font-inter text[#1E1E1E]">{listing.totalArea}</p>
                        </div>
                        <div>
                          <p className="text-[16px] font-[400] font-inter text[#1E1E1E]">Year Built</p>
                          <p className="text-[14px] font-[400] font-inter text[#1E1E1E]">{listing.yearBuilt}</p>
                        </div>
                      </div>
                    </div>

                    {/* Amenities */}
                    <div>
                      <h2 className="text-xl font-semibold mb-3 font-sora">Amenities</h2>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {listing.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#4B3DFE] rounded-full"></div>
                            <span className="text-[16px] font-[400] font-inter text[#1E1E1E]">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Location Tab */}
                {activeTab === "location" && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Property Location</h2>
                    <p className="text-gray-600 mb-4">{listing.location}</p>
                    <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
                      <iframe
                        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${listing.location}&zoom=15`}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Property Location"
                      ></iframe>
                    </div>
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold mb-2">Address Details</h3>
                      <p className="text-sm text-gray-600">
                        <strong>Full Address:</strong> {listing.location}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        <strong>Coordinates:</strong> {listing.coordinates.lat},{" "}
                        {listing.coordinates.lng}
                      </p>
                    </div>
                  </div>
                )}

                {/* Video Tab */}
                {activeTab === "video" && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">
                      Property Video Tour
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Take a virtual tour of {listing.title}
                    </p>
                    <div className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden">
                      <iframe
                        src={listing.videoUrl}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Property Video Tour"
                      ></iframe>
                    </div>
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold mb-2">Video Information</h3>
                      <p className="text-sm text-gray-600">
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
            <div className="bg-white rounded-lg  p-6 mt-6 flex flex-row items-center justify-between gap-4">
              <div className="flex justify-center gap-4 items-center">
                <img
                  src={PropertyBadge}
                  alt="Verified Property"
                  className="w-[36px] h-[44px]"
                />
                <div>
                  <h2 className="font-sora text-[20px] font-[600] text-[#1E1E1E] mt-2">
                    Property is verified as real
                  </h2>
                  <p className="text-[16px] leading-[24px] text-[#1E1E1E] font-inter">
                    If reported as fake, we'll investigate to confirm if
                  </p>
                </div>
              </div>
              <button className=" border border-[#4B3DFE]  bg-[#F5F6FA] hover:bg-[#352BB4] text-[#4B3DFE] hover:text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                Report Property
              </button>
            </div>

            {/* Similar Properties */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Similar Properties</h2>
              <div className="space-y-4">
                {listings
                  .slice(0, 3)
                  .filter((l) => l.id !== listing.id)
                  .map((similar) => (
                    <div
                      key={similar.id}
                      className="bg-white rounded-lg shadow-sm p-6 flex flex-col lg:flex-row gap-6 border"
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
                          className="w-full lg:w-[212px] h-[196px] object-cover rounded hover:opacity-90 transition-opacity"
                        />
                        <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-[10px] px-2 py-1 rounded flex items-center gap-1">
                          <FaCamera size={12} /> {similar.photos}
                        </div>
                      </Link>

                      {/* Details Section */}
                      <div className="flex flex-col flex-1 justify-between font-inter">
                        <div>
                          <Link to={`/listing/${similar.id}`}>
                            <h3 className="font-semibold text-[16px] lg:text-[18px] hover:text-[#4B3DFE] transition-colors cursor-pointer">
                              {similar.title}
                            </h3>
                          </Link>
                          <p className="text-[12px] text-[#1E1E1E] mt-1">
                            {similar.description}
                          </p>
                          <div className="flex items-center gap-1 text-[#6E6F70] mt-2">
                            <FaMapMarkerAlt size={14} />
                            <span className="text-[12px]">
                              {similar.location}
                            </span>
                          </div>

                          {/* Feature Tags */}
                          <div className="flex gap-2 mt-3 flex-wrap">
                            {similar.features.map((feature, index) => (
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
                              {similar.agent}
                              <img
                                src={VerifiedBadge}
                                alt="Verified"
                                className="w-[12px] h-[12px]"
                              />
                            </p>
                          </div>
                          <p className="text-[11px] text-gray-400">
                            {similar.updated}
                          </p>
                        </div>
                      </div>

                      {/* Price & Actions */}
                      <div className="flex flex-col items-start lg:items-end justify-between font-inter border-t lg:border-t-0 lg:border-l border-[#DDDDE1] pt-4 lg:pt-0 lg:pl-6 w-full lg:w-auto">
                        <div className="text-left lg:text-right">
                          <p className="text-[18px] font-bold text-[#1E1E1E]">
                            {similar.price}
                          </p>
                          <p className="text-[12px] text-gray-500">
                            {similar.bedrooms} Bed {similar.bathrooms} Bath
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
