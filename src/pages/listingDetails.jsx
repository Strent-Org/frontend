import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaCamera,
  FaBed,
  FaBath,
  FaRuler,
  FaCalendarAlt,
  FaArrowLeft,
  FaHeart,
  FaShare,
} from "react-icons/fa";
import ListImage from "../assets/images/unsplash_t33SZJ_ZboQ.png";
import AgentImage from "../assets/images/Frame 803.png";
import VerifiedBadge from "../assets/images/verified.png";
import like from "../assets/icons/like.svg";
import share from "../assets/icons/share.svg";
import arrowLeft from "../assets/icons/arrow-left.svg";

const ListingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    <div className="bg-gray-50 min-h-screen">
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
              <button className="p-2 ">
                <img src={like} alt="Like" className="w-[20px] h-[18px]" />
              </button>
              <button className="p-2 ">
                <img src={share} alt="share" className="w-[20px] h-[18px]" />
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
                    <p className="text-sm text-[#FF6B57] font[400]">
                      Varified Agent
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[#1E1E1E] font[400]">
                  View more properties from this link <span>agent</span>
                </p>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-[#4B3DFE] hover:bg-[#352BB4] text-white py-3 rounded-lg flex items-center justify-center gap-2 font-semibold">
                  show phone number
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
                <button className="w-full border border-[#4B3DFE] text-[#4B3DFE] hover:bg-[#4B3DFE] hover:text-white py-3 rounded-lg font-semibold transition-colors">
                  Enquire Now
                </button>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-semibold">
                  <FaWhatsapp />
                  WhatsApp
                </button>
              </form>
            </div>

            {/* Similar Properties */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Similar Properties</h2>
              <div className="space-y-4">
                {listings
                  .slice(0, 3)
                  .filter((l) => l.id !== listing.id)
                  .map((similar) => (
                    <Link
                      key={similar.id}
                      to={`/listing/${similar.id}`}
                      className="flex gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors"
                    >
                      <img
                        src={similar.images[0]}
                        alt={similar.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold line-clamp-2">
                          {similar.title}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {similar.location}
                        </p>
                        <p className="text-sm font-bold text-[#4B3DFE]">
                          {similar.price}
                          {similar.priceType}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
            {/* Advertisement */}
            <div className="bg-[#EDECFF] rounded-lg shadow-sm p-10">
                <h2 className="text-xl font-semibold mb-4 text-center">Advertise/market your property on Strent</h2>
                <button className="w-full border border-[#4B3DFE]  bg-[#4B3DFE] text-white py-3 rounded-lg font-semibold transition-colors">
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

              {/* Thumbnail strip */}
              <div className="p-4">
                <div className="flex gap-2 overflow-x-auto">
                  {listing.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${listing.title} ${index + 1}`}
                      className={`w-16 h-16 object-cover rounded cursor-pointer flex-shrink-0 ${
                        index === currentImageIndex
                          ? "ring-2 ring-[#4B3DFE]"
                          : ""
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-[#1E1E1E] mb-2">
                    {listing.title}
                  </h1>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <FaMapMarkerAlt />
                    <span>{listing.location}</span>
                  </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-[#1E1E1E]">
                    {listing.price}
                    <span className="text-sm font-normal">
                      {listing.priceType}
                    </span>
                  </p>
                  <p><span>{listing.title} To let at {listing.location}</span></p>
                  {/* <p className="text-sm text-green-600 font-semibold">
                    {listing.availability}
                  </p> */}
                </div>
                </div>
        
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y">
                <div className="flex items-center gap-2">
                  <FaBed className="text-[#4B3DFE]" />
                  <span className="text-sm">{listing.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBath className="text-[#4B3DFE]" />
                  <span className="text-sm">{listing.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaRuler className="text-[#4B3DFE]" />
                  <span className="text-sm">{listing.totalArea}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-[#4B3DFE]" />
                  <span className="text-sm">Built {listing.yearBuilt}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-3">Description</h2>
                <p className="text-gray-700 leading-relaxed">
                  {listing.fullDescription}
                </p>
              </div>

              {/* Property Details */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-3">Property Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Property Type</p>
                    <p className="font-semibold">{listing.propertyType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Furnishing Status</p>
                    <p className="font-semibold">{listing.furnishingStatus}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Area</p>
                    <p className="font-semibold">{listing.totalArea}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Year Built</p>
                    <p className="font-semibold">{listing.yearBuilt}</p>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-3">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {listing.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#4B3DFE] rounded-full"></div>
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Breakdown */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-3">
                  Pricing Breakdown
                </h2>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Annual Rent</span>
                    <span className="font-semibold">{listing.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service Charge</span>
                    <span>{listing.serviceCharge}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Legal Fee</span>
                    <span>{listing.legalFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Agency Fee</span>
                    <span>{listing.agencyFee}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
