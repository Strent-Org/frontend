import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userInfo } from "../components/atom/user";

// This component is the main agents page
const Agents = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(6);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentAgent, setCurrentAgent] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    imageUrl: "",
    numberOfProperties: 0,
    listings: "View Listings",
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [agentToDelete, setAgentToDelete] = useState(null);

  // ✅ use Recoil instead of local state
  const [user, setUser] = useRecoilState(userInfo);

  const toggleUserType = () => {
    setUser((prevUser) => ({
      data: {
        accountType:
          prevUser.data.accountType === "Tenant" ? "Agent" : "Tenant",
        id:
          prevUser.data.accountType === "Tenant"
            ? "agent@example.com"
            : "default_tenant_id",
      },
    }));
  };

  const fetchAgents = async () => {
    try {
      let response;
      if (
        user.data.accountType === "Agent" ||
        user.data.accountType === "Landlord"
      ) {
        response = await axios.get(
          `http://localhost:8080/agents?email=${user.data.id}`
        );
      } else {
        response = await axios.get("http://localhost:8080/agents");
      }
      setAgents(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch agents.");
      setLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, [user.data.id, user.data.accountType]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        imageUrl: URL.createObjectURL(file),
      });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentAgent) {
        await axios.patch(
          `http://localhost:8080/agents/${currentAgent.id}`,
          formData
        );
      } else {
        await axios.post("http://localhost:8080/agents", formData);
      }
      fetchAgents();
      closeForm();
    } catch (err) {
      setError("Failed to save agent details.");
      console.error(err);
    }
  };

  const handleEdit = (agent) => {
    setCurrentAgent(agent);
    setFormData({
      name: agent.name,
      email: agent.email,
      phoneNumber: agent.phoneNumber,
      imageUrl: agent.imageUrl,
      numberOfProperties: agent.numberOfProperties,
      listings: agent.listings,
    });
    setIsFormOpen(true);
  };

  const handleDelete = (agentId) => {
    setAgentToDelete(agentId);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/agents/${agentToDelete}`);
      fetchAgents();
      setShowDeleteModal(false);
      setAgentToDelete(null);
    } catch (err) {
      setError("Failed to delete agent.");
      console.error(err);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setAgentToDelete(null);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setCurrentAgent(null);
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      imageUrl: "",
      numberOfProperties: 0,
      listings: "View Listings",
    });
  };

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentAgents = agents.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(agents.length / postPerPage);
  const visiblePages = 3;
  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);
  const pageNumbers = [...Array(endPage - startPage + 1).keys()].map(
    (i) => startPage + i
  );
  const displayPages = pageNumbers.filter(
    (page) => page >= startPage && page <= endPage
  );

  if (loading) return <div className="text-center py-10">Loading agents...</div>;
  if (error)
    return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <main className="font-inter px-[15%] flex flex-col gap-8 py-8 relative">
      <img
        className="hidden lg:block fixed right-6 bottom-6 w-12 h-12 z-50 cursor-pointer"
        src="https://placehold.co/48x48/50B4FF/FFFFFF?text=Chat"
        alt="chat icon"
      />
      <section id="header">
        <div className="flex gap-2 items-center">
          <Link to={"/"}>
            <p>Home</p>
          </Link>
          <img
            src="https://placehold.co/16x16/E5E7EB/201A6B?text=>"
            alt="Forward-arrow"
            className="h-4 w-4"
          />
          <p className="text-secondary-500">Agents</p>
        </div>
        <h1 className="font-sora font-bold text-[32px]">Agents</h1>

        {/* Conditional rendering for Agent/Landlord specific controls */}
        {(user.data.accountType === "Agent" ||
          user.data.accountType === "Landlord") && (
          <>
            <button
              onClick={toggleUserType}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg mt-4"
            >
              Switch to{" "}
              {user.data.accountType === "Tenant" ? "Agent" : "Tenant"} View
            </button>
            <p className="mt-2 text-sm text-gray-600">
              Current View: {user.data.accountType}
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4"
            >
              Post New Agent
            </button>
          </>
        )}
      </section>
      <section id="agents">
        <div className="flex justify-between items-center text-sm border border-neutral2 rounded-lg py-4 px-8 mb-8">
          <p>
            Showing {indexOfFirstPost + 1}-
            {indexOfLastPost > agents.length ? agents.length : indexOfLastPost}{" "}
            of {agents.length} results
          </p>
          <div className="flex relative items-center">
            <p>Sort by: </p>
            <select
              name="filters"
              id="agent-filters"
              className="appearance-none flex-grow w-[80px] cursor-pointer px-1"
            >
              <option value="Newest">Newest</option>
            </select>
            <img
              src="https://placehold.co/16x16/E5E7EB/201A6B?text=v"
              alt="Down-icon"
              className="absolute -right-2 lg:right-0 pointer-events-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,304px))] gap-4 justify-center mb-8">
          {currentAgents.map((agent) => (
            <article
              key={agent.id}
              className="w-[304px] rounded-lg border border-neutral2 pt-2"
            >
              <section className="flex justify-center">
                <div className="relative">
                  <p className="p-2 text-white bg-secondary text-xs rounded-md w-[98px] absolute top-2 left-2">
                    {agent.numberOfProperties} Properties
                  </p>
                  <img
                    src={agent.imageUrl}
                    alt={agent.name}
                    className="rounded-t h-[200px] w-[304px] object-cover"
                  />
                </div>
              </section>
              <section className="text-sm">
                <div className="pl-4 py-4 border-b border-neutral2">
                  <h3 className="font-sora font-semibold text-xl">
                    {agent.name}
                  </h3>
                  <p>Email: {agent.email}</p>
                  <p>Phone: {agent.phoneNumber}</p>
                </div>
                <div className="flex justify-end items-center gap-2 text-secondary p-4 cursor-pointer">
                  {user &&
                    (user.data.accountType === "Agent" ||
                      user.data.accountType === "Landlord") && (
                      <>
                        <button
                          onClick={() => handleEdit(agent)}
                          className="text-blue-500 hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(agent.id)}
                          className="text-red-500 hover:underline"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  <Link
                    to={`/agents/${agent.id}`}
                    className="flex items-center gap-2"
                  >
                    <p>{agent.listings}</p>
                    <img
                      src="https://placehold.co/16x16/201A6B/FFFFFF?text=>"
                      alt="Forward-icon"
                      className="filter"
                    />
                  </Link>
                </div>
              </section>
            </article>
          ))}
        </div>
      </section>
      <div className="flex justify-center my-8">
        <nav className="flex items-center gap-2">
          {currentPage > 1 && (
            <button
              onClick={() => paginate(currentPage - 1)}
              className="px-3 py-1 border rounded-lg hover:bg-gray-200"
            >
              Previous
            </button>
          )}
          {displayPages.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-3 py-1 border rounded-lg ${
                currentPage === number
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {number}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              onClick={() => paginate(currentPage + 1)}
              className="px-3 py-1 border rounded-lg hover:bg-gray-200"
            >
              Next
            </button>
          )}
        </nav>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">
              {currentAgent ? "Edit Agent" : "Create New Agent"}
            </h2>
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="p-2 border rounded-lg"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="p-2 border rounded-lg"
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="p-2 border rounded-lg"
                required
              />
              <label className="block">
                <span className="text-gray-700">Agent Image</span>
                <input
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                  className="mt-1 block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
                />
              </label>
              {formData.imageUrl && (
                <div className="mt-2">
                  <img
                    src={formData.imageUrl}
                    alt="Agent Preview"
                    className="h-32 w-32 rounded-lg object-cover"
                  />
                </div>
              )}
              <input
                type="number"
                name="numberOfProperties"
                placeholder="Number of Properties"
                value={formData.numberOfProperties}
                onChange={handleInputChange}
                className="p-2 border rounded-lg"
                required
              />
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg flex-grow"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={closeForm}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg flex-grow"
                >
                  Back
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm text-center">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p className="mb-6">
              Are you sure you want to delete this agent?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmDelete}
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Yes, Delete
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">
      Welcome to the Agent Management App
    </h1>
    <p className="text-xl text-gray-600 mb-8">
      Navigate to the Agents page to see the list of agents.
    </p>
    <Link
      to="/agents"
      className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
    >
      Go to Agents
    </Link>
  </div>
);

export default Agents;
