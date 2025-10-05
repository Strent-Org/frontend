

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PostProperties = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    agent: "",
    email: "",
    phoneNumber: "",
    price: "",
    description: "",
    imageUrl: "",
    profPic: "",
    date: "",
    parkingSpace: "",
    gym: "",
    swimmingPool: "",
  });
  const [propertyFile, setPropertyFile] = useState(null);
  const [profPicFile, setProfPicFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Check if editing mode and fetch property data
  useEffect(() => {
    const editPropertyId = searchParams.get('edit');
    if (editPropertyId) {
      setIsEditing(true);
      setEditId(editPropertyId);
      
      // Fetch property data for editing
      fetch(`http://localhost:8080/properties/${editPropertyId}`)
        .then(res => res.json())
        .then(data => {
          setFormData({
            name: data.name || "",
            location: data.location || "",
            agent: data.agent || "",
            price: data.price || "",
            description: data.description || "",
            imageUrl: data.imageUrl || "",
            profPic: data.profPic || "",
            date: data.date || "",
            parkingSpace: data.parkingSpace || "",
            gym: data.gym || "",
            swimmingPool: data.swimmingPool || "",
          });
        })
        .catch(err => {
          console.error('Error fetching property:', err);
          setError('Failed to load property data.');
        });
    }
  }, [searchParams]);

  // Handle property image file
  const handlePropertyFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPropertyFile(file);
      setFormData({
        ...formData,
        imageUrl: URL.createObjectURL(file),
      });
    }
  };

  // Handle agent profile picture file
  const handleProfPicFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfPicFile(file);
      setFormData({
        ...formData,
        profPic: URL.createObjectURL(file),
      });
    }
  };

  // Handle form submission
  const handleAddProperty = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const imageUrl = propertyFile
        ? URL.createObjectURL(propertyFile)
        : formData.imageUrl || "https://placehold.co/200x150";

      const profPicUrl = profPicFile
        ? URL.createObjectURL(profPicFile)
        : formData.profPic || "https://placehold.co/20x20/A0A0A0/FFFFFF?text=A";

      const propertyData = {
        ...formData,
        imageUrl,
        profPic: profPicUrl,
      };

      if (isEditing) {
        // Update existing property
        await axios.put(`http://localhost:8080/properties/${editId}`, {
          ...propertyData,
          id: editId,
        });
        alert("Property updated successfully!");
      } else {
        // Add new property
        await axios.post("http://localhost:8080/properties", {
          ...propertyData,
          id: crypto.randomUUID(),
        });
        alert("Property added successfully!");
      }

      // Reset form and navigate back
      setFormData({
        name: "",
        location: "",
        agent: "",
        price: "",
        description: "",
        imageUrl: "",
        profPic: "",
        date: "",
        parkingSpace: "",
        gym: "",
        swimmingPool: "",
      });
      setPropertyFile(null);
      setProfPicFile(null);
      navigate('/listings');
    } catch (err) {
      console.error(err);
      setError(isEditing ? "Failed to update property." : "Failed to add property.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <div className="mb-8">
          <button
            onClick={() => navigate("/listings")}
            className="flex items-center text-blue-600 hover:text-blue-800 transition"
          >
            <ArrowLeft className="w-5 h-5 mr-1" />
            Back to Listings
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-8">
            {isEditing ? 'Edit Property' : 'Add New Property'}
          </h1>
        </div>

        <form onSubmit={handleAddProperty} className="space-y-6">
          {/* Property Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Property Name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              placeholder=" 3 Bedroom Duplex"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              required
              placeholder=" Victoria Island Lagos"
            />
          </div>

          {/* Agent Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Agent Name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
              value={formData.agent}
              onChange={(e) => setFormData({ ...formData, agent: e.target.value })}
              required
              placeholder=" Abdullahi A"
            />
          </div>
          {/* Agent email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Agent Email</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              placeholder=" Enter Agent Email"
            />
          </div>
          {/* Agent phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Agent Phone</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              required
              placeholder="Enter Agent Phone"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              required
              placeholder="N 25,0000,000/year"
            />
          </div>
          {/* feature tag */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Features</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
              value={formData.parkingSpace}
              onChange={(e) => setFormData({ ...formData, parkingSpace: e.target.value })}
              required
              placeholder="Parking Space"
            />
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
              value={formData.gym}
              onChange={(e) => setFormData({ ...formData, gym: e.target.value })}
              required
              placeholder="GYM"
            />
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
              value={formData.swimmingPool}
              onChange={(e) => setFormData({ ...formData, swimmingPool: e.target.value })}
              required
              placeholder="Swimming Pool"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              placeholder="Modern duplex with parking space, 3 Bed 2 Bath, 1 kitchen..."
            />
          </div>

          {/* Property Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Property Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePropertyFileChange}
              className="mt-2 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
            {formData.imageUrl && (
              <div className="mt-4">
                <img
                  src={formData.imageUrl}
                  alt="Property Preview"
                  className="h-40 w-40 object-cover rounded-md border"
                />
              </div>
            )}
          </div>

          {/* Agent Profile Picture */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Agent Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfPicFileChange}
              className="mt-2 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
            {formData.profPic && (
              <div className="mt-4">
                <img
                  src={formData.profPic}
                  alt="Profile Preview"
                  className="h-20 w-20 object-cover rounded-full border"
                />
              </div>
            )}
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="text"
              placeholder="Updated 17 Jul 2025, Added 07 Jul 2025"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-3 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? (isEditing ? "Updating..." : "Adding...") : (isEditing ? "Update Property" : "Add Property")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostProperties;