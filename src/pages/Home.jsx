import {
  topRental,
  bestRental,
  neighbourhoods,
  faqs,
} from "../data/homepagedata.js";
import BgImg from "../assets/images/pexels-ben-iwara-1033992193-27741697 1.png";
import ArrowUp from "../assets/icons/arrow_upward_alt_40dp_FFF_FILL0_wght100_GRAD0_opsz40.svg";
import ArrowDown from "../assets/icons/arrow_downward_alt_40dp_1F1F1F_FILL0_wght100_GRAD0_opsz40.svg";
import CloseIcon from "../assets/icons/close.svg"
import SearchIcon from "../assets/icons/search.svg";
import ChatIcon from "../assets/icons/chat.svg";
import { useState } from "react";

function FaqList({ faq }) {
  const [isOpen, setIsOpen] = useState(faq.isOpen);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="grid grid-cols-1">
      <article
        key={faq.id}
        className="border-b  cursor-pointer  w-full  border-neutral2 m-2"
      >
        <h3 className="text-xl w-full font-semibold flex justify-between items-center font-sora" style={isOpen? {color: 'blue'} : {color: 'black'}} onClick={toggleOpen}>
          {faq.question}{" "}
          <span>
            {" "}
            {isOpen ? (
              <img src={ArrowUp} className="text-white rounded-lg mb-2 p-1 min-w-[48px] bg-primary" />
            ) : (
              <img
                src={ArrowDown}
                className="text-neutral-darker p-1 rounded-lg mb-2 min-w-[48px] bg-neutral-normal"
              />
            )}{" "}
          </span>
        </h3>
        {isOpen &&
        <div>
         <p className="text-left text-gray-700  text-base p-[3%] font-inter">{faq.answer} </p>
        <h3 className="flex justify-end font-semibold items-center" onClick={toggleOpen}>Close <img src= {CloseIcon}  className="w-3 ml-2 " /></h3>
        </div>}
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
          className="h-auto flex flex-col items-center w-full p-[4%] bg-cover bg-center bg-no-repeat"
          style={{     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${BgImg})`,
 }}
        >
          <div className="pb-1 font-sora">
            <h1 className="text-white font-bold text-[32px] leading-10 pb-1">
              Renting Made Simple, Safe, and Stress-Free
            </h1>
            <h3 className="text-white font-semibold text-xl">
              Find Your Perfect Home With Zero Hassles.
            </h3>
          </div>
          <div className="flex  w-fit text-base my-3 font-inter">
            <button className="text-white bg-primary py-2 px-6 rounded-md mr-2">
              Rent
            </button>
            <button className="bg-white py-2 px-6 rounded-md">
              Shortlet
            </button>
          </div>

          <div className="bg-black/70 py-6 px-4 rounded-md w-full md:w-[70%] lg:w-[50%] xl:w-[40%] font-inter">
            <form action="" className="flex flex-col gap-3 items-center">
              <div className=" flex gap-2 flex-col  sm:flex-row sm:gap-0 items-center justify-center w-full" >
                <div className="w-2/3 relative">
                <img src={`${SearchIcon}`} alt="search" className="absolute left-0 mt-1 ml-2"/>
                <input type="text" id="search" className="w-full p-2 pl-10 text-sm rounded-lg sm:rounded-r-none focus:outline-none" placeholder={ `Search for Location` }/>
                </div>
                <button className="bg-primary text-white font-semibold text-base w-fit sm:w-1/3 py-1.5  px-6 rounded-lg sm:rounded-l-none">
                  Find property
                </button>
              </div>

              <div className="flex gap-2">
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

        <section id="luxury-best-listings" className="py-10 px-[10%] text-sm bg-neutral w-full mb-[5%] flex flex-col gap-4 relative">
          <div id="chat-icon">
            <img src={`${ChatIcon}`} alt="chat-icon" className="absolute right-0 sm:right-5 md:right-10 top-[33%] cursor-pointer " />
          </div>
          <div id="luxury-listings" className="mb-[5%]">
          <div className="flex flex-col gap-2 mb-3">
          <h2 className="text-2xl font-semibold font-sora tracking-[0.02em]">Top Rental Properties in the Market</h2>
          <p className="text-base font-inter">
            Explore some of the best properties with verified agents
          </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-2 text-left">
            {topRental.map((apt) => {
              return (
                <article key={apt.id} className=" mb-2  min-w-[170px] max-w-[220px] font-inter">
                  <img
                    src={apt.imageUrl}
                    alt={apt.title}
                    className=" rounded-lg"
                  />
                  <p className="text-sm text-secondary">{apt.title}</p>
                  <h3 className="font-semibold text-xl font-sora">{apt.price}</h3>
                  <p className="text-base">{apt.location}</p>
                </article>
              );
            })}
          </div>
          </div>
          <div id="best-listings">
          <div className="flex flex-col gap-2 mb-3">
          <h2 className="text-2xl font-semibold tracking-[0.02em] font-sora">Best Luxury Listings in Lagos</h2>
          <p className="text-base font-inter">
            Some of the finest luxury listings, selected for you
          </p>
            </div>
          <div className="flex flex-wrap justify-center gap-4 mt-2 text-left">
            {bestRental.map((apt) => {
              return (
                <article key={apt.id} className="mb-2 font-inter">
                  <img
                    src={apt.imageUrl}
                    alt={apt.title}
                    className=" rounded-lg"
                  />
                  <p className="text-sm text-secondary">{apt.title}</p>
                  <h3 className="font-semibold text-xl font-sora">{apt.price}</h3>
                  <p className="text-base">{apt.location}</p>
                </article>
              );
            })}
          </div>
          </div>
        </section>

        <section id="neighbourhood" className="py-2 px-[10%] text-sm w-full mb-[5%]">
          <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-[0.02em] font-sora">Find Properties by Neighbourhood</h2>
          <p className="text-base font-inter">Choose where you live and find your peace</p>
          </div>
          <div className="flex flex-wrap justify-center mt-2 gap-4">
            {neighbourhoods.map((neighbourhood) => {
              return (
                <article
                  key={neighbourhood.id}
                  className="mb-2 shadow-md border-t border-r border-l border-neutral rounded-b-lg rounded-bl-lg"
                >
                  <img
                    src={neighbourhood.imageUrl}
                    alt={`${neighbourhood.location} Neighbourhood`}
                    className="rounded-t-lg rounded-tr-lg mb-4"
                  />
                  <h3 className="font-semibold text-xl font-sora">{neighbourhood.location}</h3>
                  <p className="text-base mb-4 font-inter">
                    {neighbourhood.property} Properties
                  </p>
                </article>
              );
            })}
          </div>
        </section>
        <section id="faqs" className="text-sm w-full px-[10%] mb-[5%]">
          <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-[0.02em] font-sora">Frequently Asked Questions</h2>
          <p className="text-base font-inter">Get answers about renting with Strent</p>
          </div>
          {faqs.map((faq) => {
            return <FaqList key={faq.id} faq={faq} />;
          })}
        </section>
      </main>
    </>
  );
}


// grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))]