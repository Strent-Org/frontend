

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { FaMapMarkerAlt } from "react-icons/fa";

const ListingDetails = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/properties/${id}`);
        setListing(res.data);
      } catch (err) {
        console.error("Error fetching property details", err);
      }
    };
    fetchListing();
  }, [id]);

  if (!listing) {
    return <p className="text-center py-12">Loading property...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Link to="/listings" className="text-blue-600 hover:underline">
        ← Back to Listings
      </Link>
      <div className="mt-6 bg-white p-6 rounded-lg shadow border">
        <img
          src={listing.imageUrl}
          alt={listing.name}
          className="w-full h-[400px] object-cover rounded"
        />
        <h1 className="text-2xl font-bold mt-4">{listing.name}</h1>
        <p className="text-gray-500 flex items-center gap-2 mt-1">
          <FaMapMarkerAlt /> {listing.location}
        </p>
        <p className="text-xl text-[#4B3DFE] font-semibold mt-4">
          {listing.price}
        </p>
        <p className="mt-4 text-gray-700">{listing.description}</p>
        <div className="mt-6">
          <p className="font-semibold">Agent:</p>
          <p>{listing.agent}</p>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
