import {
  topRental,
  bestRental,
  neighbourhoods,
  faqs,
} from "../data/homepagedata.js";
import BgImg from "../assets/images/pexels-ben-iwara-1033992193-27741697 1.png";
import ArrowUp from "../assets/icons/arrow_upward_alt_40dp_FFF_FILL0_wght100_GRAD0_opsz40.svg";
import ArrowDown from "../assets/icons/arrow_downward_alt_40dp_1F1F1F_FILL0_wght100_GRAD0_opsz40.svg";
import CloseIcon from "../assets/icons/close.svg";
import SearchIcon from "../assets/icons/search.svg";
import { useState } from "react";
import Chatbox from "../components/Chatbox.jsx";

function FaqList({ faq }) {
  const [isOpen, setIsOpen] = useState(faq.isOpen);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="grid grid-cols-1">
      <article
        key={faq.id}
        className="border-b  cursor-pointer  w-full  border-neutral2 m-2"
      >
        <h3
          className="text-xl w-full font-semibold flex justify-between items-center font-sora"
          style={isOpen ? { color: "blue" } : { color: "black" }}
          onClick={toggleOpen}
        >
          {faq.question}{" "}
          <span>
            {" "}
            {isOpen ? (
              <img
                src={ArrowUp}
                className="text-white p-1 rounded-lg min-w-[48px] bg-primary"
              />
            ) : (
              <img
                src={ArrowDown}
                className="text-neutral-darker p-1 rounded-lg mb-2 min-w-[48px] bg-neutral-normal"
              />
            )}{" "}
          </span>
        </h3>
        {isOpen && (
          <div>
            <p className="text-left text-gray-700  text-base p-[3%] font-inter">
              {faq.answer}{" "}
            </p>
            <h3
              className="flex justify-end font-semibold items-center"
              onClick={toggleOpen}
            >
              Close <img src={CloseIcon} className="w-3 ml-2 " />
            </h3>
          </div>
        )}
      </article>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col items-center justify-center text-center h-auto w-full overflow-x-hidden">
        <section
          id="hero-section"
          className="h-[470px] flex flex-col items-center justify-center w-full p-[4%] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${BgImg})`,
          }}
        >
          <div className="pb-1 font-sora">
            <h1 className="text-white font-bold text-[32px] leading-10 pb-4">
              Renting Made Simple, Safe, and Stress-Free
            </h1>
            <h3 className="text-white font-semibold text-xl">
              Find Your Perfect Home With Zero Hassles.
            </h3>
          </div>
          <div className="flex  w-fit text-base gap-2 font-inter mt-8 mb-4">
            <button className="text-white bg-primary py-2 w-[140px] px-6 rounded-md">
              Rent
            </button>
            <button className="bg-white py-2 px-6 rounded-md w-[140px]">Shortlet</button>
          </div>

          <div className="bg-black/70 py-6 px-4 rounded-md w-full h-[140px] md:w-[70%] lg:w-[50%] xl:w-[632px] font-inter">
            <form action="" className="flex flex-col gap-6 items-center">
              <div className=" flex gap-2 flex-col h-[48px] sm:flex-row sm:gap-0 items-center justify-center w-full">
                <div className="w-2/3 relative h-[48px]">
                  <img
                    src={`${SearchIcon}`}
                    alt="search"
                    className="absolute left-0 top-3 ml-2"
                  />
                  <input
                    type="text"
                    id="search"
                    className="w-full p-4 pl-10 text-sm h-[48px] rounded-lg sm:rounded-r-none focus:outline-none"
                    placeholder={`Search for Location`}
                  />
                </div>
                <button className="bg-primary text-white h-[48px] font-semibold text-base w-fit sm:w-1/3 py-1.5  px-6 rounded-lg sm:rounded-l-none">
                  Find property
                </button>
              </div>

              <div className="flex gap-6 justify-center flex-wrap">
                <select
                  id="property-type"
                  className="text-white bg-transparent text-sm"
                >
                  <option value="#">Property type</option>
                </select>
                <select
                  id="Bedrooms"
                  className="text-white bg-transparent text-sm"
                >
                  <option value="#">Bedrooms</option>
                </select>
                <select
                  id="min-price"
                  className="text-white bg-transparent text-sm"
                >
                  <option value="#">Min Price</option>
                </select>
                <select
                  id="max-price"
                  className="text-white bg-transparent text-sm"
                >
                  <option value="#">Max Price</option>
                </select>
              </div>
            </form>
          </div>
        </section>

        <section
          id="luxury-best-listings"
          className="py-10 px-[10%] h-[928px] text-sm bg-neutral w-full mb-[5%] flex flex-col gap-8 relative"
        >
          <Chatbox />
          <div id="luxury-listings" className="mb-[5%]">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold font-sora tracking-[0.02em]">
                Top Rental Properties in the Market
              </h2>
              <p className="text-base font-inter">
                Explore some of the best properties with verified agents
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-10 text-left">
              {topRental.map((apt) => {
                return (
                  <article
                    key={apt.id}
                    className=" mb-2  flex flex-col gap-2 min-w-[170px] h-[240px] max-w-[220px] font-inter"
                  >
                    <img
                      src={apt.imageUrl}
                      alt={apt.title}
                      className=" rounded-lg"
                    />
                    <p className="text-sm text-secondary">{apt.title}</p>
                    <h3 className="font-semibold text-xl font-sora">
                      {apt.price}
                    </h3>
                    <p className="text-base">{apt.location}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div id="best-listings">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold tracking-[0.02em] font-sora">
                Best Luxury Listings in Lagos
              </h2>
              <p className="text-base font-inter">
                Some of the finest luxury listings, selected for you
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-10 text-left">
              {bestRental.map((apt) => {
                return (
                  <article key={apt.id} className="mb-2 flex flex-col gap-2 font-inter">
                    <img
                      src={apt.imageUrl}
                      alt={apt.title}
                      className=" rounded-lg"
                    />
                    <p className="text-sm text-secondary">{apt.title}</p>
                    <h3 className="font-semibold md:text-xl text-lg font-sora">
                      {apt.price}
                    </h3>
                    <p className="text-base">{apt.location}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="neighbourhood"
          className="py-10 px-[10%] text-sm w-full mb-[5%]"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-[0.02em] font-sora">
              Find Properties by Neighbourhood
            </h2>
            <p className="text-base font-inter">
              Choose where you live and find your peace
            </p>
          </div>
          <div className="flex flex-wrap justify-center mt-10 gap-4">
            {neighbourhoods.map((neighbourhood) => {
              return (
                <article
                  key={neighbourhood.id}
                  className="mb-2 h-[320px] shadow-md hover:shadow-xl border-t border-r border-l border-neutral rounded-b-lg rounded-bl-lg"
                >
                  <img
                    src={neighbourhood.imageUrl}
                    alt={`${neighbourhood.location} Neighbourhood`}
                    className="rounded-t-lg rounded-tr-lg"
                  />
                  <div className="h-[120px] flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-xl font-sora">
                    {neighbourhood.location}
                  </h3>
                  <p className="text-base font-inter">
                    {neighbourhood.property} Properties
                  </p>
                  </div>
                  
                </article>
              );
            })}
          </div>
        </section>
        <section id="faqs" className="text-sm w-full py-10 px-[10%] mb-[5%]">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-[0.02em] font-sora">
              Frequently Asked Questions
            </h2>
            <p className="text-base font-inter mb-10">
              Get answers about renting with Strent
            </p>
          </div>
          {faqs.map((faq) => {
            return <FaqList key={faq.id} faq={faq} />;
          })}
        </section>
      </main>
    </>
  );
}