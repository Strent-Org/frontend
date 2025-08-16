import Forward from "../assets/icons/forward.svg";
import { useState } from "react";
import { newAgentsList as agents, properties } from "../data/agentpagedata";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Verified from "../assets/icons/verified.svg";
import Whatsapp from "../assets/icons/whatsapp.svg";
import Location from "../assets/icons/location.svg";
import Call from "../assets/icons/call.svg";
import Rating from "../components/agentpage-components/rating";
import Pagination from "../components/agentpage-components/pagination";


export default function InnerAgents() {
  const { id } = useParams();
  const agent = agents.find((agent) => agent.id === parseInt(id));
  if (!agent) {
    return <p>Agent not found</p>;
  }

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
                src={agent.imageUrl2}
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
            <form>
              <div id="form" className="text-sm flex flex-col gap-4">
                <div>
                  <label htmlFor="full-name"></label>
                  <input
                    className="py-4 px-4 border rounded-lg w-full"
                    type="text"
                    id="full-name"
                    name="full-name"
                    autoComplete="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone-number"></label>
                  <input
                    className="py-4 px-4 border rounded-lg w-full"
                    type="text"
                    id="phone-number"
                    name="phone-number"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email"></label>
                  <input
                    className="py-4 px-4 border rounded-lg w-full"
                    type="text"
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message"></label>
                  <textarea
                    className="w-full resize-none h-[136px] px-4 py-6 text-sm rounded-lg border border-neutral2 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Hello Kemi Adeyinka I would like to check the availability for Studio Pentfloor,Ikate, Lekki Ikate Lekki Lagos,₦ 65,000/day Thank you!"
                    id="message"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div className="flex flex-col gap-4">
                  <button className="bg-primary text-white text-base w-full py-4 text-center rounded-lg">
                    Enquire Now
                  </button>
                  <button className="bg-green-450 text-white text-base w-full py-4 flex justify-center items-center gap-4 rounded-lg">
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
  const [currentPage, SetCurrentPage] = useState(1)
  const [postPerPage] = useState(8) 

  const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentProperties = properties.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => {
    SetCurrentPage(pageNumber)
  }

  return (
    <div className="font-inter w-full">
      {currentProperties.map((property) => {
        return (
          <article key={property.id} className="p-4 relative flex gap-4 border border-neutral2 rounded-lg w-full mb-4">
            <section id="property-image">
              <p className="absolute top-6 left-3  font-semibold p-2 bg-secondary rounded-r-lg w-[112px] text-white text-xs text-center">
                Sponsored
              </p>
              <img src={property.imageUrl} alt="agent-pic" className=" rounded-lg"/>
            </section>
            <section id="property-details" className="text-[10px] flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 border-r border-neutral2 pr-4">
                  <h3 className="font-bold text-base"> {property.name} </h3>
                  <p > {property.content} </p>
                  <p className="flex gap-1">
                    {" "}
                    <img src={Location} alt="location-icon" />{" "}
                    {property.location}
                  </p>
                </div>
                <ul className="flex text-primary  text-[8px] gap-1 ">
                  <li className="bg-primary-50 p-1 rounded">CCTV CAMERAS</li>
                  <li className="bg-primary-50 p-1 rounded">FREE WIFI</li>
                  <li className="bg-primary-50 p-1 rounded">24 HOURS SECURITY</li>
                </ul>
              </div>
              <div>
                <p className="text-sm flex items-center gap-1">
                  {" "}
                  <img src={property.profPic} alt="pic" /> {property.agent}{" "}
                  <img src={Verified} alt="verified-icon" />{" "}
                </p>
                <p className="text-[10px]">Updated 17 Jul 2025, Added 07 Jul 2025</p>
              </div>
            </section>
            <section className="p-1 flex flex-col flex-grow justify-between">
              <div className=" flex flex-col gap-2">
                <p className="font-bold text-base "> {property.price} </p>
                <p className="text-[10px]"> {property.content2} </p>
              </div>
              <div className=" flex gap-2 mb-2">
                <button className="bg-primary rounded flex gap-2 text-white py-2 px-3 text-sm items-center">
                  <img src={Call} alt="phone-icon" className="h-3 w-3"/>
                  <p>Call</p>
                </button>
                <button className="bg-green-450 py-2 px-3 rounded">
                  <img src={Whatsapp} alt="whatsapp" className="w-4 h-4"/>
                </button>
              </div>
            </section>
          </article>
        );
      })}
      <Pagination postPerPage={postPerPage} totalPosts={properties.length} paginate={paginate} currentPage={currentPage} visiblePages={4}/>
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
  const { id } = useParams();
  const agent = agents.find((a) => a.id === Number(id));

  if (!agent) return <h1>Agent Not Found</h1>;

  return (
    <div>
      <form action="">
        <section className="flex flex-col gap-4 mb-4">
          <h3 className="font-sora font-semibold">
            Leave a Review on {agent.name}
          </h3>
          <Rating />
        </section>
        <section className="flex flex-col gap-4">
          <div className="flex gap-4 text-sm">
            <div className="full-name p-4 border rounded-lg border-neutral2 w-1/2">
            <label htmlFor="full-name"></label>
            <input
              type="text"
              name="full-name"
              id="full-name"
              autoComplete="name"
              placeholder="Enter full name"
            />
          </div>
          <div className="Email-address p-4 border border-neutral2 rounded-lg w-1/2">
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="Enter Email Address"
            />
          </div>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="checkbox" className="w-5 h-5"/>
            <label htmlFor="checkbox">
              Save my name and email in this browser for the next time i comment
            </label>
          </div>
          <div>
            <label htmlFor="review"></label>
            <textarea
              name="review"
              id="review"
              className="w-full border border-neutral2 h-[220px] rounded-lg py-6 px-4 resize-none"
              placeholder="write a review"
            ></textarea>
          </div>
          <div>
            <button className="text-white rounded-lg bg-primary px-4 py-3"> Submit Review</button>
          </div>
        </section>
      </form>
    </div>
  );
}
