import React, { useState } from "react";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PostProperties = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    address: "",
    city: "",
    state: "",
    country: "",
    price: "",
    total_bedroom: "",
    total_bathroom: "",
  });
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle text input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file uploads
  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleVideoChange = (e) => {
    setVideos([...e.target.files]);
  };

  // Submit property
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const token = localStorage.getItem("token"); // adjust if using cookies/session
      const data = new FormData();

      // Append all fields
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      // Append images
      images.forEach((file) => data.append("images", file));

      // Append videos (optional)
      videos.forEach((file) => data.append("videos", file));

      const response = await axios.post(
        "https://backend-k0k7.onrender.com/api/me/properties",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
        }
      );

      alert("✅ Property added successfully!");
      console.log("Response:", response.data);
      navigate("/listings");
    } catch (err) {
      console.error("Error adding property:", err);
      if (err.response) {
        setError(err.response.data.message || "Failed to add property.");
      } else {
        setError("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md border">
        <button
          onClick={() => navigate("/listings")}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-1" /> Back to Listings
        </button>

        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Add New Property
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { label: "Name", name: "name", placeholder: "3 Bedroom Duplex" },
            {
              label: "Description",
              name: "description",
              placeholder: "Modern duplex with pool",
            },
            {
              label: "Address",
              name: "address",
              placeholder: "No. 23 Adeola Street",
            },
            { label: "City", name: "city", placeholder: "Lagos" },
            { label: "State", name: "state", placeholder: "Lagos State" },
            { label: "Country", name: "country", placeholder: "Nigeria" },
            { label: "Price (₦)", name: "price", placeholder: "25000000" },
            {
              label: "Total Bedrooms",
              name: "total_bedroom",
              placeholder: "3",
            },
            {
              label: "Total Bathrooms",
              name: "total_bathroom",
              placeholder: "2",
            },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}
              </label>
              <input
                type={
                  ["price", "total_bedroom", "total_bathroom"].includes(
                    field.name
                  )
                    ? "number"
                    : "text"
                }
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required
                className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring focus:ring-blue-200"
              />
            </div>
          ))}

          {/* Images Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Property Images
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-600 border rounded-md cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          {/* Videos Upload (optional) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Property Videos (optional)
            </label>
            <input
              type="file"
              multiple
              accept="video/*"
              onChange={handleVideoChange}
              className="block w-full text-sm text-gray-600 border rounded-md cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Add Property"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostProperties;
