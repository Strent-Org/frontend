import Forward from "../assets/icons/forward.svg";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Verified from "../assets/icons/verified.svg";
import Whatsapp from "../assets/icons/whatsapp.svg";
import Location from "../assets/icons/location.svg";
import Call from "../assets/icons/call.svg";
import Pagination from "../components/agentpage-components/pagination";
import axios from 'axios';
import { useState, useEffect } from "react";
import StarRating from "../components/agentpage-components/rating";



export default function InnerAgents() {
  const { id } = useParams();
  const [agent, setAgent ] = useState({});
  const [, setProperties] = useState([]);
  // const agent = agents.find((agent) => agent.id === parseInt(id));
  // if (!agent) {
  //   return <p>Agent not found</p>;
  // }
  const [inquiry, setInquiry] = useState({
  name: "",
  phone: "",
  email: "",
  message: "",
});
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setInquiry({ ...inquiry, [name]: value });
};



  useEffect(() => {
    axios.get(`http://localhost:8080/agents/${id}`)
      .then(response => setAgent(response.data))
      .catch(error => console.error("Error fetching agent:", error));
                                            // {Number(id)}
   axios.get(`http://localhost:8080/properties?agentId=${id}`)  
      .then(response => setProperties(response.data))
      .catch(error => console.error("Error fetching properties:", error));
  }, [id]);

  if (!agent || !agent.name) return <p>Loading agent...</p>; // ✅ prevents crash


const handleInquirySubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError(null);

  try {
    await axios.post("http://localhost:8080/inquiries", {
      ...inquiry,
      agentId: agent.id,
      agentName: agent.name,
      createdAt: new Date().toISOString(),
      id: crypto.randomUUID(),
    });

    alert("Your inquiry has been sent!");
    setInquiry({ name: "", phone: "", email: "", message: "" });
  } catch (err) {
    console.error(err);
    setError("Failed to send inquiry.");
  } finally {
    setLoading(false);
  }
};




  return (
    <main className="font-inter px-[15%] py-8 flex flex-col gap-8 bg-neutral relative">
      <section id="header" className="flex flex-col gap-2">
        <div>
          <ul className="flex gap-2">
            {["Home", "Agents", agent.name].map((item, index, arr) => {
              let to;
              if (item === "Home") to = "/";
              if (item === "Agents") to = `/agents`;
              if (item === agent.name) to = `/agents/${agent.id}`;
              return (
                <li
                  key={index}
                  className={`${
                    item === agent.name && "text-secondary-500"
                  } flex items-center gap-2`}
                >
                  <Link to={to}>
                    <p>{item} </p>
                  </Link>
                  {index < arr.length - 1 && (
                    <img
                      src={Forward}
                      alt="Forward-arrow"
                      className="h-4 w-4"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <h1 className="font-sora font-bold text-[32px]"> {agent.name} </h1>
      </section>
      <section id="agent-profile" className="flex gap-8">
        <div className="w-fit flex flex-col gap-4">
          <section
            id="agent-details"
            className="border border-neutral2 flex flex-col rounded-lg"
          >
            <div id="agent-image" className="p-2">
              <img
                src={agent.imageUrl}
                alt={agent.name}
                className="rounded-md"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-sora font-semibold text-xl flex gap-2 ">
                {agent.name} <img src={Verified} alt="verified-icon" />
              </h3>
              <p>Email: {agent.email}</p>
              <p>Phone: {agent.phoneNumber}</p>
            </div>
          </section>
          <section
            id="contact-agent"
            className="border border-neutral2 flex flex-col rounded-lg px-5 gap-6 py-8"
          >
            <h3 className="font-sora font-semibold text-xl">Contact Agent</h3>
      
            <form onSubmit={handleInquirySubmit}>
  <div id="form" className="text-sm flex flex-col gap-4">
    <div>
      <input
        className="py-4 px-4 border rounded-lg w-full"
        type="text"
        id="full-name"
        name="name"
        placeholder="Name"
        value={inquiry.name}
        onChange={handleInputChange}
        required
      />
    </div>
    <div>
      <input
        className="py-4 px-4 border rounded-lg w-full"
        type="text"
        id="phone-number"
        name="phone"
        placeholder="Phone Number"
        value={inquiry.phone}
        onChange={handleInputChange}
        required
      />
    </div>
    <div>
      <input
        className="py-4 px-4 border rounded-lg w-full"
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        value={inquiry.email}
        onChange={handleInputChange}
        required
      />
    </div>
    <div>
      <textarea
        className="w-full resize-none h-[136px] px-4 py-6 text-sm rounded-lg border border-neutral2"
        placeholder={`Hello ${agent.name}, I would like to inquire about your listings.`}
        id="message"
        name="message"
        value={inquiry.message}
        onChange={handleInputChange}
        required
      ></textarea>
    </div>

    {error && <p className="text-red-500 text-sm">{error}</p>}

    <div className="flex flex-col gap-4">
      <button
        type="submit"
        disabled={loading}
        className="bg-primary text-white text-base w-full py-4 text-center rounded-lg disabled:opacity-50"
      >
        {loading ? "Sending..." : "Enquire Now"}
      </button>
      <button
        type="button"
        className="bg-green-450 text-white text-base w-full py-4 flex justify-center items-center gap-4 rounded-lg"
      >
        <img src={Whatsapp} alt="whatsapp-icon" />
        <p>Whatsapp</p>
      </button>
    </div>
  </div>
</form>

          </section>
        </div>
        <div id="" className="w-2/3 flex flex-col gap-6">
          <section id="Headlines">
            <div className="flex gap-2  border-b border-neutral2">
              <NavLink
                to={`/agents/${agent.id}`}
                className={`font-sora font-semibold text-xl py-4 px-4`}
                style={({ isActive }) => ({
                  borderBottom: isActive ? "2px solid #4B3DFE" : "0px solid",
                })}
                end
              >
                <h3>Overview</h3>
              </NavLink>
              <NavLink
                to={`/agents/${agent.id}/properties`}
                className={`font-sora font-semibold text-xl py-4 px-8`}
                style={({ isActive }) => ({
                  borderBottom: isActive ? "2px solid #4B3DFE" : "0px solid",
                })}
                
              >
                <h3>Properties</h3>
              </NavLink>
              <NavLink
                to={`/agents/${agent.id}/reviews`}
                className={`font-sora font-semibold text-xl py-4 px-8`}
                style={({ isActive }) => ({
                  borderBottom: isActive ? "2px solid #4B3DFE" : "0px solid",
                })}
                
              >
                <h3>Reviews</h3>
              </NavLink>
            </div>
          </section>
          <section id="Headline-details" className="w-full">
            <Outlet />
          </section>
        </div>
      </section>
    </main>
  );
}





export function Properties() {
  const { id } = useParams();
  const [properties, setProperties] = useState([]);
  const [currentPage, SetCurrentPage] = useState(1);
  const [postPerPage] = useState(8);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/properties?agentId=${Number(id)}`)
      .then((res) => setProperties(res.data))
      .catch((err) => console.error("Error fetching properties:", err));
  }, [id]);

  // Pagination logic
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentProperties = properties.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    SetCurrentPage(pageNumber);
  };

  return (
    <div className="font-inter w-full flex flex-col">

      
      {currentProperties.length === 0 ? (
      <p>No properties available for this agent.</p>
    ) : (
      currentProperties.map((property) => (
        <article key={property.id} className="p-4 relative flex gap-4 border border-neutral2 rounded-lg w-full mb-4">
          <section id="property-image">
            <p className="absolute top-6 left-3 font-semibold p-2 bg-secondary rounded-r-lg w-[112px] text-white text-xs text-center">
              Sponsored
            </p>
            <img 
              src={property.imageUrl} 
              alt="agent-pic" 
              // className="rounded-lg w-32 h-32 object-cover" 
               className="h-40 w-40 object-cover rounded-lg border max-w-full"
            />
          </section>
          <section 
            id="property-details" 
            className="text-[10px] flex flex-col gap-8 overflow-hidden max-w-full"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 border-r border-neutral2 pr-4">
                <h3 className="font-bold text-base truncate">{property.name}</h3>
                <p className="line-clamp-2 overflow-hidden">{property.description}</p>
                <p className="flex gap-1">
                  <img src={Location} alt="location-icon" />
                  <span className="truncate">{property.location}</span>
                </p>
              </div>
              <ul className="flex text-primary text-[8px] gap-1 flex-wrap">
                <li className="bg-primary-50 p-1 rounded">CCTV CAMERAS</li>
                <li className="bg-primary-50 p-1 rounded">FREE WIFI</li>
                <li className="bg-primary-50 p-1 rounded">24 HOURS SECURITY</li>
              </ul>
            </div>
            <div>
              <p className="text-sm flex items-center gap-1">
                <img src={property.profPic} alt="pic"  className="h-10 w-10 object-cover rounded-full border" /> {property.agent}
                <img src={Verified} alt="verified-icon" />
              </p>
              <p className="text-[10px]">
                Added {new Date(property.date).toLocaleDateString()}
              </p>
            </div>
          </section>
          <section className="p-1 flex flex-col flex-grow justify-between">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-base">{property.price}</p>
              <p className="text-[10px]">{property.date}</p>
            </div>
            <div className="flex gap-2 mb-2">
              <button className="bg-primary rounded flex gap-2 text-white py-2 px-3 text-sm items-center">
                <img src={Call} alt="phone-icon" className="h-3 w-3" />
                <p>Call</p>
              </button>
              <button className="bg-green-450 py-2 px-3 rounded">
                <img src={Whatsapp} alt="whatsapp" className="w-4 h-4" />
              </button>
            </div>
          </section>
        </article>
      ))
    )}

      <Pagination
        postPerPage={postPerPage}
        totalPosts={properties.length}
        paginate={paginate}
        currentPage={currentPage}
        visiblePages={4}
      />


    </div>

    
  );
}



export function Overview() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <p>
        Kemi Adeyinka is a real estate agent with over ten years of active
        experience in the real estate market industry. A true Lagosian at heart,
        kemi ventured into real estate straight out of university and hasn’t
        looked back ever since. She currently serves as a principal broker for
        CRW and has closed a great number of deals. Kemi is your go to when it
        comes to various locations in Lagos and she is proficiently skilled in
        any sort of property deal that consistently exceeds the investment goal
        of her clients. She is patient, simple and easy going
      </p>
      <p>
        To request any private viewing of my properties, please send me an email
        at kemiadeyinka@gmail.com or chat with me on WhatsApp: +234 9124244241
      </p>
    </div>
  );
}





export function Reviews() {
  const { id } = useParams(); // my guys we assume this is the agentId from URL
  // const agent = agents.find((a) => a.id === Number(id));
  const [agent, setAgent] = useState(null); // ✅ state to hold agent data
  const [formData, setFormData] = useState({
    reviewerFullName: "",
    reviewerEmail: "",
    reviewerText: "",
    starRating: 0, // numeric rating

  });

  const [submissionStatus, setSubmissionStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });


 useEffect(() => {
  const fetchAgent = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/agents/${id}`);
      console.log("Agent found:", response.data);
      setAgent(response.data); // ✅ Save to state
    } catch (err) {
      console.error("Error fetching agent:", err);
    }
  };

  fetchAgent();
}, [id]);


  
  // const agent = agents.find((a) => String(a.id) === String(id)); // ✅ ensure type match
  if (!agent) return <h1>Agent Not Found</h1>;

  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmissionStatus({ loading: true, success: false, error: "" });

   
    try {
      const response = await axios.post("http://localhost:8080/reviews", { 
        agentId: agent.id, // ✅ associate review with agent 
        agentName: agent.name,         
        reviewerFullName: formData.fullName,
        reviewerEmail: formData.email,
        reviewerText: formData.review,
        starRating: formData.rating,
        timestamp: new Date().toISOString()
      });

      console.log("Form submitted successfully:", response.data);
      setSubmissionStatus({ loading: false, success: true, error: "" });
      setFormData({ fullName: "", email: "", review: "", rating: 0 });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus({
        loading: false,
        success: false,
        error: "Failed to submit the form. Please try again.",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section className="flex flex-col gap-4 mb-4">
          <h3 className="font-sora font-semibold">
            Leave a Review on {agent.name}
          </h3>

          {/* ✅ Pass down rating state */}
          <StarRating
            rating={formData.rating}
            setRating={(val) => setFormData({ ...formData, rating: val })}
          />
        </section>

        <section className="flex flex-col gap-4">
          {/* Inputs remain the same */}
          <div className="flex gap-4 text-sm">
            <div className="fullName   border-neutral2 w-1/2">
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B3DFE]"
              />
            </div>
            <div className="Email-address  border-neutral2 w-1/2">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B3DFE]"
              />
            </div>
          </div>

          <textarea
            name="review"
            id="review"
            className="w-full border border-neutral2 h-[220px] rounded-lg py-6 px-4 resize-none"
            placeholder="Write a review"
            value={formData.review}
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            disabled={submissionStatus.loading}
            className="text-white rounded-lg bg-primary px-4 py-3 w-40" 
          >
            {submissionStatus.loading ? "Sending..." : "Send review"}
          </button>
        </section>
      </form>

      {submissionStatus.success && (
        <p className="mt-4 text-green-600 font-semibold text-center">
          Review sent successfully!
        </p>
      )}
      {submissionStatus.error && (
        <p className="mt-4 text-red-600 font-semibold text-center">
          {submissionStatus.error}
        </p>
      )}
    </div>
  );
}