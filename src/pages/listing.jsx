<<<<<<< HEAD


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaCamera, FaEdit, FaTrash } from "react-icons/fa";
import { useRecoilState } from "recoil";
import ListingHero from "../components/Listing/ListingHero.jsx";
import {userInfo} from "../components/atom/user";

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [latestListings, setLatestListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user] = useRecoilState(userInfo);
  const navigate = useNavigate();

  // Fetch all properties (for local DB, we slice client-side)
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8080/properties")
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load properties.");
        setLoading(false);
        console.error(err);
      });
  }, []);

  // Fetch latest 3 listings for sidebar
  useEffect(() => {
    fetch("http://localhost:8080/properties")
      .then((res) => res.json())
      .then((data) => {
        const latest = [...data].sort((a, b) => b.id.localeCompare(a.id)).slice(0, 3);
        setLatestListings(latest);
      })
      .catch((err) => console.error(err));
  }, []);

  // Pagination calculations
  const totalPages = Math.ceil(listings.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentListings = listings.slice(indexOfFirstPost, indexOfLastPost);

  const visiblePages = 3;
  let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  let endPage = startPage + visiblePages - 1;
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - visiblePages + 1);
  }
  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) pageNumbers.push(i);

  const handlePageChange = (page) => setCurrentPage(page);

  // Check if user can edit/delete (Landlord or Agent)
  const canEditDelete = user.isLoggedIn && user.data && 
    (user.data.accountType === 'Landlord' || user.data.accountType === 'Agent');

  // Handle edit property
  const handleEdit = (propertyId) => {
    navigate(`/post-property?edit=${propertyId}`);
  };

  // Handle delete property
  const handleDelete = async (propertyId) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      try {
        const response = await fetch(`http://localhost:8080/properties/${propertyId}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          setListings(listings.filter(listing => listing.id !== propertyId));
          alert('Property deleted successfully!');
        } else {
          alert('Failed to delete property.');
        }
      } catch (error) {
        console.error('Error deleting property:', error);
        alert('Failed to delete property.');
      }
    }
  };

  if (loading) return <p className="text-center py-12">Loading properties...</p>;
  if (error) return <p className="text-center py-12 text-red-500">{error}</p>;
=======
import { Link } from "react-router-dom";
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
      sponsored: true,
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
      sponsored: true,
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
      sponsored: true,
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
      sponsored: true,
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
      sponsored: true,
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
      sponsored: true,
    },
  ];
>>>>>>> main

  return (
    <div className="bg-gray-50 min-h-screen">
      <ListingHero />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 py-8 grid grid-cols-1 lg:grid-cols-4 gap-10 mt-6">
        {/* Sidebar */}
        <aside className="space-y-6 order-1 lg:order-1">
          <div className="bg-white w-full rounded-lg p-6 border border-[#DDDDE1] font-inter">
            <h2 className="font-semibold mb-4">Advanced Search</h2>
<<<<<<< HEAD
            <select className="w-full mb-3 border rounded p-2 text-sm text-gray-500"><option>Location</option></select>
            <select className="w-full mb-3 border rounded p-2 text-sm text-gray-500"><option>Category</option></select>
            <select className="w-full mb-3 border rounded p-2 text-sm text-gray-500"><option>Property Type</option></select>
            <select className="w-full mb-3 border rounded p-2 text-sm text-gray-500"><option>Number of Beds</option></select>
            <div className="mt-4">
              <p className="text-xs text-center">From NGN 0 to 5,000,000,000</p>
              <input type="range" className="w-full h-2 bg-gray-300 rounded-lg" />
=======
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

            {/* Price range */}
            <div className="mt-4">
              <p className="text-xs sm:text-sm text-center">
                From NGN 0 to 5,000,000,000
              </p>
              <input
                type="range"
                className="w-full h-2 bg-gray-300 rounded-lg cursor-pointer accent-[#4B3DFE] hover:accent-[#352BB4] focus:outline-none focus:ring-2 focus:ring-[#4B3DFE]"
              />
>>>>>>> main
            </div>
            <button className="w-full bg-[#4B3DFE] text-white py-2 rounded mt-4 text-sm hover:bg-[#352BB4]">Find Property</button>
          </div>

          <div className="bg-white rounded-lg p-6 border border-[#DDDDE1] font-inter">
            <h2 className="font-semibold mb-6">Latest Properties</h2>
            {latestListings.map((listing) => (
              <Link key={listing.id} to={`/listing/${listing.id}`} className="flex gap-3 mb-6 hover:bg-gray-50 p-2 rounded transition-colors">
                <img src={listing.imageUrl || "https://placehold.co/78x78"} alt={listing.name} className="w-[78px] h-[78px] object-cover rounded-[8px]" />
                <div>
<<<<<<< HEAD
                  <h3 className="text-sm mb-1 hover:text-[#4B3DFE]">{listing.name}</h3>
                  <span className="text-[12px] text-[#FF6B57] font-semibold">{listing.price}</span>
=======
                  <h3 className="font-[400] text-[14px] mb-1 hover:text-[#4B3DFE]">
                    {listing.title}
                  </h3>
                  <span className="text-xs text-[#FF6B57] font-semibold">
                    {listing.price}
                  </span>
>>>>>>> main
                </div>
              </Link>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-3 order-2 lg:order-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 border rounded p-3 font-inter gap-2">
<<<<<<< HEAD
            <p className="text-xs sm:text-sm">Showing {indexOfFirstPost + 1} - {Math.min(indexOfLastPost, listings.length)} of {listings.length} results</p>
=======
            <p className="text-xs sm:text-sm">
              Showing 1 - {listings.length} of 150 results
            </p>
            <select className="text-sm p-1 bg-transparent">
              <option>Sort by: Default</option>
            </select>
>>>>>>> main
          </div>

          <div className="space-y-6">
            {currentListings.map((listing) => (
              <div key={listing.id} className="bg-white rounded-lg border-[#DDDDE1] p-6 flex flex-col lg:flex-row gap-6 border">
<<<<<<< HEAD
                <Link to={`/listing/${listing.id}`} className="rounded relative flex-shrink-0 cursor-pointer">
                  <img src={listing.imageUrl || "https://placehold.co/212x196"} alt={listing.name} className="w-full lg:w-[212px] h-[196px] object-cover rounded" />
=======
                {/* Image */}
                <Link
                  to={`/listing/${listing.id}`}
                  className="rounded relative flex-shrink-0 self-center lg:self-start cursor-pointer"
                >
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
>>>>>>> main
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-[10px] px-2 py-1 rounded flex items-center gap-1">
                    <FaCamera size={12} /> {listing.photos || 0}
                  </div>
                </Link>

<<<<<<< HEAD
=======
                {/* Details */}
>>>>>>> main
                <div className="flex flex-col flex-1 justify-between font-inter">
                  <div>
                    <Link to={`/listing/${listing.id}`}>
                      <h3 className="font-semibold text-[16px] lg:text-[18px] hover:text-[#4B3DFE]">{listing.name}</h3>
                    </Link>
                    <p className="text-[12px] text-[#1E1E1E] mt-1">{listing.description || listing.content}</p>
                    <div className="flex items-center gap-1 text-[#6E6F70] mt-2">
                      <FaMapMarkerAlt size={14} />
                      <span className="text-[12px]">{listing.location}</span>
<<<<<<< HEAD
=======
                    </div>

                    {/* Features */}
                    <div className="flex gap-2 mt-3 flex-wrap">
                      {listing.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-[#EDECFF] text-[#4B3DFE] text-[10px] px-3 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
>>>>>>> main
                    </div>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-row gap-2 mt-3 ">
                    <span className="bg-[#EDECFF] text-[#4B3DFE] text-[10px] px-3 py-1 rounded" >
                     <p>{listing.parkingSpace}</p>
                    </span>
                    <span className="bg-[#EDECFF] text-[#4B3DFE] text-[10px] px-3 py-1 rounded" >
                     <p>{listing.gym}</p>
                    </span>
                    <span className="bg-[#EDECFF] text-[#4B3DFE] text-[10px] px-3 py-1 rounded" >
                     <p>{listing.swimmingPool}</p>
                    </span>
                  </div>

                  {/* Agent Info */}
                  <div className="flex flex-col gap-1 mt-4">
                      <div className="flex gap-2 items-center">
                      <img
                        src={listing.profPic}
                        alt="Agent"
                        className="w-[32px] h-[32px] rounded-full object-cover"
                      />
                      <p className="text-sm font-[400] flex items-center gap-1">
                        {listing.agent}
                        {/* verified badge should be programatic later */}
                        <img
                          src={listing.VerifiedBadge}
                          alt="Verified"
                          className="w-[12px] h-[12px]"
                        />
                      </p>
                    </div>
                    <p className="text-[11px] text-gray-400">{listing.date}</p>
                  </div>

                </div>
                 {/* Price & Actions */}
                <div className="flex flex-col items-start lg:items-end justify-between font-inter border-t lg:border-t-0 pt-4 lg:pt-0 lg:pl-6 w-full lg:w-auto">
                  <div className="text-left lg:text-right lg:border-l border-[#DDDDE1] lg:pl-6">
                    <p className="text-[18px] font-bold text-[#1E1E1E]">{listing.price}</p>
                  </div>
                  
                  {/* Edit/Delete buttons for Landlord/Agent */}
                  {canEditDelete && (
                    <div className="flex gap-2 mt-2">
                      <button 
                        onClick={() => handleEdit(listing.id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md flex items-center gap-1 text-xs"
                      >
                        <FaEdit size={12} /> Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(listing.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md flex items-center gap-1 text-xs"
                      >
                        <FaTrash size={12} /> Delete
                      </button>
                    </div>
                  )}
                  
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
<<<<<<< HEAD
            {currentPage > 1 && (
              <button onClick={() => handlePageChange(currentPage - 1)} className="px-3 py-1 border rounded hover:bg-gray-200">Prev</button>
            )}
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={`px-3 py-1 border rounded ${currentPage === number ? "bg-[#4B3DFE] text-white" : "hover:bg-gray-200"}`}
              >
                {number}
              </button>
            ))}
            {currentPage < totalPages && (
              <button onClick={() => handlePageChange(currentPage + 1)} className="px-3 py-1 border rounded hover:bg-gray-200">Next</button>
            )}
=======
            <button className="px-4 py-2 border rounded hover:bg-gray-100">1</button>
            <button className="px-4 py-2 border rounded hover:bg-gray-100  ">2</button>
            <button className="px-4 py-2 border rounded hover:bg-gray-100">3</button>
            <span className="px-4 py-2">...</span>
            <button className="px-4 py-2 border rounded hover:bg-gray-100">
              Next
            </button>
>>>>>>> main
          </div>
        </main>
      </div>
    </div>
  );
};

export default Listings;
